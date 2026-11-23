#!/usr/bin/env node
/**
 * Walk docs/guides/react.md; screenshots + JSON report for cron.
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

const GUIDE_IMG = path.join(ROOT, 'static/img/guides/create-react-frontend-capsule');
const NAMED_REPO = 'BrentonJScott/demo-react Team Repository';
const NAMED_BRANCH = 'master';
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
  return `/img/guides/create-react-frontend-capsule/step-${n}.jpg`;
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

  const createNew = page
    .getByRole('link', { name: 'Create New Capsule' })
    .or(page.getByRole('button', { name: 'Create New Capsule' }));
  let step4Pass = false;
  let step4Detail = page.url();
  if ((await createNew.count()) === 0) {
    step4Detail =
      'Dashboard has no **Create New Capsule** control (sidebar shows Quick Start; framework cards use **Deploy Now** instead).';
    mismatches.push(
      'Guide step 4: click **Create New Capsule** and pick **React**; control not found on live dashboard.',
    );
    await shot(page, path.join(GUIDE_IMG, 'failure-step-4.jpg'));
    record(4, 'Create New Capsule → React', false, step4Detail);
    throw new Error(step4Detail);
  }
  await createNew.first().click();
  await page.waitForTimeout(1500);
  const reactPick = page
    .getByRole('button', { name: /^React$/i })
    .or(page.getByRole('link', { name: /^React$/i }))
    .or(page.locator('app-quick-start-card').filter({ hasText: /React applications/i }));
  if ((await reactPick.count()) === 0) {
    step4Detail = '**React** option not found after opening Create New Capsule';
    mismatches.push('Guide step 4: pick **React** after **Create New Capsule**; React selector not visible.');
    await shot(page, path.join(GUIDE_IMG, 'failure-step-4.jpg'));
    record(4, 'Create New Capsule → React', false, step4Detail);
    throw new Error(step4Detail);
  }
  const reactDeploy = reactPick
    .first()
    .locator('.btn', { hasText: 'Deploy Now' })
    .or(reactPick.first());
  await reactDeploy.click();
  await page.waitForURL('**/new/capsule**', { timeout: 25000 });
  await waitForWizardShell(page);
  step4Pass = page.url().includes('capsuleType=frontend');
  step4Detail = page.url();
  const s4 = stepJpg(5);
  await shot(page, s4);
  record(4, 'Create New Capsule → React', step4Pass, step4Detail, stepImgRel(5));
  if (!step4Pass) throw new Error('Did not reach New Capsule wizard for React');

  const capsuleDetailsText = await page.locator('body').innerText();
  const showsBackend =
    /Choose a Capsule[\s\S]{0,240}Backend/.test(capsuleDetailsText) &&
    !/Choose a Capsule[\s\S]{0,240}Frontend/.test(capsuleDetailsText);
  if (showsBackend) {
    await openCapsuleDetailsDropdown(page, 'Choose a Capsule');
    await pickOption(page, /Frontend/);
  }

  await openCapsuleDetailsDropdown(page, 'Choose a Team');
  await page.waitForTimeout(1200);
  const personalTeam = page.getByRole('option', { name: /Personal Team/i });
  const hasPersonal = (await personalTeam.count()) > 0;
  let step5Pass = false;
  let step5Detail = '';
  if (!hasPersonal) {
    step5Detail = `${NAMED_TEAM} not in team dropdown`;
    mismatches.push(`Guide names **${NAMED_TEAM}**; option missing.`);
    await shot(page, path.join(GUIDE_IMG, 'failure-step-5.jpg'));
    blockedAt = blockedAt || step5Detail;
  } else {
    await personalTeam.click();
    await page.waitForTimeout(800);
    step5Pass = true;
    step5Detail = `Frontend capsule type; team: ${NAMED_TEAM} (guide lists Capsule + Team only on this step)`;
  }
  const s5 = stepJpg(6);
  await shot(page, s5);
  record(5, 'Capsule Details', step5Pass, step5Detail, stepImgRel(6));
  if (!step5Pass) throw new Error(step5Detail);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(1500);

  const hosting = await page.getByRole('heading', { name: 'Hosting' }).isVisible();
  let step6Pass = false;
  if (hosting) {
    const hostingCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: 'Hosting' }) });
    await hostingCard.getByText('Static', { exact: true }).click();
    await page.waitForTimeout(300);
    const validationVisible = await hostingCard
      .getByText('Choose how your site is hosted')
      .isVisible()
      .catch(() => false);
    step6Pass = !validationVisible;
    const s6 = stepJpg(7);
    await shot(page, s6);
    record(6, 'Hosting Static', step6Pass, step6Pass ? 'Static selected' : 'Validation still visible', stepImgRel(7));
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
  } else {
    record(6, 'Hosting Static', false, 'Hosting step not visible');
    throw new Error('Hosting step not visible');
  }

  const plan = await page.getByRole('heading', { name: 'Plan' }).isVisible().catch(() => false);
  if (!plan) throw new Error('Plan step not visible');
  const planCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: 'Plan' }) });
  const starterCard = planCard.getByText('Starter', { exact: true });
  let step7Pass = false;
  let step7Detail = '';
  if ((await starterCard.count()) === 0) {
    step7Detail = 'Starter plan card not on Plan step (live UI shows Free and Paid)';
    mismatches.push('Guide step 7 names **Starter** plan; live Plan step offers **Free** and **Paid** only.');
    await shot(page, path.join(GUIDE_IMG, 'failure-step-7.jpg'));
    blockedAt = blockedAt || step7Detail;
    record(7, 'Plan Starter', false, step7Detail, stepImgRel(8));
    throw new Error(step7Detail);
  }
  await starterCard.first().click();
  step7Pass = true;
  step7Detail = 'Starter plan selected';
  const s7 = stepJpg(8);
  await shot(page, s7);
  record(7, 'Plan Starter', step7Pass, step7Detail, stepImgRel(8));
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);

  const gitStepVisible = await page.getByText('Connect a Git Repository').isVisible().catch(() => false);
  if (!gitStepVisible) throw new Error('Connect a Git Repository step not visible');

  await openGitRepoDropdown(page);
  await page.waitForTimeout(1500);
  const repoCard = page.locator('.card').filter({ hasText: 'Connect a Git Repository' }).first();
  const repoFilter = repoCard.locator('.ng-select').first().locator('input[type="text"]');
  if (await repoFilter.isVisible().catch(() => false)) {
    await repoFilter.fill('demo-react');
    await page.waitForTimeout(1500);
  }
  const repoOpt = page.getByRole('option', { name: /demo-react/i });
  const hasRepo = (await repoOpt.count()) > 0;
  let step8Pass = false;
  let step8Detail = '';
  if (!hasRepo) {
    const names = await page
      .getByRole('option')
      .allTextContents()
      .then((t) => t.map((s) => s.trim()).filter(Boolean).slice(0, 12));
    step8Detail = `Named repo missing; options: ${names.join(', ') || '(none)'}`;
    mismatches.push(`Guide step 8 names **${NAMED_REPO}**; no matching dropdown option.`);
    await shot(page, path.join(GUIDE_IMG, 'failure-git-repo-missing.png'));
    blockedAt = 'demo-react not in Git Repository list — GOAL unreachable';
  } else {
    await repoOpt.first().click();
    await page.waitForTimeout(1500);
    await openGitBranchDropdown(page);
    await page.waitForTimeout(1000);
    const namedBranch = page.getByRole('option', { name: new RegExp(NAMED_BRANCH, 'i') });
    if ((await namedBranch.count()) === 0) {
      step8Detail = `Branch **${NAMED_BRANCH}** not listed`;
      mismatches.push(`Guide requires branch **${NAMED_BRANCH}**; option missing.`);
      await shot(page, path.join(GUIDE_IMG, 'failure-git-branch-missing.png'));
      blockedAt = blockedAt || step8Detail;
    } else {
      await namedBranch.first().click();
      step8Pass = true;
      step8Detail = `Repository: ${NAMED_REPO}; branch: ${NAMED_BRANCH}`;
    }
  }
  const s8 = stepJpg(9);
  await shot(page, s8);
  record(8, 'Connect a Git Repository', step8Pass, step8Detail, stepImgRel(9));
  if (!step8Pass) throw new Error(step8Detail);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder(/npm run build/i).fill('npm run build');
  await page.getByPlaceholder(/dist/i).fill('build');
  const s9 = stepJpg(10);
  await shot(page, s9);
  record(9, 'Build & Deploy fields', true, 'npm run build; build', stepImgRel(10));

  const s10 = stepJpg(11);
  await shot(page, s10);
  await page.getByRole('button', { name: 'Create Capsule' }).click();
  await page.waitForURL('**/dash/**', { timeout: 60000 }).catch(() => {});
  record(10, 'Create Capsule', true, page.url(), stepImgRel(11));
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
  const s11 = stepJpg(12);
  await shot(page, s11);
  record(
    11,
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
const featureMd = path.join(ROOT, 'reports', `${DATE}-create-react-frontend-capsule.md`);
const featureJson = path.join(ROOT, 'reports', `${DATE}-create-react-frontend-capsule.json`);
const now = new Date().toISOString();

const allStepsPass = steps.length > 0 && steps.every((s) => s.pass || s.step === 0);
const goalPass = goalReached && allStepsPass;

const cron = [
  `# Cron platform audit (${DATE})`,
  '',
  `**Run completed:** ${now}`,
  `**Manifest:** \`cc-site/DOCUMENTED_FEATURES.MD\` — Create React frontend capsule`,
  `**Target:** ${PLATFORM}`,
  '',
  '| DOCUMENTED_FEATURES | Guide |',
  '|---|---|',
  '| Create React frontend capsule | `docs/guides/react.md` |',
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
  `# Create React frontend capsule walkthrough (${DATE})`,
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