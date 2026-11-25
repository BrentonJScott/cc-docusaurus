# New guide report: Monitor a Docker Container

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/monitor.md`
- **Doc type**: How-to guide
- **Slug**: `/products/docker-capsule/monitor`
- **Feature**: Monitor a Docker Container
- **Goal**: Expect to see usage metrics in the metrics tab
- **Guide status**: missing (no file at `docs/products/docker-capsule/monitor.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the Capsule
2. Open Metrics
3. Confirm usage data

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### monitor-ng-1

- **ID**: monitor-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/monitor.md` for Monitor a Docker Container.
- **Problem**: `docs/products/docker-capsule/monitor.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see usage metrics in the metrics tab
- **Change**: Create `docs/products/docker-capsule/monitor.md` as a how-to guide with slug `/products/docker-capsule/monitor`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/monitor.md`
- **Proposed slug**: `/products/docker-capsule/monitor`
- **Goal**: Expect to see usage metrics in the metrics tab
- **Outline**:

```
# Monitor metrics
Monitor your Docker Capsule on Code Capsules and track CPU, memory, network, and storage metrics for your container from the Metrics tab.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## View metrics
1. **Open the Capsule** — step detail from platform UI labels
2. **Open Metrics** — step detail from platform UI labels
3. **Confirm usage data** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/monitor.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
