#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  readGuideSteps,
  buildGuideAlignmentRows,
  appendReportSections,
} from './walkthrough-guide-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const feature = process.argv[2];
const guideRel = process.argv[3];
const jsonBase = process.argv[4];

if (!feature || !guideRel || !jsonBase) {
  console.error('Usage: node enrich-feature-report.mjs <feature label> <guideRel> <jsonBaseName>');
  process.exit(2);
}

const jsonPath = path.join(ROOT, 'reports', `${jsonBase}.json`);
const mdPath = path.join(ROOT, 'reports', `${jsonBase}.md`);
const { ok, steps: guideSteps, error } = readGuideSteps(guideRel, ROOT);

if (!fs.existsSync(jsonPath)) {
  console.error(`Missing ${jsonPath}`);
  process.exit(2);
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const stepResults = data.stepResults ?? [];

if (!ok) {
  data.goalReached = false;
  data.guideWalkthroughShaped = false;
  data.mismatches = [...(data.mismatches ?? []), error];
  data.guideAlignment = [];
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
  process.exit(1);
}

const alignment = buildGuideAlignmentRows(guideSteps, stepResults);
const extra = [];
const driftBullets = alignment.flatMap((r) => (r.drift ?? []).map((d) => `Step ${r.step}: ${d}`));
if (driftBullets.length) extra.push(...driftBullets);

if (stepResults.filter((s) => s.step > 0).length !== guideSteps.length) {
  extra.push(
    `Walkthrough executor recorded ${stepResults.filter((s) => s.step > 0).length} numbered steps; guide defines ${guideSteps.length} (\`### Step N\`). Step numbers must match 1:1.`,
  );
}

const allAlignmentPass = alignment.every((r) => r.pass);
const allStepsPass = stepResults.filter((s) => s.step > 0).every((s) => s.pass);
data.guideStepCount = guideSteps.length;
data.guideWalkthroughShaped = true;
data.guideAlignment = alignment;
data.goalReached = Boolean(data.goalReached && allAlignmentPass && allStepsPass && extra.length === 0);

if (extra.length) {
  data.mismatches = [...(data.mismatches ?? []), ...extra];
}

fs.writeFileSync(
  jsonPath,
  JSON.stringify(
    {
      ...data,
      guideSteps: guideSteps.map((s) => ({ n: s.n, title: s.title })),
    },
    null,
    2,
  ),
);

let md = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : `# ${feature}\n`;
md = md.replace(/\*\*Goal reached:\*\* yes/, '**Goal reached:** no');
if (data.goalReached) {
  md = md.replace(/\*\*Goal reached:\*\* no/, '**Goal reached:** yes');
}
md = appendReportSections(md, guideSteps, alignment, data.mismatches ?? []);
fs.writeFileSync(mdPath, md);
console.log(`Enriched ${jsonBase}: goalReached=${data.goalReached}`);
process.exit(data.goalReached ? 0 : 1);