# New guide report: Host a Java Application

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/backend/java.md`
- **Doc type**: How-to guide
- **Slug**: `/backend/java`
- **Feature**: Host a Java Application
- **Goal**: Expect to Deploy the Java demo app to a Backend Capsule and see it building in the Builds tab
- **Guide status**: missing (no file at `docs/backend/java.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Start a Backend Capsule
2. Choose the capsule type, Team, and Space
3. Choose the plan
4. Connect the repository
5. Set the run command
6. Create the capsule

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### java-ng-1

- **ID**: java-ng-1
- **Type**: New guide
- **Title**: Add `docs/backend/java.md` for Host a Java Application.
- **Problem**: `docs/backend/java.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy the Java demo app to a Backend Capsule and see it building in the Builds tab
- **Change**: Create `docs/backend/java.md` as a how-to guide with slug `/backend/java`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/backend/java.md`
- **Proposed slug**: `/backend/java`
- **Goal**: Expect to Deploy the Java demo app to a Backend Capsule and see it building in the Builds tab
- **Outline**:

```
# Host a Java Application
Expect to Deploy the Java demo app to a Backend Capsule and see it building in the Builds tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the task
1. **Start a Backend Capsule** — step detail from platform UI labels
2. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
3. **Choose the plan** — step detail from platform UI labels
4. **Connect the repository** — step detail from platform UI labels
5. **Set the run command** — step detail from platform UI labels
6. **Create the capsule** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/backend/java.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
