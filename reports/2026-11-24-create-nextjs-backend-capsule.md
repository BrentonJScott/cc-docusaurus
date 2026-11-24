# Exploratory — Create NextJS backend capsule

- **Run:** 2026-11-24T06:40:42Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

`DOCUMENTED_FEATURES.MD` names **Create NextJS backend capsule**. No Next.js how-to exists on `main`. Explored Quick Start and the backend **New Capsule** wizard.

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Test account | not testable | Reused automation credentials. |

## Actions taken

1. Logged in; Quick Start shows **Angular**, **React**, **Vue**, and **Static HTML** — no **Next.js** card.
2. Opened `/new/capsule?capsuleType=backend`; **Capsule Details** loaded.
3. Scanned wizard copy for **Next.js** / **NextJS**; none found on the first screen.

## Guide alignment

| # | Status | Expected (without guide) | What happened | Screenshot |
|---|--------|--------------------------|---------------|------------|
| 1 | fail | Quick Start or docs name a Next.js entry | No Next.js card on Quick Start | — |
| 2 | pass | Backend wizard reachable | `capsuleType=backend` opens wizard | `explore-nextjs/step-1-backend-wizard.jpg` |
| 3 | fail | Framework preset includes Next.js (backend or full-stack) | `mentionsNext: false` on first wizard screen | — |
| 4 | blocked | **Builds** tab shows build in progress | No guide and no clear Next.js path | — |

## Mismatches / issues

- Manifest feature says **backend** NextJS capsule; platform Quick Start does not advertise Next.js.
- Backend wizard first step does not mention Next.js in visible copy.
- No doc on `main` to define repo, runtime, or deploy steps.

## Suggested fixes

1. Clarify in `DOCUMENTED_FEATURES.MD` whether Next.js is a **frontend** or **backend** capsule on this platform.
2. Add a how-to (`docs/guides/nextjs.md` or split frontend/server docs) with the real entry point (Quick Start card, framework picker, or **Create New Capsule** path).
3. Document build command, branch, and plan names as they appear on test-platform.