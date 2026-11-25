# New guide report: Platform Overview

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/platform.md`
- **Doc type**: Reference
- **Slug**: `/platform/platform`
- **Feature**: Platform Overview
- **Goal**: Expect the reader to understand: How Teams, Spaces, and Capsules fit together on Code Capsules
- **Guide status**: missing (no file at `docs/platform/platform.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Open the reference page
2. Follow each linked guide
3. Confirm each destination loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### platform-ng-1

- **ID**: platform-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/platform.md` for Platform Overview.
- **Problem**: `docs/platform/platform.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: How Teams, Spaces, and Capsules fit together on Code Capsules
- **Change**: Create `docs/platform/platform.md` as a reference with slug `/platform/platform`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/platform.md`
- **Proposed slug**: `/platform/platform`
- **Goal**: Expect the reader to understand: How Teams, Spaces, and Capsules fit together on Code Capsules
- **Outline**:

```
# Platform Overview
Platform Overview index and links to child guides.

## Overview
Slug `/platform/platform`; explain hierarchy: user → Team → Space → Capsule.
Diagram or table: what lives at each level (billing, members, repos, deployments).
Link to what-is-a-team, what-is-a-space, what-is-a-capsule for detail.
No dashboard steps required; conceptual only.

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/platform/platform.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
