# Format report: how-do-i-add-a-payment-method

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/account/how-do-i-add-a-payment-method.md`
- **Doc type:** how-to
- **Feature:** Add a payment method
- **Goal:** Expect to see the payment method saved
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/payment-methods.png Image missing in static/: /gitbook-assets/platform/card-details.jpg |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/payment-methods.png Image missing in static/: /gitbook-assets/platform/card-details.jpg Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### how-do-i-add-a-payment-method-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/payment-methods.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/payment-methods.png
- Image missing in static/: /gitbook-assets/platform/card-details.jpg
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/payment-methods.png
- Image missing in static/: /gitbook-assets/platform/card-details.jpg
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
