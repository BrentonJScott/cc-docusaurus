# New guide report: Configure a Backend Application

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/backend-capsule/configure.md`
- **Doc type**: How-to guide
- **Slug**: `/products/backend-capsule/configure`
- **Feature**: Configure a Backend Application
- **Goal**: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Guide status**: missing (no file at `docs/products/backend-capsule/configure.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Edit build settings
2. Edit runtime settings
3. Set environment variables
4. Bind a Database Capsule
5. Bind persistent storage

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### configure-ng-1

- **ID**: configure-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/backend-capsule/configure.md` for Configure a Backend Application.
- **Problem**: `docs/products/backend-capsule/configure.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Change**: Create `docs/products/backend-capsule/configure.md` as a how-to guide with slug `/products/backend-capsule/configure`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/backend-capsule/configure.md`
- **Proposed slug**: `/products/backend-capsule/configure`
- **Goal**: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Outline**:

```
# Configure Your Backend Application
Configure build settings, runtime port, health checks, environment variables, and data capsule bindings on the Config tab.

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Configure your backend app
1. **Edit build settings** — step detail from platform UI labels
2. **Edit runtime settings** — step detail from platform UI labels
3. **Set environment variables** — step detail from platform UI labels
4. **Bind a Database Capsule** — step detail from platform UI labels
5. **Bind persistent storage** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/backend-capsule/configure.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
