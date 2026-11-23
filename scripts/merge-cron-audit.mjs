#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DATE = new Date().toISOString().slice(0, 10);
const PLATFORM = 'https://test-platform.codecapsules.io';

const features = [
  {
    label: 'Create Angular frontend capsule',
    guide: 'docs/guides/angular.md',
    json: `${DATE}-create-angular-frontend-capsule.json`,
  },
  {
    label: 'Create React frontend capsule',
    guide: 'docs/guides/react.md',
    json: `${DATE}-create-react-frontend-capsule.json`,
  },
  {
    label: 'Create Vue frontend capsule',
    guide: 'docs/guides/vue.md',
    json: `${DATE}-create-vue-frontend-capsule.json`,
  },
  {
    label: 'Create NextJS backend capsule',
    guide: 'docs/guides/next.js.md',
    json: `${DATE}-create-nextjs-backend-capsule.json`,
  },
  {
    label: 'Create Static HTML capsule',
    guide: 'docs/guides/static-html.md',
    json: `${DATE}-create-static-html-capsule.json`,
  },
  {
    label: 'Create Svelte frontend capsule',
    guide: 'docs/guides/svelte.md',
    json: `${DATE}-create-svelte-frontend-capsule.json`,
  },
];

const now = new Date().toISOString();
let allGoals = true;
const sections = [];
const allMismatches = [];

for (const f of features) {
  const p = path.join(ROOT, 'reports', f.json);
  if (!fs.existsSync(p)) {
    allGoals = false;
    sections.push(`## ${f.label}\n\nWalkthrough JSON missing: \`${p}\`\n`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!data.goalReached) allGoals = false;
  if (data.mismatches?.length) allMismatches.push(...data.mismatches.map((m) => `${f.label}: ${m}`));
  const guideAlignFail = (data.guideAlignment ?? []).some((r) => !r.pass);
  if (guideAlignFail) allGoals = false;

  sections.push(
    `## ${f.label}`,
    '',
    `**Goal reached:** ${data.goalReached ? 'yes' : 'no'}`,
    `**Guide steps in doc:** ${data.guideStepCount ?? data.guideSteps?.length ?? '—'}`,
    '',
    '### Guide alignment',
    '',
    '| Step | Pass | guideExpects | actual |',
    '|---|---|---|---|',
  );
  if (data.guideAlignment?.length) {
    for (const r of data.guideAlignment) {
      sections.push(
        `| ${r.step} | ${r.pass ? 'pass' : 'fail'} | ${String(r.guideExpects ?? '').replace(/\|/g, '\\|').slice(0, 120)} | ${String(r.actual ?? '').replace(/\|/g, '\\|').slice(0, 120)} |`,
      );
    }
  } else {
    sections.push('| — | fail | (no alignment rows) | Guide not walkthrough-shaped or run blocked |');
  }

  sections.push('', '### Executor step results', '', '| Step | Pass | Detail |', '|---|---|---|');
  for (const s of data.stepResults ?? []) {
    if (s.step === 0) continue;
    sections.push(`| ${s.step} ${s.name} | ${s.pass ? 'pass' : 'fail'} | ${String(s.detail).replace(/\|/g, '\\|')} |`);
  }
  sections.push('', `Walkthrough JSON: \`reports/${path.basename(p)}\``, '');
}

const md = [
  `# Cron platform audit (${DATE})`,
  '',
  `**Run completed:** ${now}`,
  '**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 6 features',
  `**Target:** ${PLATFORM}`,
  '',
  '| DOCUMENTED_FEATURES | Guide |',
  '|---|---|',
  ...features.map((f) => `| ${f.label} | \`${f.guide}\` |`),
  '',
  `**Manifest goals reached:** ${allGoals ? 'yes' : 'no (see per-feature tables)'}`,
  '',
  ...sections,
  '## Mismatches / issues',
  '',
  ...(allMismatches.length ? allMismatches.map((m) => `- ${m}`) : ['- None for features that reached GOAL on this run.']),
].join('\n');

const out = path.join(ROOT, 'reports', `${DATE}-cron-platform-audit.md`);
fs.writeFileSync(out, md);
console.log(md);
process.exit(allGoals ? 0 : 1);