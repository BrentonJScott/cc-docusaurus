# New guide report: Back Up a DocumentDB Database

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/documentdb/backups.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/documentdb/backups`
- **Feature**: Back Up a DocumentDB Database
- **Goal**: Expect to see a completed backup listed under backups
- **Guide status**: missing (no file at `docs/products/database-capsule/documentdb/backups.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Backups
2. Start a backup
3. Confirm completion

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### backups-ng-1

- **ID**: backups-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/documentdb/backups.md` for Back Up a DocumentDB Database.
- **Problem**: `docs/products/database-capsule/documentdb/backups.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see a completed backup listed under backups
- **Change**: Create `docs/products/database-capsule/documentdb/backups.md` as a how-to guide with slug `/products/database-capsule/documentdb/backups`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/documentdb/backups.md`
- **Proposed slug**: `/products/database-capsule/documentdb/backups`
- **Goal**: Expect to see a completed backup listed under backups
- **Outline**:

```
# Back up your Backups
Protect your DocumentDB Capsule on Code Capsules with manual backups and automatic backup schedules, then view and restore backups when needed.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Run a backup
1. **Open Backups** — step detail from platform UI labels
2. **Start a backup** — step detail from platform UI labels
3. **Confirm completion** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/documentdb/backups.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
