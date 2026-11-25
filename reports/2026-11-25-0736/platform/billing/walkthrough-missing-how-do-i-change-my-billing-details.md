# Walkthrough report (missing guide): Change Billing Details

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/billing/how-do-i-change-my-billing-details.md` does not exist on disk)
- **Feature**: Change Billing Details
- **Goal**: Expect to see saved details match what you entered
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/billing/how-do-i-change-my-billing-details.md` in the docs repo.

## Tickets

### how-do-i-change-my-billing-details-wt-1

- **ID**: how-do-i-change-my-billing-details-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/billing/how-do-i-change-my-billing-details.md` for Change Billing Details.
- **Problem**: The feature is listed with goal: Expect to see saved details match what you entered. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/billing/how-do-i-change-my-billing-details.md`
  - **Proposed slug**: `/platform/billing/how-do-i-change-my-billing-details`
  - **Doc type**: How-to
  - **Goal**: Expect to see saved details match what you entered
  - **Outline**:
  - Billing → company/name/address/VAT fields.
  - Edit, save, reload page to confirm values persist.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
