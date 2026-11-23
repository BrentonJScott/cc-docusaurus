# Exploratory — Create Vue frontend capsule

- **Run:** 2026-11-23T09:11:10Z
- **Target:** https://test-platform.codecapsules.io
- **Guide on main:** no (`docs/guides/` has no Vue guide)
- **Goal reached:** no

## Actions

1. Logged in; opened **Quick Start**.
2. Confirmed **Vue** card with **Deploy Now**.
3. Clicked **Deploy Now** on **Vue**.
4. Attempted **Frontend** capsule type and repo `demo-vue` per manifest goal (no written guide).

## Findings

| Step | Status | Notes |
|------|--------|-------|
| Quick Start **Vue** card | pass | Card visible with **Deploy Now** |
| Open frontend wizard | fail | **Deploy Now** navigates to `…/new/capsule?capsuleType=backend` |
| Builds goal | fail | Did not complete capsule; no guide to follow on `main` |

## Suggested new guide

Add `docs/guides/vue.md` modeled on `angular.md`: Quick Start **Deploy Now** (Vue), **Frontend**, **Static**, plan selection, `demo-vue`, branch `main`, framework-appropriate build command/output, **Deploy → Builds** goal check.

Recommend guide title/slug: **Host Your Vue Application** (`/frontend/vue`).

Screenshot: `failure-step-1.jpg` (Quick Start entry; backend wizard mismatch).