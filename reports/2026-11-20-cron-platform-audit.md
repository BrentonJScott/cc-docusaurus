# Cron platform audit (2026-11-20)

**Run completed:** 2026-11-20T07:31:35.310Z  
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 1 feature  
**Target:** https://test-platform.codecapsules.io

| DOCUMENTED_FEATURES | Guide file | Action |
|---|---|---|
| Create Angular frontend capsule | `docs/guides/create-angular-frontend-capsule.md` | Update guide + runner + screenshots |

**Removed / added guides:** None (manifest and `docs/guides/` both list only Angular).

**Manifest goal reached:** yes (Deploy → Builds shows **Building** with **`demo-angular-22`**).

## Summary

| Guide | Functional | Doc fidelity |
|---|---|---|
| `create-angular-frontend-capsule.md` | pass | drift → fixed in this PR |

## Mismatches resolved this run

- **Step 9:** Repository dropdown lists many team repos; filter with **`demo-angular-22`** to surface **`BrentonJScott/demo-angular-22 Team Repository`** (unfiltered first page did not include it — see `failure-git-repo-missing.png` from the failed attempt at 07:29Z).
- **Step 9:** Branch **`main`** must be chosen under **Search/Select a Branch** after the repository is selected.
- **Executor shortcut (prior runner):** Selecting the first repository in the list is not guide-faithful; guide now names **`demo-angular-22`** explicitly.

## Step results

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 Angular Deploy Now → New Capsule | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 Capsule Details team + space | pass | Team: Personal Team; spaces loaded |
| 7 Hosting Static | pass | Selected Static |
| 8 Plan Free | pass | Selected Free |
| 9 Connect a Git Repository (demo-angular-22) | pass | BrentonJScott/demo-angular-22 Team Repository |
| 10 Build & Deploy fields | pass | npm run build; dist/cc-demo-angular/browser |
| 11 Create Capsule | pass | Submit wizard |
| 12 Deploy Builds | pass | Building state visible |

## Step screenshots (this run)

| Step | File |
|---|---|
| 1 | `static/img/guides/shared/step-0-open-site.png` |
| 2 | `static/img/guides/shared/step-1-login-page.png` |
| 4 | `static/img/guides/shared/step-2-quick-start.png` |
| 5 | `static/img/guides/create-angular-frontend-capsule/step-5-new-capsule-wizard.png` |
| 6 | `static/img/guides/create-angular-frontend-capsule/step-6-capsule-details-filled.png` |
| 7 | `static/img/guides/create-angular-frontend-capsule/step-6-hosting-static.png` |
| 8 | `static/img/guides/create-angular-frontend-capsule/step-7-plan-free.png` |
| 9 | `static/img/guides/create-angular-frontend-capsule/step-8-git-repository.png` |
| 10 | `static/img/guides/create-angular-frontend-capsule/step-10-build-deploy.png` |
| 12 | `static/img/guides/create-angular-frontend-capsule/step-12-deploy-builds.png` |

See also `reports/2026-11-20-create-angular-frontend-capsule.md`.