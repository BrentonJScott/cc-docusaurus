# New guide report: Add a Payment Method

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/account/how-do-i-add-a-payment-method.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/account/how-do-i-add-a-payment-method`
- **Feature**: Add a Payment Method
- **Goal**: Expect to see card is listed under Billing payment methods
- **Guide status**: missing (no file at `docs/platform/account/how-do-i-add-a-payment-method.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-do-i-add-a-payment-method-ng-1

- **ID**: how-do-i-add-a-payment-method-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/account/how-do-i-add-a-payment-method.md` for Add a Payment Method.
- **Problem**: `docs/platform/account/how-do-i-add-a-payment-method.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see card is listed under Billing payment methods
- **Change**: Create `docs/platform/account/how-do-i-add-a-payment-method.md` as a how-to guide with slug `/platform/account/how-do-i-add-a-payment-method`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/account/how-do-i-add-a-payment-method.md`
- **Proposed slug**: `/platform/account/how-do-i-add-a-payment-method`
- **Goal**: Expect to see card is listed under Billing payment methods
- **Outline**:

```
# Add a Payment Method
Expect to see card is listed under Billing payment methods

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Add a Payment Method
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/account/how-do-i-add-a-payment-method.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
