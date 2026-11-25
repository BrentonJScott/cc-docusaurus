# New guide report: Sandbox SDK Quick Start

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/sandbox/quickstart.md`
- **Doc type**: How-to guide
- **Slug**: `/sandbox/quickstart`
- **Feature**: Sandbox SDK Quick Start
- **Goal**: Expect the reader to understand: Install the Sandbox SDK, set your API key, and run your first command in a Firecracker microVM
- **Guide status**: missing (no file at `docs/sandbox/quickstart.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Install the Sandbox SDK
2. Set the API key
3. Run a sandbox command

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### quickstart-ng-1

- **ID**: quickstart-ng-1
- **Type**: New guide
- **Title**: Add `docs/sandbox/quickstart.md` for Sandbox SDK Quick Start.
- **Problem**: `docs/sandbox/quickstart.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect the reader to understand: Install the Sandbox SDK, set your API key, and run your first command in a Firecracker microVM
- **Change**: Create `docs/sandbox/quickstart.md` as a how-to guide with slug `/sandbox/quickstart`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/sandbox/quickstart.md`
- **Proposed slug**: `/sandbox/quickstart`
- **Goal**: Expect the reader to understand: Install the Sandbox SDK, set your API key, and run your first command in a Firecracker microVM
- **Outline**:

```
# Quick Start
Expect the reader to understand: Install the Sandbox SDK, set your API key, and run your first command in a Firecracker microVM

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Run your first sandbox
1. **Install the Sandbox SDK** — step detail from platform UI labels
2. **Set the API key** — step detail from platform UI labels
3. **Run a sandbox command** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/sandbox/quickstart.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
