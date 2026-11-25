# New guide report: Build Docker Images From Git

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/git/builds.md`
- **Doc type**: How-to guide
- **Slug**: `/products/docker-capsule/git/builds`
- **Feature**: Build Docker Images From Git
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Guide status**: missing (no file at `docs/products/docker-capsule/git/builds.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Understand the pipeline
2. Trigger a manual build
3. Enable auto-deploy
4. Fix Dockerfile paths

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### builds-ng-1

- **ID**: builds-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/git/builds.md` for Build Docker Images From Git.
- **Problem**: `docs/products/docker-capsule/git/builds.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the guide's described outcome on test-platform.codecapsules.io
- **Change**: Create `docs/products/docker-capsule/git/builds.md` as a how-to guide with slug `/products/docker-capsule/git/builds`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/git/builds.md`
- **Proposed slug**: `/products/docker-capsule/git/builds`
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Outline**:

```
# Build and Auto-Deploy Your Dockerfile From Git
Build a Docker Capsule from Git on Code Capsules: manual builds, auto-deploy on push, Dockerfile path and build context, and fixing failed builds.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Manage your Docker builds
1. **Understand the pipeline** — step detail from platform UI labels
2. **Trigger a manual build** — step detail from platform UI labels
3. **Enable auto-deploy** — step detail from platform UI labels
4. **Fix Dockerfile paths** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/git/builds.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
