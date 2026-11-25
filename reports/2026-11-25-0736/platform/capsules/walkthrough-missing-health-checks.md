# Walkthrough report (missing guide): Configure Health Checks

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/capsules/health-checks.md` does not exist on disk)
- **Feature**: Configure Health Checks
- **Goal**: Expect to see the capsule report healthy
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/capsules/health-checks.md` in the docs repo.

## Tickets

### health-checks-wt-1

- **ID**: health-checks-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/capsules/health-checks.md` for Configure Health Checks.
- **Problem**: The feature is listed with goal: Expect to see the capsule report healthy. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/capsules/health-checks.md`
  - **Proposed slug**: `/platform/capsules/health-checks`
  - **Doc type**: How-to
  - **Goal**: Expect to see the capsule report healthy
  - **Outline**:
  - Capsule **Configure** or **Settings**: HTTP health check path/port.
  - Save; check status/health indicator on capsule overview.
  - Troubleshooting failing checks.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
