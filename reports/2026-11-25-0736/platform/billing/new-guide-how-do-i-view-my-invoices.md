# New guide report: View Your Invoices

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/billing/how-do-i-view-my-invoices.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/billing/how-do-i-view-my-invoices`
- **Feature**: View Your Invoices
- **Goal**: Expect to see invoices are listed on the Invoices tab
- **Guide status**: missing (no file at `docs/platform/billing/how-do-i-view-my-invoices.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-do-i-view-my-invoices-ng-1

- **ID**: how-do-i-view-my-invoices-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/billing/how-do-i-view-my-invoices.md` for View Your Invoices.
- **Problem**: `docs/platform/billing/how-do-i-view-my-invoices.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see invoices are listed on the Invoices tab
- **Change**: Create `docs/platform/billing/how-do-i-view-my-invoices.md` as a how-to guide with slug `/platform/billing/how-do-i-view-my-invoices`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/billing/how-do-i-view-my-invoices.md`
- **Proposed slug**: `/platform/billing/how-do-i-view-my-invoices`
- **Goal**: Expect to see invoices are listed on the Invoices tab
- **Outline**:

```
# View Your Invoices
Expect to see invoices are listed on the Invoices tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## View Your Invoices
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/billing/how-do-i-view-my-invoices.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
