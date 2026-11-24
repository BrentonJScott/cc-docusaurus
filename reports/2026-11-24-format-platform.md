# Format report: platform

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/platform.md
**Doc type:** Explanation
**Template:** explanation_format.md

**Feature:** View platform overview

**Goal:** Expect every link on the page to open an existing page

**Format check:** fail
**Walkthrough:** not applicable

## Content list (Check 1)

1. [explain] ((body)) Teams, Spaces, Capsules descriptions.
2. [explain] ((body)) Simple vs complex project example.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (understanding) | fail | No template sections; few links for index-style goal. |
| Prerequisites | not applicable |  |
| Links | fail | Images missing; codecapsules.io homepage. |
| Format and style | fail | Missing Overview/Related/doc_version. |

## Tickets

### platform-1: Align with Explanation or index pattern.

- **Type:** Format fix
- **Title:** Align with Explanation or index pattern.
- **Problem:** Narrative only; goal expects link hub.
- **Rule:** explanation_format.md
- **Change:** Either add ## Related DocCardList to all platform concepts + how-tos, or merge with platform index.
- **Done when:** Goal and template reconciled.

### platform-2: Remove missing images.

- **Type:** Broken link
- **Title:** Remove missing images.
- **Problem:** teamspacecapsule.png, simple-and-complex-projects.png missing.
- **Rule:** writing_style.md
- **Change:** Remove images.
- **Done when:** Check 3 passes.


## Proposed outline

## Overview
## Why it matters
## How it works
## When to use it
## Related (all platform links)
