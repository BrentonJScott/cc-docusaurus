# New guide report: What Is Code Capsules? PaaS Overview

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/what-is-code-capsules.md`
- **Doc type**: Explanation
- **Slug**: `/platform/what-is-code-capsules`
- **Feature**: What Is Code Capsules? PaaS Overview
- **Goal**: Expect to know the platform's key features
- **Guide status**: missing (no file at `docs/platform/what-is-code-capsules.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### what-is-code-capsules-ng-1

- **ID**: what-is-code-capsules-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/what-is-code-capsules.md` for What Is Code Capsules? PaaS Overview.
- **Problem**: `docs/platform/what-is-code-capsules.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to know the platform's key features
- **Change**: Create `docs/platform/what-is-code-capsules.md` as a explanation with slug `/platform/what-is-code-capsules`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/what-is-code-capsules.md`
- **Proposed slug**: `/platform/what-is-code-capsules`
- **Goal**: Expect to know the platform's key features
- **Outline**:

```
# What Is Code Capsules? PaaS Overview
Expect to know the platform's key features

## Overview
Slug `/platform/what-is-code-capsules`.
Cover Git deploy, capsule types, scaling, regions, observability, teams.
CTA links to create account and first deploy guides in `/docs/shared`.

## Next steps
DocCardList to related how-to guides under `/docs/...`.
```

- **Done when**: The guide file exists at `docs/platform/what-is-code-capsules.md`, passes the format check for a explanation, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
