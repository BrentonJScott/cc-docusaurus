import fs from 'node:fs';
import path from 'node:path';

/**
 * @param {string} md
 * @returns {{ n: number, title: string, body: string }[]}
 */
export function parseWalkthroughGuide(md) {
  const steps = [];
  const parts = md.split(/^### Step (\d+)\s*$/m);
  for (let i = 1; i < parts.length; i += 2) {
    const n = Number(parts[i]);
    const block = (parts[i + 1] ?? '').trim();
    const lines = block.split('\n').filter((l) => l.trim());
    const title =
      lines
        .find((l) => !l.startsWith('![') && !l.startsWith('['))
        ?.slice(0, 120)
        .trim() || `Step ${n}`;
    steps.push({ n, title, body: block });
  }
  steps.sort((a, b) => a.n - b.n);
  return steps;
}

export function readGuideSteps(guideRel, root) {
  const guidePath = path.join(root, guideRel);
  if (!fs.existsSync(guidePath)) {
    return { ok: false, steps: [], error: `Guide missing: ${guideRel}` };
  }
  const md = fs.readFileSync(guidePath, 'utf8');
  const steps = parseWalkthroughGuide(md);
  if (!steps.length) {
    return {
      ok: false,
      steps: [],
      error: 'Guide not walkthrough-shaped (no `### Step N` sections)',
    };
  }
  return { ok: true, steps, error: null };
}

/**
 * @param {object} opts
 * @param {string} opts.featureLabel
 * @param {string} opts.guideRel
 * @param {string} opts.goal
 * @param {{ n: number, title: string, body: string }[]} opts.guideSteps
 * @param {{ step: number, name: string, pass: boolean, detail: string, screenshot?: string }[]} opts.stepResults
 */
const SECTION_MARKERS = [
  { key: 'capsule details', patterns: ['capsule details', 'choose a capsule'] },
  { key: 'hosting', patterns: ['hosting', 'static option'] },
  { key: 'plan', patterns: ['on **plan**', 'starter', 'free plan', 'configure plan'] },
  { key: 'git', patterns: ['connect a git', 'search/select a repository'] },
  { key: 'build', patterns: ['build & deploy', 'build command', 'start command'] },
  { key: 'create capsule', patterns: ['click **create capsule**'] },
  { key: 'deploy builds', patterns: ['deploy** tab', 'open **builds**', 'building', 'queued', 'in progress'] },
  { key: 'quick start', patterns: ['quick start', 'deploy now'] },
  { key: 'new capsule', patterns: ['create new capsule', 'new/capsule'] },
];

function guideSections(body) {
  const lower = body.toLowerCase();
  return new Set(SECTION_MARKERS.filter((m) => m.patterns.some((p) => lower.includes(p))).map((m) => m.key));
}

function execSections(hay) {
  const lower = hay.toLowerCase();
  return new Set(SECTION_MARKERS.filter((m) => m.patterns.some((p) => lower.includes(p))).map((m) => m.key));
}

function docDriftForStep(guideBody, exec) {
  const body = guideBody.toLowerCase();
  const hay = `${exec?.name ?? ''} ${exec?.detail ?? ''}`.toLowerCase();
  /** @type {string[]} */
  const issues = [];
  const guideOnly = [...guideSections(guideBody)].filter((s) => !execSections(hay).has(s));
  if (guideOnly.length === 1 && execSections(hay).size > 0) {
    const execOnly = [...execSections(hay)].filter((s) => !guideSections(guideBody).has(s));
    if (execOnly.length >= 1) {
      issues.push(
        `Guide step topic (${guideOnly[0]}) does not match executor evidence (${execOnly.slice(0, 2).join(', ')})`,
      );
    }
  }
  if (body.includes('create new capsule') && !body.includes('quick start')) {
    const usedQuickStart =
      /\bquick start\b/i.test(exec?.name ?? '') ||
      (/\bquick start\b/i.test(exec?.detail ?? '') && !/no .*create new capsule/i.test(exec?.detail ?? ''));
    if (usedQuickStart) {
      issues.push('Guide: Create New Capsule; executor used Quick Start');
    }
  }
  if (body.includes('quick start') && body.includes('deploy now') && !body.includes('create new capsule')) {
    if (hay.includes('create new capsule') && !hay.includes('quick start')) {
      issues.push('Guide: Quick Start Deploy Now; executor path differs');
    }
  }
  if (body.includes('starter') && (hay.includes('free plan') || hay.includes('free selected'))) {
    issues.push('Guide names Starter plan; live selection was Free');
  }
  if (body.includes('free plan') && hay.includes('starter')) {
    issues.push('Guide names Free plan; executor selected Starter');
  }
  if (body.includes('choose a space') && !hay.includes('space') && hay.includes('team:')) {
    issues.push('Guide requires Choose a Space; executor did not record a space selection');
  }
  if (body.includes('npm start') && hay.includes('left blank')) {
    issues.push('Guide requires npm start; executor left start command blank');
  }
  return issues;
}

export function buildGuideAlignmentRows(guideSteps, stepResults) {
  const byStep = new Map(stepResults.filter((s) => s.step > 0).map((s) => [s.step, s]));
  return guideSteps.map((g) => {
    const exec = byStep.get(g.n);
    if (!exec) {
      return {
        step: g.n,
        pass: false,
        guideExpects: g.title,
        actual: 'No executor action for this guide step number',
      };
    }
    const drift = docDriftForStep(g.body, exec);
  const pass = Boolean(exec.pass) && drift.length === 0;
    const actual =
      drift.length > 0
        ? `${exec.detail || exec.name} — mismatch: ${drift.join('; ')}`
        : exec.detail || exec.name;
    return {
      step: g.n,
      pass,
      guideExpects: g.title,
      actual,
      drift,
    };
  });
}

export function guideStepsMarkdown(guideSteps) {
  return [
    '## Guide steps in doc',
    '',
    `**Count:** ${guideSteps.length}`,
    '',
    ...guideSteps.map((s) => `- **Step ${s.n}:** ${s.title.replace(/\|/g, '\\|')}`),
    '',
  ];
}

export function guideAlignmentMarkdown(rows) {
  const lines = [
    '## Guide alignment',
    '',
    '| Step | Pass | guideExpects | actual |',
    '|---|---|---|---|',
    ...rows.map(
      (r) =>
        `| ${r.step} | ${r.pass ? 'pass' : 'fail'} | ${String(r.guideExpects).replace(/\|/g, '\\|').slice(0, 200)} | ${String(r.actual).replace(/\|/g, '\\|').slice(0, 200)} |`,
    ),
    '',
  ];
  return lines;
}

export function appendReportSections(md, guideSteps, alignmentRows, extraMismatches = []) {
  const countMismatch =
    alignmentRows.length !== guideSteps.length
      ? `Executor step count (${alignmentRows.filter((r) => r.actual !== 'No executor action for this guide step number').length}) does not match guide (\`${guideSteps.length}\` ### Step blocks).`
      : null;
  const alignmentMismatch = alignmentRows.some((r) => !r.pass);
  const mismatches = [...extraMismatches];
  if (countMismatch) mismatches.push(countMismatch);

  const sections = [
    ...guideStepsMarkdown(guideSteps),
    ...guideAlignmentMarkdown(alignmentRows),
    '## Mismatches / issues',
    '',
    ...(mismatches.length ? mismatches.map((m) => `- ${m}`) : ['- None observed for this run.']),
  ];

  if (md.includes('## Guide steps in doc')) {
    return md.replace(/\n## Guide steps in doc[\s\S]*$/, `\n${sections.join('\n')}`);
  }
  const idx = md.indexOf('\n## Mismatches / issues');
  if (idx >= 0) {
    return `${md.slice(0, idx)}\n${sections.join('\n')}`;
  }
  return `${md}\n\n${sections.join('\n')}`;
}

/**
 * @param {{ pass: boolean, guideExpects: string, actual: string, drift?: string[] }[]} alignmentRows
 * @param {string[]} mismatches
 */
export function buildSuggestedFixes(alignmentRows, mismatches = []) {
  const fixes = [];
  for (const row of alignmentRows) {
    if (row.pass) continue;
    const expect = row.guideExpects.toLowerCase();
    const actual = row.actual.toLowerCase();
    if (expect.includes('create new capsule') && actual.includes('quick start')) {
      fixes.push(
        `Step ${row.step}: Update the guide to use **Quick Start → React → Deploy Now** (or **New Capsule** URL) — **Create New Capsule** is not on the live dashboard sidebar.`,
      );
    } else if (expect.includes('starter') && actual.includes('free')) {
      fixes.push(
        `Step ${row.step}: Rename **Starter** to **Free** (or **Paid**) to match the Plan cards on test-platform.`,
      );
    } else if (expect.includes('starter') && actual.includes('paid')) {
      fixes.push(`Step ${row.step}: Replace **Starter** with the live plan label (**Free** or **Paid**).`);
    } else if (expect.includes('quick start') && actual.includes('create new capsule')) {
      fixes.push(`Step ${row.step}: Document **Quick Start** in the sidebar instead of **Create New Capsule**.`);
    } else if (mismatches.some((m) => /5 of 5|free capsules/i.test(m))) {
      fixes.push('Note in the guide that the audit account may hit the free capsule limit; document deleting a test capsule or choosing **Paid** before re-running the audit.');
    } else if (row.drift?.length) {
      fixes.push(`Step ${row.step}: Reconcile guide text with live UI — ${row.drift.join('; ')}.`);
    }
  }
  for (const m of mismatches) {
    if (m.includes('no `### Step N`')) {
      fixes.push('Add a numbered `### Step N` walkthrough to the Angular guide (match React/Vue layout) or remove the feature from DOCUMENTED_FEATURES.MD.');
    }
    if (m.includes('Step numbers must match 1:1')) {
      fixes.push('Align screenshot step numbers and executor actions so each `### Step N` has exactly one audit action.');
    }
  }
  return [...new Set(fixes)];
}

export function suggestedFixesMarkdown(fixes) {
  return [
    '## Suggested fixes',
    '',
    ...(fixes.length ? fixes.map((f) => `- ${f}`) : ['- None — guide and live UI matched on this run.']),
    '',
  ];
}