# Format report: how-does-the-pricing-work

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/billing/how-does-the-pricing-work.md`
- **Doc type:** reference
- **Feature:** Understand pricing
- **Goal:** Expect to work out a capsule's monthly price
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | not applicable |  |
| Links | fail | Image missing in static/: /gitbook-assets/platform/platform/billing/capsule-plan.png Broken internal link: /products/frontend-capsule/static/plans/ Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/billing/capsule-plan.png Broken internal link: /products/frontend-capsule/static/plans/ Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/ Missing ## Overview (reference template). Missing ## Related (reference template). |

## Tickets

### how-does-the-pricing-work-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/billing/capsule-plan.png
- **Rule:** reference_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/billing/capsule-plan.png
- Broken internal link: /products/frontend-capsule/static/plans/
- Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/
- Missing ## Overview (reference template).
- Missing ## Related (reference template).
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/billing/capsule-plan.png
- Broken internal link: /products/frontend-capsule/static/plans/
- Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/
- Missing ## Overview (reference template).
- Missing ## Related (reference template).
