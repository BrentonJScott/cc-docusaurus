# New guide report: Upgrade MySQL 5.7 to 8.0

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0`
- **Feature**: Upgrade MySQL 5.7 to 8.0
- **Goal**: Expect to see the capsule version show 8.0
- **Guide status**: missing (no file at `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Review upgrade prerequisites
2. Start the version upgrade
3. Confirm version shows 8.0

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### 5-7-to-8-0-ng-1

- **ID**: 5-7-to-8-0-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md` for Upgrade MySQL 5.7 to 8.0.
- **Problem**: `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the capsule version show 8.0
- **Change**: Create `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md` as a how-to guide with slug `/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md`
- **Proposed slug**: `/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0`
- **Goal**: Expect to see the capsule version show 8.0
- **Outline**:

```
# Upgrade Your MySQL Database From 5.7 to 8.0
Expect to see the capsule version show 8.0

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Upgrade MySQL
1. **Review upgrade prerequisites** — step detail from platform UI labels
2. **Start the version upgrade** — step detail from platform UI labels
3. **Confirm version shows 8.0** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
