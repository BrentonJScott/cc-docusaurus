#!/usr/bin/env node
/**
 * Walk create-angular-frontend-capsule.md; screenshots + JSON report for cron.
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

const SHARED = path.join(ROOT, 'static/img/guides/shared');
const GUIDE_IMG = path.join(ROOT, 'static/img/guides/create-angular-frontend-capsule');

/** @type {{ step: number, name: string, pass: boolean, detail: string }[]} */
const steps = [];
/** @type {string[]} */
const mismatches = [];

function record(step, name, pass, detail) {
  steps.push({ step, name, pass, detail });
}

async function shot(page, file) {
  await page.screenshot({ path: file, fullPage: true });
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

async function clickNgSelectIndex(page, index) {
  const container = page.locator('ng-select').nth(index).locator('.ng-select-container');
  await container.waitFor({ state: 'visible', timeout: 20000 });
  await container.click();
  await page.waitForTimeout(600);
}

async function pickOption(page, name) {
  const opt = page.getByRole('option', { name: new RegExp(name, 'i') }).first();
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
  await page.goto(PLATFORM, { waitUntil: 'networkidle' });
  record(1, 'Open platform', true, page.url());
  await shot(page, path.join(SHARED, 'step-0-open-site.png'));

  await openLogin(page);
  const welcome = await page.getByRole('heading', { name: 'Welcome back' }).isVisible();
  record(2, 'Welcome back', welcome, 'Login form visible');
  await shot(page, path.join(SHARED, 'step-1-login-page.png'));

  await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL ?? '');
  await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD ?? '');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(2500);
  const loggedIn = !page.url().includes('/auth/login');
  record(3, 'Log in', loggedIn, page.url());
  if (!loggedIn) throw new Error('Login failed');

  await page.getByRole('link', { name: 'Quick Start' }).click();
  await page.waitForTimeout(1500);
  const qs = await page.getByText('What type of capsule would you like to deploy?').isVisible();
  record(4, 'Quick Start', qs, page.url());
  await shot(page, path.join(SHARED, 'step-2-quick-start.png'));

  await page
    .locator('app-quick-start-card')
    .filter({ hasText: 'Angular applications' })
    .locator('.btn', { hasText: 'Deploy Now' })
    .click();
  await page.waitForURL('**/new/capsule**', { timeout: 25000 });
  await waitForWizardShell(page);

  const capsuleDetailsText = await page.locator('body').innerText();
  const showsBackend =
    /Choose a Capsule[\s\S]{0,200}Backend/.test(capsuleDetailsText) && !/Choose a Capsule[\s\S]{0,200}Frontend/.test(capsuleDetailsText);
  if (showsBackend) {
    mismatches.push(
      'Angular Deploy Now lands on Capsule Details with Backend pre-selected; doc step 6 requires switching to Frontend.',
    );
    await clickNgSelectIndex(page, 0);
    await pickOption(page, 'Frontend');
  }

  record(5, 'Angular Deploy Now → New Capsule', page.url().includes('capsuleType=frontend'), page.url());
  await shot(page, path.join(GUIDE_IMG, 'step-5-new-capsule-wizard.png'));

  await clickNgSelectIndex(page, 1);
  await page.waitForTimeout(800);
  const teamOptions = await page.getByRole('option').count();
  if (teamOptions === 0) throw new Error('No team options loaded');
  const teamName =
    (await page.getByRole('option', { name: /Personal Team/i }).first().textContent().catch(() => null)) ??
    (await page.getByRole('option').first().textContent());
  await page
    .getByRole('option', { name: /Personal Team/i })
    .first()
    .click()
    .catch(() => page.getByRole('option').first().click());
  await page.waitForTimeout(600);

  await page.waitForTimeout(800);
  const ngCount = await page.locator('ng-select').count();
  if (ngCount < 3) {
    await page.waitForTimeout(1500);
  }
  await clickNgSelectIndex(page, 2);
  await page.waitForTimeout(1000);
  const spaceCount = await page.getByRole('option').count();
  if (spaceCount > 0) await page.getByRole('option').first().click();

  record(6, 'Capsule Details team + space', spaceCount > 0, `Team: ${teamName?.trim()}; spaces: ${spaceCount}`);
  await shot(page, path.join(GUIDE_IMG, 'step-6-capsule-details-filled.png'));

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(1500);

  const hosting = await page.getByRole('heading', { name: 'Hosting' }).isVisible();
  if (hosting) {
    const hostingCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: 'Hosting' }) });
    await hostingCard.getByText('Static', { exact: true }).click();
    await page.waitForTimeout(300);
    const validationVisible = await hostingCard.getByText('Choose how your site is hosted').isVisible().catch(() => false);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    record(7, 'Hosting Static', !validationVisible, validationVisible ? 'Validation still visible after Static click' : 'Selected Static');
    await shot(page, path.join(GUIDE_IMG, 'step-6-hosting-static.png'));
  }

  const plan = await page.getByRole('heading', { name: 'Plan' }).isVisible().catch(() => false);
  if (plan) {
    const planCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: 'Plan' }) });
    await planCard.getByText('Free', { exact: true }).first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    record(8, 'Plan Free', true, 'Selected Free');
    await shot(page, path.join(GUIDE_IMG, 'step-7-plan-free.png'));
  }

  await page.waitForTimeout(1000);
  const gitRepo = await page.getByText('Search/Select a Repository', { exact: true }).isVisible().catch(() => false);
  if (gitRepo) {
    await clickNgSelectIndex(page, 0);
    await page.waitForTimeout(2000);
    const repoFilter = page.locator('ng-select').nth(0).locator('input[type="text"]');
    if (await repoFilter.isVisible().catch(() => false)) {
      await repoFilter.fill('demo-angular-22');
      await page.waitForTimeout(1200);
    }
    const repoCount = await page.getByRole('option').count();
    record(9, 'Git repositories listed', repoCount > 0, repoCount > 0 ? `${repoCount} repo(s)` : 'No items found');
    if (repoCount === 0) {
      await shot(page, path.join(GUIDE_IMG, 'step-8-git-repository.png'));
      blockedAt = 'Git Repository list empty — GOAL unreachable';
      await shot(page, path.join(GUIDE_IMG, 'failure-git-empty.png'));
      mismatches.push('Audit account has no connected repositories; steps 10–12 and GOAL blocked (platform limitation).');
      record(9, 'Connect a Git Repository', false, 'No items found');
    } else {
      const repoOpt = page.getByRole('option', { name: /demo-angular-22/i });
      const hasAngularRepo = (await repoOpt.count()) > 0;
      if (!hasAngularRepo) {
        const names = await page
          .getByRole('option')
          .allTextContents()
          .then((t) => t.map((s) => s.trim()).filter(Boolean).slice(0, 12));
        mismatches.push(
          `Guide step 9 names **BrentonJScott/demo-angular-22 Team Repository**; no matching option after filtering. Visible options: ${names.join(', ') || '(none)'}`,
        );
        await shot(page, path.join(GUIDE_IMG, 'failure-git-repo-missing.png'));
        record(9, 'Connect a Git Repository (demo-angular-22)', false, `Missing demo-angular-22; saw ${names.length} option(s)`);
        blockedAt = 'demo-angular-22 not in Git Repository list — GOAL unreachable';
      } else {
        const repoName = (await repoOpt.first().textContent())?.trim();
        await repoOpt.first().click();
        await page.waitForTimeout(1500);
        const branchLabel = page.getByText('Search/Select a Branch', { exact: true });
        if (await branchLabel.isVisible().catch(() => false)) {
          await clickNgSelectIndex(page, 1);
          await page.waitForTimeout(1000);
          const branchCount = await page.getByRole('option').count();
          if (branchCount === 0) {
            mismatches.push('Branch dropdown visible but no branch options loaded after selecting cc-demo-angular.');
            record(9, 'Select branch', false, 'No branch options');
            blockedAt = blockedAt || 'Branch list empty';
          } else {
            const mainBranch = page.getByRole('option', { name: /main/i }).first();
            if ((await mainBranch.count()) > 0) {
              await mainBranch.click();
            } else {
              const branchName = (await page.getByRole('option').first().textContent())?.trim();
              await page.getByRole('option').first().click();
              mismatches.push(`Guide does not name a branch; selected **${branchName}** because **main** was not listed.`);
            }
            await page.waitForTimeout(500);
          }
        }
        let step9Ready = !blockedAt;
        record(9, 'Connect a Git Repository (demo-angular-22)', step9Ready, `Repository: ${repoName}`);
        await shot(page, path.join(GUIDE_IMG, 'step-8-git-repository.png'));
        if (step9Ready) {
          await page.getByRole('button', { name: 'Next' }).click();
          await page.waitForTimeout(2000);

          await page.getByPlaceholder(/npm run build/i).fill('npm run build');
          await page.getByPlaceholder(/dist/i).fill('dist/cc-demo-angular/browser');
          record(10, 'Build & Deploy fields', true, 'npm run build; dist/cc-demo-angular/browser');
          await shot(page, path.join(GUIDE_IMG, 'step-10-build-deploy.png')).catch(() => {});
          record(11, 'Create Capsule', true, 'Submit wizard');
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
          record(12, 'Deploy Builds', goalReached, goalReached ? 'Building state visible' : page.url());
          await shot(page, path.join(GUIDE_IMG, 'step-12-deploy-builds.png')).catch(() => {});
        }
      }
    }
  } else {
    blockedAt = blockedAt || 'Did not reach Connect a Git Repository step';
    record(9, 'Connect a Git Repository', false, blockedAt);
  }
} catch (e) {
  blockedAt = blockedAt || String(e);
  await shot(page, path.join(GUIDE_IMG, 'failure-last-state.png')).catch(() => {});
  record(0, 'Run error', false, blockedAt);
}

await browser.close();

const cronMd = path.join(ROOT, 'reports', `${DATE}-cron-platform-audit.md`);
const featureMd = path.join(ROOT, 'reports', `${DATE}-create-angular-frontend-capsule.md`);
const now = new Date().toISOString();

const cron = [
  `# Cron platform audit (${DATE})`,
  '',
  `**Run completed:** ${now}`,
  `**Manifest:** \`cc-site/DOCUMENTED_FEATURES.MD\` — 1 feature`,
  `**Target:** ${PLATFORM}`,
  '',
  '| DOCUMENTED_FEATURES | Guide |',
  '|---|---|',
  '| Create Angular frontend capsule | `docs/guides/create-angular-frontend-capsule.md` |',
  '',
  `**Manifest goal reached:** ${goalReached ? 'yes' : 'no'}${blockedAt ? ` (${blockedAt})` : ''}`,
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
  `# Create Angular frontend capsule walkthrough (${DATE})`,
  '',
  `**Platform:** ${PLATFORM}`,
  '',
  '**Manifest goal:** Expect to see capsule building in builds tab',
  '',
  `**Run completed:** ${now}`,
  `**Goal reached:** ${goalReached ? 'yes' : 'no'}`,
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
console.log(cron.join('\n'));
process.exit(goalReached ? 0 : 1);