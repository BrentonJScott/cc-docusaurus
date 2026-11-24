# Format report — plans

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/frontend-capsule/static/plans.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Static Frontend Free and Paid Plans
- **Goal:** Expect to see each plan's limits and upgrade a free capsule to paid
- **Format check:** fail

## Content list

1. (`build`) under `Monthly traffic` — - Visitors see a placeholder page that says the site is over its traffic allowance.
2. (`build`) under `Monthly traffic` — - Your files, settings, and address are kept.
3. (`build`) under `Monthly traffic` — - The site starts serving again at the start of the next calendar month, or as soon as you upgrade it to Paid.
4. (`build`) under `Upgrade to Paid` — - Your capsule keeps its address and content.
5. (`build`) under `Upgrade to Paid` — - The build size, traffic, and request rate limits are removed.
6. (`build`) under `Upgrade to Paid` — - If your site was showing the traffic placeholder page, it starts serving again.
7. (`build`) under `Upgrade to Paid` — - Billing starts from the day you upgrade.
8. (`build`) under `Related` — - [Deploy with Static hosting](/products/frontend-capsule/static/deploy/)
9. (`build`) under `Related` — - [Container hosting](/products/frontend-capsule/container/deploy/): if you want runtime logs, metrics, or scaling
10. (`build`) under `Related` — - [How pricing works](/platform/billing/how-does-the-pricing-work/)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### plans-1
- **Type:** Format fix
- **Title:** Add Overview section
- **Problem:** Reference missing ## Overview.
- **Rule:** reference_format.md
- **Change:** Add overview facts.
- **Done when:** Overview present.

### plans-2
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/products/frontend-capsule/static/plans.md` to match reference_format.md — see tickets above.)
