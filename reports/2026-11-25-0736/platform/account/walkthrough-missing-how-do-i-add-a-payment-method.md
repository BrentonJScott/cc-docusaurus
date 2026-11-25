# Walkthrough report (missing guide): Add a Payment Method

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/account/how-do-i-add-a-payment-method.md` does not exist on disk)
- **Feature**: Add a Payment Method
- **Goal**: Expect to see card is listed under Billing payment methods
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/account/how-do-i-add-a-payment-method.md` in the docs repo.

## Tickets

### how-do-i-add-a-payment-method-wt-1

- **ID**: how-do-i-add-a-payment-method-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/account/how-do-i-add-a-payment-method.md` for Add a Payment Method.
- **Problem**: The feature is listed with goal: Expect to see card is listed under Billing payment methods. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/account/how-do-i-add-a-payment-method.md`
  - **Proposed slug**: `/platform/account/how-do-i-add-a-payment-method`
  - **Doc type**: How-to
  - **Goal**: Expect to see card is listed under Billing payment methods
  - **Outline**:
  - Prerequisites: account, Team admin or billing role.
  - Open Team **Settings** → **Billing** (or Billing from sidebar).
  - Steps: **Add payment method**, enter card, save; verify card appears under payment methods.
  - Troubleshooting: declined card, missing Billing tab.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
