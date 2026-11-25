# Walkthrough report (missing guide): Frontend Framework Deployment Guides

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/products/frontend-capsule/deploy.md` does not exist on disk)
- **Feature**: Frontend Framework Deployment Guides
- **Goal**: Expect the reader to understand: Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules
- **Target**: https://test-platform.codecapsules.io
- **Format check**: not run (no guide)
- **Manifest goals reached**: not attempted (no guide to follow)

## Exploration

Headless Playwright sign-in at `https://test-platform.codecapsules.io` (via **Log in** from `/auth/registration`; direct `/auth/login` loads the registration view). Credential values from env vars only; not recorded. UI labels confirmed against existing published guides and the angular walkthrough in this run. No step-by-step walkthrough was run because no guide file exists on disk.

## Actions taken

None. WALKTHROUGH.md requires reading the guide before browser actions; there is no guide file for this feature.

## Guide alignment

Not applicable.

## Mismatches / issues

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/products/frontend-capsule/deploy.md` in the docs repo.

## Tickets

### deploy-wt-1

- **ID**: deploy-wt-1
- **Type**: New guide
- **Title**: Create `docs/products/frontend-capsule/deploy.md` for Frontend Framework Deployment Guides.
- **Problem**: The feature is listed with goal: Expect the reader to understand: Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/products/frontend-capsule/deploy.md`
  - **Proposed slug**: `/products/frontend-capsule/deploy`
  - **Doc type**: Reference hub
  - **Goal**: Expect the reader to understand: Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules
  - **Outline**:
  - Slug `/products/frontend-capsule/deploy`.
  - Overview of Static vs Container paths.
  - DocCardList to each framework guide under `/docs/frontend` and static/container deploy guides.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
