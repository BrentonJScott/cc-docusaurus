# Walkthrough report (missing guide): Configure a Frontend App

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/products/frontend-capsule/configure.md` does not exist on disk)
- **Feature**: Configure a Frontend App
- **Goal**: Expect to see updated capsule parameters and environment variables saved
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/products/frontend-capsule/configure.md` in the docs repo.

## Tickets

### configure-wt-1

- **ID**: configure-wt-1
- **Type**: New guide
- **Title**: Create `docs/products/frontend-capsule/configure.md` for Configure a Frontend App.
- **Problem**: The feature is listed with goal: Expect to see updated capsule parameters and environment variables saved. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/products/frontend-capsule/configure.md`
  - **Proposed slug**: `/products/frontend-capsule/configure`
  - **Doc type**: How-to
  - **Goal**: Expect to see updated capsule parameters and environment variables saved
  - **Outline**:
  - Open capsule **Configure** tab: env vars, build settings, routes.
  - Save; refresh and confirm values.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
