# New guide report: Monitor a Frontend App

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/frontend-capsule/monitor.md`
- **Doc type**: How-to guide
- **Slug**: `/products/frontend-capsule/monitor`
- **Feature**: Monitor a Frontend App
- **Goal**: Expect to see usage metrics in the metrics tab
- **Guide status**: missing (no file at `docs/products/frontend-capsule/monitor.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the capsule in the Space
2. Navigate to the relevant tab
3. Complete the documented action
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### monitor-ng-1

- **ID**: monitor-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/frontend-capsule/monitor.md` for Monitor a Frontend App.
- **Problem**: `docs/products/frontend-capsule/monitor.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see usage metrics in the metrics tab
- **Change**: Create `docs/products/frontend-capsule/monitor.md` as a how-to guide with slug `/products/frontend-capsule/monitor`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/frontend-capsule/monitor.md`
- **Proposed slug**: `/products/frontend-capsule/monitor`
- **Goal**: Expect to see usage metrics in the metrics tab
- **Outline**:

```
# Monitor a Frontend App
Expect to see usage metrics in the metrics tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Manage your capsule
1. **Open the capsule in the Space** — step detail from platform UI labels
2. **Navigate to the relevant tab** — step detail from platform UI labels
3. **Complete the documented action** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/frontend-capsule/monitor.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
