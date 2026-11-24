# Format report: platform-how-does-the-pricing-work

| Field | Value |
|---|---|
| Run timestamp | 2026-11-24T08:21:00Z |
| Doc file | `docs/platform/billing/how-does-the-pricing-work.md` |
| Doc type | Reference |
| Template | `reference_format.md` |
| Feature | Understand pricing |
| Goal | Expect to work out a capsule's monthly price |
| Format check | **fail** |

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | fact | (title area) | Code Capsules uses an hourly billing model, so you only pay for what you use. |
| 2 | fact | ## Capsule Pricing | Static Frontend Capsules have a Free plan: up to five per account, within build size and traffic limits. |
| 3 | instruction | ## Capsule Pricing | See [Free and Paid Plans](/products/frontend-capsule/static/plans/). |
| 4 | fact | ## Capsule Pricing | Paid capsule pricing starts at $3/month on the Basic plan and increases with CPU, RAM, or replicas. |
| 5 | instruction | ## Capsule Pricing | To customize resources, select **Custom** when [creating a Capsule](/platform/capsules/how-do-i-add-remove-stop-capsules/). |
| 6 | remove | ## Capsule Pricing | Screenshot: Custom Plan |

## Check results

| Check | Status | Reason |
|---|---|---|
| Step 1: Doc type | pass | Facts about pricing; feature is "Understand pricing". Checked as Reference (`reference_format.md` cites this path as example). |
| Check 1: Content | fail | Contains `instruction` statements; pricing lacks tabular values needed to work out monthly price; `## Capsule Pricing` is not a reference subject layout. |
| Check 2: Prerequisites | not applicable | Reference page. |
| Check 3: Links | fail | `/products/frontend-capsule/static/plans/` has no matching file under `docs/`; image not under `static/`; capsule how-to link exists. |
| Check 4: Format and style | fail | Missing `sidebar_label`, `doc_version`, `DocCardList`; no `## Overview`, subject tables, or `## Related` with two+ cards. |

## Tickets

### platform-how-does-the-pricing-work-1

- **Type:** Wrong doc type
- **Title:** Choose Reference vs Explanation and split procedural content
- **Problem:** Page mixes lookup facts with deployment instructions under `## Capsule Pricing`.
- **Rule:** `FORMAT.MD`, Step 1 (if mixed); `reference_format.md`, Subject sections
- **Change:** Keep as Reference per feature goal; move "select **Custom** when creating" to capsule how-to; link from `## Related`.
- **Done when:** No imperative steps remain on the reference page.

### platform-how-does-the-pricing-work-2

- **Type:** Format fix
- **Title:** Restructure as a pricing reference page
- **Problem:** Single prose section and screenshot instead of Overview, tables with units, and Related cards.
- **Rule:** `reference_format.md`, Sections
- **Change:**
  - [ ] Add `sidebar_label`, `doc_version: drift`, `DocCardList` import.
  - [ ] Add `## Overview` (hourly billing rule).
  - [ ] Replace `## Capsule Pricing` with subject sections and tables (plan, CPU, RAM, price per month, etc.) so a reader can compute monthly cost.
  - [ ] Optional `## Examples` with worked monthly bill.
  - [ ] Add `## Related` with 2+ DocCardList cards (create capsule, plans explanation if exists).
  - [ ] Remove screenshot.
- **Done when:** Section order matches reference template and tables include units.

### platform-how-does-the-pricing-work-3

- **Type:** Move to another doc
- **Title:** Move Custom plan selection to capsule how-to
- **Problem:** "To customize resources, select **Custom** when creating a Capsule."
- **Rule:** `FORMAT.MD`, Check 1 Reference: instruction
- **Change:** Remove from this page; ensure `/platform/capsules/how-do-i-add-remove-stop-capsules/` covers Custom plan selection; link from Related.
- **Done when:** Instruction removed here; how-to linked in Related.

### platform-how-does-the-pricing-work-4

- **Type:** Broken link
- **Title:** Fix or remove Free and Paid Plans link
- **Problem:** `[Free and Paid Plans](/products/frontend-capsule/static/plans/)` — no doc at that path under `docs/`.
- **Rule:** `FORMAT.MD`, Check 3
- **Change:** Point to an existing reference page or create the missing page; until it exists, remove the link and fold facts into a table on this page.
- **Done when:** Every internal link resolves under `docs/`.

### platform-how-does-the-pricing-work-5

- **Type:** Broken link
- **Title:** Remove missing pricing screenshot
- **Problem:** `/gitbook-assets/platform/platform/billing/capsule-plan.png` not in `static/`.
- **Rule:** Check 3; `writing_style.md`
- **Change:** Remove image.
- **Done when:** No images.

## Proposed outline

```md
## Overview (hourly billing)
## Static frontend plans (table: limits, price)
## Paid capsule plans (table: CPU, RAM, replicas, $/month)
## Examples (optional worked monthly cost)
## Related (DocCardList: create capsule, billing how-tos)
```