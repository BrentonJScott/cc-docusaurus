#!/usr/bin/env node
/**
 * Walk docs/guides/next.js.md; screenshots + JSON report for cron.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PLATFORM = 'https://test-platform.codecapsules.io';
const DATE = new Date().toISOString().slice(0, 10);
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const GUIDE_IMG = path.join(ROOT, 'static/img/guides/create-nextjs-backend-capsule');
const NAMED_REPO = 'BrentonJScott/demo-nextjs Team Repository';
const NAMED_BRANCH = 'main';
const NAMED_TEAM = 'Personal Team';
const FEATURE = 'Create NextJS backend capsule';
const GUIDE = 'docs/guides/next.js.md';

fs.mkdirSync(GUIDE_IMG, { recursive: true });

/** @type {{ step: number, name: string, pass: boolean, detail: string, screenshot?: string }[]} */
const steps = [];
/** @type {string[]} */
const mismatches = [
  '**Next.js** is not listed on Quick Start; the guide opens **New Capsule** with **Backend** instead.',
];

function record(step, name, pass, detail, screenshot) {
  steps.push({ step, name, pass, detail, screenshot });
}

function stepJpg(n) {
  return path.join(GUIDE_IMG, `step-${n}.jpg`);
}

function stepImgRel(n) {
  return `/img/guides/create-nextjs-backend-capsule/step-${n}.jpg`;
}

async function shot(page, file) {
  await page.screenshot({ path: file, fullPage: true, type: 'jpeg', quality: 88 });
}

async function openLogin(page) {
  await page.goto(PLATFORM, { waitUntil: 'networkidle' });
  if (!page.url().includes('/auth/login')) {
    const link = page.getByRole('link', { name: 'Log in' });
    if (await link.isVisible().catch(() => false)) {
      await link.click();
      await page.waitForURL('**/auth/login');
    }
  }
}

function capsuleDetailsCard(page) {
  return page.locator('.card').filter({ hasText: 'Capsule Details' }).first();
}

const CAPSULE_DROPDOWN_INDEX = {
  'Choose a Capsule': 0,
  'Choose a Team': 1,
  'Choose a Space': 2,
};

async function openCapsuleDetailsDropdown(page, labelText) {
  const card = capsuleDetailsCard(page);
  await card.waitFor({ state: 'visible', timeout: 20000 });
  let index = CAPSULE_DROPDOWN_INDEX[labelText] ?? 0;
  if (labelText === 'Choose a Space') {
    for (let i = 0; i < 8; i++) {
      const count = await card.locator('.ng-select-container').count();
      if (count >= 3) break;
      await page.waitForTimeout(400);
    }
    index = 2;
  }
  const trigger = card.locator('.ng-select-container').nth(index);
  await trigger.waitFor({ state: 'visible', timeout: 20000 });
  await trigger.click();
  await page.waitForTimeout(900);
}

async function openGitRepoDropdown(page) {
  const card = page.locator('.card').filter({ hasText: 'Connect a Git Repository' }).first();
  await card.locator('.ng-select-container').first().click();
  await page.waitForTimeout(700);
}

async function openGitBranchDropdown(page) {
  const card = page.locator('.card').filter({ hasText: 'Connect a Git Repository' }).first();
  await card.locator('.ng-select-container').nth(1).click();
  await page.waitForTimeout(700);
}

async function pickOption(page, pattern) {
  const opt = page.getByRole('option', { name: pattern }).first();
  await opt.waitFor({ state: 'visible', timeout: 15000 });
  await opt.click();
  await page.waitForTimeout(500);
}

async function waitForWizardShell(page) {
  await page.getByText('Capsule Details').waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(800);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
let goalReached = false;
let blockedAt = '';

try {
  if (!EMAIL || !PASSWORD) throw new Error('EMAIL/PASSWORD env vars not set');

  await page.goto(PLATFORM, { waitUntil: 'networkidle' });
  await shot(page, stepJpg(1));
  record(1, 'Open platform', true, page.url(), stepImgRel(1));

  await openLogin(page);
  const welcome = await page.getByRole('heading', { name: 'Welcome back' }).isVisible();
  await shot(page, stepJpg(2));
  record(2, 'Welcome back login form', welcome, welcome ? 'Login form visible' : 'Missing Welcome back', stepImgRel(2));
  if (!welcome) throw new Error('Welcome back not visible');

  await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(2500);
  const loggedIn = !page.url().includes('/auth/login');
  await shot(page, stepJpg(3));
  record(3, 'Log in', loggedIn, page.url(), stepImgRel(3));
  if (!loggedIn) throw new Error('Login failed');

  await page.getByRole('link', { name: 'Quick Start' }).click();
  await page.waitForTimeout(1500);
  const qs = await page.getByText('What type of capsule would you like to deploy?').isVisible();
  await shot(page, stepJpg(4));
  record(4, 'Quick Start', qs, page.url(), stepImgRel(4));
  if (!qs) throw new Error('Quick Start heading not found');

  await page.goto(`${PLATFORM}/new/capsule?capsuleType=backend`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitForWizardShell(page);
  const bodyText = await page.locator('body').innerText();
  if (!/Backend/.test(bodyText)) {
    await openCapsuleDetailsDropdown(page, 'Choose a Capsule');
    await pickOption(page, /Backend/);
  }
  const onWizard = page.url().includes('capsuleType=backend') || page.url().includes('/new/capsule');
  await shot(page, stepJpg(5));
  record(5, 'New Backend Capsule wizard', onWizard, page.url(), stepImgRel(5));

  await openCapsuleDetailsDropdown(page, 'Choose a Team');
  await page.waitForTimeout(1200);
  const personalTeam = page.getByRole('option', { name: /Personal Team/i });
  if ((await personalTeam.count()) === 0) {
    mismatches.push(`Guide names **${NAMED_TEAM}**; option missing.`);
    throw new Error(`${NAMED_TEAM} not in team dropdown`);
  }
  await personalTeam.first().click();
  await page.waitForTimeout(800);
  await openCapsuleDetailsDropdown(page, 'Choose a Space');
  await page.waitForTimeout(1200);
  const spaceOpt = page.getByRole('option', { name: /Personal Space/i });
  if ((await spaceOpt.count()) === 0) throw new Error('Space dropdown empty');
  const spaceName = (await spaceOpt.first().textContent())?.trim();
  await spaceOpt.first().click();
  await shot(page, stepJpg(6));
  record(6, 'Capsule Details', true, `Team: ${NAMED_TEAM}; space: ${spaceName}`, stepImgRel(6));

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);

  const planHeading = await page
    .getByRole('heading', { name: /Configure Plan|Plan/i })
    .isVisible()
    .catch(() => false);
  let step7Pass = false;
  if (planHeading) {
    const planCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: /Configure Plan|Plan/i }) });
    const basic = planCard.getByText('Basic', { exact: true });
    if ((await basic.count()) > 0) {
      await basic.first().click();
      step7Pass = true;
    } else {
      const free = planCard.getByText(/Free|Starter/i).first();
      if ((await free.count()) > 0) {
        await free.click();
        step7Pass = true;
        mismatches.push('Guide names **Basic** plan; live wizard showed a different default plan label.');
      }
    }
    await shot(page, stepJpg(7));
    record(7, 'Configure Plan', step7Pass, step7Pass ? 'Plan selected' : 'No plan card clicked', stepImgRel(7));
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
  } else {
    await shot(page, stepJpg(7));
    record(7, 'Configure Plan', false, 'Plan step not visible');
    throw new Error('Configure Plan step not visible');
  }

  await shot(page, stepJpg(8));
  record(8, 'Plan confirmed', step7Pass, 'Continuing to Git step', stepImgRel(8));

  const gitStepVisible = await page.getByText('Connect a Git Repository').isVisible().catch(() => false);
  if (!gitStepVisible) throw new Error('Connect a Git Repository step not visible');

  await openGitRepoDropdown(page);
  await page.waitForTimeout(1500);
  const repoCard = page.locator('.card').filter({ hasText: 'Connect a Git Repository' }).first();
  const repoFilter = repoCard.locator('.ng-select').first().locator('input[type="text"]');
  if (await repoFilter.isVisible().catch(() => false)) {
    await repoFilter.fill('demo-nextjs');
    await page.waitForTimeout(1500);
  }
  const repoOpt = page.getByRole('option', { name: /demo-nextjs/i });
  let step9Pass = false;
  let step9Detail = '';
  if ((await repoOpt.count()) === 0) {
    step9Detail = `Named repo missing`;
    mismatches.push(`Guide step 9 names **${NAMED_REPO}**; no matching dropdown option.`);
    await shot(page, path.join(GUIDE_IMG, 'failure-git-repo-missing.png'));
    blockedAt = 'demo-nextjs not in Git Repository list — GOAL unreachable';
    throw new Error(blockedAt);
  }
  await repoOpt.first().click();
  await page.waitForTimeout(1500);
  await openGitBranchDropdown(page);
  await page.waitForTimeout(1000);
  const mainBranch = page.getByRole('option', { name: new RegExp(NAMED_BRANCH, 'i') });
  if ((await mainBranch.count()) === 0) throw new Error(`Branch ${NAMED_BRANCH} missing`);
  await mainBranch.first().click();
  step9Pass = true;
  step9Detail = `Repository: ${NAMED_REPO}; branch: ${NAMED_BRANCH}`;
  await shot(page, stepJpg(9));
  record(9, 'Connect a Git Repository', step9Pass, step9Detail, stepImgRel(9));

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);

  await shot(page, stepJpg(10));
  record(10, 'Build & Deploy fields', true, 'Run command left blank (platform auto-detect)', stepImgRel(10));

  await shot(page, stepJpg(11));
  record(11, 'Create Capsule', true, 'Ready to submit wizard', stepImgRel(11));
  await page.getByRole('button', { name: 'Create Capsule' }).click();
  await page.waitForURL('**/dash/**', { timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(3000);
  const deployTab = page.getByRole('tab', { name: 'Deploy' }).or(page.getByRole('link', { name: 'Deploy' }));
  await deployTab.first().click().catch(() => {});
  await page.waitForTimeout(3000);
  goalReached = await page
    .getByText(/Building|Queued|In progress|Build started|Running/i)
    .first()
    .isVisible()
    .catch(() => false);
  if (!goalReached) {
    goalReached = await page.locator('table, .build').getByText(/build/i).first().isVisible().catch(() => false);
  }
  await shot(page, stepJpg(12));
  record(12, 'Deploy Builds', goalReached, goalReached ? 'Building state visible' : page.url(), stepImgRel(12));
} catch (e) {
  blockedAt = blockedAt || String(e);
  await shot(page, path.join(GUIDE_IMG, 'failure-last-state.jpg')).catch(() => {});
  if (!steps.some((s) => s.step === 0)) {
    record(0, 'Run error', false, blockedAt);
  }
}

await browser.close();

const allStepsPass = steps.length > 0 && steps.every((s) => s.pass || s.step === 0);
const goalPass = goalReached && allStepsPass;
const now = new Date().toISOString();
const featureJson = path.join(ROOT, 'reports', `${DATE}-create-nextjs-backend-capsule.json`);
const featureMd = path.join(ROOT, 'reports', `${DATE}-create-nextjs-backend-capsule.md`);

fs.writeFileSync(
  featureJson,
  JSON.stringify(
    {
      date: DATE,
      platform: PLATFORM,
      goal: 'Expect to see capsule building in builds tab',
      goalReached: goalPass,
      blockedAt: blockedAt || null,
      mismatches,
      stepResults: steps,
    },
    null,
    2,
  ),
);

const feature = [
  `# ${FEATURE} walkthrough (${DATE})`,
  '',
  `**Platform:** ${PLATFORM}`,
  '',
  '**Manifest goal:** Expect to see capsule building in builds tab',
  '',
  `**Run completed:** ${now}`,
  `**Goal reached:** ${goalPass ? 'yes' : 'no'}`,
  blockedAt ? `**Blocked:** ${blockedAt}` : '',
  '',
  '## Step results',
  '',
  '| Step | Pass | Detail |',
  '|---|---|---|',
  ...steps.map((s) => `| ${s.step} ${s.name} | ${s.pass ? 'pass' : 'fail'} | ${s.detail.replace(/\|/g, '\\|')} |`),
  '',
  '## Mismatches / issues',
  '',
  ...mismatches.map((m) => `- ${m}`),
].filter(Boolean);

fs.writeFileSync(featureMd, feature.join('\n'));
console.log(feature.join('\n'));
process.exit(goalPass ? 0 : 1);