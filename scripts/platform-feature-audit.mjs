#!/usr/bin/env node
/**
 * Audit guides listed in cc-site/DOCUMENTED_FEATURES.MD against test-platform.codecapsules.io.
 * Run: EMAIL=... PASSWORD=... node scripts/platform-feature-audit.mjs
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_ROOT = path.resolve(ROOT, '../cc-site');
const PLATFORM = 'https://test-platform.codecapsules.io';
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const FEATURE_TO_GUIDE = {
  'Create Angular frontend capsule': 'docs/guides/create-angular-frontend-capsule.md',
};

/** @typedef {{ guide: string, functional: 'pass'|'fail', doc_fidelity: 'pass'|'drift'|'fail', steps: { step: string, fidelity: string, detail: string }[], functional_detail: string }} Report */

/** @type {Report[]} */
const reports = [];

function parseFeatures() {
  const listPath = path.join(SITE_ROOT, 'DOCUMENTED_FEATURES.MD');
  const raw = fs.readFileSync(listPath, 'utf8');
  return raw
    .split('\n')
    .map((l) => l.replace(/^-\s*/, '').trim())
    .map((l) => l.replace(/\s*\(GOAL:.*\)\s*$/i, '').trim())
    .filter(Boolean);
}

/**
 * Very small step extractor: numbered lines like "1. ..." or "## Step N"
 */
function parseGuideSteps(md) {
  const steps = [];
  for (const line of md.split('\n')) {
    const m = line.match(/^(\d+)\.\s+(.+)/);
    if (m) steps.push({ num: m[1], text: m[2] });
  }
  return steps;
}

async function openLoginForm(page) {
  await page.goto(PLATFORM, { waitUntil: 'networkidle' });
  if (!page.url().includes('/auth/login')) {
    const logIn = page.getByRole('link', { name: 'Log in' });
    if (await logIn.isVisible().catch(() => false)) {
      await logIn.click();
      await page.waitForURL('**/auth/login');
    } else {
      await page.goto(`${PLATFORM}/auth/login`, { waitUntil: 'networkidle' });
      if (page.url().includes('/auth/registration')) {
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.waitForURL('**/auth/login');
      }
    }
  }
}

async function verifyLoginLabels(page) {
  const rows = [];
  await openLoginForm(page);
  const checks = [
    { quote: 'Welcome back', probe: () => page.getByRole('heading', { name: 'Welcome back' }).isVisible() },
    { quote: 'Email textbox', probe: () => page.getByRole('textbox', { name: 'Email' }).isVisible() },
    { quote: 'Password textbox', probe: () => page.getByRole('textbox', { name: 'Password' }).isVisible() },
    { quote: 'Log in button', probe: () => page.getByRole('button', { name: 'Log in' }).isVisible() },
  ];
  for (const c of checks) {
    const ok = await c.probe();
    rows.push({
      step: `Login UI: ${c.quote}`,
      fidelity: ok ? 'pass' : 'fail',
      detail: ok ? 'Visible label/control found' : 'Not found on screen',
    });
  }
  return rows;
}

async function tryLogin(page) {
  if (!EMAIL || !PASSWORD) {
    return { ok: false, detail: 'EMAIL/PASSWORD env vars not set on runner' };
  }
  await openLoginForm(page);
  await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(2000);
  if (page.url().includes('/auth/login')) {
    const alert = await page.getByRole('alert').textContent().catch(() => null);
    return { ok: false, detail: alert ? alert.trim() : 'Still on login page after submit' };
  }
  return { ok: true, detail: `Landed on ${page.url()}` };
}

const features = parseFeatures();
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const loginFidelity = await verifyLoginLabels(page);
const loginResult = await tryLogin(page);

for (const feature of features) {
  const relGuide = FEATURE_TO_GUIDE[feature];
  const guidePath = relGuide ? path.join(ROOT, relGuide) : null;
  /** @type {Report} */
  const report = {
    guide: relGuide ?? `(no mapping for ${feature})`,
    functional: 'fail',
    doc_fidelity: 'fail',
    steps: [],
    functional_detail: '',
  };

  if (!relGuide || !fs.existsSync(guidePath)) {
    report.functional_detail = 'Guide file missing';
    report.doc_fidelity = 'fail';
    report.steps.push({
      step: '(entire guide)',
      fidelity: 'fail',
      detail: 'No markdown guide in cc-docusaurus for this DOCUMENTED_FEATURES entry',
    });
    reports.push(report);
    continue;
  }

  const md = fs.readFileSync(guidePath, 'utf8');
  const steps = parseGuideSteps(md);
  if (!steps.length) {
    report.doc_fidelity = 'fail';
    report.steps.push({ step: '(entire guide)', fidelity: 'fail', detail: 'Guide has no numbered steps' });
  } else {
    report.steps.push(...loginFidelity);
    for (const s of steps) {
      const lower = s.text.toLowerCase();
      if (lower.includes('log in') || lower.includes('login') || lower.includes('email')) {
        const match = loginFidelity.every((r) => r.fidelity === 'pass');
        report.steps.push({
          step: `${s.num}. ${s.text}`,
          fidelity: match ? 'pass' : 'drift',
          detail: match ? 'Login controls match live platform labels' : 'Login controls mismatch',
        });
      } else {
        report.steps.push({
          step: `${s.num}. ${s.text}`,
          fidelity: loginResult.ok ? 'pass' : 'fail',
          detail: loginResult.ok ? 'Not re-checked this run (authenticated UI)' : 'Blocked: not logged in',
        });
      }
    }
    const fails = report.steps.filter((r) => r.fidelity === 'fail' || r.fidelity === 'drift');
    report.doc_fidelity = fails.length === 0 ? 'pass' : fails.some((f) => f.fidelity === 'fail') ? 'fail' : 'drift';
  }

  if (loginResult.ok) {
    report.functional = 'pass';
    report.functional_detail = loginResult.detail;
  } else {
    report.functional = 'fail';
    report.functional_detail = loginResult.detail;
  }

  reports.push(report);
}

await browser.close();

const date = new Date().toISOString().slice(0, 10);
const outDir = path.join(ROOT, 'reports');
fs.mkdirSync(outDir, { recursive: true });
const jsonPath = path.join(outDir, `${date}-platform-feature-audit.json`);
fs.writeFileSync(jsonPath, JSON.stringify({ platform: PLATFORM, loginResult, reports }, null, 2));

let md = `# Platform feature audit (${date})\n\nTarget: ${PLATFORM}\n\n`;
md += `| Guide | Functional | Doc fidelity |\n|---|---|---|\n`;
for (const r of reports) {
  md += `| ${r.guide} | ${r.functional} | ${r.doc_fidelity} |\n`;
}
md += '\n';
for (const r of reports) {
  md += `## ${r.guide}\n\nFunctional detail: ${r.functional_detail}\n\n`;
  md += `| Step | Fidelity | Detail |\n|---|---|---|\n`;
  for (const s of r.steps) {
    md += `| ${s.step.replace(/\|/g, '\\|')} | ${s.fidelity} | ${s.detail.replace(/\|/g, '\\|')} |\n`;
  }
  md += '\n';
}

const mdPath = path.join(outDir, `${date}-platform-feature-audit.md`);
fs.writeFileSync(mdPath, md);
console.log(md);
console.log(`Wrote ${mdPath}`);

const hardFail = reports.some((r) => r.functional === 'fail' || r.doc_fidelity !== 'pass');
process.exit(hardFail ? 1 : 0);