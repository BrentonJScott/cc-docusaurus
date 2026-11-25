# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/wordpress-capsule/routing.md`
- **Doc type:** Explanation (should be)
- **Template:** `explanation_format.md`
- **Feature:** Configure WordPress Routing
- **Goal:** Expect the reader to understand: How HTTP requests are routed through a WordPress Capsule and how to customise nginx routing
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Instructions (`wp search-replace`, `NGINX_EXTRA_CONF` examples) in Explanation. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | How-to title pattern on Explanation body. |

## Tickets

### routing-1

- **ID:** routing-1
- **Type:** Wrong doc type
- **Title:** Split Explanation from configuration How-to
- **Problem:** Page mixes request-flow explanation with imperative nginx and WP-CLI steps.
- **Rule:** FORMAT.MD Step 1
- **Change:** Keep flow in Explanation; move examples to How-to "Customise WordPress routing".
- **Done when:** Instructions removed from Explanation or doc retyped.

## Proposed outline

Explanation sections per template; optional How-to for NGINX_EXTRA_CONF.
