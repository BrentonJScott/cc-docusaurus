# Exploratory — Create NextJS backend capsule

- **Run:** 2026-11-24T07:09:07Z
- **Guide on main:** none
- **Target:** https://test-platform.codecapsules.io
- **Manifest goals reached:** no

## Guide choice

`DOCUMENTED_FEATURES.MD` names **Create NextJS backend capsule**. No Next.js how-to on `main`. Explored Quick Start and backend **New Capsule** wizard.

## Setup (`not testable`)

| Action | Status | Notes |
|--------|--------|-------|
| Test account | not testable | Automation credentials (not documented in repo). |

## Actions taken

1. Logged in; Quick Start has **Node.js** (backend) but no **Next.js** / **NextJS** card label (`hasNext: false` on page text).
2. Clicked **Deploy Now** on the **Node.js** Quick Start card; reached `/new/capsule?capsuleType=backend`.
3. On **Capsule Details**, **Backend** copy reads "Node, Java, Go or Python deployments" — no **Next.js** on the first screen.
4. Did not complete deploy (no doc for Next.js runtime, repo, or build settings).

## Guide alignment

| # | Status | Expected (inferred) | What happened | Screenshot |
|---|--------|---------------------|---------------|------------|
| 1 | fail | Quick Start or docs name Next.js backend entry | No Next.js card label | — |
| 2 | pass | Backend wizard reachable via Node.js **Deploy Now** | `capsuleType=backend` loads | `explore-nextjs/step-1-node-wizard.jpg` |
| 3 | fail | Wizard names Next.js as a backend option | First screen lists Node/Java/Go/Python only | `explore-nextjs/step-1-node-wizard.jpg` |
| 4 | blocked | **Builds** shows build in progress | No guide path | — |

## Mismatches / issues

- Manifest says **backend** NextJS capsule; platform does not advertise Next.js on Quick Start or on the first backend wizard screen.
- Node.js **Deploy Now** is the closest backend entry but does not clarify Next.js vs generic Node.

## Suggested fixes

1. Clarify in `DOCUMENTED_FEATURES.MD` whether Next.js is deployed as **Backend** (Node) or **Frontend** on this platform.
2. Add a how-to with the real entry point, runtime preset, demo repo, build command, and plan names as shown on test-platform.
3. If Next.js is supported only via Node, state that explicitly in the doc title and steps.