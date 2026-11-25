# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/full-stack/next.js/next.js-+-express.js.md`
- **Doc type:** Explanation (should be How-to guide or Tutorial)
- **Template:** `explanation_format.md` (actual); should be `how_to_format.md` or `tutorial_format.md`
- **Feature:** Deploy Next.js with Express.js
- **Goal:** Expect the reader to understand: A walkthrough on how to deploy a Next.js and Express.js application from GitHub
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|---|---|---|
| 1 | explain | `## Overview` | Demo repo runs Next.js UI and Express API in one Backend Capsule. |
| 2 | explain | `## Why it matters` | Reuse Express middleware without Next.js API routes. |
| 3 | explain | `## How it works` | Clone, install, start script; one public URL. |
| 4 | explain | `## When to use it` | Comparison table vs Next.js API routes only. |
| 5 | remove | `## Related` | Links to guides; no deploy steps on this page. |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Documented feature expects a deploy walkthrough; page is Explanation with no goal steps. |
| Check 2: Prerequisites | fail | Wrong doc type: no Prerequisites section. |
| Check 3: Links | pass | Related links resolve. |
| Check 4: Format and style | fail | Matches `explanation_format.md` but not the feature's How-to/Tutorial goal in `DOCUMENTED_FEATURES.md`. |

## Tickets

### next.js-+-express.js-1

- **ID:** next.js-+-express.js-1
- **Type:** Wrong doc type
- **Title:** Publish a How-to guide for deploying Next.js with Express.js
- **Problem:** The page explains architecture but includes no steps to deploy `codecapsules-io/nextjs-expressjs-demo` from GitHub.
- **Rule:** FORMAT.MD Step 1: feature goal requires deploy steps, not Explanation-only layout
- **Change:** Either rewrite this slug as a How-to guide (`## Prerequisites`, `## Deploy your Next.js + Express app`, numbered wizard steps, Troubleshooting) and move the comparison content to a separate Explanation, or update `DOCUMENTED_FEATURES.md` to list an Explanation feature with an understanding goal.
- **Done when:** A reader can follow steps on this feature's guide to deploy the demo and see a build on the **Deploy** tab.

## Proposed outline

How-to: Prerequisites (account, fork `nextjs-expressjs-demo`, Space, GitHub), `## Deploy your Next.js and Express app` through Backend Capsule creation and build check, Troubleshooting. Optional separate Explanation for architecture comparison.