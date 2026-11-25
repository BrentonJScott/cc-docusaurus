# Walkthrough report (missing guide): How Does the Pricing Work?

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/billing/how-does-the-pricing-work.md` does not exist on disk)
- **Feature**: How Does the Pricing Work?
- **Goal**: Expect to work out a capsule's monthly price
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/billing/how-does-the-pricing-work.md` in the docs repo.

## Tickets

### how-does-the-pricing-work-wt-1

- **ID**: how-does-the-pricing-work-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/billing/how-does-the-pricing-work.md` for How Does the Pricing Work?.
- **Problem**: The feature is listed with goal: Expect to work out a capsule's monthly price. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/billing/how-does-the-pricing-work.md`
  - **Proposed slug**: `/platform/billing/how-does-the-pricing-work`
  - **Doc type**: Explanation + worked example
  - **Goal**: Expect to work out a capsule's monthly price
  - **Outline**:
  - Plan dimensions: capsule type, CPU/RAM/replicas, data caps, region.
  - Worked example for a Frontend static Free vs Paid and a Backend capsule.
  - Link to static plans doc and scale tabs.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
