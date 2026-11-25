# Walkthrough report: static-html.md

- **Run:** 2026-11-25-0931
- **Guide:** `docs/frontend/static-html.md`
- **Doc type:** How-to guide (Format check: pass)
- **Target:** https://test-platform.codecapsules.io (headless Playwright)
- **Goal:** Expect to see capsule building in builds tab
- **Manifest goals reached:** no (actions 1, 2 and 5 failed; actions 6 and 7 are blocked)

## Setup (not testable)

- Account, Space, GitHub connection: used the existing signed-in test account (credentials from environment, not recorded), the Personal Team, and the Space **Document Drift**. The GitHub fork was not made. The test account already lists `BrentonJScott/demo-html` as a Team Repository.
- No capsule was created. The guide's repository `codecapsules-io/demo-html` is not available, and the rules don't allow substituting another repo (see action 5). After action 5 failed, I opened the **Deploy** screen with `BrentonJScott/demo-html` only to read its labels. I did not click **Create Capsule** and I don't count that as a pass.

## Actions taken

1. Opened **Spaces**, then **Document Drift**, and looked for **New Capsule**. Clicked the **+** button in the Space header instead.
2. On **Capsule Details**, opened the **Choose a Capsule** dropdown and picked **Frontend**. Team **Personal Team** and Space **Document Drift** were already selected. Clicked **Next**.
3. On **Hosting**, selected **Static**. Clicked **Next**.
4. On **Plan**, selected **Free**. Clicked **Next**.
5. On **Configure**, searched the **Git Repository** dropdown for `codecapsules-io/demo-html`. The result was "No items found". The dropdown lists only `BrentonJScott/…` and `LeeKnowles02/…` repos. The branch `main` could not be chosen for this repo.
6. Not attempted (blocked by action 5).
7. Not attempted (blocked by actions 5 and 6).

## Guide alignment

| # | Guide step | Guide expects | What happened | Status | Screenshot |
|---|---|---|---|---|---|
| 1 | 1. Open the capsule wizard | Open the Space and select **New Capsule** | No **New Capsule** button. The Space page has a **+** icon button; it opens the wizard titled "New Capsule". | fail | `step-1.jpg` |
| 2 | 2. Choose capsule details | **Capsule Details**: choose **Frontend Capsule**, your Team and Space | Option is named **Frontend** ("Angular, React, Vue or static site deployments"). There is no option called **Frontend Capsule**. Team and Space were preselected. | fail | `step-2.jpg` |
| 3 | 3. Choose static hosting | **Hosting**: select **Static** | **Hosting** shows **Static** and **Container**. **Static** selected. | pass | — |
| 4 | 4. Choose a plan | **Plan**: select **Free** | **Free** ("30MB per build · 50GB of traffic a month", $0) selected. | pass | — |
| 5 | 5. Connect the repository | **Configure**: select repo `codecapsules-io/demo-html`, branch `main` | Repo not in the list ("No items found"). Only `BrentonJScott/demo-html` (Team Repository) matches the name. Not substituted. | fail | `step-5.jpg` |
| 6 | 6. Set build settings | **Deploy**: leave **Build Command** empty, set **Path to static content** to `/`, click **Build & Deploy** | Blocked by action 5. Label check only: **Build Command** and **Path to static content** exist. **Path to static content** is empty (placeholder "example... dist"). The button is **Create Capsule**. **Build & Deploy** is the screen heading. | blocked (depends on action 5) | — |
| 7 | 7. Check the build | On the capsule **Deploy** tab, open **Builds**. The first build is in progress or queued. | Blocked by actions 5 and 6, since no capsule was created. On an existing static capsule (`demo-html`), **Builds** is its own tab next to **Deploy**, not inside it. | blocked (depends on actions 5, 6) | `step-7.jpg` |

Final goal check: not reached. No capsule was created, so nothing was building in the **Builds** tab.

## Mismatches / issues

1. Action 1. Guide: "select **New Capsule**". Site: a **+** icon button (the page the button opens is titled "New Capsule"). See `step-1.jpg`.
2. Action 2. Guide: "choose **Frontend Capsule**". Site: option **Frontend**. See `step-2.jpg`.
3. Action 5. Guide: select `codecapsules-io/demo-html`. Site: repo not listed; after forking, the repo belongs to the reader's own GitHub account (here `BrentonJScott/demo-html`). The same wrong repo name is in the Prerequisites card ("Fork codecapsules-io/demo-html") and the first troubleshooting entry. See `step-5.jpg`.
4. Action 6 (label check only). Guide: "click **Build & Deploy**". Site: the button is **Create Capsule**. **Path to static content** starts empty, so the reader must type `/`.
5. Action 7 (observed on the existing `demo-html` capsule). Guide: "On the capsule **Deploy** tab, open **Builds**." Site: **Builds** is a separate tab in the same row as **Deploy**. See `step-7.jpg`.

## Tickets

### static-html-wt-1

- **ID:** static-html-wt-1
- **Type:** Guide fix
- **Title:** Replace `New Capsule` with the **+** button in step 1.
- **Problem:** Step 1 says "Open the Space for this app and select **New Capsule**." The Space page has a **+** icon button and no **New Capsule** label (action 1, `step-1.jpg`).
- **Change:** "Open the Space for this app and click the **+** button at the top right of the Capsules list."
- **Done when:** Re-running action 1 from the guide's wording opens the "New Capsule" wizard and passes.

### static-html-wt-2

- **ID:** static-html-wt-2
- **Type:** Guide fix
- **Title:** Replace `Frontend Capsule` with `Frontend` in step 2.
- **Problem:** Step 2 says "choose **Frontend Capsule**". The **Choose a Capsule** dropdown lists **Frontend** (action 2, `step-2.jpg`).
- **Change:** "On **Capsule Details**, choose **Frontend**, your Team, and your Space."
- **Done when:** Re-running action 2 finds the named option and passes.

### static-html-wt-3

- **ID:** static-html-wt-3
- **Type:** Guide fix
- **Title:** Use the reader's fork instead of `codecapsules-io/demo-html`.
- **Problem:** The guide names `codecapsules-io/demo-html` in the Prerequisites card, step 5 and the first troubleshooting entry. The **Git Repository** dropdown shows "No items found" for it. Only repos owned by the connected GitHub account are listed, such as `BrentonJScott/demo-html` (action 5, `step-5.jpg`). Actions 6 and 7 were blocked because of this.
- **Change:** Name the fork as `<your GitHub username>/demo-html` in step 5 and the troubleshooting entry. Keep `codecapsules-io/demo-html` only where the reader is told what to fork. Add the test account's fork name to the run notes if the walkthrough needs a fixed value.
- **Done when:** Re-running action 5 selects the named repo and branch `main` on screen, and actions 6 and 7 can be run.

### static-html-wt-4

- **ID:** static-html-wt-4
- **Type:** Guide fix
- **Title:** Fix the button name and the path value wording in step 6.
- **Problem:** Step 6 says "set **Path to static content** to `/` … Click **Build & Deploy**." On the site, **Build & Deploy** is the screen heading. The button is **Create Capsule**. **Path to static content** is empty until the reader types `/` (action 6, label check only; not run end to end).
- **Change:** "On **Deploy**, leave **Build Command** empty and enter `/` in **Path to static content**. Click **Create Capsule**."
- **Done when:** Re-running action 6 after action 5 passes uses only the guide's wording and reaches the capsule page.

### static-html-wt-5

- **ID:** static-html-wt-5
- **Type:** Guide fix
- **Title:** Say **Builds** is its own tab in step 7.
- **Problem:** Step 7 says "On the capsule **Deploy** tab, open **Builds**", and the frontmatter/intro say "the **Deploy** tab **Builds** section". On a static capsule, **Builds** is a tab beside **Deploy** (action 7, `step-7.jpg`; seen on the existing `demo-html` capsule, not on a new one).
- **Change:** "On the capsule page, open the **Builds** tab. The first build is in progress or queued." Update the `description` and the intro line to match.
- **Done when:** Re-running action 7 after a capsule is created finds the **Builds** tab from the guide's wording and sees a build in progress or queued.
