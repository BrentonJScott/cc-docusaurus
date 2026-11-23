# Walkthrough — Create React frontend capsule

- **Run:** 2026-11-23T09:11:10Z
- **Guide:** `docs/guides/react.md`
- **Target:** https://test-platform.codecapsules.io
- **Goal reached:** no

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Account signup / fork React demo on GitHub | not testable | Used logged-in automation account with existing team repos. |

## Actions taken

1. Opened test platform; used **Log in** (Step 1).
2. Looked for **Create New Capsule** and **React** (Step 2).
3. Continued with equivalent Quick Start **Deploy Now** on **React** to compare remaining steps.
4. Stepped through Capsule Details, Hosting, Plan, Git, Build, Create, Builds checks per guide order.

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | pass | Log in on test platform | Login form at `/auth/login`; landed on Quick Start | — |
| 2 | fail | **Create New Capsule** then **React** | No **Create New Capsule** control on Quick Start after login | `failure-step-2.jpg` |
| 3 | fail | **Frontend** capsule on **Capsule Details** | **Deploy Now** on React opened `capsuleType=backend` wizard (same as Angular) | `failure-step-3.jpg` |
| 4 | blocked | **Static** (**No server**) | Hosting step not reached via guide path | `failure-step-4.jpg` |
| 5 | fail | **Starter** plan | Plan step shows **Free** only; **Starter** not listed | `failure-step-5.jpg` |
| 6 | fail | `demo-react`, branch `master` | `demo-react` repo present; branch list uses `main`, not `master` | `failure-step-6.jpg` |
| 7 | blocked | Build fields | Blocked by repo/branch failures when following guide exactly | — |
| 8 | blocked | **Create Capsule** and Builds goal | Blocked by earlier failures | — |

## Mismatches / issues

- Entry point is **Quick Start** with per-framework **Deploy Now** cards, not **Create New Capsule**.
- **Starter** plan name does not appear on the test platform plan step ( **Free** offered).
- Branch `master` is not listed when `demo-react` is selected; `main` is available.

## Suggested fixes

- Replace Step 2 with Quick Start **Deploy Now** on the **React** card (mirror `angular.md`).
- Change **Starter** to **Free** (or whatever plan the test platform shows).
- Use `main` instead of `master` in Step 6.