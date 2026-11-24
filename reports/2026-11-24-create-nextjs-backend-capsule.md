# Exploratory — Create NextJS backend capsule

- **Run:** 2026-11-24T06:13:03Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Goal reached:** no

## Guide choice

No Next.js how-to on `main`. Quick Start has no **Next.js** card; used **Node.js** backend wizard as the closest backend entry (`capsuleType=backend`).

## Actions taken

1. Logged in; surveyed Quick Start (no **Next.js** label).
2. Opened `/new/capsule?capsuleType=backend`.
3. Observed **Capsule Details** defaulting to **Backend** (“Node, Java, Go or Python deployments”).

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | fail | A published Next.js backend guide | No doc file | — |
| 2 | fail | Steps naming Next.js stack | Only generic **Backend** capsule type | `explore-nextjs/step-1-wizard.jpg` |
| 3 | blocked | Build appears under **Builds** | No repo/build values in docs | — |

## Mismatches / issues

- Manifest feature has no matching guide.
- Platform exposes **Node.js** on Quick Start, not **Next.js** by name.

## Suggested fixes

Publish a how-to titled for Next.js backend deployment, or link the feature to the Node.js path explicitly. Include backend wizard steps, demo repo, start command, and **Builds** verification.