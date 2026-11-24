# Walkthrough report: nextjs

- **Run timestamp:** 2026-11-24T12:52:00Z
- **Target:** https://test-platform.codecapsules.io
- **Guide file:** `docs.bak/frontend/next.js.md`
- **Goal reached:** no

## Actions taken
1. (not testable) Prerequisites: Code Capsules account, fork codecapsules-io/demo-nextjs, a Space, GitHub connected
   - Actual: Setup outside the test run. Used existing logged-in user, existing Personal Space (personal-space-ivbk) and the GitHub connection already on the account.
2. (pass) Open the Space for this app
   - Actual: Opened Personal Space from Spaces list: /dash/spaces/personal-space-ivbk/capsules
3. (pass) Click the yellow + and select New Capsule
   - Actual: "+" button at bottom-left (x=8, y=836, bg rgb(239, 214, 83)); menu offered New Team / New Space / New Capsule; wizard opened at /new/capsule
4. (fail) On Capsule Details, choose Backend Capsule, your Team, and your Space. Click Next.
   - Actual: No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Backend" (no "Capsule" suffix; options: Backend, Frontend, Docker, AI Agent, WordPress, MySQL, MongoDB, MongoDB Compatible, PostgreSQL, Redis, Persistent Storage). Team "Personal Team" and Space "Personal Space" were pre-filled (true). Clicked Next.
5. (fail) On Plan, select Free. Click Next.
   - Actual: Plan step lists only: Basic ($8.75/month), Standard ($18.75/month), Premium ($31.25/month), Custom. No "Free" plan exists for Backend Capsules (Free present=false). Best effort to inspect later steps without creating anything: selected Basic and clicked Next (no capsule created).
6. (fail) On Configure, select the Git Repository codecapsules-io/demo-nextjs and the branch main. Click Next.
   - Actual: Field labelled "Git Repository" (under "Connect a Git Repository"). "codecapsules-io/demo-nextjs" NOT in dropdown (owners: BrentonJScott, LeeKnowles02). Best effort: selected "BrentonJScott/demo-nextjs" (shown on screen=true), branch options ["main"], main selected=true.
7. (fail) On Deploy, leave Run Command empty. Click Build & Deploy.
   - Actual: Deploy step reached (heading text:  | Build & Deploy | Let the capsule know how to run your application. | Run Command | Code Capsules will use this command to start your app. | $ | Capsule Name | You can change your Capsule name later if needed. | Create CapsuleBack). Input placeholders: ["Enter a capsule name",""]. Submit button is "Create Capsule", not "Build & Deploy"; a required "Capsule Name" field is present (not in guide). Run Command field present=true. Not clicked: no Free plan, so submitting would create a paid capsule.
8. (blocked) On the capsule Deploy tab, open Builds. The first build is in progress or queued.
   - Actual: Not attempted: capsule was not created because action 5 (Plan: Free) failed - Backend Capsules have no Free plan and submitting would create a paid Basic capsule ($8.75/month).

## Guide alignment
| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | not testable | Prerequisites: Code Capsules account, fork codecapsules-io/demo-nextjs, a Space, GitHub connected | Setup outside the test run. Used existing logged-in user, existing Personal Space (personal-space-ivbk) and the GitHub connection already on the account. | — |
| 2 | pass | Open the Space for this app | Opened Personal Space from Spaces list: /dash/spaces/personal-space-ivbk/capsules | — |
| 3 | pass | Click the yellow + and select New Capsule | "+" button at bottom-left (x=8, y=836, bg rgb(239, 214, 83)); menu offered New Team / New Space / New Capsule; wizard opened at /new/capsule | — |
| 4 | fail | On Capsule Details, choose Backend Capsule, your Team, and your Space. Click Next. | No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Backend" (no "Capsule" suffix; options: Backend, Fron | [failure-step-4.jpg](reports/2026-11-24-1252/frontend/screenshots-nextjs/failure-step-4.jpg) |
| 5 | fail | On Plan, select Free. Click Next. | Plan step lists only: Basic ($8.75/month), Standard ($18.75/month), Premium ($31.25/month), Custom. No "Free" plan exists for Backend Capsules (Free present=false). Best effort to inspect later steps  | [failure-step-5.jpg](reports/2026-11-24-1252/frontend/screenshots-nextjs/failure-step-5.jpg) |
| 6 | fail | On Configure, select the Git Repository codecapsules-io/demo-nextjs and the branch main. Click Next. | Field labelled "Git Repository" (under "Connect a Git Repository"). "codecapsules-io/demo-nextjs" NOT in dropdown (owners: BrentonJScott, LeeKnowles02). Best effort: selected "BrentonJScott/demo-nextj | [failure-step-6.jpg](reports/2026-11-24-1252/frontend/screenshots-nextjs/failure-step-6.jpg) |
| 7 | fail | On Deploy, leave Run Command empty. Click Build & Deploy. | Deploy step reached (heading text:  \| Build & Deploy \| Let the capsule know how to run your application. \| Run Command \| Code Capsules will use this command to start your app. \| $ \| Capsule Name | [failure-step-7.jpg](reports/2026-11-24-1252/frontend/screenshots-nextjs/failure-step-7.jpg) |
| 8 | blocked | On the capsule Deploy tab, open Builds. The first build is in progress or queued. | Not attempted: capsule was not created because action 5 (Plan: Free) failed - Backend Capsules have no Free plan and submitting would create a paid Basic capsule ($8.75/month). | — |

## Mismatches / issues
- Action 4 (fail): guide says "On Capsule Details, choose Backend Capsule, your Team, and your Space. Click Next."; saw "No "Capsule Details" heading; wizard breadcrumb reads "New Capsule / Plan / Configure / Deploy". Field is labelled "Choose a Capsule" with option "Backend" (no "Capsule" suffix; options: Backend, Frontend, Docker, AI Agent, WordPress, MySQL, MongoDB, MongoDB Compatible, PostgreSQL, Redis, Persistent Storage). Team "Personal Team" and Space "Personal Space" were pre-filled (true). Clicked Next."
- Action 5 (fail): guide says "On Plan, select Free. Click Next."; saw "Plan step lists only: Basic ($8.75/month), Standard ($18.75/month), Premium ($31.25/month), Custom. No "Free" plan exists for Backend Capsules (Free present=false). Best effort to inspect later steps without creating anything: selected Basic and clicked Next (no capsule created)."
- Action 6 (fail): guide says "On Configure, select the Git Repository codecapsules-io/demo-nextjs and the branch main. Click Next."; saw "Field labelled "Git Repository" (under "Connect a Git Repository"). "codecapsules-io/demo-nextjs" NOT in dropdown (owners: BrentonJScott, LeeKnowles02). Best effort: selected "BrentonJScott/demo-nextjs" (shown on screen=true), branch options ["main"], main selected=true."
- Action 7 (fail): guide says "On Deploy, leave Run Command empty. Click Build & Deploy."; saw "Deploy step reached (heading text:  | Build & Deploy | Let the capsule know how to run your application. | Run Command | Code Capsules will use this command to start your app. | $ | Capsule Name | You can change your Capsule name later if needed. | Create CapsuleBack). Input placeholders: ["Enter a capsule name",""]. Submit button is "Create Capsule", not "Build & Deploy"; a required "Capsule Name" field is present (not in guide). Run Command field present=true. Not clicked: no Free plan, so submitting would create a paid capsule."
- Action 8 (blocked): guide says "On the capsule Deploy tab, open Builds. The first build is in progress or queued."; saw "Not attempted: capsule was not created because action 5 (Plan: Free) failed - Backend Capsules have no Free plan and submitting would create a paid Basic capsule ($8.75/month)."

## Tickets
### nextjs-wt-0: Restore guide under docs/frontend/
- **Type:** New guide
- **Problem:** Feature is in DOCUMENTED_FEATURES.MD but `docs/frontend/next.js.md` is missing from the published docs tree (only in docs.bak).
- **Change:** Copy and publish `docs/frontend/next.js.md` with sidebar entry.
- **Done when:** Guide exists at expected path and format check runs on docs/.

### nextjs-wt-1: Align capsule type step with the wizard
- **Type:** Guide fix
- **Problem:** Action 4: guide says **Capsule Details** and **Frontend Capsule**; wizard shows **Choose a Capsule** with option **Frontend** (no Capsule suffix).
- **Change:** Replace screen name and option labels with **Choose a Capsule** and **Frontend** / **Backend**.
- **Done when:** Action 4 passes without label drift.

### nextjs-wt-2: Remove Free plan for Backend Next.js deploy
- **Type:** Guide fix
- **Problem:** Action 5: guide says select **Free** on Plan; Backend wizard offers only Basic/Standard/Premium/Custom.
- **Change:** Document a paid plan or platform Free tier if one exists; otherwise state minimum plan and cost.
- **Done when:** Plan action passes on test platform.

### nextjs-wt-3: Document that demo repos use the reader's fork, not codecapsules-io
- **Type:** Guide fix
- **Problem:** Actions 1, 6 name `codecapsules-io/demo-*` but the repository dropdown only lists repos from connected GitHub accounts (e.g. BrentonJScott/*).
- **Change:** In **Configure** steps, tell readers to pick their fork of the demo repo (from fork prerequisite), not `codecapsules-io/...`.
- **Done when:** Walkthrough Configure action passes using only guide-named values.

### nextjs-wt-4: Add Capsule Name and use Create Capsule button
- **Type:** Missing step
- **Problem:** Deploy step: guide says click **Build & Deploy**; wizard requires **Capsule Name** and button is **Create Capsule**.
- **Change:** Add a step to enter **Capsule Name**; click **Create Capsule**.
- **Done when:** Deploy action passes using guide text only.

### nextjs-wt-5: Unblock Builds check
- **Type:** Missing step
- **Problem:** Action 8 blocked by earlier failure.
- **Change:** Fix upstream steps so capsule can be created and Builds observed.
- **Done when:** Builds step reaches pass.