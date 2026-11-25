# Walkthrough report (missing guide): Node.js Application Hosting Reference

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/backend/node.js/index.md` does not exist on disk)
- **Feature**: Node.js Application Hosting Reference
- **Goal**: Expect every link on the page to open an existing page
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/backend/node.js/index.md` in the docs repo.

## Tickets

### node-js-wt-1

- **ID**: node-js-wt-1
- **Type**: New guide
- **Title**: Create `docs/backend/node.js/index.md` for Node.js Application Hosting Reference.
- **Problem**: The feature is listed with goal: Expect every link on the page to open an existing page. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/backend/node.js/index.md`
  - **Proposed slug**: `/backend/node.js`
  - **Doc type**: Reference hub
  - **Goal**: Expect every link on the page to open an existing page
  - **Outline**:
  - Slug `/backend/node.js`; list Express, Discord/Telegram/Slack bot guides.
  - Clarify Backend Capsule vs Docker for custom Dockerfiles.
  - Link to `/docs/products/backend-capsule` configuration and logs.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
