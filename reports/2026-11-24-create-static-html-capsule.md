# Exploratory — Create Static HTML capsule

- **Run:** 2026-11-24T06:52:19Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

No Static HTML how-to on `main`. Explored Quick Start for the **Static HTML** card.

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Test account | not testable | Automation credentials. |

## Actions taken

1. Logged in; Quick Start shows **Static HTML**.
2. Clicked **Deploy Now** on **Static HTML**; reached `/new/capsule?capsuleType=frontend`.
3. Stopped before repo/build steps (no doc values).

## Guide alignment

| # | Status | Expected (inferred) | What happened | Screenshot |
|---|--------|---------------------|---------------|------------|
| 1 | pass | Quick Start lists **Static HTML** | Card visible | `explore-vue/step-1-quick-start.jpg` (shared Quick Start capture) |
| 2 | pass | **Deploy Now** opens frontend wizard | `capsuleType=frontend` | `explore-static/step-2-wizard.jpg` |
| 3 | blocked | Complete wizard to **Builds** | No guide for repo, branch, or build settings | — |

## Mismatches / issues

- Manifest feature has no matching how-to on `main`.
- Platform treats Static HTML as a **Frontend** capsule (card copy: "Frontend Capsule").

## Suggested fixes

Add `docs/guides/static-html.md` (or equivalent slug) with Quick Start **Deploy Now**, Static hosting, demo repo values, and **Deploy → Builds** goal wording aligned with other frontend guides.