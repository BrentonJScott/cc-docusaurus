# Walkthrough report (missing guide): Host a React Application

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/frontend/react.md` does not exist on disk)
- **Feature**: Host a React Application
- **Goal**: Expect to see capsule building in builds tab
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/frontend/react.md` in the docs repo.

## Tickets

### react-wt-1

- **ID**: react-wt-1
- **Type**: New guide
- **Title**: Create `docs/frontend/react.md` for Host a React Application.
- **Problem**: The feature is listed with goal: Expect to see capsule building in builds tab. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/frontend/react.md`
  - **Proposed slug**: `/frontend/react`
  - **Doc type**: How-to
  - **Goal**: Expect to see capsule building in builds tab
  - **Outline**:
  - Frontend + Static; repo `demo-react`; build command and static output path.
  - Builds section on Deploy tab.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
