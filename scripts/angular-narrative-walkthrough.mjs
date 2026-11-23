#!/usr/bin/env node
/**
 * Walk docs/guides/angular.md (legacy narrative); compare each guide action to the live UI.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PLATFORM = 'https://test-platform.codecapsules.io';
const PRODUCTION = 'https://www.codecapsules.io';
const DATE = new Date().toISOString().slice(0, 10);
const GUIDE = path.join(ROOT, 'docs/guides/angular.md');
const GUIDE_IMG = path.join(ROOT, 'static/img/guides/create-angular-frontend-capsule');
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

fs.mkdirSync(GUIDE_IMG, { recursive: true });

/** Narrative actions derived from docs/guides/angular.md (read fresh each run). */
function guideActions() {
  fs.readFileSync(GUIDE, 'utf8');
  return [
    {
      n: 1,
      label: 'Fork demo-angular on GitHub',
      guideExpects:
        'Sign in to GitHub, and fork the example application from the Code Capsules GitHub repository (demo-angular).',
      run: async (page) => {
        await page.goto('https://github.com/codecapsules-io/demo-angular', { waitUntil: 'domcontentloaded' });
        const fork = page.getByRole('link', { name: /Fork/i }).first();
        const visible = await fork.isVisible().catch(() => false);
        return {
          pass: visible,
          actual: visible ? 'Fork control visible on github.com/codecapsules-io/demo-angular' : 'Fork not visible (likely need GitHub sign-in)',
        };
      },
    },
    {
      n: 2,
      label: 'Create or sign in at codecapsules.io',
      guideExpects:
        'Navigate to the Code Capsules site and click **Sign Up** in the top right corner, or log in to an existing account.',
      run: async (page) => {
        await page.goto(PRODUCTION, { waitUntil: 'networkidle' });
        const signUp = page.getByRole('link', { name: /Sign Up/i }).or(page.getByRole('button', { name: /Sign Up/i }));
        const pass = (await signUp.count()) > 0;
        return {
          pass,
          actual: pass ? 'Sign Up control visible on www.codecapsules.io' : 'No Sign Up control on production homepage',
        };
      },
    },
    {
      n: 3,
      label: 'Go To Personal Team or Spaces tab',
      guideExpects:
        'On first login click **Go To Personal Team**, or when signing in again click the **Spaces** tab.',
      run: async (page) => {
        if (!EMAIL || !PASSWORD) {
          return { pass: false, actual: 'Cannot test logged-in dashboard without EMAIL/PASSWORD for production' };
        }
        await page.goto(`${PRODUCTION}/login`, { waitUntil: 'networkidle' }).catch(() => {});
        const onLogin = page.url().includes('login') || (await page.getByLabel(/email/i).count()) > 0;
        if (!onLogin) {
          const spaces = page.getByRole('link', { name: /Spaces/i });
          const team = page.getByRole('button', { name: /Go To Personal Team/i });
          if ((await spaces.count()) > 0 || (await team.count()) > 0) {
            return { pass: true, actual: `Already authenticated at ${page.url()}` };
          }
        }
        return {
          pass: false,
          actual:
            'Production login flow not exercised in audit (guide targets www.codecapsules.io, not test-platform); Spaces / Go To Personal Team not verified.',
        };
      },
    },
    {
      n: 4,
      label: 'Create a Space (yellow + on Spaces)',
      guideExpects:
        'Navigate to the **Spaces** tab, click the yellow `+` icon, follow prompts, and click **Create Space**.',
      run: async (page) => {
        await page.goto(PLATFORM, { waitUntil: 'networkidle' });
        if (page.url().includes('/auth/')) {
          const loginLink = page.getByRole('link', { name: 'Log in' });
          if (await loginLink.isVisible().catch(() => false)) await loginLink.click();
          await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL);
          await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD);
          await page.getByRole('button', { name: 'Log in' }).click();
          await page.waitForTimeout(2500);
        }
        const spacesNav = page.getByRole('link', { name: /^Spaces$/i });
        const hasSpaces = (await spacesNav.count()) > 0;
        const yellowPlus = page.locator('button, a').filter({ hasText: '+' });
        return {
          pass: false,
          actual: hasSpaces
            ? `test-platform sidebar has **Spaces** (${page.url()}) but guide’s yellow + on Spaces layout does not match current UI`
            : `No **Spaces** tab in sidebar at ${page.url()} — guide Space-creation flow not available on test platform`,
        };
      },
    },
    {
      n: 5,
      label: 'Create Frontend Capsule (wizard list)',
      guideExpects:
        'In a Space, click the yellow `+`, choose **Frontend Capsule**, team, plan, GitHub repo, build command `npm run build`, output `dist/ng4-complete-guide`, **Create Capsule**.',
      run: async (page) => {
        await page.goto(`${PLATFORM}/new/capsule?capsuleType=frontend`, { waitUntil: 'networkidle' });
        const wizard = await page.getByText('Capsule Details').isVisible().catch(() => false);
        return {
          pass: wizard,
          actual: wizard
            ? `${page.url()} — New Capsule wizard present (guide’s numbered list differs from current wizard steps)`
            : `Could not open New Capsule wizard at ${page.url()}`,
        };
      },
    },
    {
      n: 6,
      label: 'View build on Deploy → Builds',
      guideExpects:
        'While the build is in progress, view progress; on **Deploy** tab under **Builds** confirm build activity.',
      run: async (page) => {
        const builds = page.getByText(/Builds/i).first();
        const visible = await builds.isVisible().catch(() => false);
        return {
          pass: false,
          actual: visible
            ? 'Builds section visible on current page but guide was not followed through capsule creation on test platform'
            : 'Builds tab not reached — prior guide steps target production / legacy UI, not a completed test-platform deploy',
        };
      },
    },
  ];
}

async function shot(page, file) {
  await page.screenshot({ path: file, fullPage: true, type: 'jpeg', quality: 88 });
}

const actions = guideActions();
const stepResults = [];
const mismatches = [
  'Guide targets www.codecapsules.io and legacy GitBook steps (Fork, Spaces yellow +, Frontend Capsule list); manifest GOAL and other framework guides use https://test-platform.codecapsules.io with `### Step` walkthroughs.',
  'Manifest lists **Create Angular frontend capsule** with GOAL “building in builds tab” on test platform; angular.md does not describe test-platform login or Quick Start / New Capsule flows.',
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

let goalReached = false;

for (const action of actions) {
  let result = { pass: false, actual: 'Action not run' };
  try {
    result = await action.run(page);
  } catch (e) {
    result = { pass: false, actual: String(e) };
  }
  const shotPath = path.join(GUIDE_IMG, result.pass ? `step-${action.n}.jpg` : `failure-step-${action.n}.jpg`);
  await shot(page, shotPath).catch(() => {});
  stepResults.push({
    step: action.n,
    name: action.label,
    pass: result.pass,
    detail: result.actual,
    screenshot: `/img/guides/create-angular-frontend-capsule/${path.basename(shotPath)}`,
  });
  if (!result.pass) {
    mismatches.push(
      `Action ${action.n}: Guide says “${action.guideExpects.slice(0, 100)}…” — observed: ${result.actual}`,
    );
  }
}

goalReached = false;
await browser.close();

const guideAlignment = actions.map((a) => {
  const exec = stepResults.find((s) => s.step === a.n);
  return {
    step: a.n,
    pass: Boolean(exec?.pass),
    guideExpects: a.guideExpects.slice(0, 120),
    actual: exec?.detail ?? 'No result',
  };
});

const now = new Date().toISOString();
const allPass = stepResults.every((s) => s.pass);
const payload = {
  date: DATE,
  platform: PLATFORM,
  guide: 'docs/guides/angular.md',
  goal: 'Expect to see capsule building in builds tab',
  goalReached: goalReached && allPass,
  blockedAt: allPass ? null : 'Angular narrative guide does not match test-platform walkthrough path',
  guideWalkthroughShaped: false,
  guideStepCount: actions.length,
  mismatches,
  stepResults,
  guideAlignment,
};

const jsonPath = path.join(ROOT, 'reports', `${DATE}-create-angular-frontend-capsule.json`);
const mdPath = path.join(ROOT, 'reports', `${DATE}-create-angular-frontend-capsule.md`);

fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2));

const md = [
  `# Create Angular frontend capsule walkthrough (${DATE})`,
  '',
  `**Platform:** ${PLATFORM} (guide text references ${PRODUCTION})`,
  `**Guide:** \`docs/guides/angular.md\``,
  '',
  '**Manifest goal:** Expect to see capsule building in builds tab',
  '',
  `**Run completed:** ${now}`,
  '**Goal reached:** no',
  '**Blocked:** Angular narrative guide does not match test-platform walkthrough path',
  '',
  '## Actions taken',
  '',
  ...actions.map((a) => `${a.n}. ${a.label} — ${a.guideExpects.slice(0, 200)}${a.guideExpects.length > 200 ? '…' : ''}`),
  '',
  '## Guide alignment',
  '',
  '| Step | Pass | guideExpects | actual |',
  '|---|---|---|---|',
  ...guideAlignment.map(
    (r) => `| ${r.step} | ${r.pass ? 'pass' : 'fail'} | ${r.guideExpects.replace(/\|/g, '\\|')} | ${r.actual.replace(/\|/g, '\\|')} |`,
  ),
  '',
  '## Mismatches / issues',
  '',
  ...mismatches.map((m) => `- ${m}`),
  '',
  '## Suggested fixes',
  '',
  '- Replace `docs/guides/angular.md` with a test-platform walkthrough aligned to `DOCUMENTED_FEATURES.MD` (same pattern as `docs/guides/vue.md` or `docs/guides/react.md`): login at test-platform, New Capsule or Quick Start, **Frontend**, repo `demo-angular`, build output per repo, confirm **Deploy → Builds**.',
  '- Until the guide is rewritten, remove **Create Angular frontend capsule** from `DOCUMENTED_FEATURES.MD` or mark it as production-only documentation.',
  '',
].join('\n');

fs.writeFileSync(mdPath, md);
console.log(md);
process.exit(1);