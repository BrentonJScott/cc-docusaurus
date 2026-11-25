# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/wordpress-capsule/performance.md`
- **Doc type:** Explanation (should be); frontmatter How-to
- **Template:** `explanation_format.md`
- **Feature:** Maximize WordPress Performance
- **Goal:** Expect the reader to understand: Tune PHP, OPcache, and PHP-FPM workers to get the best performance from your WordPress Capsule
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Wrong doc type: How-to frontmatter on Explanation layout with many `instruction` ini/env steps. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | Missing How-to sections; has Overview/Why/How/When instead. |

## Tickets

### performance-1

- **ID:** performance-1
- **Type:** Wrong doc type
- **Title:** Reclassify as Explanation or split tuning steps
- **Problem:** Sections are Overview, Why it matters, How it works, When to use it, Related—not Prerequisites/Steps/Troubleshooting.
- **Rule:** FORMAT.MD Step 1
- **Change:** Retitle to Explanation and move ENV tuning imperatives to a How-to linked from Related.
- **Done when:** One template end-to-end.

## Proposed outline

Explanation with tuning facts in How it works; How-to for applying WORDPRESS_* settings.
