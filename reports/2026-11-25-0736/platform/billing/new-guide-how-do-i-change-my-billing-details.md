# New guide report: Change Billing Details

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/billing/how-do-i-change-my-billing-details.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/billing/how-do-i-change-my-billing-details`
- **Feature**: Change Billing Details
- **Goal**: Expect to see saved details match what you entered
- **Guide status**: missing (no file at `docs/platform/billing/how-do-i-change-my-billing-details.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-do-i-change-my-billing-details-ng-1

- **ID**: how-do-i-change-my-billing-details-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/billing/how-do-i-change-my-billing-details.md` for Change Billing Details.
- **Problem**: `docs/platform/billing/how-do-i-change-my-billing-details.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see saved details match what you entered
- **Change**: Create `docs/platform/billing/how-do-i-change-my-billing-details.md` as a how-to guide with slug `/platform/billing/how-do-i-change-my-billing-details`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/billing/how-do-i-change-my-billing-details.md`
- **Proposed slug**: `/platform/billing/how-do-i-change-my-billing-details`
- **Goal**: Expect to see saved details match what you entered
- **Outline**:

```
# Change Billing Details
Expect to see saved details match what you entered

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Change Billing Details
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/billing/how-do-i-change-my-billing-details.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
