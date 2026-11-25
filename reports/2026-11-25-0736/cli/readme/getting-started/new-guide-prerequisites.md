# New guide report: CLI Prerequisites & Requirements

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/cli/readme/getting-started/prerequisites.md`
- **Doc type**: Reference
- **Slug**: `/cli/readme/getting-started/prerequisites`
- **Feature**: CLI Prerequisites & Requirements
- **Goal**: Expect every requirement installed before installing the CLI
- **Guide status**: missing (no file at `docs/cli/readme/getting-started/prerequisites.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Review system requirements
2. Install required tools
3. Verify versions

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### prerequisites-ng-1

- **ID**: prerequisites-ng-1
- **Type**: New guide
- **Title**: Add `docs/cli/readme/getting-started/prerequisites.md` for CLI Prerequisites & Requirements.
- **Problem**: `docs/cli/readme/getting-started/prerequisites.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect every requirement installed before installing the CLI
- **Change**: Create `docs/cli/readme/getting-started/prerequisites.md` as a reference with slug `/cli/readme/getting-started/prerequisites`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/cli/readme/getting-started/prerequisites.md`
- **Proposed slug**: `/cli/readme/getting-started/prerequisites`
- **Goal**: Expect every requirement installed before installing the CLI
- **Outline**:

```
# What You Need Before Installing the CLI
CLI Prerequisites & Requirements index and links to child guides.

## Overview
Brief purpose and link table to child guides (each `/docs/...` path).

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/cli/readme/getting-started/prerequisites.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
