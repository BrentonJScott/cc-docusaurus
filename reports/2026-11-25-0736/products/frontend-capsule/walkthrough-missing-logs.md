# Walkthrough report (missing guide): View Logs for a Frontend App

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/products/frontend-capsule/logs.md` does not exist on disk)
- **Feature**: View Logs for a Frontend App
- **Goal**: Expect to see capsule logs and access logs
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/products/frontend-capsule/logs.md` in the docs repo.

## Tickets

### logs-wt-1

- **ID**: logs-wt-1
- **Type**: New guide
- **Title**: Create `docs/products/frontend-capsule/logs.md` for View Logs for a Frontend App.
- **Problem**: The feature is listed with goal: Expect to see capsule logs and access logs. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/products/frontend-capsule/logs.md`
  - **Proposed slug**: `/products/frontend-capsule/logs`
  - **Doc type**: How-to
  - **Goal**: Expect to see capsule logs and access logs
  - **Outline**:
  - Mirror `backend-capsule/logs.md`: Logs tab, Capsule/Build/Access streams.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
