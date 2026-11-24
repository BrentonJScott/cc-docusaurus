# Walkthrough report: angular

- **Run timestamp:** 2026-11-24T12:52:00Z
- **Target:** https://test-platform.codecapsules.io
- **Guide file:** `docs/frontend/angular.md`
- **Goal reached:** no

## Actions taken
1. (not testable) Prerequisites: Code Capsules account, fork codecapsules-io/demo-angular, a Space, GitHub connected
   - Actual: Setup outside the test run. Used existing logged-in user (b***@gmail.com), existing Personal Space (personal-space-ivbk) and the GitHub connection already on the account.
2. (pass) Open the Space for this app
   - Actual: Opened Personal Space from Spaces list: /dash/spaces/personal-space-ivbk/capsules
3. (pass) Click the yellow + and select New Capsule
   - Actual: "+" button at bottom-left (x=8, y=836, bg rgb(239, 214, 83)); menu offered New Team / New Space / New Capsule; wizard opened at /new/capsule
4. (fail) On Capsule Details, choose Frontend Capsule, your Team, and your Space. Click Next.
   - Actual: No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Hosting / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Frontend" (no "Capsule" suffix; options: Backend, Frontend, Docker, AI Agent…). Team "Personal Team" and Space "Personal Space" were pre-filled (selected ok=true). Clicked Next.
5. (pass) On Hosting, select Static. Click Next.
   - Actual: Hosting step shown with Static and Container cards; radios checked after click: []; advanced to Plan step (Static summary shown: true)
6. (pass) On Plan, select Free. Click Next.
   - Actual: Free plan selected (summary Total $0.00); advanced to Configure
7. (fail) On Configure, select the Git Repository codecapsules-io/demo-angular and the branch main. Click Next.
   - Actual: Field is labelled "Git Repository" (placeholder "Search/Select a Repository", under heading "Connect a Git Repository"). Repository "codecapsules-io/demo-angular" is NOT in the dropdown; the list shows BrentonJScott, LeeKnowles02 owners (28 repos). Best effort: selected "BrentonJScott/demo-angular-22" instead (selected on screen=true); branch options ["main","cursor/app-features-documentation-83e8","docs/documented-features","docs/sync-documented-features-2026-11-19","fix/recipe-search-new-scale-2026-11-19","fix/search-and-doc-features-2026-11-19"], "main" selected=true.
8. (fail) On Deploy, set Build Command to `npm run build` and Path to static content to `dist/ng4-complete-guide`. Click Build & Deploy.
   - Actual: Deploy step heading "Build & Deploy"; fields: Build Command="npm run build", Path to static content="dist/ng4-complete-guide". Required "Capsule Name" field (not in guide) filled with "wt-angular-rel8". Submit button labelled ["Create Capsule","Back"]; no button named "Build & Deploy" (count=0).
9. (fail) On the capsule Deploy tab, open Builds. The first build is in progress or queued.
   - Actual: After Create Capsule the app opened the capsule (Details tab); clicked Deploy tab at /dash/spaces/personal-space-ivbk/capsules/7409c47f-7938-3d0c-e631-a4bf6bbb0adc/deploy. Builds section (right panel, no separate click needed; also a separate top-level Builds tab exists) first listed build status "Failed":  | Failed | Today, 13:11:43 | Build failed after 8secs | demo-angular-22 | main | View Logs

## Guide alignment
| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | not testable | Prerequisites: Code Capsules account, fork codecapsules-io/demo-angular, a Space, GitHub connected | Setup outside the test run. Used existing logged-in user (b***@gmail.com), existing Personal Space (personal-space-ivbk) and the GitHub connection already on the account. | — |
| 2 | pass | Open the Space for this app | Opened Personal Space from Spaces list: /dash/spaces/personal-space-ivbk/capsules | — |
| 3 | pass | Click the yellow + and select New Capsule | "+" button at bottom-left (x=8, y=836, bg rgb(239, 214, 83)); menu offered New Team / New Space / New Capsule; wizard opened at /new/capsule | — |
| 4 | fail | On Capsule Details, choose Frontend Capsule, your Team, and your Space. Click Next. | No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Hosting / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Frontend" (no "Capsule" suffix; options: Ba | [failure-step-4.jpg](reports/2026-11-24-1252/frontend/screenshots-angular/failure-step-4.jpg) |
| 5 | pass | On Hosting, select Static. Click Next. | Hosting step shown with Static and Container cards; radios checked after click: []; advanced to Plan step (Static summary shown: true) | — |
| 6 | pass | On Plan, select Free. Click Next. | Free plan selected (summary Total $0.00); advanced to Configure | — |
| 7 | fail | On Configure, select the Git Repository codecapsules-io/demo-angular and the branch main. Click Next. | Field is labelled "Git Repository" (placeholder "Search/Select a Repository", under heading "Connect a Git Repository"). Repository "codecapsules-io/demo-angular" is NOT in the dropdown; the list show | [failure-step-7.jpg](reports/2026-11-24-1252/frontend/screenshots-angular/failure-step-7.jpg) |
| 8 | fail | On Deploy, set Build Command to `npm run build` and Path to static content to `dist/ng4-complete-guide`. Click Build & D | Deploy step heading "Build & Deploy"; fields: Build Command="npm run build", Path to static content="dist/ng4-complete-guide". Required "Capsule Name" field (not in guide) filled with "wt-angular-rel8 | [failure-step-8.jpg](reports/2026-11-24-1252/frontend/screenshots-angular/failure-step-8.jpg) |
| 9 | fail | On the capsule Deploy tab, open Builds. The first build is in progress or queued. | After Create Capsule the app opened the capsule (Details tab); clicked Deploy tab at /dash/spaces/personal-space-ivbk/capsules/7409c47f-7938-3d0c-e631-a4bf6bbb0adc/deploy. Builds section (right panel, | [failure-step-9.jpg](reports/2026-11-24-1252/frontend/screenshots-angular/failure-step-9.jpg) |

## Mismatches / issues
- Action 4 (fail): guide says "On Capsule Details, choose Frontend Capsule, your Team, and your Space. Click Next."; saw "No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Hosting / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Frontend" (no "Capsule" suffix; options: Backend, Frontend, Docker, AI Agent…). Team "Personal Team" and Space "Personal Space" were pre-filled (selected ok=true). Clicked Next."
- Action 7 (fail): guide says "On Configure, select the Git Repository codecapsules-io/demo-angular and the branch main. Click Next."; saw "Field is labelled "Git Repository" (placeholder "Search/Select a Repository", under heading "Connect a Git Repository"). Repository "codecapsules-io/demo-angular" is NOT in the dropdown; the list shows BrentonJScott, LeeKnowles02 owners (28 repos). Best effort: selected "BrentonJScott/demo-angular-22" instead (selected on screen=true); branch options ["main","cursor/app-features-documentation-83e8","docs/documented-features","docs/sync-documented-features-2026-11-19","fix/recipe-search-new-scale-2026-11-19","fix/search-and-doc-features-2026-11-19"], "main" selected=true."
- Action 8 (fail): guide says "On Deploy, set Build Command to `npm run build` and Path to static content to `dist/ng4-complete-guide`. Click Build & Deploy."; saw "Deploy step heading "Build & Deploy"; fields: Build Command="npm run build", Path to static content="dist/ng4-complete-guide". Required "Capsule Name" field (not in guide) filled with "wt-angular-rel8". Submit button labelled ["Create Capsule","Back"]; no button named "Build & Deploy" (count=0)."
- Action 9 (fail): guide says "On the capsule Deploy tab, open Builds. The first build is in progress or queued."; saw "After Create Capsule the app opened the capsule (Details tab); clicked Deploy tab at /dash/spaces/personal-space-ivbk/capsules/7409c47f-7938-3d0c-e631-a4bf6bbb0adc/deploy. Builds section (right panel, no separate click needed; also a separate top-level Builds tab exists) first listed build status "Failed":  | Failed | Today, 13:11:43 | Build failed after 8secs | demo-angular-22 | main | View Logs"

## Tickets
### angular-wt-1: Align capsule type step with the wizard
- **Type:** Guide fix
- **Problem:** Action 4: guide says **Capsule Details** and **Frontend Capsule**; wizard shows **Choose a Capsule** with option **Frontend** (no Capsule suffix).
- **Change:** Replace screen name and option labels with **Choose a Capsule** and **Frontend** / **Backend**.
- **Done when:** Action 4 passes without label drift.

### angular-wt-2: Document that demo repos use the reader's fork, not codecapsules-io
- **Type:** Guide fix
- **Problem:** Actions 1, 7 name `codecapsules-io/demo-*` but the repository dropdown only lists repos from connected GitHub accounts (e.g. BrentonJScott/*).
- **Change:** In **Configure** steps, tell readers to pick their fork of the demo repo (from fork prerequisite), not `codecapsules-io/...`.
- **Done when:** Walkthrough Configure action passes using only guide-named values.

### angular-wt-3: Add Capsule Name and use Create Capsule button
- **Type:** Missing step
- **Problem:** Deploy step: guide says click **Build & Deploy**; wizard requires **Capsule Name** and button is **Create Capsule**.
- **Change:** Add a step to enter **Capsule Name**; click **Create Capsule**.
- **Done when:** Deploy action passes using guide text only.

### angular-wt-4: Investigate build failure on test platform
- **Type:** Site issue
- **Problem:** Action 9: build showed **Failed** after 8s (substitute repo BrentonJScott/demo-angular-22 because guide repo missing).
- **Change:** Verify demo-angular build on platform or document required repo contents.
- **Done when:** First build is in progress, queued, or succeeds per goal.