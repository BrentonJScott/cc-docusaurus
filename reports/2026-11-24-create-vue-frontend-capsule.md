# Exploratory — Create Vue frontend capsule

- **Run:** 2026-11-24T06:13:03Z
- **Guide on main:** none (no Vue how-to under `docs/`)
- **Target:** https://test-platform.codecapsules.io
- **Goal reached:** no

## Guide choice

No matching how-to on `main`. Explored the live platform using the Angular guide pattern (Quick Start **Vue** card and `new/capsule?capsuleType=frontend`).

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Account, GitHub, fork, Space, Git | not testable | Used the automation account already on the test platform. |

## Actions taken

1. Logged in at `/auth/login` and landed on `/dash/overview/quick-start`.
2. Confirmed a **Vue** Quick Start card with **Deploy Now**.
3. Opened `/new/capsule?capsuleType=frontend` (wizard reachable when **Deploy Now** did not change the URL in an earlier attempt).
4. Did not complete deploy (no guide with repo, branch, and build values).

## Guide alignment

| # | Status | Expected (inferred from platform) | What happened | Screenshot |
|---|--------|-----------------------------------|---------------|------------|
| 1 | pass | Logged-in Quick Start | **Vue** card visible | `explore-vue/step-1-wizard.jpg` |
| 2 | not testable | Fork demo Vue repo | No doc names repo or build settings | — |
| 3 | blocked | Complete wizard to **Builds** | Blocked without official steps and values | — |

## Mismatches / issues

- No Vue deployment how-to in the repo.
- Quick Start **Deploy Now** on **Vue** sometimes leaves the overview URL unchanged (intermittent in automation); direct `?capsuleType=frontend` opens **New Capsule** reliably.

## Suggested fixes

Add `docs/guides/vue.md` (or move from `docs/b/` when created) following `how_to_format.md`: Quick Start **Deploy Now** on **Vue**, **Frontend** type, Team, Space, Static hosting, plan, forked demo repo, build command, output directory, **Builds** goal check.