# Format report: view-invoices

| Field | Value |
|---|---|
| Run timestamp | 2026-11-24T08:21:00Z |
| Doc file | `docs/platform/billing/how-do-i-view-my-invoices.md` |
| Doc type | How-to guide |
| Template | `how_to_format.md` |
| Feature | View invoices |
| Goal | Expect to see invoices listed |
| Format check | **fail** |

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | (title area) | Go to the **Invoices** tab in the Code Capsules dashboard. |
| 2 | remove | (title area) | Screenshot: View Invoices |

## Check results

| Check | Status | Reason |
|---|---|---|
| Step 1: Doc type | pass | Single view-invoices task. |
| Check 1: Content | fail | Does not state invoices are listed; no download/view actions; marketing title "Find and Download". |
| Check 2: Prerequisites | fail | No `## Prerequisites`. |
| Check 3: Links | fail | Image not under `static/`. |
| Check 4: Format and style | fail | Missing `doc_version`; no `DocCardList`; no steps section or Troubleshooting. |

## Tickets

### view-invoices-1

- **Type:** Format fix
- **Title:** Restructure view invoices as a how-to guide
- **Problem:** `# Find and Download Your Invoices` with one sentence and a screenshot.
- **Rule:** `how_to_format.md`, Sections
- **Change:** Align title with task; add DocCardList, Prerequisites, `## View your invoices` with steps through invoice list (and download if in scope), Troubleshooting, remove image.
- **Done when:** Last step says invoices are listed (and download if documented).

### view-invoices-2

- **Type:** Missing goal step
- **Title:** State that invoices appear in the list
- **Problem:** Only navigation to **Invoices** tab; no listed invoices outcome.
- **Rule:** `FORMAT.MD`, Check 1
- **Change:** Add step confirming invoice rows are visible.
- **Done when:** DOCUMENTED_FEATURES goal met.

### view-invoices-3

- **Type:** Broken link
- **Title:** Remove missing invoices screenshot
- **Problem:** gitbook-assets path not in `static/`.
- **Rule:** Check 3
- **Change:** Remove image.
- **Done when:** No images.

## Proposed outline

```md
## Prerequisites
## View your invoices (list visible; optional download step)
## Troubleshooting
```