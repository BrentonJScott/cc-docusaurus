# Walkthrough report (missing guide): Add Team Members to a Team

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/teams/how-do-i-add-team-members.md` does not exist on disk)
- **Feature**: Add Team Members to a Team
- **Goal**: Expect to see they appear in the Team member list
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/teams/how-do-i-add-team-members.md` in the docs repo.

## Tickets

### how-do-i-add-team-members-wt-1

- **ID**: how-do-i-add-team-members-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/teams/how-do-i-add-team-members.md` for Add Team Members to a Team.
- **Problem**: The feature is listed with goal: Expect to see they appear in the Team member list. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/teams/how-do-i-add-team-members.md`
  - **Proposed slug**: `/platform/teams/how-do-i-add-team-members`
  - **Doc type**: How-to
  - **Goal**: Expect to see they appear in the Team member list
  - **Outline**:
  - Team **Settings** → **Members**; invite by email, assign role.
  - Accept invite flow for invitee; verify in member list.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
