# Walkthrough report (missing guide): Add and Remove Spaces

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/spaces/how-do-i-add-remove-a-space.md` does not exist on disk)
- **Feature**: Add and Remove Spaces
- **Goal**: Expect to see Space is created and later removed from your Team
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/spaces/how-do-i-add-remove-a-space.md` in the docs repo.

## Tickets

### how-do-i-add-remove-a-space-wt-1

- **ID**: how-do-i-add-remove-a-space-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/spaces/how-do-i-add-remove-a-space.md` for Add and Remove Spaces.
- **Problem**: The feature is listed with goal: Expect to see Space is created and later removed from your Team. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/spaces/how-do-i-add-remove-a-space.md`
  - **Proposed slug**: `/platform/spaces/how-do-i-add-remove-a-space`
  - **Doc type**: How-to
  - **Goal**: Expect to see Space is created and later removed from your Team
  - **Outline**:
  - Sidebar **+** → **New Space**; name and region.
  - Confirm Space appears in sidebar; delete/remove Space with confirmation.
  - Warn if capsules still exist.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
