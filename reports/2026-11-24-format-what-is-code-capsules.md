# Format report: what-is-code-capsules

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/what-is-code-capsules.md
**Doc type:** Explanation
**Template:** explanation_format.md

**Feature:** Understand Code Capsules

**Goal:** Expect to know the platform's key features

**Format check:** fail
**Walkthrough:** not applicable

## Content list (Check 1)

1. [explain] (# What Is Code Capsules?) PaaS intro.
2. [remove] (## Key Features) Marketing subsections.
3. [remove] ((body)) External blog link for MEAN/MERN/MEVN.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (understanding) | fail | Key features as marketing bullets; missing Why/How/When template sections. |
| Prerequisites | not applicable |  |
| Links | fail | codecapsules.io blog URL instead of docs. |
| Format and style | fail | No DocCardList Related; missing doc_version. |

## Tickets

### what-is-code-capsules-1: Rewrite to Explanation template.

- **Type:** Format fix
- **Title:** Rewrite to Explanation template.
- **Problem:** ### Key Features marketing list.
- **Rule:** explanation_format.md
- **Change:** Map features into ## How it works and ## When to use it; ## Related to hosting indexes.
- **Done when:** Required sections present.

### what-is-code-capsules-2: Replace external blog link.

- **Type:** Broken link
- **Title:** Replace external blog link.
- **Problem:** https://www.codecapsules.io/blog/... in body.
- **Rule:** FORMAT.MD Check 3
- **Change:** Link in-repo frontend tutorial or remove.
- **Done when:** No codecapsules.io doc links.


## Proposed outline

## Overview
## Why it matters
## How it works (platform capabilities)
## When to use it
## Related
