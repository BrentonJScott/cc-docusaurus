# Format report: what-regions-does-code-capsules-support

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/regions/what-regions-does-code-capsules-support.md
**Doc type:** Reference
**Template:** reference_format.md

**Feature:** View available regions

**Goal:** Expect to see each supported region

**Format check:** fail
**Walkthrough:** not applicable

## Content list (Check 1)

1. [fact] ((body)) Regions chosen at Space creation.
2. [fact] ((body)) SA, Europe, UK list (bullet, not table).
3. [remove] ((body)) Screenshot.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (facts) | fail | Recommendation prose; regions not in table with consistent columns. |
| Prerequisites | not applicable |  |
| Links | fail | region-options.jpg missing. |
| Format and style | fail | No Overview, Related DocCardList, doc_version. |

## Tickets

### what-regions-does-code-capsules-support-1: Apply Reference template.

- **Type:** Format fix
- **Title:** Apply Reference template.
- **Problem:** Bullets and image only.
- **Rule:** reference_format.md
- **Change:** ## Overview; ## Regions table (name, location); ## Related to space creation how-to.
- **Done when:** Reference template satisfied.

### what-regions-does-code-capsules-support-2: Remove missing region screenshot.

- **Type:** Broken link
- **Title:** Remove missing region screenshot.
- **Problem:** region-options.jpg not in static/.
- **Rule:** writing_style.md
- **Change:** Remove image.
- **Done when:** Check 3 passes.


## Proposed outline

## Overview
## Supported regions (table)
## Related
