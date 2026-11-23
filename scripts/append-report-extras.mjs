#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readGuideSteps } from './walkthrough-guide-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATE = process.argv[2] ?? new Date().toISOString().slice(0, 10);

const REPORTS = [
  { json: `${DATE}-create-angular-frontend-capsule.json`, guide: 'docs/guides/angular.md' },
  { json: `${DATE}-create-react-frontend-capsule.json`, guide: 'docs/guides/react.md' },
  { json: `${DATE}-create-vue-frontend-capsule.json`, guide: 'docs/guides/vue.md' },
  { json: `${DATE}-create-nextjs-backend-capsule.json`, guide: 'docs/guides/next.js.md' },
  { json: `${DATE}-create-static-html-capsule.json`, guide: 'docs/guides/static-html.md' },
  { json: `${DATE}-create-svelte-frontend-capsule.json`, guide: 'docs/guides/svelte.md' },
];

const SUGGESTED = {
  angular: [
    'Replace or supplement `docs/guides/angular.md` with a `### Step N` walkthrough matching the Vue/React guides, or remove **Create Angular frontend capsule** from `DOCUMENTED_FEATURES.MD` until a walkthrough exists.',
  ],
  react: [
    'Step 4: Change **Create New Capsule** to the controls that exist on the dashboard today — either open sidebar **Quick Start** and use **Deploy Now** on the React card (as in the Vue guide), or document **+** → **New Capsule** then select **Frontend** and continue.',
    'Step 7: Confirm whether the audit account should select **Starter** or **Free**; the live **Plan** step showed **Free** during other frontend walks on the same date.',
    'Step 8: Confirm default branch name (**master** vs **main**) for `BrentonJScott/demo-react Team Repository`.',
    'Include screenshot `static/img/guides/create-react-frontend-capsule/failure-step-4.jpg` when documenting the missing **Create New Capsule** label.',
  ],
  vue: ['No guide updates required for this run; steps aligned with `docs/guides/vue.md`.'],
  nextjs: [
    'Add a **Configure Plan** (or **Plan**) step between **Capsule Details** and **Connect a Git Repository** so the guide matches the live backend wizard.',
    'Keep the note that **Next.js** is not on **Quick Start**; step 5 already documents opening `/new/capsule?capsuleType=backend`.',
  ],
  static: ['No guide updates required for this run; steps aligned with `docs/guides/static-html.md`.'],
  svelte: [
    'Step 5 already explains that **Svelte** is not on **Quick Start**; no change needed unless the product adds a Quick Start card.',
  ],
};

for (const r of REPORTS) {
  const jsonPath = path.join(ROOT, 'reports', r.json);
  const mdPath = jsonPath.replace(/\.json$/, '.md');
  if (!fs.existsSync(jsonPath) || !fs.existsSync(mdPath)) continue;
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const { steps: guideSteps } = readGuideSteps(r.guide, ROOT);
  const key = r.json.includes('angular')
    ? 'angular'
    : r.json.includes('react')
      ? 'react'
      : r.json.includes('vue')
        ? 'vue'
        : r.json.includes('nextjs')
          ? 'nextjs'
          : r.json.includes('static')
            ? 'static'
            : 'svelte';

  const actions = (data.stepResults ?? [])
    .filter((s) => s.step > 0)
    .sort((a, b) => a.step - b.step)
    .map((s) => {
      const g = guideSteps.find((x) => x.n === s.step);
      const guideLine = g ? g.body.split('\n')[0].trim() : s.name;
      return `${s.step}. ${guideLine} — **${s.pass ? 'pass' : 'fail'}** (${s.detail})`;
    });

  const actionBlock = [
    '## Actions taken',
    '',
    ...(actions.length ? actions : ['- (none — run blocked before guided steps)']),
    '',
    '## Suggested fixes',
    '',
    ...SUGGESTED[key].map((line) => `- ${line}`),
    '',
  ].join('\n');

  let md = fs.readFileSync(mdPath, 'utf8');
  md = md.replace(/\n## Actions taken[\s\S]*$/, '');
  md = `${md.trim()}\n\n${actionBlock}`;
  fs.writeFileSync(mdPath, md);
}

const cronPath = path.join(ROOT, 'reports', `${DATE}-cron-platform-audit.md`);
if (fs.existsSync(cronPath)) {
  let cron = fs.readFileSync(cronPath, 'utf8');
  if (!cron.includes('## Actions taken')) {
    cron = `${cron.trim()}\n\n## Actions taken\n\nPer-feature numbered actions are in each \`reports/${DATE}-create-*-capsule.md\` file.\n\n## Suggested fixes\n\nSee **Suggested fixes** in each feature report. Priority: Angular walkthrough gap; React step 4 entry path; Next.js Plan step in the guide.\n`;
    fs.writeFileSync(cronPath, cron);
  }
}

console.log(`Appended Actions taken / Suggested fixes for ${DATE}`);