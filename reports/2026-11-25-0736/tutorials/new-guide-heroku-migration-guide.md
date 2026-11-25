# New guide report: Migrate From Heroku to Code Capsules: 2026 Guide

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/tutorials/heroku-migration-guide.md`
- **Doc type**: Tutorial
- **Slug**: `/tutorials/heroku-migration-guide`
- **Feature**: Migrate From Heroku to Code Capsules: 2026 Guide
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Guide status**: missing (no file at `docs/tutorials/heroku-migration-guide.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Prepare prerequisites and repository
2. Follow the tutorial build steps
3. Deploy to Code Capsules
4. Verify the tutorial outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### heroku-migration-guide-ng-1

- **ID**: heroku-migration-guide-ng-1
- **Type**: New guide
- **Title**: Add `docs/tutorials/heroku-migration-guide.md` for Migrate From Heroku to Code Capsules: 2026 Guide.
- **Problem**: `docs/tutorials/heroku-migration-guide.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the guide's described outcome on test-platform.codecapsules.io
- **Change**: Create `docs/tutorials/heroku-migration-guide.md` as a tutorial with slug `/tutorials/heroku-migration-guide`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/tutorials/heroku-migration-guide.md`
- **Proposed slug**: `/tutorials/heroku-migration-guide`
- **Goal**: Expect the guide's described outcome on test-platform.codecapsules.io
- **Outline**:

```
# Move Your Heroku Apps to Code Capsules, Step by Step
Expect the guide's described outcome on test-platform.codecapsules.io

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

- **Done when**: The guide file exists at `docs/tutorials/heroku-migration-guide.md`, passes the format check for a tutorial, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
