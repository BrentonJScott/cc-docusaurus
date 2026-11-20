# Cron platform audit (2026-11-20)

**Run completed:** 2026-11-20T09:19:30.340Z  
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 2 features  
**Target:** https://test-platform.codecapsules.io

| DOCUMENTED_FEATURES | Guide |
|---|---|
| Create Angular frontend capsule | `docs/guides/angular.md` |
| Create React frontend capsule | `docs/guides/react.md` |

**Manifest goals reached:** yes (both features)

## Create Angular frontend capsule

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 Angular Deploy Now → New Capsule | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space personal-space-ivbk |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | Repository: BrentonJScott/demo-angular-22 Team Repository; branch: main |
| 10 Build & Deploy fields | pass | npm run build; dist/cc-demo-angular/browser |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |

Walkthrough JSON: `reports/2026-11-20-create-angular-frontend-capsule.json`

## Create React frontend capsule

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 React Deploy Now → New Capsule | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space personal-space-ivbk |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | Repository: BrentonJScott/demo-react Team Repository; branch: main |
| 10 Build & Deploy fields | pass | npm run build; build |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |

Walkthrough JSON: `reports/2026-11-20-create-react-frontend-capsule.json`

## Mismatches / issues

- Removed `docs/guides/vue.md`, `next.js.md`, `svelte.md`, and `static-html.md` — they are not listed in `DOCUMENTED_FEATURES.MD` (manifest lists only Angular and React).
- Playwright walkthroughs for both documented features: all steps 1–12 pass; GOAL reached (build in progress on Deploy → Builds).