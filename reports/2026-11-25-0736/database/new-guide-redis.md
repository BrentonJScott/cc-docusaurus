# New guide report: Managed Redis Hosting

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/database/redis.md`
- **Doc type**: How-to guide
- **Slug**: `/database/redis`
- **Feature**: Managed Redis Hosting
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/database/redis.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the capsule wizard
2. Choose Redis
3. Choose a plan
4. Wait for provisioning
5. Bind the Redis capsule to a Backend Capsule
6. Add the connection URL

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### redis-ng-1

- **ID**: redis-ng-1
- **Type**: New guide
- **Title**: Add `docs/database/redis.md` for Managed Redis Hosting.
- **Problem**: `docs/database/redis.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/database/redis.md` as a how-to guide with slug `/database/redis`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/database/redis.md`
- **Proposed slug**: `/database/redis`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Host Your Redis Instance
Create a Redis Data Capsule on Code Capsules and bind it to a Backend Capsule.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Create your Redis capsule
1. **Open the capsule wizard** — step detail from platform UI labels
2. **Choose Redis** — step detail from platform UI labels
3. **Choose a plan** — step detail from platform UI labels
4. **Wait for provisioning** — step detail from platform UI labels
5. **Bind the Redis capsule to a Backend Capsule** — step detail from platform UI labels
6. **Add the connection URL** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/database/redis.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
