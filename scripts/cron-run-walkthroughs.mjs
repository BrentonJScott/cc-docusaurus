#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readGuideSteps } from './walkthrough-guide-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATE = new Date().toISOString().slice(0, 10);

const FEATURES = [
  {
    label: 'Create Angular frontend capsule',
    guide: 'docs/guides/angular.md',
    script: 'angular-narrative-walkthrough.mjs',
    json: `${DATE}-create-angular-frontend-capsule`,
    skipPlaywright: true,
    skipShapedCheck: true,
  },
  {
    label: 'Create React frontend capsule',
    guide: 'docs/guides/react.md',
    script: 'react-capsule-walkthrough.mjs',
    json: `${DATE}-create-react-frontend-capsule`,
  },
  {
    label: 'Create Vue frontend capsule',
    guide: 'docs/guides/vue.md',
    script: 'vue-capsule-walkthrough.mjs',
    json: `${DATE}-create-vue-frontend-capsule`,
  },
  {
    label: 'Create NextJS backend capsule',
    guide: 'docs/guides/next.js.md',
    script: 'nextjs-capsule-walkthrough.mjs',
    json: `${DATE}-create-nextjs-backend-capsule`,
  },
  {
    label: 'Create Static HTML capsule',
    guide: 'docs/guides/static-html.md',
    script: 'static-html-capsule-walkthrough.mjs',
    json: `${DATE}-create-static-html-capsule`,
  },
  {
    label: 'Create Svelte frontend capsule',
    guide: 'docs/guides/svelte.md',
    script: 'svelte-capsule-walkthrough.mjs',
    json: `${DATE}-create-svelte-frontend-capsule`,
  },
];

let exitCode = 0;

for (const f of FEATURES) {
  const shaped = readGuideSteps(f.guide, ROOT);
  if (!f.skipPlaywright && !f.skipShapedCheck && !shaped.ok) {
    console.error(`${f.label}: ${shaped.error}`);
    exitCode = 1;
    continue;
  }

  const run = spawnSync(process.execPath, [path.join(ROOT, 'scripts', f.script)], {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env,
  });
  if (run.status !== 0) {
    exitCode = 1;
    if (!f.skipPlaywright) {
      const jsonPath = path.join(ROOT, 'reports', `${f.json}.json`);
      const mdPath = path.join(ROOT, 'reports', `${f.json}.md`);
      const existing =
        fs.existsSync(jsonPath) &&
        (JSON.parse(fs.readFileSync(jsonPath, 'utf8')).stepResults?.length ?? 0) > 0;
      if (existing) {
        const enrich = spawnSync(
          process.execPath,
          [path.join(ROOT, 'scripts', 'enrich-feature-report.mjs'), f.label, f.guide, f.json],
          { cwd: ROOT, stdio: 'inherit', env: process.env },
        );
        if (enrich.status !== 0) exitCode = 1;
        continue;
      }
      const shaped = readGuideSteps(f.guide, ROOT);
      const blocked = {
        date: DATE,
        platform: 'https://test-platform.codecapsules.io',
        guide: f.guide,
        goal: 'Expect to see capsule building in builds tab',
        goalReached: false,
        blockedAt: `Walkthrough script exited ${run.status ?? 'unknown'}`,
        guideWalkthroughShaped: shaped.ok,
        guideStepCount: shaped.steps.length,
        mismatches: [`Walkthrough script failed before completing (exit ${run.status ?? 'unknown'}).`],
        stepResults: [],
        guideAlignment: [],
      };
      fs.writeFileSync(jsonPath, JSON.stringify(blocked, null, 2));
      fs.writeFileSync(
        mdPath,
        [
          `# ${f.label} walkthrough (${DATE})`,
          '',
          `**Goal reached:** no`,
          `**Blocked:** ${blocked.blockedAt}`,
          '',
          '## Mismatches / issues',
          '',
          ...blocked.mismatches.map((m) => `- ${m}`),
        ].join('\n'),
      );
    }
  }

  if (!f.skipPlaywright && run.status === 0) {
    const enrich = spawnSync(
      process.execPath,
      [
        path.join(ROOT, 'scripts', 'enrich-feature-report.mjs'),
        f.label,
        f.guide,
        f.json,
      ],
      { cwd: ROOT, stdio: 'inherit', env: process.env },
    );
    if (enrich.status !== 0) exitCode = 1;
  }
}

const merge = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'merge-cron-audit.mjs')], {
  cwd: ROOT,
  stdio: 'inherit',
});
if (merge.status !== 0) exitCode = 1;

process.exit(exitCode);