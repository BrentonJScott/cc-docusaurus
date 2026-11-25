# New guide report: Deploy Business Automation Agents

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/agentic-automation/deployment.md`
- **Doc type**: How-to guide
- **Slug**: `/agentic-automation/deployment`
- **Feature**: Deploy Business Automation Agents
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/agentic-automation/deployment.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Connect a repository
2. Deploy the automation agent
3. Confirm capsule builds

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deployment-ng-1

- **ID**: deployment-ng-1
- **Type**: New guide
- **Title**: Add `docs/agentic-automation/deployment.md` for Deploy Business Automation Agents.
- **Problem**: `docs/agentic-automation/deployment.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/agentic-automation/deployment.md` as a how-to guide with slug `/agentic-automation/deployment`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/agentic-automation/deployment.md`
- **Proposed slug**: `/agentic-automation/deployment`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Put Your Automation Agents Into Production
Expect to see capsule building in builds tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Connect a repository** — step detail from platform UI labels
2. **Deploy the automation agent** — step detail from platform UI labels
3. **Confirm capsule builds** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/agentic-automation/deployment.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
