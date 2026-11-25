# New guide report: Host a Static HTML Website

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/frontend/static-html.md`
- **Doc type**: How-to guide
- **Slug**: `/frontend/static-html`
- **Feature**: Host a Static HTML Website
- **Goal**: Expect to see capsule building in builds tab
- **Guide status**: missing (no file at `docs/frontend/static-html.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Start a Frontend Capsule
2. Choose the capsule type, Team, and Space
3. Choose the plan
4. Connect the repository
5. Configure build settings
6. Create the capsule

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### static-html-ng-1

- **ID**: static-html-ng-1
- **Type**: New guide
- **Title**: Add `docs/frontend/static-html.md` for Host a Static HTML Website.
- **Problem**: `docs/frontend/static-html.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see capsule building in builds tab
- **Change**: Create `docs/frontend/static-html.md` as a how-to guide with slug `/frontend/static-html`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/frontend/static-html.md`
- **Proposed slug**: `/frontend/static-html`
- **Goal**: Expect to see capsule building in builds tab
- **Outline**:

```
# Host a Static HTML Website
Expect to see capsule building in builds tab

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the task
1. **Start a Frontend Capsule** — step detail from platform UI labels
2. **Choose the capsule type, Team, and Space** — step detail from platform UI labels
3. **Choose the plan** — step detail from platform UI labels
4. **Connect the repository** — step detail from platform UI labels
5. **Configure build settings** — step detail from platform UI labels
6. **Create the capsule** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/frontend/static-html.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
