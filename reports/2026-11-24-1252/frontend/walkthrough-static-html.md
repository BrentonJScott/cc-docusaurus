# Walkthrough report: static-html

- **Run timestamp:** 2026-11-24T12:52:00Z
- **Target:** https://test-platform.codecapsules.io
- **Guide file:** `docs.bak/frontend/static-html.md`
- **Goal reached:** no

## Actions taken
1. (not testable) Prerequisites: Code Capsules account, fork codecapsules-io/demo-html, a Space, GitHub connected
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
7. (fail) On Configure, select the Git Repository codecapsules-io/demo-html and the branch main. Click Next.
   - Actual: Field is labelled "Git Repository" (placeholder "Search/Select a Repository", under heading "Connect a Git Repository"). Repository "codecapsules-io/demo-html" is NOT in the dropdown; the list shows BrentonJScott, LeeKnowles02 owners (28 repos). Best effort: selected "BrentonJScott/demo-html" instead (selected on screen=true); branch options ["main"], "main" selected=true.
8. (fail) On Deploy, set Build Command to empty and Path to static content to `/`. Click Build & Deploy.
   - Actual: Deploy step heading "Build & Deploy"; fields: Build Command="", Path to static content="/". Required "Capsule Name" field (not in guide) filled with "wt-static-html-n7re". Submit button labelled ["Create Capsule","Back"]; no button named "Build & Deploy" (count=0).
9. (pass) On the capsule Deploy tab, open Builds. The first build is in progress or queued.
   - Actual: After Create Capsule the app opened the capsule (Details tab); clicked Deploy tab at /dash/spaces/personal-space-ivbk/capsules/64201c61-6718-934e-8864-737fdbaee1f8/deploy. Builds section (right panel, no separate click needed; also a separate top-level Builds tab exists) first listed build status "Building":  | Building | Today, 13:08:28 | Building for 9secs | demo-html | main | View Logs

## Guide alignment
| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | not testable | Prerequisites: Code Capsules account, fork codecapsules-io/demo-html, a Space, GitHub connected | Setup outside the test run. Used existing logged-in user (b***@gmail.com), existing Personal Space (personal-space-ivbk) and the GitHub connection already on the account. | — |
| 2 | pass | Open the Space for this app | Opened Personal Space from Spaces list: /dash/spaces/personal-space-ivbk/capsules | — |
| 3 | pass | Click the yellow + and select New Capsule | "+" button at bottom-left (x=8, y=836, bg rgb(239, 214, 83)); menu offered New Team / New Space / New Capsule; wizard opened at /new/capsule | — |
| 4 | fail | On Capsule Details, choose Frontend Capsule, your Team, and your Space. Click Next. | No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Hosting / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Frontend" (no "Capsule" suffix; options: Ba | [failure-step-4.jpg](reports/2026-11-24-1252/frontend/screenshots-static-html/failure-step-4.jpg) |
| 5 | pass | On Hosting, select Static. Click Next. | Hosting step shown with Static and Container cards; radios checked after click: []; advanced to Plan step (Static summary shown: true) | — |
| 6 | pass | On Plan, select Free. Click Next. | Free plan selected (summary Total $0.00); advanced to Configure | — |
| 7 | fail | On Configure, select the Git Repository codecapsules-io/demo-html and the branch main. Click Next. | Field is labelled "Git Repository" (placeholder "Search/Select a Repository", under heading "Connect a Git Repository"). Repository "codecapsules-io/demo-html" is NOT in the dropdown; the list shows B | [failure-step-7.jpg](reports/2026-11-24-1252/frontend/screenshots-static-html/failure-step-7.jpg) |
| 8 | fail | On Deploy, set Build Command to empty and Path to static content to `/`. Click Build & Deploy. | Deploy step heading "Build & Deploy"; fields: Build Command="", Path to static content="/". Required "Capsule Name" field (not in guide) filled with "wt-static-html-n7re". Submit button labelled ["Cre | [failure-step-8.jpg](reports/2026-11-24-1252/frontend/screenshots-static-html/failure-step-8.jpg) |
| 9 | pass | On the capsule Deploy tab, open Builds. The first build is in progress or queued. | After Create Capsule the app opened the capsule (Details tab); clicked Deploy tab at /dash/spaces/personal-space-ivbk/capsules/64201c61-6718-934e-8864-737fdbaee1f8/deploy. Builds section (right panel, | — |

## Mismatches / issues
- Action 4 (fail): guide says "On Capsule Details, choose Frontend Capsule, your Team, and your Space. Click Next."; saw "No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Hosting / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Frontend" (no "Capsule" suffix; options: Backend, Frontend, Docker, AI Agent…). Team "Personal Team" and Space "Personal Space" were pre-filled (selected ok=true). Clicked Next."
- Action 7 (fail): guide says "On Configure, select the Git Repository codecapsules-io/demo-html and the branch main. Click Next."; saw "Field is labelled "Git Repository" (placeholder "Search/Select a Repository", under heading "Connect a Git Repository"). Repository "codecapsules-io/demo-html" is NOT in the dropdown; the list shows BrentonJScott, LeeKnowles02 owners (28 repos). Best effort: selected "BrentonJScott/demo-html" instead (selected on screen=true); branch options ["main"], "main" selected=true."
- Action 8 (fail): guide says "On Deploy, set Build Command to empty and Path to static content to `/`. Click Build & Deploy."; saw "Deploy step heading "Build & Deploy"; fields: Build Command="", Path to static content="/". Required "Capsule Name" field (not in guide) filled with "wt-static-html-n7re". Submit button labelled ["Create Capsule","Back"]; no button named "Build & Deploy" (count=0)."

## Tickets
### static-html-wt-0: Restore guide under docs/frontend/
- **Type:** New guide
- **Problem:** Feature is in DOCUMENTED_FEATURES.MD but `docs/frontend/static-html.md` is missing from the published docs tree (only in docs.bak).
- **Change:** Copy and publish `docs/frontend/static-html.md` with sidebar entry.
- **Done when:** Guide exists at expected path and format check runs on docs/.

### static-html-wt-1: Align capsule type step with the wizard
- **Type:** Guide fix
- **Problem:** Action 4: guide says **Capsule Details** and **Frontend Capsule**; wizard shows **Choose a Capsule** with option **Frontend** (no Capsule suffix).
- **Change:** Replace screen name and option labels with **Choose a Capsule** and **Frontend** / **Backend**.
- **Done when:** Action 4 passes without label drift.

### static-html-wt-2: Document that demo repos use the reader's fork, not codecapsules-io
- **Type:** Guide fix
- **Problem:** Actions 1, 7 name `codecapsules-io/demo-*` but the repository dropdown only lists repos from connected GitHub accounts (e.g. BrentonJScott/*).
- **Change:** In **Configure** steps, tell readers to pick their fork of the demo repo (from fork prerequisite), not `codecapsules-io/...`.
- **Done when:** Walkthrough Configure action passes using only guide-named values.

### static-html-wt-3: Add Capsule Name and use Create Capsule button
- **Type:** Missing step
- **Problem:** Deploy step: guide says click **Build & Deploy**; wizard requires **Capsule Name** and button is **Create Capsule**.
- **Change:** Add a step to enter **Capsule Name**; click **Create Capsule**.
- **Done when:** Deploy action passes using guide text only.