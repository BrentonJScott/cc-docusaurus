# Walkthrough report: Host an Angular Application

- **Run**: 2026-11-25-0736
- **Guide**: `docs/frontend/angular.md`
- **Feature**: Host an Angular Application
- **Goal**: Expect to see capsule building in builds tab
- **Target**: https://test-platform.codecapsules.io
- **Format check**: pass
- **Manifest goals reached**: no

## Setup (not testable)

- Account sign-in (EMAIL / PASSWORD env vars), headless Playwright. Values not recorded.
- Prerequisites (account, Space, GitHub connection) were already in place. The guide's "Open the Space for this app" names no Space, so I used the existing Space `Document Drift` (`customer-api-xkfw`) in `Personal Team`.
- GitHub fork: not testable (needs GitHub). The connected GitHub account already lists `BrentonJScott/demo-angular-22`; no `demo-angular` repo of any owner exists in the dropdown.

## Actions taken

1. Opened the Space `Document Drift`, clicked the sidebar **+**, selected **New Capsule**.
2. On **Capsule Details**, chose the capsule type the guide calls **Frontend Capsule** (the option is named **Frontend**), with Team `Personal Team` and Space `Document Drift`, clicked **Next**.
3. On **Hosting**, selected **Static**, clicked **Next**.
4. On **Plan**, selected **Free**, clicked **Next**.
5. On **Configure**, tried to select Git Repository `codecapsules-io/demo-angular` and branch `main`. Searched for `demo-angular`: the only result is `BrentonJScott/demo-angular-22`. No substitute used. **Next** is rejected with "Select a Repository".
6. On **Deploy**, set **Build Command** and **Path to static content**: could not be attempted.
7. On the capsule **Deploy** tab, opened **Builds**: could not be attempted.

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|---|---|---|---|
| 1 | pass | Open the Space, click sidebar **+**, select **New Capsule** | Popover shows New Team / New Space / New Capsule; wizard opens | — |
| 2 | fail | On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space | Options are **Backend**, **Frontend**, **Docker** (plus data types). No option named "Frontend Capsule". Chose **Frontend** to continue. Team and Space were pre-filled and correct. | [step-2.jpg](step-2.jpg) |
| 3 | pass | On **Hosting**, select **Static**, **Next** | Static selected (confirmed highlighted), advanced to Plan | — |
| 4 | pass | On **Plan**, select **Free**, **Next** | Free selected (confirmed in summary), advanced to Configure | — |
| 5 | fail | Select Git Repository `codecapsules-io/demo-angular`, branch `main` | `codecapsules-io/demo-angular` not available. Search `demo-angular` returns only `BrentonJScott/demo-angular-22`. Branch cannot be chosen without a repo. | [step-5.jpg](step-5.jpg) |
| 6 | blocked | On **Deploy**, set **Build Command** `npm run build`, **Path to static content** `dist/ng4-complete-guide`, click **Build & Deploy** | Depends on action 5 (Deploy step is only reachable after a repo is selected). | — |
| 7 | blocked | On the capsule **Deploy** tab, **Builds** shows first build in progress or queued | Depends on action 6 (no capsule created). Goal not reached. | — |

## Mismatches / issues

- Action 2: guide says "choose **Frontend Capsule**"; the wizard option is labelled **Frontend** (description "Angular, React, Vue or static site deployments").
- Action 5: guide says "select the **Git Repository** `codecapsules-io/demo-angular`"; the dropdown lists repos under the connected GitHub account (e.g. `BrentonJScott/demo-angular-22`), and no `demo-angular` exists. A fork is owned by the reader's account, so `codecapsules-io/demo-angular` would never appear in the dropdown; the prerequisite also says to fork it, so the repo name the reader should select is `<your-account>/demo-angular`.
- Actions 6-7: blocked by action 5; the guide's Deploy-step labels and values were not compared against the site.
- Goal not reached: no capsule was created and no build seen.

## Tickets

### angular-wt-1
- **ID**: angular-wt-1
- **Type**: Guide fix
- **Title**: Replace `Frontend Capsule` with `Frontend` in the Capsule Details step.
- **Problem**: Guide step 2 says "On **Capsule Details**, choose **Frontend Capsule**". The **Choose a Capsule** dropdown shows **Frontend** (alongside Backend and Docker). Action 2, screenshot `step-2.jpg`.
- **Change**: Change step 2 to "On **Capsule Details**, choose **Frontend**, your Team, and your Space. Click **Next**."
- **Done when**: Re-running action 2 finds an option named exactly as the guide says and the action passes.

### angular-wt-2
- **ID**: angular-wt-2
- **Type**: Guide fix
- **Title**: Select the reader's fork of `demo-angular`, not `codecapsules-io/demo-angular`.
- **Problem**: Guide step 5 says to select `codecapsules-io/demo-angular`. The **Git Repository** dropdown lists only repos in the connected GitHub account and has no `codecapsules-io/demo-angular`. Action 5, screenshot `step-5.jpg`. Actions 6-7 blocked as a result.
- **Change**: In step 5, replace `codecapsules-io/demo-angular` with "your fork of `demo-angular` (`<your-github-username>/demo-angular`)". Keep the Prerequisites fork card, which already says to fork `codecapsules-io/demo-angular`.
- **Done when**: Re-running action 5 selects the named fork and branch `main`, and actions 6 and 7 can be attempted.

### angular-wt-3
- **ID**: angular-wt-3
- **Type**: Missing prerequisite
- **Title**: Test account needs a fork named `demo-angular` before the Angular walkthrough.
- **Problem**: The test account's GitHub connection lists `BrentonJScott/demo-angular-22` only; there is no repo named `demo-angular`, so the guide's repo cannot be selected (action 5). If the fork name is meant to be `demo-angular-22`, the guide's repo name and path (`dist/ng4-complete-guide`) need checking against that repo.
- **Change**: Fork `codecapsules-io/demo-angular` into the connected GitHub account and grant Code Capsules access to it. If `demo-angular-22` is the intended repo, instead update the guide's repo name and build path to match it.
- **Done when**: The **Git Repository** dropdown lists the fork the guide names, and the walkthrough reaches the **Builds** section.
