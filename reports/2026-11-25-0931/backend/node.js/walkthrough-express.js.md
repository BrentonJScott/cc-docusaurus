# Walkthrough report: express.js.md

- **Run:** 2026-11-25-0931
- **Guide:** `docs/backend/node.js/express.js.md`
- **Doc type:** How-to guide (format check already passed; not re-run)
- **Target:** https://test-platform.codecapsules.io (headless Playwright)
- **Goal:** Expect to see capsule building in builds tab
- **Manifest goals reached:** no (actions 2, 4 and 5 failed on labels; the final goal check passed)

## Setup (not testable)

- Account, Space, fork, GitHub connection: used the existing signed-in test account (credentials from environment, not recorded), Personal Team, Space **Document Drift**, and the account's existing fork `BrentonJScott/demo-express-js`. Sign-up, Space creation, forking and GitHub connection were not tested.
- The repository list also shows `LeeKnowles02/demo-express-js`. I used `BrentonJScott/demo-express-js` because the logged-in user is Brenton.
- This run created a Backend Capsule named `demo-express-js` (`demo-express-js-ryry`) in **Document Drift**. It is billed at the **Basic** plan price and was left running.

## Actions taken

1. In the Space, clicked the **+** button at the bottom left. The menu showed **New Team**, **New Space** and **New Capsule**. Selected **New Capsule**.
2. On **Capsule Details**, opened **Choose a Capsule** and selected **Backend**. **Personal Team** and **Document Drift** were already selected. Clicked **Next**.
3. On **Plan**, selected **Basic**. Clicked **Next**.
4. On the repository screen (titled **Connect a Git Repository**, breadcrumb **Configure**), selected `BrentonJScott/demo-express-js` as **Git Repository** and `master` as **Branch**. Clicked **Next**.
5. On the **Build & Deploy** screen, left **Run Command** blank.
6. Clicked **Create Capsule**. Opened the **Builds** tab. A build was **Building** (from branch `master` of `demo-express-js`).

## Guide alignment

| # | Guide step | Guide expects | What happened | Status | Screenshot |
|---|---|---|---|---|---|
| 1 | 1. Start a Backend Capsule | In your Space, click **+** and select **New Capsule** | **+** menu lists **New Capsule**; wizard opened | pass | — |
| 2 | 2. Choose the capsule type, Team, and Space | On **Capsule Details**, choose **Backend Capsule**, your Team, your Space. Click **Next**. | Option is **Backend** ("Node, Java, Go or Python deployments"); no option named **Backend Capsule**. Team and Space were preselected. | fail | `step-2.jpg` |
| 3 | 3. Choose the plan | On **Plan**, choose **Basic**. Click **Next**. | **Basic** ($8.75 / month) selected | pass | — |
| 4 | 4. Connect the repository | On **Source Code**, select your `demo-express-js` fork as **Repository**, `master` as **Branch**. Click **Next**. | Screen is titled **Connect a Git Repository** (breadcrumb **Configure**), not **Source Code**. Field is **Git Repository**, not **Repository**. `BrentonJScott/demo-express-js` and `master` selected and shown. | fail | `step-4.jpg` |
| 5 | 5. Set the run command | On **Build and Deploy Settings**, leave **Run Command** blank | Screen is titled **Build & Deploy**, not **Build and Deploy Settings**. **Run Command** left blank. | fail | `step-5.jpg` |
| 6 | 6. Create the capsule | Click **Create Capsule**. Open **Builds** and see the first build in progress. | **Create Capsule** exists. **Builds** tab showed a build "Building … master". | pass | — |

Final goal check: pass. The new capsule had a build in progress on the **Builds** tab.

## Mismatches / issues

1. Action 2. Guide: "choose **Backend Capsule**". Site: **Backend**. See `step-2.jpg`.
2. Action 4. Guide: "On **Source Code**, select … as the **Repository**". Site: screen **Connect a Git Repository** (breadcrumb **Configure**), field **Git Repository**. See `step-4.jpg`.
3. Action 5. Guide: "On **Build and Deploy Settings**". Site: **Build & Deploy**. See `step-5.jpg`.

## Tickets

### express.js-wt-1

- **ID:** express.js-wt-1
- **Type:** Guide fix
- **Title:** Replace `Backend Capsule` with `Backend` in step 2.
- **Problem:** Step 2 says "choose **Backend Capsule**". The **Choose a Capsule** dropdown lists **Backend** (action 2, `step-2.jpg`).
- **Change:** "On **Capsule Details**, choose **Backend**, your Team, and your Space. Click **Next**."
- **Done when:** Re-running action 2 finds the named option and passes.

### express.js-wt-2

- **ID:** express.js-wt-2
- **Type:** Guide fix
- **Title:** Replace `Source Code` and `Repository` with the on-screen labels in step 4.
- **Problem:** Step 4 says "On **Source Code**, select your `demo-express-js` fork as the **Repository**". The screen is titled **Connect a Git Repository** (breadcrumb **Configure**) and the field is **Git Repository** (action 4, `step-4.jpg`).
- **Change:** "On **Configure**, select your `demo-express-js` fork as the **Git Repository** and `master` as the **Branch**. Click **Next**."
- **Done when:** Re-running action 4 finds every named label and passes.

### express.js-wt-3

- **ID:** express.js-wt-3
- **Type:** Guide fix
- **Title:** Replace `Build and Deploy Settings` with `Build & Deploy` in step 5.
- **Problem:** Step 5 says "On **Build and Deploy Settings**, leave **Run Command** blank." The screen heading is **Build & Deploy** (action 5, `step-5.jpg`).
- **Change:** "On **Build & Deploy**, leave **Run Command** blank."
- **Done when:** Re-running action 5 finds the named screen and passes.
