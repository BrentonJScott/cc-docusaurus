# New guide report: Deploy and bind Redis

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/redis/deploy-and-bind.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/redis/deploy-and-bind`
- **Feature**: Deploy and bind Redis
- **Goal**: Expect to Create a Redis Database Capsule and bind it to a backend Capsule
- **Guide status**: missing (no file at `docs/products/database-capsule/redis/deploy-and-bind.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Create the database Capsule
2. Open the backend Capsule
3. Bind the database
4. Confirm binding

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-and-bind-ng-1

- **ID**: deploy-and-bind-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/redis/deploy-and-bind.md` for Deploy and bind Redis.
- **Problem**: `docs/products/database-capsule/redis/deploy-and-bind.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Create a Redis Database Capsule and bind it to a backend Capsule
- **Change**: Create `docs/products/database-capsule/redis/deploy-and-bind.md` as a how-to guide with slug `/products/database-capsule/redis/deploy-and-bind`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/redis/deploy-and-bind.md`
- **Proposed slug**: `/products/database-capsule/redis/deploy-and-bind`
- **Goal**: Expect to Create a Redis Database Capsule and bind it to a backend Capsule
- **Outline**:

```
# Deploy and bind Redis
Create a Redis Database Capsule and bind it to a backend Capsule.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy and bind
1. **Create the database Capsule** — step detail from platform UI labels
2. **Open the backend Capsule** — step detail from platform UI labels
3. **Bind the database** — step detail from platform UI labels
4. **Confirm binding** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/redis/deploy-and-bind.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
