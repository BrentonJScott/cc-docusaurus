# Cron platform audit (2026-11-23)

**Run completed:** 2026-11-23T05:44:51.237Z
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — Create React frontend capsule
**Target:** https://test-platform.codecapsules.io

| DOCUMENTED_FEATURES | Guide |
|---|---|
| Create React frontend capsule | `docs/guides/react.md` |

**Manifest goal reached:** no (Error: Dashboard has no **Create New Capsule** control (sidebar shows Quick Start; framework cards use **Deploy Now** instead).)

## Step results

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Create New Capsule → React | fail | Dashboard has no **Create New Capsule** control (sidebar shows Quick Start; framework cards use **Deploy Now** instead). |
| 0 Run error | fail | Error: Dashboard has no **Create New Capsule** control (sidebar shows Quick Start; framework cards use **Deploy Now** instead). |

## Mismatches

- Guide step 4: click **Create New Capsule** and pick **React**; control not found on live dashboard.