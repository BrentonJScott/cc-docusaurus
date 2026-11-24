# Format report: what-is-a-team

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/teams/what-is-a-team.md
**Doc type:** Explanation
**Template:** explanation_format.md

**Feature:** Understand teams

**Goal:** Expect to know how teams relate to spaces

**Format check:** fail
**Walkthrough:** not applicable

## Content list (Check 1)

1. [explain] (# What Is a Team?) Diagram and hierarchy with Spaces/Capsules.
2. [explain] ((body)) Team as group of developers sharing Spaces/Capsules.
3. [fact] ((body)) Payment method and billing on Team.
4. [remove] ((body)) Image; link to codecapsules.io marketing site.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (understanding) | fail | Missing ## Overview, ## Why it matters, ## How it works, ## When to use it; billing facts without Reference move. |
| Prerequisites | not applicable |  |
| Links | fail | Missing image; https://www.codecapsules.io/ should be in-docs link where possible. |
| Format and style | fail | No DocCardList, no ## Related; missing doc_version. |

## Tickets

### what-is-a-team-1: Rewrite as Explanation template.

- **Type:** Wrong doc type
- **Title:** Rewrite as Explanation template.
- **Problem:** Short concept blurb only.
- **Rule:** explanation_format.md Sections
- **Change:** Add required sections; relate teams to Spaces in ## How it works; ## Related with how-tos.
- **Done when:** All mandatory ## sections have content.

### what-is-a-team-2: Move billing facts to billing Reference.

- **Type:** Move to another doc
- **Title:** Move billing facts to billing Reference.
- **Problem:** Credit card billing sentence.
- **Rule:** FORMAT.MD Check 1 Explanation
- **Change:** Keep conceptual billing link in Related; detail on pricing/billing pages.
- **Done when:** No standalone pricing facts without Reference target.

### what-is-a-team-3: Fix image and external site link.

- **Type:** Broken link
- **Title:** Fix image and external site link.
- **Problem:** teamspacecapsule.png missing; codecapsules.io homepage link.
- **Rule:** FORMAT.MD Check 3
- **Change:** Remove image; link /docs/platform/what-is-code-capsules or similar.
- **Done when:** Internal links/images only.


## Proposed outline

## Overview
## Why it matters
## How it works (Teams → Spaces)
## When to use it
## Related
