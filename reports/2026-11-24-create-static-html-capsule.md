# Exploratory — Create Static HTML capsule

- **Run:** 2026-11-24T06:40:42Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

No Static HTML how-to on `main`. Used Quick Start **Static HTML** card.

## Actions taken

1. Logged in on Quick Start.
2. Confirmed **Static HTML** card.
3. Clicked **Deploy Now** on **Static HTML** → `/new/capsule?capsuleType=frontend`.

## Guide alignment

| # | Status | Expected | What happened | Screenshot |
|---|--------|----------|---------------|------------|
| 1 | pass | **Static HTML** on Quick Start | Card present | `explore-vue/step-1-quick-start.jpg` (shared Quick Start capture) |
| 2 | pass | Opens frontend capsule wizard | Wizard URL as above | `explore-static-html/step-2-wizard.jpg` |
| 3 | not testable | Repo, branch, output dir for static site | No guide values | — |
| 4 | blocked | **Builds** in progress | Cannot complete without guide | — |

## Mismatches / issues

- Listed feature with no matching documentation.
- **Deploy Now** uses the generic frontend wizard (`capsuleType=frontend`), not a Static-HTML-specific route.

## Suggested fixes

Add `docs/guides/static-html.md` with Quick Start **Static HTML** → **Deploy Now**, then every wizard value through **Builds** goal check.