# Format report: how-do-i-add-remove-a-space

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/spaces/how-do-i-add-remove-a-space.md
**Doc type:** How-to guide
**Template:** how_to_format.md

**Feature:** Add and remove a space

**Goal:** Expect to see the space created and then removed

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [goal] (## Add a Space) + → **New Space**, team, name, location, **Create Space**.
2. [goal] (## Remove a Space) Details → **Remove Space**.
3. [prerequisite] (## Remove a Space) Remove all capsules first (warning).

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (goal steps) | fail | Steps split across sections; position-based + icon wording. |
| Prerequisites | fail | No DocCardList for account/team. |
| Links | fail | Two missing gitbook images. |
| Format and style | fail | Missing doc_version, Troubleshooting, template headings. |

## Tickets

### how-do-i-add-remove-a-space-1: Restructure to how-to template.

- **Type:** Format fix
- **Title:** Restructure to how-to template.
- **Problem:** Legacy ## Add/Remove sections.
- **Rule:** how_to_format.md
- **Change:** Prerequisites; ## Create and remove your space; capsule removal as prerequisite card; Troubleshooting.
- **Done when:** Re-check passes.

### how-do-i-add-remove-a-space-2: Remove missing images.

- **Type:** Broken link
- **Title:** Remove missing images.
- **Problem:** space-name.png, remove-space.png missing in static/.
- **Rule:** writing_style.md
- **Change:** Remove images.
- **Done when:** Check 3 passes.


## Proposed outline

## Prerequisites
## Create and remove your space
## Troubleshooting
