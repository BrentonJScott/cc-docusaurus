# New guide report: Deploy an AI Agent

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/agent-capsule/deploy.md`
- **Doc type**: How-to guide
- **Slug**: `/products/agent-capsule/deploy`
- **Feature**: Deploy an AI Agent
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/products/agent-capsule/deploy.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Space and start capsule wizard
2. Choose capsule type, Team, and Space
3. Complete wizard and create the Capsule
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-ng-1

- **ID**: deploy-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/agent-capsule/deploy.md` for Deploy an AI Agent.
- **Problem**: `docs/products/agent-capsule/deploy.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/products/agent-capsule/deploy.md` as a how-to guide with slug `/products/agent-capsule/deploy`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/agent-capsule/deploy.md`
- **Proposed slug**: `/products/agent-capsule/deploy`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Deploy Your AI Agent
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

- **Done when**: The guide file exists at `docs/products/agent-capsule/deploy.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
