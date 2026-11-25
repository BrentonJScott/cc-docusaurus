# New guide report: CLI Global Options Reference

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/cli/readme/global-options.md`
- **Doc type**: Reference
- **Slug**: `/cli/readme/global-options`
- **Feature**: CLI Global Options Reference
- **Goal**: Expect to see every global option
- **Guide status**: missing (no file at `docs/cli/readme/global-options.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Open the CLI reference
2. Review global flags
3. Confirm option behavior

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### global-options-ng-1

- **ID**: global-options-ng-1
- **Type**: New guide
- **Title**: Add `docs/cli/readme/global-options.md` for CLI Global Options Reference.
- **Problem**: `docs/cli/readme/global-options.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to see every global option
- **Change**: Create `docs/cli/readme/global-options.md` as a reference with slug `/cli/readme/global-options`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/cli/readme/global-options.md`
- **Proposed slug**: `/cli/readme/global-options`
- **Goal**: Expect to see every global option
- **Outline**:

```
# Global Options for Every Command
CLI Global Options Reference index and links to child guides.

## Overview
Brief purpose and link table to child guides (each `/docs/...` path).

## Related
DocCardList to parent product pages.
```

- **Done when**: The guide file exists at `docs/cli/readme/global-options.md`, passes the format check for a reference, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
