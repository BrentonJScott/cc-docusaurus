# New guide report: Configure an AI Agent

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/products/agent-capsule/configure.md`
- **Doc type**: How-to guide
- **Slug**: `/products/agent-capsule/configure`
- **Feature**: Configure an AI Agent
- **Goal**: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Guide status**: missing (no file at `docs/products/agent-capsule/configure.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open Configure
2. Update capsule settings
3. Save configuration

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### configure-ng-1

- **ID**: configure-ng-1
- **Type**: New guide
- **Title**: Add `docs/products/agent-capsule/configure.md` for Configure an AI Agent.
- **Problem**: `docs/products/agent-capsule/configure.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Change**: Create `docs/products/agent-capsule/configure.md` as a how-to guide with slug `/products/agent-capsule/configure`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/products/agent-capsule/configure.md`
- **Proposed slug**: `/products/agent-capsule/configure`
- **Goal**: Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Outline**:

```
# Configure Your AI Agent
Expect to see updated capsule parameters and environment variables saved and a data capsule connected

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Configure your capsule
1. **Open Configure** — step detail from platform UI labels
2. **Update capsule settings** — step detail from platform UI labels
3. **Save configuration** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/products/agent-capsule/configure.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
