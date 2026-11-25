# New guide report: Configure a DocumentDB Database

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/documentdb/configure.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/documentdb/configure`
- **Feature**: Configure a DocumentDB Database
- **Goal**: Expect to see the configuration saved as described
- **Guide status**: missing (no file at `docs/products/database-capsule/documentdb/configure.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Details
2. View connection details
3. Rename the capsule
4. Connect from your laptop

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### configure-ng-1

- **ID**: configure-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/documentdb/configure.md` for Configure a DocumentDB Database.
- **Problem**: `docs/products/database-capsule/documentdb/configure.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the configuration saved as described
- **Change**: Create `docs/products/database-capsule/documentdb/configure.md` as a how-to guide with slug `/products/database-capsule/documentdb/configure`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/documentdb/configure.md`
- **Proposed slug**: `/products/database-capsule/documentdb/configure`
- **Goal**: Expect to see the configuration saved as described
- **Outline**:

```
# Configure Your DocumentDB Database
View connection details and settings for a DocumentDB Capsule on the Details and Config tabs.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Configure your documentdb database
1. **Open Details** — step detail from platform UI labels
2. **View connection details** — step detail from platform UI labels
3. **Rename the capsule** — step detail from platform UI labels
4. **Connect from your laptop** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/documentdb/configure.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
