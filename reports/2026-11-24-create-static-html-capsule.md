# Exploratory — Create Static HTML capsule

- **Run:** 2026-11-24T07:09:07Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

No Static HTML how-to on `main`. Explored Quick Start **Static HTML** card.

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Test account and prerequisites | not testable | Automation test account. |

## Actions taken

1. Logged in; confirmed **Static HTML** card on Quick Start.
2. Clicked **Deploy Now** on **Static HTML**; reached `/new/capsule?capsuleType=frontend`.
3. Did not complete deploy (no documented repo, build settings, or output directory).

## Guide alignment

| # | Status | Expected (inferred) | What happened | Screenshot |
|---|--------|---------------------|---------------|------------|
| 1 | pass | Quick Start lists **Static HTML** | Card visible | `explore-static-html/step-1-quick-start.jpg` |
| 2 | pass | **Deploy Now** opens frontend wizard | `capsuleType=frontend` | `explore-static-html/step-2-wizard.jpg` |
| 3 | blocked | **Builds** shows build in progress | No guide values | — |

## Mismatches / issues

- Manifest lists **Create Static HTML capsule**; no matching how-to in the docs repo.

## Suggested fixes

Add `how_to_format.md` guide: Quick Start **Static HTML** → **Deploy Now**, **Frontend**, Team, Space, **Static** hosting, plan, named demo repo, build/output paths, and **Deploy → Builds** goal.