# Walkthrough — Create Angular frontend capsule

- **Run:** 2026-11-23T09:11:10Z
- **Guide:** `docs/guides/angular.md`
- **Target:** https://test-platform.codecapsules.io
- **Goal reached:** no

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Sign up / fork `demo-angular` on GitHub | not testable | Used existing test account and connected repos; fork prerequisite assumed satisfied for other repos on the team. |

## Actions taken

1. Opened test platform and logged in with the automation account (guide Step 1).
2. On **Quick Start**, clicked **Deploy Now** on the **Angular** card (Step 2).
3. On **Capsule Details**, chose **Frontend**, Team, Space, **Next** (Step 3) — attempted on wizard opened from Step 2.
4. On **Hosting**, selected **Static**, **Next**; on **Plan**, selected a plan, **Next** (Step 4).
5. Selected fork of `demo-angular`, branch `master`, **Next** (Step 5).
6. Entered `npm run build` and `dist/ng4-complete-guide`, **Create Capsule** (Step 6).
7. Opened **Deploy → Builds** for building status (Step 7).

To complete steps 3–7 when the wizard was wrong or stuck, continued using the wizard at `/new/capsule?capsuleType=frontend` after recording the failed action (per `WALKTHROUGH.md`).

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | pass | Land on **Quick Start** after login | Logged in to Quick Start | — |
| 2 | fail | **Deploy Now** opens Angular frontend flow | Two of three attempts stayed on Quick Start; when navigation worked, URL was `…/new/capsule?capsuleType=backend` (Backend wizard, not Frontend) | `failure-step-2.jpg` (intermittent no-navigation run) |
| 3 | fail | **Frontend** under **Choose a Capsule** | After backend wizard URL, **Capsule Details** showed **Backend** only; guide’s **Frontend** choice not available without starting frontend wizard separately | `failure-step-3.jpg` |
| 4 | blocked | **Static** on Hosting | Not reached on failed backend wizard | `failure-step-4.jpg` |
| 5 | fail | Fork `demo-angular`, branch `master` | Repo list has `demo-angular-22` but no `codecapsules-io/demo-angular` fork name `demo-angular`; branches listed `main` (no `master`) | `failure-step-5.jpg` |
| 6 | pass | Build command and output as written | Values accepted when continuing on frontend wizard | — |
| 7 | pass | **Building** / **Queued** / **In progress** on Builds | Observed in-progress build after capsule creation (continuation path) | — |

## Mismatches / issues

- Quick Start **Deploy Now** for Angular does not consistently match the guide: sometimes no navigation; when it navigates, wizard defaults to **Backend** (`capsuleType=backend`) while the guide requires **Frontend**.
- Repository dropdown has no repo ending in `/demo-angular` as named; closest team repo is `demo-angular-22`.
- Branch dropdown offers `main`, not `master`.

## Suggested fixes

- Update Step 2 to note Backend pre-selection and Step 3 to change **Choose a Capsule** from **Backend** to **Frontend**, or link to `/new/capsule?capsuleType=frontend`.
- Align demo repo name with repos users actually fork (or document `demo-angular-22`).
- Change branch example from `master` to `main` for current GitHub defaults.