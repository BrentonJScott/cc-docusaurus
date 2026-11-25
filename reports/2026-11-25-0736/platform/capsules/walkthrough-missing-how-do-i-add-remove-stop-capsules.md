# Walkthrough report (missing guide): Add, Remove, and Stop Hosted Apps

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md` does not exist on disk)
- **Feature**: Add, Remove, and Stop Hosted Apps
- **Goal**: Expect to see Capsule was added, switched off, and deleted
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md` in the docs repo.

## Tickets

### how-do-i-add-remove-stop-capsules-wt-1

- **ID**: how-do-i-add-remove-stop-capsules-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md` for Add, Remove, and Stop Hosted Apps.
- **Problem**: The feature is listed with goal: Expect to see Capsule was added, switched off, and deleted. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md`
  - **Proposed slug**: `/platform/capsules/how-do-i-add-remove-stop-capsules`
  - **Doc type**: How-to
  - **Goal**: Expect to see Capsule was added, switched off, and deleted
  - **Outline**:
  - New Capsule wizard (type, repo, deploy).
  - Stop/pause capsule power switch.
  - Delete capsule with confirmation.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
