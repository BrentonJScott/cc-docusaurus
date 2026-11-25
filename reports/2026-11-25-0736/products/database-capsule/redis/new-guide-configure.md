# New guide report: Configure a Redis Database

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/redis/configure.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/redis/configure`
- **Feature**: Configure a Redis Database
- **Goal**: Expect to see the configuration saved as described
- **Guide status**: missing (no file at `docs/products/database-capsule/redis/configure.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Configure
2. Update capsule settings
3. Save configuration

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### configure-ng-1

- **ID**: configure-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/redis/configure.md` for Configure a Redis Database.
- **Problem**: `docs/products/database-capsule/redis/configure.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the configuration saved as described
- **Change**: Create `docs/products/database-capsule/redis/configure.md` as a how-to guide with slug `/products/database-capsule/redis/configure`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/redis/configure.md`
- **Proposed slug**: `/products/database-capsule/redis/configure`
- **Goal**: Expect to see the configuration saved as described
- **Outline**:

```
# Configure Your Redis Database
Expect to see the configuration saved as described

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Configure your capsule
1. **Open Configure** — step detail from platform UI labels
2. **Update capsule settings** — step detail from platform UI labels
3. **Save configuration** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/redis/configure.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
