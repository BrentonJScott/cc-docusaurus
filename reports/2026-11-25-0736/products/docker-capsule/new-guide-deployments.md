# New guide report: Manage Docker Container Deployments

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/deployments.md`
- **Doc type**: How-to guide
- **Slug**: `/products/docker-capsule/deployments`
- **Feature**: Manage Docker Container Deployments
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/products/docker-capsule/deployments.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Deploy
2. Change source
3. Pick a strategy
4. Roll back

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deployments-ng-1

- **ID**: deployments-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/deployments.md` for Manage Docker Container Deployments.
- **Problem**: `docs/products/docker-capsule/deployments.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/products/docker-capsule/deployments.md` as a how-to guide with slug `/products/docker-capsule/deployments`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/deployments.md`
- **Proposed slug**: `/products/docker-capsule/deployments`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Manage, Roll Back, and Track Your Deployments
Manage Docker Capsule deployments on Code Capsules: change the source, choose a deployment strategy, read build logs, and roll back to a previous build.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Manage your Docker deployments
1. **Open Deploy** — step detail from platform UI labels
2. **Change source** — step detail from platform UI labels
3. **Pick a strategy** — step detail from platform UI labels
4. **Roll back** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/deployments.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
