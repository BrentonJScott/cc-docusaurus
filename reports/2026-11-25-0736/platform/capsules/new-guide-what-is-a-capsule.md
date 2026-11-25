# New guide report: Hosting Environments (Containers) Explained

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/capsules/what-is-a-capsule.md`
- **Doc type**: Explanation
- **Slug**: `/platform/capsules/what-is-a-capsule`
- **Feature**: Hosting Environments (Containers) Explained
- **Goal**: Expect to know each capsule type
- **Guide status**: missing (no file at `docs/platform/capsules/what-is-a-capsule.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### what-is-a-capsule-ng-1

- **ID**: what-is-a-capsule-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/capsules/what-is-a-capsule.md` for Hosting Environments (Containers) Explained.
- **Problem**: `docs/platform/capsules/what-is-a-capsule.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to know each capsule type
- **Change**: Create `docs/platform/capsules/what-is-a-capsule.md` as a explanation with slug `/platform/capsules/what-is-a-capsule`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/capsules/what-is-a-capsule.md`
- **Proposed slug**: `/platform/capsules/what-is-a-capsule`
- **Goal**: Expect to know each capsule type
- **Outline**:

```
# Hosting Environments (Containers) Explained
Expect to know each capsule type

## Overview
Table of Backend, Frontend, Docker, Database, Storage, WordPress, Agent.
When to pick each; link to product index pages.

## Next steps
DocCardList to related how-to guides under `/docs/...`.
```

- **Done when**: The guide file exists at `docs/platform/capsules/what-is-a-capsule.md`, passes the format check for a explanation, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
