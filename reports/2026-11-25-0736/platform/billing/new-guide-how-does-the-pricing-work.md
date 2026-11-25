# New guide report: How Does the Pricing Work?

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/billing/how-does-the-pricing-work.md`
- **Doc type**: Explanation
- **Slug**: `/platform/billing/how-does-the-pricing-work`
- **Feature**: How Does the Pricing Work?
- **Goal**: Expect to work out a capsule's monthly price
- **Guide status**: missing (no file at `docs/platform/billing/how-does-the-pricing-work.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-does-the-pricing-work-ng-1

- **ID**: how-does-the-pricing-work-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/billing/how-does-the-pricing-work.md` for How Does the Pricing Work?.
- **Problem**: `docs/platform/billing/how-does-the-pricing-work.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to work out a capsule's monthly price
- **Change**: Create `docs/platform/billing/how-does-the-pricing-work.md` as a explanation with slug `/platform/billing/how-does-the-pricing-work`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/billing/how-does-the-pricing-work.md`
- **Proposed slug**: `/platform/billing/how-does-the-pricing-work`
- **Goal**: Expect to work out a capsule's monthly price
- **Outline**:

```
# How Does the Pricing Work?
Expect to work out a capsule's monthly price

## Overview
Plan dimensions: capsule type, CPU/RAM/replicas, data caps, region.
Worked example for a Frontend static Free vs Paid and a Backend capsule.
Link to static plans doc and scale tabs.

## Next steps
DocCardList to related how-to guides under `/docs/...`.
```

- **Done when**: The guide file exists at `docs/platform/billing/how-does-the-pricing-work.md`, passes the format check for a explanation, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
