# New guide report: Connect to Redis Locally

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/database-capsule/redis/connect-locally.md`
- **Doc type**: How-to guide
- **Slug**: `/products/database-capsule/redis/connect-locally`
- **Feature**: Connect to Redis Locally
- **Goal**: Expect redis-cli to connect through the proxy tunnel
- **Guide status**: missing (no file at `docs/products/database-capsule/redis/connect-locally.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Install redis-cli
2. Open a proxy tunnel
3. Copy credentials
4. Connect with redis-cli

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### connect-locally-ng-1

- **ID**: connect-locally-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/database-capsule/redis/connect-locally.md` for Connect to Redis Locally.
- **Problem**: `docs/products/database-capsule/redis/connect-locally.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect redis-cli to connect through the proxy tunnel
- **Change**: Create `docs/products/database-capsule/redis/connect-locally.md` as a how-to guide with slug `/products/database-capsule/redis/connect-locally`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/database-capsule/redis/connect-locally.md`
- **Proposed slug**: `/products/database-capsule/redis/connect-locally`
- **Goal**: Expect redis-cli to connect through the proxy tunnel
- **Outline**:

```
# Connect to Your Redis Database From Your Machine
Expect redis-cli to connect through the proxy tunnel

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Connect locally
1. **Install redis-cli** — step detail from platform UI labels
2. **Open a proxy tunnel** — step detail from platform UI labels
3. **Copy credentials** — step detail from platform UI labels
4. **Connect with redis-cli** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/database-capsule/redis/connect-locally.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
