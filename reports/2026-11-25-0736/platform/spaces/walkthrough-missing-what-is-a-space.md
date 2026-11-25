# Walkthrough report (missing guide): What Is a Space?

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/spaces/what-is-a-space.md` does not exist on disk)
- **Feature**: What Is a Space?
- **Goal**: Expect to know how spaces relate to capsules
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/spaces/what-is-a-space.md` in the docs repo.

## Tickets

### what-is-a-space-wt-1

- **ID**: what-is-a-space-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/spaces/what-is-a-space.md` for What Is a Space?.
- **Problem**: The feature is listed with goal: Expect to know how spaces relate to capsules. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/spaces/what-is-a-space.md`
  - **Proposed slug**: `/platform/spaces/what-is-a-space`
  - **Doc type**: Explanation
  - **Goal**: Expect to know how spaces relate to capsules
  - **Outline**:
  - Space as deployment environment within a Team; holds capsules; region selection.
  - Contrast with Team (org) and Capsule (app).
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
