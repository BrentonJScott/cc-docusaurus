# Walkthrough report (missing guide): Platform Guides — Accounts, Billing, Teams & Domains

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/index.md` does not exist on disk)
- **Feature**: Platform Guides — Accounts, Billing, Teams & Domains
- **Goal**: Expect every link on the page to open an existing page
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/index.md` in the docs repo.

## Tickets

### platform-wt-1

- **ID**: platform-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/index.md` for Platform Guides — Accounts, Billing, Teams & Domains.
- **Problem**: The feature is listed with goal: Expect every link on the page to open an existing page. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/index.md`
  - **Proposed slug**: `/platform`
  - **Doc type**: Reference hub
  - **Goal**: Expect every link on the page to open an existing page
  - **Outline**:
  - Slug `/platform`; group links: Account, Billing, Spaces, Teams, Capsules, Security, Regions.
  - Only link to pages that exist; note gaps explicitly in the table.
  - Pointer to `/docs/platform/what-is-code-capsules` for newcomers.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
