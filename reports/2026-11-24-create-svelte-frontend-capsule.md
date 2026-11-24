# Exploratory — Create Svelte frontend capsule

- **Run:** 2026-11-24T06:52:19Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

No Svelte how-to on `main`. Searched Quick Start for a **Svelte** entry.

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Test account | not testable | Automation credentials. |

## Actions taken

1. Logged in to `/dash/overview/quick-start`.
2. Scanned Quick Start cards: **Angular**, **React**, **Vue**, **Static HTML** present; **Svelte** not in visible card list.
3. Did not open a Svelte-specific wizard (no entry point found).

## Guide alignment

| # | Status | Expected (inferred) | What happened | Screenshot |
|---|--------|---------------------|---------------|------------|
| 1 | fail | Quick Start or docs name **Svelte** | No **Svelte** card text on Quick Start | `explore-svelte/step-1-quick-start.jpg` |
| 2 | blocked | Deploy flow to **Builds** | No entry point without guide or card | — |

## Mismatches / issues

- `DOCUMENTED_FEATURES.MD` lists **Create Svelte frontend capsule** but there is no doc and no Quick Start card in this run.
- `docs/b/index.md` marketing copy still mentions Svelte support.

## Suggested fixes

1. Add a Quick Start card or document the real path (e.g. generic **Create New Capsule** plus framework picker) if Svelte is supported.
2. Add a Svelte how-to once entry point and demo repo names are confirmed on test-platform.