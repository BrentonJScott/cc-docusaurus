# Walkthrough report (missing guide): Host a Go Application

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/backend/go/go.md` does not exist on disk)
- **Feature**: Host a Go Application
- **Goal**: Expect to Deploy the Go demo app to a Backend Capsule and see it building in the Builds tab
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/backend/go/go.md` in the docs repo.

## Tickets

### go-wt-1

- **ID**: go-wt-1
- **Type**: New guide
- **Title**: Create `docs/backend/go/go.md` for Host a Go Application.
- **Problem**: The feature is listed with goal: Expect to Deploy the Go demo app to a Backend Capsule and see it building in the Builds tab. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/backend/go/go.md`
  - **Proposed slug**: `/backend/go/go`
  - **Doc type**: How-to
  - **Goal**: Expect to Deploy the Go demo app to a Backend Capsule and see it building in the Builds tab
  - **Outline**:
  - Backend Capsule, Go demo repo, default build detection.
  - Deploy tab **Builds** in progress.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
