# Format report: what-is-a-capsule

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/capsules/what-is-a-capsule.md
**Doc type:** Explanation
**Template:** explanation_format.md

**Feature:** Understand capsules

**Goal:** Expect to know each capsule type

**Format check:** fail
**Walkthrough:** not applicable

## Content list (Check 1)

1. [explain] ((body)) Capsules run apps; build/deploy.
2. [instruction] ((body)) Pull & Deploy, Logs, turn off toggle.
3. [remove] ((body)) Image; codecapsules.io.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (understanding) | fail | Instructions present; capsule types not covered for goal. |
| Prerequisites | not applicable |  |
| Links | fail | Broken /products/docker-capsule/image/deploy/; missing image. |
| Format and style | fail | Missing Explanation sections and Related. |

## Tickets

### what-is-a-capsule-1: Rewrite as Explanation with capsule types.

- **Type:** Wrong doc type
- **Title:** Rewrite as Explanation with capsule types.
- **Problem:** Operational steps instead of type overview.
- **Rule:** FORMAT.MD Check 1 Explanation
- **Change:** ## How it works covers Frontend, Backend, Docker, etc.; move deploy steps to how-tos in Related.
- **Done when:** Goal "each capsule type" met.

### what-is-a-capsule-2: Move Pull & Deploy and toggle instructions.

- **Type:** Move to another doc
- **Title:** Move Pull & Deploy and toggle instructions.
- **Problem:** Dashboard instructions in concept page.
- **Rule:** explanation_format.md How it works
- **Change:** Link capsule how-to and Docker deploy guide.
- **Done when:** No imperative UI steps.

### what-is-a-capsule-3: Fix broken product link and image.

- **Type:** Broken link
- **Title:** Fix broken product link and image.
- **Problem:** Missing deploy doc and teamspacecapsule.png.
- **Rule:** Check 3
- **Change:** Remove or fix links.
- **Done when:** Links pass.


## Proposed outline

## Overview
## Why it matters
## How it works (capsule types)
## When to use it
## Related
