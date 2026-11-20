# Cron platform audit (2026-11-20)

**Run completed:** 2026-11-20T08:14:53.299Z  
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 2 features  
**Target:** https://test-platform.codecapsules.io

| DOCUMENTED_FEATURES | Guide |
|---|---|
| Create Angular frontend capsule | `docs/guides/angular.md` |
| Create React frontend capsule | `docs/guides/react.md` |

**Manifest goals reached:** both yes (full Playwright walkthroughs, steps 1–12)

## Create Angular frontend capsule

**Goal:** Expect to see capsule building in builds tab — **reached**

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | Quick Start heading visible |
| 5 Angular Deploy Now → New Capsule | pass | `/new/capsule?capsuleType=frontend` |
| 6 Capsule Details | pass | Personal Team; Personal Space |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | `BrentonJScott/demo-angular-22 Team Repository`; branch main |
| 10 Build & Deploy fields | pass | `npm run build`; `dist/cc-demo-angular/browser` |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |

**Mismatches:** none

## Create React frontend capsule

**Goal:** Expect to see capsule building in builds tab — **reached**

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | Quick Start heading visible |
| 5 React Deploy Now → New Capsule | pass | `/new/capsule?capsuleType=frontend` |
| 6 Capsule Details | pass | Personal Team; Personal Space |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | `BrentonJScott/demo-react Team Repository`; branch main |
| 10 Build & Deploy fields | pass | `npm run build`; `build` |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |

**Mismatches:** none

## Doc changes in this run

- Replaced stale GitBook-style `docs/guides/react.md` with numbered test-platform steps aligned to the walkthrough (`BrentonJScott/demo-react Team Repository`, output `build`).
- Added `scripts/react-capsule-walkthrough.mjs` and step screenshots under `static/img/guides/create-react-frontend-capsule/`.
- Refreshed Angular walkthrough screenshots (steps 2, 11, 12).
