# New guide report: Supported MySQL Versions

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/mysql/versions.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/mysql/versions`
- **Feature**: Supported MySQL Versions
- **Goal**: Expect to see the capsule's version and its upgrade path
- **Guide status**: missing (no file at `docs/products/database-capsule/mysql/versions.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Versions
2. Review supported versions
3. Select a supported version

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### versions-ng-1

- **ID**: versions-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/mysql/versions.md` for Supported MySQL Versions.
- **Problem**: `docs/products/database-capsule/mysql/versions.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the capsule's version and its upgrade path
- **Change**: Create `docs/products/database-capsule/mysql/versions.md` as a how-to guide with slug `/products/database-capsule/mysql/versions`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/mysql/versions.md`
- **Proposed slug**: `/products/database-capsule/mysql/versions`
- **Goal**: Expect to see the capsule's version and its upgrade path
- **Outline**:

```
# Choose and Upgrade Your MySQL Version
Expect to see the capsule's version and its upgrade path

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Manage versions
1. **Open Versions** — step detail from platform UI labels
2. **Review supported versions** — step detail from platform UI labels
3. **Select a supported version** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/mysql/versions.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
