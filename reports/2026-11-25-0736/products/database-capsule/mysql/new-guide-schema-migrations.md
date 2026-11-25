# New guide report: Run Database Migrations

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/mysql/schema-migrations.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/mysql/schema-migrations`
- **Feature**: Run Database Migrations
- **Goal**: Expect to see the migration applied to the database
- **Guide status**: missing (no file at `docs/products/database-capsule/mysql/schema-migrations.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the Capsule
2. Configure migrations
3. Run the migration
4. Confirm schema updated

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### schema-migrations-ng-1

- **ID**: schema-migrations-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/mysql/schema-migrations.md` for Run Database Migrations.
- **Problem**: `docs/products/database-capsule/mysql/schema-migrations.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the migration applied to the database
- **Change**: Create `docs/products/database-capsule/mysql/schema-migrations.md` as a how-to guide with slug `/products/database-capsule/mysql/schema-migrations`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/mysql/schema-migrations.md`
- **Proposed slug**: `/products/database-capsule/mysql/schema-migrations`
- **Goal**: Expect to see the migration applied to the database
- **Outline**:

```
# Run Your Database Migrations
Expect to see the migration applied to the database

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Run migrations
1. **Open the Capsule** — step detail from platform UI labels
2. **Configure migrations** — step detail from platform UI labels
3. **Run the migration** — step detail from platform UI labels
4. **Confirm schema updated** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/mysql/schema-migrations.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
