# Format report: how-do-i-change-my-billing-details

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/billing/how-do-i-change-my-billing-details.md`
- **Doc type:** how-to
- **Feature:** Change billing details
- **Goal:** Expect to see the updated billing details saved
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/platform/billing/change-billing-details.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/billing/change-billing-details.png Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### how-do-i-change-my-billing-details-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/billing/change-billing-details.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/billing/change-billing-details.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/billing/change-billing-details.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
