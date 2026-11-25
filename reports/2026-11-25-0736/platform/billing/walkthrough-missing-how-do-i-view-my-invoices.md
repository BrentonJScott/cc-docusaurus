# Walkthrough report (missing guide): View Your Invoices

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/billing/how-do-i-view-my-invoices.md` does not exist on disk)
- **Feature**: View Your Invoices
- **Goal**: Expect to see invoices are listed on the Invoices tab
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/billing/how-do-i-view-my-invoices.md` in the docs repo.

## Tickets

### how-do-i-view-my-invoices-wt-1

- **ID**: how-do-i-view-my-invoices-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/billing/how-do-i-view-my-invoices.md` for View Your Invoices.
- **Problem**: The feature is listed with goal: Expect to see invoices are listed on the Invoices tab. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/billing/how-do-i-view-my-invoices.md`
  - **Proposed slug**: `/platform/billing/how-do-i-view-my-invoices`
  - **Doc type**: How-to
  - **Goal**: Expect to see invoices are listed on the Invoices tab
  - **Outline**:
  - Billing → **Invoices** tab.
  - List columns (date, amount, status); download PDF if available.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
