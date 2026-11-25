# New guide report: Deploy a Redis Database

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/redis/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/redis/deploy`
- **Feature**: Deploy a Redis Database
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/products/database-capsule/redis/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Start the capsule wizard
2. Choose Redis
3. Choose plan and resources
4. Create the capsule
5. Connect your application

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/redis/deploy.md` for Deploy a Redis Database.
- **Problem**: `docs/products/database-capsule/redis/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/products/database-capsule/redis/deploy.md` as a how-to guide with slug `/products/database-capsule/redis/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/redis/deploy.md`
- **Proposed slug**: `/products/database-capsule/redis/deploy`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Deploy Your Redis Database
Deploy a managed Redis database on Code Capsules with a Redis Capsule, then connect it to your backend app using a framework guide.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Redis database
1. **Start the capsule wizard** — step detail from platform UI labels
2. **Choose Redis** — step detail from platform UI labels
3. **Choose plan and resources** — step detail from platform UI labels
4. **Create the capsule** — step detail from platform UI labels
5. **Connect your application** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/redis/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
