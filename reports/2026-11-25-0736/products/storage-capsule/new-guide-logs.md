# New guide report: View Logs for a Persistent Storage

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/storage-capsule/logs.md`
- **Doc type**: How-to guide
- **Slug**: `/products/storage-capsule/logs`
- **Feature**: View Logs for a Persistent Storage
- **Goal**: Expect to see capsule logs and access logs
- **Guide status**: missing (no file at `docs/products/storage-capsule/logs.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the Capsule
2. Open Logs
3. Switch log streams

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### logs-ng-1

- **ID**: logs-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/storage-capsule/logs.md` for View Logs for a Persistent Storage.
- **Problem**: `docs/products/storage-capsule/logs.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule logs and access logs
- **Change**: Create `docs/products/storage-capsule/logs.md` as a how-to guide with slug `/products/storage-capsule/logs`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/storage-capsule/logs.md`
- **Proposed slug**: `/products/storage-capsule/logs`
- **Goal**: Expect to see capsule logs and access logs
- **Outline**:

```
# Logs logs
Expect to see capsule logs and access logs

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## View logs
1. **Open the Capsule** — step detail from platform UI labels
2. **Open Logs** — step detail from platform UI labels
3. **Switch log streams** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/storage-capsule/logs.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
