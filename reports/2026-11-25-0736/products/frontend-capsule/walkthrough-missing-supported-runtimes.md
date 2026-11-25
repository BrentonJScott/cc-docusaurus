# Walkthrough report (missing guide): Supported Frontend Frameworks and Runtimes

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/products/frontend-capsule/supported-runtimes.md` does not exist on disk)
- **Feature**: Supported Frontend Frameworks and Runtimes
- **Goal**: Expect to see the build Node.js version, supported frameworks and package managers
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/products/frontend-capsule/supported-runtimes.md` in the docs repo.

## Tickets

### supported-runtimes-wt-1

- **ID**: supported-runtimes-wt-1
- **Type**: New guide
- **Title**: Create `docs/products/frontend-capsule/supported-runtimes.md` for Supported Frontend Frameworks and Runtimes.
- **Problem**: The feature is listed with goal: Expect to see the build Node.js version, supported frameworks and package managers. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/products/frontend-capsule/supported-runtimes.md`
  - **Proposed slug**: `/products/frontend-capsule/supported-runtimes`
  - **Doc type**: Reference
  - **Goal**: Expect to see the build Node.js version, supported frameworks and package managers
  - **Outline**:
  - Table of Node versions, npm/yarn/pnpm, framework detection notes.
  - How to set Node version in Configure/build settings.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
