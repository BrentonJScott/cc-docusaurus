# Exploratory — Create Svelte frontend capsule

- **Run:** 2026-11-24T06:40:42Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

No Svelte how-to on `main`. Checked Quick Start for a **Svelte** entry.

## Actions taken

1. Logged in; opened `/dash/overview/quick-start`.
2. Searched visible Quick Start copy for **Svelte** — not present.
3. Did not complete a deploy without an entry point or guide values.

## Guide alignment

| # | Status | Expected | What happened | Screenshot |
|---|--------|----------|---------------|------------|
| 1 | fail | **Svelte** Quick Start card (or doc-named path) | No Svelte card | `explore-svelte/failure-step-1-no-card.jpg` |
| 2 | blocked | Open Svelte-oriented wizard | Blocked by missing card | — |
| 3 | blocked | **Builds** in progress | Blocked | — |

## Mismatches / issues

- `DOCUMENTED_FEATURES.MD` lists Svelte; Quick Start offers **Angular**, **React**, **Vue**, and **Static HTML** only in this run.

## Suggested fixes

1. Add a **Svelte** Quick Start card on the platform, or document the supported alternate path (e.g. **Create New Capsule** if restored).
2. Add `docs/guides/svelte.md` following `how_to_format.md` once the entry point is fixed.