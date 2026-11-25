# Walkthrough report (missing guide): Host a Static HTML Website

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/frontend/static-html.md` does not exist on disk)
- **Feature**: Host a Static HTML Website
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/frontend/static-html.md` in the docs repo.

## Tickets

### static-html-wt-1

- **ID**: static-html-wt-1
- **Type**: New guide
- **Title**: Create `docs/frontend/static-html.md` for Host a Static HTML Website.
- **Problem**: The feature is listed with goal: Expect to see capsule building in builds tab. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/frontend/static-html.md`
  - **Proposed slug**: `/frontend/static-html`
  - **Doc type**: How-to
  - **Goal**: Expect to see capsule building in builds tab
  - **Outline**:
  - Frontend Static; `demo-html`; path to static content root.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
