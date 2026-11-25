# New guide report: AI Agent Templates — Prebuilt Starting Points

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/agent-capsule/templates.md`
- **Doc type**: How-to guide
- **Slug**: `/products/agent-capsule/templates`
- **Feature**: AI Agent Templates — Prebuilt Starting Points
- **Goal**: Expect to see the agent running with a vector store set up
- **Guide status**: missing (no file at `docs/products/agent-capsule/templates.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Choose an agent template
2. Deploy the agent Capsule
3. Confirm vector store setup

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### templates-ng-1

- **ID**: templates-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/agent-capsule/templates.md` for AI Agent Templates — Prebuilt Starting Points.
- **Problem**: `docs/products/agent-capsule/templates.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see the agent running with a vector store set up
- **Change**: Create `docs/products/agent-capsule/templates.md` as a how-to guide with slug `/products/agent-capsule/templates`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/agent-capsule/templates.md`
- **Proposed slug**: `/products/agent-capsule/templates`
- **Goal**: Expect to see the agent running with a vector store set up
- **Outline**:

```
# Start From an AI Agent Template
Expect to see the agent running with a vector store set up

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Choose an agent template** — step detail from platform UI labels
2. **Deploy the agent Capsule** — step detail from platform UI labels
3. **Confirm vector store setup** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/agent-capsule/templates.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
