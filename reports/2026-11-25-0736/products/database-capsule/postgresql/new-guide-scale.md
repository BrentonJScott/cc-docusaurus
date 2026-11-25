# New guide report: Scale a PostgreSQL Database

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/postgresql/scale.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/postgresql/scale`
- **Feature**: Scale a PostgreSQL Database
- **Goal**: Expect to see new resources saved in the scale tab
- **Guide status**: missing (no file at `docs/products/database-capsule/postgresql/scale.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the Capsule
2. Open Scale
3. Save new resources

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### scale-ng-1

- **ID**: scale-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/postgresql/scale.md` for Scale a PostgreSQL Database.
- **Problem**: `docs/products/database-capsule/postgresql/scale.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see new resources saved in the scale tab
- **Change**: Create `docs/products/database-capsule/postgresql/scale.md` as a how-to guide with slug `/products/database-capsule/postgresql/scale`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/postgresql/scale.md`
- **Proposed slug**: `/products/database-capsule/postgresql/scale`
- **Goal**: Expect to see new resources saved in the scale tab
- **Outline**:

```
# Scale your Scale
Expect to see new resources saved in the scale tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Scale resources
1. **Open the Capsule** — step detail from platform UI labels
2. **Open Scale** — step detail from platform UI labels
3. **Save new resources** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/postgresql/scale.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
