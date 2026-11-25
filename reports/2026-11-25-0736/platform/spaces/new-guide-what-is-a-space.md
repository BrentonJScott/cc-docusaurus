# New guide report: What Is a Space?

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/spaces/what-is-a-space.md`
- **Doc type**: Explanation
- **Slug**: `/platform/spaces/what-is-a-space`
- **Feature**: What Is a Space?
- **Goal**: Expect to know how spaces relate to capsules
- **Guide status**: missing (no file at `docs/platform/spaces/what-is-a-space.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### what-is-a-space-ng-1

- **ID**: what-is-a-space-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/spaces/what-is-a-space.md` for What Is a Space?.
- **Problem**: `docs/platform/spaces/what-is-a-space.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to know how spaces relate to capsules
- **Change**: Create `docs/platform/spaces/what-is-a-space.md` as a explanation with slug `/platform/spaces/what-is-a-space`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/spaces/what-is-a-space.md`
- **Proposed slug**: `/platform/spaces/what-is-a-space`
- **Goal**: Expect to know how spaces relate to capsules
- **Outline**:

```
# What Is a Space?
Expect to know how spaces relate to capsules

## Overview
Space as deployment environment within a Team; holds capsules; region selection.
Contrast with Team (org) and Capsule (app).

## Next steps
DocCardList to related how-to guides under `/docs/...`.
```

- **Done when**: The guide file exists at `docs/platform/spaces/what-is-a-space.md`, passes the format check for a explanation, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
