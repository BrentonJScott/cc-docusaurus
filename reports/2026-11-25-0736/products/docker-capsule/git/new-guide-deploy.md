# New guide report: Deploy a Dockerfile From Git

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/git/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/docker-capsule/git/deploy`
- **Feature**: Deploy a Dockerfile From Git
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/products/docker-capsule/git/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the capsule wizard
2. Choose Docker Capsule
3. Choose plan
4. Select Git source
5. Set build paths
6. Create and build
7. Verify and continue

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/git/deploy.md` for Deploy a Dockerfile From Git.
- **Problem**: `docs/products/docker-capsule/git/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/products/docker-capsule/git/deploy.md` as a how-to guide with slug `/products/docker-capsule/git/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/git/deploy.md`
- **Proposed slug**: `/products/docker-capsule/git/deploy`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Deploy Your Dockerfile From a Git Repository
Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first build is running on the Deploy tab Builds section.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your Docker capsule from Git
1. **Open the capsule wizard** — step detail from platform UI labels
2. **Choose Docker Capsule** — step detail from platform UI labels
3. **Choose plan** — step detail from platform UI labels
4. **Select Git source** — step detail from platform UI labels
5. **Set build paths** — step detail from platform UI labels
6. **Create and build** — step detail from platform UI labels
7. **Verify and continue** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/git/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
