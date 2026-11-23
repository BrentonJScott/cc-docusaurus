#!/usr/bin/env node
/**
 * Angular guide on main is legacy GitBook content — fail fast with walkthrough-shaped report.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readGuideSteps } from './walkthrough-guide-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATE = new Date().toISOString().slice(0, 10);
const PLATFORM = 'https://test-platform.codecapsules.io';
const GUIDE = 'docs/guides/angular.md';
const FEATURE = 'Create Angular frontend capsule';
const GOAL = 'Expect to see capsule building in builds tab';

const { ok, steps, error } = readGuideSteps(GUIDE, ROOT);
const now = new Date().toISOString();
const mismatches = [
  error ?? 'Guide not walkthrough-shaped',
  'Manifest lists Create Angular frontend capsule but `docs/guides/angular.md` has no `### Step N` walkthrough — restore walkthrough doc or remove from DOCUMENTED_FEATURES.MD.',
];

const jsonPath = path.join(ROOT, 'reports', `${DATE}-create-angular-frontend-capsule.json`);
const mdPath = path.join(ROOT, 'reports', `${DATE}-create-angular-frontend-capsule.md`);

const payload = {
  date: DATE,
  platform: PLATFORM,
  guide: GUIDE,
  goal: GOAL,
  goalReached: false,
  blockedAt: error,
  guideWalkthroughShaped: ok,
  guideStepCount: steps.length,
  mismatches,
  stepResults: [],
  guideAlignment: [],
};

fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2));

const md = [
  `# ${FEATURE} walkthrough (${DATE})`,
  '',
  `**Platform:** ${PLATFORM}`,
  `**Guide:** \`${GUIDE}\``,
  '',
  `**Manifest goal:** ${GOAL}`,
  '',
  `**Run completed:** ${now}`,
  '**Goal reached:** no',
  `**Blocked:** ${error}`,
  '',
  '## Guide steps in doc',
  '',
  `**Count:** ${steps.length}`,
  '',
  ...(steps.length
    ? steps.map((s) => `- **Step ${s.n}:** ${s.title}`)
    : ['- (none — guide uses legacy numbered list / GitBook layout, not `### Step N` blocks)']),
  '',
  '## Guide alignment',
  '',
  '| Step | Pass | guideExpects | actual |',
  '|---|---|---|---|',
  '| — | fail | Walkthrough-shaped guide with `### Step N` | Guide not walkthrough-shaped; audit stopped |',
  '',
  '## Mismatches / issues',
  '',
  ...mismatches.map((m) => `- ${m}`),
  '',
  '## Suggested fixes',
  '',
  '- Port the React/Vue `### Step N` walkthrough format into `docs/guides/angular.md` (test-platform URLs, screenshots, and audit repo names), or drop **Create Angular frontend capsule** from DOCUMENTED_FEATURES.MD until a walkthrough exists.',
  '',
].join('\n');

fs.writeFileSync(mdPath, md);
console.log(md);
process.exit(1);