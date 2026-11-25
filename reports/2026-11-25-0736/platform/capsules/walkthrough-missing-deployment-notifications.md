# Walkthrough report (missing guide): Set Up Deployment Notifications

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/capsules/deployment-notifications.md` does not exist on disk)
- **Feature**: Set Up Deployment Notifications
- **Goal**: Expect to see notification preferences saved
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/capsules/deployment-notifications.md` in the docs repo.

## Tickets

### deployment-notifications-wt-1

- **ID**: deployment-notifications-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/capsules/deployment-notifications.md` for Set Up Deployment Notifications.
- **Problem**: The feature is listed with goal: Expect to see notification preferences saved. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/capsules/deployment-notifications.md`
  - **Proposed slug**: `/platform/capsules/deployment-notifications`
  - **Doc type**: How-to
  - **Goal**: Expect to see notification preferences saved
  - **Outline**:
  - Capsule or Team notifications settings.
  - Toggle deploy success/failure channels (email/Slack if supported); save and reload.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
