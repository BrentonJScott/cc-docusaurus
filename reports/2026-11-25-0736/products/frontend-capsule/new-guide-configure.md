# New guide report: Configure a Frontend App

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/frontend-capsule/configure.md`
- **Doc type**: How-to guide
- **Slug**: `/products/frontend-capsule/configure`
- **Feature**: Configure a Frontend App
- **Goal**: Expect to see updated capsule parameters and environment variables saved
- **Guide status**: missing (no file at `docs/products/frontend-capsule/configure.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the capsule in the Space
2. Navigate to the relevant tab
3. Complete the documented action
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### configure-ng-1

- **ID**: configure-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/frontend-capsule/configure.md` for Configure a Frontend App.
- **Problem**: `docs/products/frontend-capsule/configure.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see updated capsule parameters and environment variables saved
- **Change**: Create `docs/products/frontend-capsule/configure.md` as a how-to guide with slug `/products/frontend-capsule/configure`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/frontend-capsule/configure.md`
- **Proposed slug**: `/products/frontend-capsule/configure`
- **Goal**: Expect to see updated capsule parameters and environment variables saved
- **Outline**:

```
# Configure a Frontend App
Expect to see updated capsule parameters and environment variables saved

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Manage your capsule
1. **Open the capsule in the Space** — step detail from platform UI labels
2. **Navigate to the relevant tab** — step detail from platform UI labels
3. **Complete the documented action** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/frontend-capsule/configure.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
