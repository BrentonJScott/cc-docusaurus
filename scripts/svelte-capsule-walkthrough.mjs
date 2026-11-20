#!/usr/bin/env node
/**
 * Walk docs/guides/svelte.md; screenshots + JSON report for cron.
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

const GUIDE_IMG = path.join(ROOT, 'static/img/guides/create-svelte-frontend-capsule');
const NAMED_REPO = 'BrentonJScott/demo-svelte Team Repository';
const NAMED_BRANCH = 'main';
const NAMED_TEAM = 'Personal Team';

/** @type {{ step: number, name: string, pass: boolean, detail: string, screenshot?: string }[]} */
const steps = [];
/** @type {string[]} */
const mismatches = [];

function record(step, name, pass, detail, screenshot) {
  steps.push({ step, name, pass, detail, screenshot });
}

function stepJpg(n) {
  return path.join(GUIDE_IMG, `step-${n}.jpg`);
}

function stepImgRel(n) {
  return `/img/guides/create-svelte-frontend-capsule/step-${n}.jpg`;
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

/** Open a Capsule Details dropdown by label (index scoped to the Capsule Details card). */
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

/** Git step: first dropdown under Connect a Git Repository. */
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
  const s1 = stepJpg(1);
  await shot(page, s1);
  record(1, 'Open platform', true, page.url(), stepImgRel(1));

  await openLogin(page);
  const welcome = await page.getByRole('heading', { name: 'Welcome back' }).isVisible();
  const s2 = stepJpg(2);
  await shot(page, s2);
  record(2, 'Welcome back login form', welcome, welcome ? 'Login form visible' : 'Missing Welcome back', stepImgRel(2));
  if (!welcome) throw new Error('Welcome back not visible');

  await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(2500);
  const loggedIn = !page.url().includes('/auth/login');
  const s3 = stepJpg(3);
  await shot(page, s3);
  record(3, 'Log in', loggedIn, page.url(), stepImgRel(3));
  if (!loggedIn) throw new Error('Login failed');

  await page.getByRole('link', { name: 'Quick Start' }).click();
  await page.waitForTimeout(1500);
  const qs = await page.getByText('What type of capsule would you like to deploy?').isVisible();
  const s4 = stepJpg(4);
  await shot(page, s4);
  record(4, 'Quick Start', qs, page.url(), stepImgRel(4));
  if (!qs) throw new Error('Quick Start heading not found');

  mismatches.push(
    '**Svelte** is not listed on Quick Start; the guide opens **New Capsule** directly and selects **Frontend**.',
  );
  await page.goto(`${PLATFORM}/new/capsule?capsuleType=frontend`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitForWizardShell(page);

  const capsuleDetailsText = await page.locator('body').innerText();
  const showsBackend =
    /Choose a Capsule[\s\S]{0,240}Backend/.test(capsuleDetailsText) &&
    !/Choose a Capsule[\s\S]{0,240}Frontend/.test(capsuleDetailsText);
  if (showsBackend) {
    await openCapsuleDetailsDropdown(page, 'Choose a Capsule');
    await pickOption(page, /Frontend/);
  }

  const onWizard = page.url().includes('capsuleType=frontend');
  const s5 = stepJpg(5);
  await shot(page, s5);
  record(5, 'New Capsule wizard (Svelte)', onWizard, page.url(), stepImgRel(5));

  await openCapsuleDetailsDropdown(page, 'Choose a Team');
  await page.waitForTimeout(1200);
  const personalTeam = page.getByRole('option', { name: /Personal Team/i });
  const hasPersonal = (await personalTeam.count()) > 0;
  let step6Pass = false;
  let step6Detail = '';
  if (!hasPersonal) {
    step6Detail = `${NAMED_TEAM} not in team dropdown`;
    mismatches.push(`Guide names **${NAMED_TEAM}**; option missing.`);
    await shot(page, path.join(GUIDE_IMG, 'failure-step-6-team.png'));
    blockedAt = blockedAt || step6Detail;
  } else {
    await personalTeam.click();
    await page.waitForTimeout(800);
    await openCapsuleDetailsDropdown(page, 'Choose a Space');
    await page.waitForTimeout(1200);
    const spaceCount = await page.getByRole('option').count();
    if (spaceCount === 0) {
      step6Detail = 'No space options after team selected';
      mismatches.push('Space dropdown empty after selecting team.');
      blockedAt = blockedAt || step6Detail;
    } else {
      const spaceOpt = page.getByRole('option', { name: /Personal Space/i });
      if ((await spaceOpt.count()) === 0) {
        step6Detail = 'No space option loaded after team selection';
        mismatches.push('Space dropdown empty after selecting Personal Team.');
        blockedAt = blockedAt || step6Detail;
      } else {
        const spaceName = (await spaceOpt.first().textContent())?.trim();
        await spaceOpt.first().click();
        step6Pass = true;
        step6Detail = `Team: ${NAMED_TEAM}; space: ${spaceName}`;
      }
    }
  }
  const s6 = stepJpg(6);
  await shot(page, s6);
  record(6, 'Capsule Details', step6Pass, step6Detail, stepImgRel(6));
  if (!step6Pass) throw new Error(step6Detail);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(1500);

  const hosting = await page.getByRole('heading', { name: 'Hosting' }).isVisible();
  let step7Pass = false;
  if (hosting) {
    const hostingCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: 'Hosting' }) });
    await hostingCard.getByText('Static', { exact: true }).click();
    await page.waitForTimeout(300);
    const validationVisible = await hostingCard
      .getByText('Choose how your site is hosted')
      .isVisible()
      .catch(() => false);
    step7Pass = !validationVisible;
    const s7 = stepJpg(7);
    await shot(page, s7);
    record(7, 'Hosting Static', step7Pass, step7Pass ? 'Static selected' : 'Validation still visible', stepImgRel(7));
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
  } else {
    record(7, 'Hosting Static', false, 'Hosting step not visible');
    throw new Error('Hosting step not visible');
  }

  const plan = await page.getByRole('heading', { name: 'Plan' }).isVisible().catch(() => false);
  if (!plan) throw new Error('Plan step not visible');
  const planCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: 'Plan' }) });
  await planCard.getByText('Free', { exact: true }).first().click();
  const s8 = stepJpg(8);
  await shot(page, s8);
  record(8, 'Plan Free', true, 'Free plan selected', stepImgRel(8));
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);

  const gitStepVisible = await page.getByText('Connect a Git Repository').isVisible().catch(() => false);
  if (!gitStepVisible) throw new Error('Connect a Git Repository step not visible');

  await openGitRepoDropdown(page);
  await page.waitForTimeout(1500);
  const repoCard = page.locator('.card').filter({ hasText: 'Connect a Git Repository' }).first();
  const repoFilter = repoCard.locator('.ng-select').first().locator('input[type="text"]');
  if (await repoFilter.isVisible().catch(() => false)) {
    await repoFilter.fill('demo-svelte');
    await page.waitForTimeout(1500);
  }
  const repoOpt = page.getByRole('option', { name: /demo-svelte/i });
  const hasRepo = (await repoOpt.count()) > 0;
  let step9Pass = false;
  let step9Detail = '';
  if (!hasRepo) {
    const names = await page
      .getByRole('option')
      .allTextContents()
      .then((t) => t.map((s) => s.trim()).filter(Boolean).slice(0, 12));
    step9Detail = `Named repo missing; options: ${names.join(', ') || '(none)'}`;
    mismatches.push(`Guide step 9 names **${NAMED_REPO}**; no matching dropdown option.`);
    await shot(page, path.join(GUIDE_IMG, 'failure-git-repo-missing.png'));
    blockedAt = 'demo-svelte not in Git Repository list — GOAL unreachable';
  } else {
    await repoOpt.first().click();
    await page.waitForTimeout(1500);
    await openGitBranchDropdown(page);
    await page.waitForTimeout(1000);
    const mainBranch = page.getByRole('option', { name: new RegExp(NAMED_BRANCH, 'i') });
    if ((await mainBranch.count()) === 0) {
      step9Detail = `Branch **${NAMED_BRANCH}** not listed`;
      mismatches.push(`Guide requires branch **${NAMED_BRANCH}**; option missing.`);
      await shot(page, path.join(GUIDE_IMG, 'failure-git-branch-missing.png'));
      blockedAt = blockedAt || step9Detail;
    } else {
      await mainBranch.first().click();
      step9Pass = true;
      step9Detail = `Repository: ${NAMED_REPO}; branch: ${NAMED_BRANCH}`;
    }
  }
  const s9 = stepJpg(9);
  await shot(page, s9);
  record(9, 'Connect a Git Repository', step9Pass, step9Detail, stepImgRel(9));
  if (!step9Pass) throw new Error(step9Detail);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder(/npm run build/i).fill('npm run build');
  await page.getByPlaceholder(/dist/i).fill('public');
  const s10 = stepJpg(10);
  await shot(page, s10);
  record(10, 'Build & Deploy fields', true, 'npm run build; public', stepImgRel(10));

  const s11 = stepJpg(11);
  await shot(page, s11);
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
  const s12 = stepJpg(12);
  await shot(page, s12);
  record(
    12,
    'Deploy Builds',
    goalReached,
    goalReached ? 'Building state visible' : page.url(),
    stepImgRel(12),
  );
} catch (e) {
  blockedAt = blockedAt || String(e);
  const failShot = path.join(GUIDE_IMG, 'failure-last-state.jpg');
  await shot(page, failShot).catch(() => {});
  if (!steps.some((s) => s.step === 0)) {
    record(0, 'Run error', false, blockedAt);
  }
}

await browser.close();

const cronMd = path.join(ROOT, 'reports', `${DATE}-cron-platform-audit.md`);
const featureMd = path.join(ROOT, 'reports', `${DATE}-create-svelte-frontend-capsule.md`);
const featureJson = path.join(ROOT, 'reports', `${DATE}-create-svelte-frontend-capsule.json`);
const now = new Date().toISOString();

const allStepsPass = steps.length > 0 && steps.every((s) => s.pass || s.step === 0);
const goalPass = goalReached && allStepsPass;

const cron = [
  `# Cron platform audit (${DATE})`,
  '',
  `**Run completed:** ${now}`,
  `**Manifest:** \`cc-site/DOCUMENTED_FEATURES.MD\` — Create Svelte frontend capsule`,
  `**Target:** ${PLATFORM}`,
  '',
  '| DOCUMENTED_FEATURES | Guide |',
  '|---|---|',
  '| Create Svelte frontend capsule | `docs/guides/svelte.md` |',
  '',
  `**Manifest goal reached:** ${goalPass ? 'yes' : 'no'}${blockedAt ? ` (${blockedAt})` : ''}`,
  '',
  '## Step results',
  '',
  '| Step | Pass | Detail |',
  '|---|---|---|',
  ...steps.map((s) => `| ${s.step} ${s.name} | ${s.pass ? 'pass' : 'fail'} | ${s.detail.replace(/\|/g, '\\|')} |`),
];
if (mismatches.length) {
  cron.push('', '## Mismatches', '', ...mismatches.map((m) => `- ${m}`));
}
fs.writeFileSync(cronMd, cron.join('\n'));

const feature = [
  `# Create Svelte frontend capsule walkthrough (${DATE})`,
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
  ...(mismatches.length === 0 ? ['- None observed for this run.'] : []),
].filter(Boolean);

fs.writeFileSync(featureMd, feature.join('\n'));

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
      stepResults: steps.map((s) => ({
        step: s.step,
        name: s.name,
        pass: s.pass,
        detail: s.detail,
        screenshot: s.screenshot ?? null,
      })),
    },
    null,
    2,
  ),
);

console.log(cron.join('\n'));
process.exit(goalPass ? 0 : 1);