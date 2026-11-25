# New guide report: Deploy a Container Frontend

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/frontend-capsule/container/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/frontend-capsule/container/deploy`
- **Feature**: Deploy a Container Frontend
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/products/frontend-capsule/container/deploy.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open Space and start capsule wizard
2. Choose capsule type, Team, and Space
3. Complete wizard and create the Capsule
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/frontend-capsule/container/deploy.md` for Deploy a Container Frontend.
- **Problem**: `docs/products/frontend-capsule/container/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/products/frontend-capsule/container/deploy.md` as a how-to guide with slug `/products/frontend-capsule/container/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/frontend-capsule/container/deploy.md`
- **Proposed slug**: `/products/frontend-capsule/container/deploy`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Deploy a Container Frontend
Expect to see capsule building in builds tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Deploy your capsule
1. **Open Space and start capsule wizard** — step detail from platform UI labels
2. **Choose capsule type, Team, and Space** — step detail from platform UI labels
3. **Complete wizard and create the Capsule** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/frontend-capsule/container/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
