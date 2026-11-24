# Exploratory — Create Svelte frontend capsule

- **Run:** 2026-11-24T07:09:07Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

No Svelte how-to on `main`. Explored Quick Start and the **+** add menu.

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Test account | not testable | Automation test account. |

## Actions taken

1. Logged in at `/dash/overview/quick-start`.
2. Scanned Quick Start card list; no **Svelte** heading (`hasSvelte: false` on page text).
3. Opened the **+** menu; **New Capsule** is available but no **Svelte** option appears in the visible UI.
4. Did not deploy (no entry point named in docs or on Quick Start).

## Guide alignment

| # | Status | Expected (inferred) | What happened | Screenshot |
|---|--------|---------------------|---------------|------------|
| 1 | fail | Quick Start offers **Svelte** (or docs name the entry) | No Svelte card | `explore-svelte/step-1-no-svelte-card.jpg` |
| 2 | blocked | Complete wizard and reach **Builds** | No Svelte entry | — |

## Mismatches / issues

- `DOCUMENTED_FEATURES.MD` lists **Create Svelte frontend capsule**; neither the docs repo nor Quick Start exposes Svelte in this run.

## Suggested fixes

1. Confirm whether Svelte is supported on test-platform; if yes, add a Quick Start card or document the actual entry (e.g. generic **Frontend** wizard).
2. Add a how-to per `how_to_format.md` once the UI path and demo repo are confirmed.