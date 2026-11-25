# New guide report: Deploy Paperclip on Code Capsules

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md`
- **Doc type**: Tutorial
- **Slug**: `/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules`
- **Feature**: Deploy Paperclip on Code Capsules
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Prepare prerequisites and repository
2. Follow the tutorial build steps
3. Deploy to Code Capsules
4. Verify the tutorial outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### deploy-paperclip-ai-orchestration-on-code-capsules-ng-1

- **ID**: deploy-paperclip-ai-orchestration-on-code-capsules-ng-1
- **Type**: New guide
- **Title**: Add `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md` for Deploy Paperclip on Code Capsules.
- **Problem**: `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md` as a tutorial with slug `/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md`
- **Proposed slug**: `/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Deploy Paperclip AI Orchestration on Code Capsules
Expect to see capsule building in builds tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Build and deploy
1. **Prepare prerequisites and repository** — step detail from platform UI labels
2. **Follow the tutorial build steps** — step detail from platform UI labels
3. **Deploy to Code Capsules** — step detail from platform UI labels
4. **Verify the tutorial outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
