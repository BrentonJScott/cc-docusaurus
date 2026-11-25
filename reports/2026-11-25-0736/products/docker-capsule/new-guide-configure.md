# New guide report: Configure a Docker Container

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/docker-capsule/configure.md`
- **Doc type**: How-to guide
- **Slug**: `/products/docker-capsule/configure`
- **Feature**: Configure a Docker Container
- **Goal**: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Guide status**: missing (no file at `docs/products/docker-capsule/configure.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Edit build settings (Git only)
2. Edit runtime settings
3. Set environment variables
4. Bind data capsules

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### configure-ng-1

- **ID**: configure-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/docker-capsule/configure.md` for Configure a Docker Container.
- **Problem**: `docs/products/docker-capsule/configure.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Change**: Create `docs/products/docker-capsule/configure.md` as a how-to guide with slug `/products/docker-capsule/configure`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/docker-capsule/configure.md`
- **Proposed slug**: `/products/docker-capsule/configure`
- **Goal**: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Outline**:

```
# Configure Your Docker Container
Configure a Docker Capsule on Code Capsules: set the network port, Dockerfile path, and build context, add environment variables, and bind data capsules.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Configure your Docker capsule
1. **Edit build settings (Git only)** — step detail from platform UI labels
2. **Edit runtime settings** — step detail from platform UI labels
3. **Set environment variables** — step detail from platform UI labels
4. **Bind data capsules** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/docker-capsule/configure.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
