# Format report: how-do-i-add-remove-stop-capsules

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/capsules/how-do-i-add-remove-stop-capsules.md
**Doc type:** How-to guide
**Template:** how_to_format.md

**Feature:** Add, remove and stop a capsule

**Goal:** Expect to see the capsule added, turned off and removed

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [goal] (## Add a Capsule) Wizard through type, plan, repo, create.
2. [remove] (## Add a Capsule) Long repo/Docker digressions, images.
3. [goal] (## Remove a Capsule) Remove flow with confirmation.
4. [goal] (## Turn Off a Capsule) Toggle switch.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (goal steps) | fail | Multiple ## task sections with ### sub-steps; not one numbered list; values not exact. |
| Prerequisites | fail | Git/Space/account not in Prerequisites cards. |
| Links | fail | /products/docker-capsule/image/deploy/ missing; seven images missing. |
| Format and style | fail | Missing doc_version, admonitions/images in steps. |

## Tickets

### how-do-i-add-remove-stop-capsules-1: Restructure to how-to template.

- **Type:** Format fix
- **Title:** Restructure to how-to template.
- **Problem:** Legacy multi-section capsule guide.
- **Rule:** how_to_format.md
- **Change:** Split or simplify to one goal path with Prerequisites; separate Docker image deploy to product how-to; numbered steps for add, stop, remove.
- **Done when:** Template compliant.

### how-do-i-add-remove-stop-capsules-2: Fix product and image links.

- **Type:** Broken link
- **Title:** Fix product and image links.
- **Problem:** Broken /products/docker-capsule/image/deploy/; gitbook images missing.
- **Rule:** FORMAT.MD Check 3
- **Change:** Link only to in-repo docs or remove until products docs exist; drop images.
- **Done when:** No broken internal links.


## Proposed outline

## Prerequisites
## Add, stop, and remove your capsule
## Troubleshooting
