# New guide report: Monitor a MySQL Database

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/mysql/monitor.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/mysql/monitor`
- **Feature**: Monitor a MySQL Database
- **Goal**: Expect to see usage metrics in the metrics tab
- **Guide status**: missing (no file at `docs/products/database-capsule/mysql/monitor.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the Capsule
2. Open Metrics
3. Review usage metrics

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### monitor-ng-1

- **ID**: monitor-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/mysql/monitor.md` for Monitor a MySQL Database.
- **Problem**: `docs/products/database-capsule/mysql/monitor.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see usage metrics in the metrics tab
- **Change**: Create `docs/products/database-capsule/mysql/monitor.md` as a how-to guide with slug `/products/database-capsule/mysql/monitor`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/mysql/monitor.md`
- **Proposed slug**: `/products/database-capsule/mysql/monitor`
- **Goal**: Expect to see usage metrics in the metrics tab
- **Outline**:

```
# Monitor metrics
Expect to see usage metrics in the metrics tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Monitor usage
1. **Open the Capsule** — step detail from platform UI labels
2. **Open Metrics** — step detail from platform UI labels
3. **Review usage metrics** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/mysql/monitor.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
