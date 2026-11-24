# Exploratory — Create Vue frontend capsule

- **Run:** 2026-11-24T06:40:42Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

No Vue how-to exists under `docs/`. Explored Quick Start and the frontend **New Capsule** wizard using the Angular pattern.

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Account, GitHub, fork, Space, Git | not testable | Used the automation test account already provisioned for this run. |

## Actions taken

1. Logged in at `/auth/login` and landed on `/dash/overview/quick-start`.
2. Confirmed **Vue** on Quick Start with **Deploy Now**.
3. Clicked **Deploy Now** on **Vue**; reached `/new/capsule?capsuleType=frontend`.
4. Did not complete deploy (no doc names demo repo, branch, or build settings).

## Guide alignment

| # | Status | Expected (inferred) | What happened | Screenshot |
|---|--------|---------------------|---------------|------------|
| 1 | pass | Quick Start lists **Vue** | Card visible | `explore-vue/step-1-quick-start.jpg` |
| 2 | pass | **Deploy Now** opens frontend wizard | URL `…/new/capsule?capsuleType=frontend` | `explore-vue/step-2-wizard.jpg` |
| 3 | not testable | Fork demo Vue repo and finish wizard | No official values | — |
| 4 | blocked | **Builds** shows in-progress build | Blocked without guide | — |

## Mismatches / issues

- No Vue deployment how-to in the repository.
- Feature is listed in `cc-site/DOCUMENTED_FEATURES.MD` but there is no matching guide.

## Suggested fixes

Add `docs/guides/vue.md` per `how_to_format.md`: Quick Start **Deploy Now** on **Vue**, **Frontend** type, Team, Space, **Static** hosting, plan, named demo repo (`demo-vue` or equivalent), build command, output directory, and a final **Deploy → Builds** goal check.