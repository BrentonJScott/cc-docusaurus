# Format report: change-billing-details

| Field | Value |
|---|---|
| Run timestamp | 2026-11-24T08:21:00Z |
| Doc file | `docs/platform/billing/how-do-i-change-my-billing-details.md` |
| Doc type | How-to guide |
| Template | `how_to_format.md` |
| Feature | Change billing details |
| Goal | Expect to see the updated billing details saved |
| Format check | **fail** |

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | (title area) | Open the **Billing** tab in the dashboard. |
| 2 | goal | (title area) | Click **Edit** in **Billing Details**, make changes, click **Save**. |
| 3 | remove | (title area) | Screenshot: Edit Billing Details |

## Check results

| Check | Status | Reason |
|---|---|---|
| Step 1: Doc type | pass | Single billing-details task. |
| Check 1: Content | fail | No confirmation that saved details appear; steps inline under title. |
| Check 2: Prerequisites | fail | No `## Prerequisites`. |
| Check 3: Links | fail | Image not under `static/`. |
| Check 4: Format and style | fail | Missing `sidebar_label`, `doc_version`; no `DocCardList`; no Troubleshooting. |

## Tickets

### change-billing-details-1

- **Type:** Format fix
- **Title:** Restructure change billing details as a how-to guide
- **Problem:** One paragraph and screenshot under `# Change Billing Details`.
- **Rule:** `how_to_format.md`, Sections
- **Change:** Add full frontmatter, DocCardList, Prerequisites, `## Change your billing details` numbered steps ending with updated details visible after **Save**, Troubleshooting, remove image.
- **Done when:** Template-compliant and goal on last step.

### change-billing-details-2

- **Type:** Missing goal step
- **Title:** Confirm billing details are saved
- **Problem:** No statement that updated details are shown after save.
- **Rule:** `FORMAT.MD`, Check 1
- **Change:** Add last step describing saved billing details on screen.
- **Done when:** Matches DOCUMENTED_FEATURES goal.

### change-billing-details-3

- **Type:** Broken link
- **Title:** Remove missing billing details screenshot
- **Problem:** gitbook-assets path not in `static/`.
- **Rule:** Check 3
- **Change:** Remove image.
- **Done when:** No images.

## Proposed outline

```md
## Prerequisites
## Change your billing details
## Troubleshooting
```