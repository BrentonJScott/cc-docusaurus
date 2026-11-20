# Create Angular frontend capsule walkthrough (2026-11-20)

**Platform:** https://test-platform.codecapsules.io

**Manifest goal:** Expect to see capsule building in builds tab

**Run completed:** 2026-11-20T07:31:35.310Z

**Goal reached:** yes (Deploy → Builds shows **Building**)

## Step results

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | Registration → Log in |
| 2 Welcome back | pass | Login form visible |
| 3 Log in | pass | Quick Start dashboard |
| 4 Quick Start | pass | Framework chooser visible |
| 5 Angular Deploy Now → New Capsule | pass | `capsuleType=frontend` |
| 6 Capsule Details team + space | pass | Personal Team + space |
| 7 Hosting Static | pass | Static card selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository (demo-angular-22) | pass | Filter + select audit repo |
| 10 Build & Deploy fields | pass | `dist/cc-demo-angular/browser` |
| 11 Create Capsule | pass | Wizard submitted |
| 12 Deploy Builds | pass | Building state visible |

## Mismatches / issues

- None for the final guide-faithful run at **07:31Z** (all numbered steps pass).
- **07:29Z attempt:** Unfiltered repository dropdown omitted **`demo-angular-22`** — documented in guide troubleshooting (`failure-git-repo-missing.png`).