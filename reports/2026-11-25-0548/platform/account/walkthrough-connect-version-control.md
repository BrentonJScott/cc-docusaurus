# Walkthrough report: connect-version-control

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Target:** https://test-platform.codecapsules.io
- **Guide file:** `docs/platform/account/connect-version-control.md`
- **Format check:** pass (no format report)
- **Goal reached:** no

## Actions taken

1. (pass) In the dashboard, open **Repos**.
   - **Actual:** **Repos** link opened the repositories page.
2. (not testable) Click **Install** next to **GitHub** and complete GitHub authorization.
   - **Actual:** **Install** is still shown beside **GitHub** on this account; OAuth completion was not run in automation (external GitHub flow).
3. (blocked) On GitHub, choose **Only select repositories** and authorize.
   - **Actual:** Blocked by action 2.
4. (fail) Start **New Capsule**, open **Configure**, and confirm **Git Repository** lists repos.
   - **Actual:** Wizard opened; selecting **Frontend** and advancing through **Plan** did not reach **Configure** before the run stopped at overlay-blocked **Next** clicks. **Git Repository** never appeared.

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | pass | Open **Repos** | Repos page loaded | — |
| 2 | not testable | **Install** GitHub | **Install** visible; OAuth not completed in-run | — |
| 3 | blocked | Limit repos on GitHub | Depends on action 2 | — |
| 4 | fail | **Git Repository** lists selected repos on **Configure** | Did not reach **Configure** | [failure-step-4.jpg](screenshots-connect-version-control/failure-step-4.jpg) |

## Mismatches / issues

- Steps 2–3 require GitHub.com; the audit account still shows **Install**, so the post-connect confirmation in step 4 could not be validated this run.
- Step 4: After **New Capsule**, the wizard requires more capsule-type and plan steps than the guide states before **Configure** and **Git Repository** appear.

## Tickets

### connect-version-control-wt-1: Document full path to Configure in the capsule wizard

- **Type:** Missing step
- **Title:** Add capsule-type and plan steps before **Git Repository**.
- **Problem:** Action 4 — guide jumps from **New Capsule** to **Configure**; the UI walks through **Capsule Details**, **Plan**, and hosting choices first.
- **Change:** List each wizard screen through to **Configure**, including **Frontend** (or relevant type), Team, Space, plan, and hosting selections.
- **Done when:** A reader following only the guide reaches **Git Repository** without guessing.

### connect-version-control-wt-2: Clarify title vs GitLab

- **Type:** Guide fix
- **Title:** Title says GitLab; body only covers GitHub.
- **Problem:** Feature is "Connect GitHub or GitLab" but steps only describe GitHub on **Repos**.
- **Change:** Either add GitLab steps or narrow the title and description to GitHub only.
- **Done when:** Title matches the steps on test-platform.