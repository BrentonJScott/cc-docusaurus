# Format report: add-a-payment-method

| Field | Value |
|---|---|
| Run timestamp | 2026-11-24T08:21:00Z |
| Doc file | `docs/platform/account/how-do-i-add-a-payment-method.md` |
| Doc type | How-to guide |
| Template | `how_to_format.md` |
| Feature | Add a payment method |
| Goal | Expect to see the payment method saved |
| Format check | **fail** |

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | prerequisite | (title area) | Code Capsules accepts Visa and Mastercard. |
| 2 | goal | (title area) | Click **Billing** in the top navigation bar, then click **Add**. |
| 3 | goal | (title area) | Enter your card details and click **Confirm Payment Method**. |
| 4 | remove | (title area) | Screenshot: Add Payment Method |
| 5 | remove | (title area) | Screenshot: Enter Card Details |

## Check results

| Check | Status | Reason |
|---|---|---|
| Step 1: Doc type | pass | Single payment task. |
| Check 1: Content | fail | Steps not under a `## <Verb> your <Thing>` section; last step does not state the saved payment method is visible. |
| Check 2: Prerequisites | fail | No `## Prerequisites` (account/login not linked). |
| Check 3: Links | fail | Images `/gitbook-assets/platform/payment-methods.png` and `card-details.jpg` not under `static/`. |
| Check 4: Format and style | fail | Missing `sidebar_label`, `doc_version`; no `DocCardList`; screenshots; no Troubleshooting. |

## Tickets

### add-a-payment-method-1

- **Type:** Format fix
- **Title:** Restructure add payment method as a how-to guide
- **Problem:** Inline instructions under `# Add Payment Method` with two screenshots and no template sections.
- **Rule:** `how_to_format.md`, Sections
- **Change:**
  - [ ] Add `sidebar_label`, `doc_version: drift`; expand `description` to match the goal (payment method saved).
  - [ ] Add `DocCardList` import and `## Prerequisites` with account card → `/docs/shared/create-an-account`.
  - [ ] Add `## Add your payment method` with numbered steps; last step confirms the card appears in **Billing**.
  - [ ] Remove screenshots.
  - [ ] Add `## Troubleshooting` (e.g. card declined, Confirm disabled).
- **Done when:** Template sections are present and the last step describes the saved payment method.

### add-a-payment-method-2

- **Type:** Missing goal step
- **Title:** State that the payment method is saved
- **Problem:** The doc ends after "Click **Confirm Payment Method**" with no confirmation of success.
- **Rule:** `FORMAT.MD`, Check 1 How-to: last step must show the goal
- **Change:** Add a final step or sentence: the new card is listed under payment methods.
- **Done when:** Reader expectation matches DOCUMENTED_FEATURES goal.

### add-a-payment-method-3

- **Type:** Broken link
- **Title:** Remove missing payment screenshots
- **Problem:** gitbook-assets image paths are absent from `static/`.
- **Rule:** Check 3; `writing_style.md`, No screenshots
- **Change:** Remove both images.
- **Done when:** No images on the page.

## Proposed outline

```md
## Prerequisites (DocCardList → create-an-account)
## Add your payment method (numbered steps ending with saved card visible)
## Troubleshooting (details)
```