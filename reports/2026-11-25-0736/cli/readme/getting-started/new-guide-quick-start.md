# New guide report: CLI Quick Start Guide

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/cli/readme/getting-started/quick-start.md`
- **Doc type**: How-to guide
- **Slug**: `/cli/readme/getting-started/quick-start`
- **Feature**: CLI Quick Start Guide
- **Goal**: Expect to log in and run a first command
- **Guide status**: missing (no file at `docs/cli/readme/getting-started/quick-start.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Install the CLI
2. Log in
3. Run a first command

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### quick-start-ng-1

- **ID**: quick-start-ng-1
- **Type**: New guide
- **Title**: Add `docs/cli/readme/getting-started/quick-start.md` for CLI Quick Start Guide.
- **Problem**: `docs/cli/readme/getting-started/quick-start.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to log in and run a first command
- **Change**: Create `docs/cli/readme/getting-started/quick-start.md` as a how-to guide with slug `/cli/readme/getting-started/quick-start`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/cli/readme/getting-started/quick-start.md`
- **Proposed slug**: `/cli/readme/getting-started/quick-start`
- **Goal**: Expect to log in and run a first command
- **Outline**:

```
# Your First Deploy From the Terminal
Expect to log in and run a first command

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Quick start
1. **Install the CLI** — step detail from platform UI labels
2. **Log in** — step detail from platform UI labels
3. **Run a first command** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/cli/readme/getting-started/quick-start.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
