# Format check — Pricing

- **Run:** 2026-11-24T07:22:37Z
- **Doc file:** `docs/c/how-does-the-pricing-work.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** How does pricing work
- **Goal (manifest):** Document reads and makes sense for a user
- **Format check:** pass

## Content list (Check 1)

| # | Label | Heading | Statement |
|---|--------|---------|-----------|
| 1 | fact | intro | Scope sentence under title |
| 2 | fact | ## Overview | Hourly billing, free static limit, paid starting prices |
| 3 | fact | ## Capsule prices | Table of capsule types and starting prices with units |
| 4 | fact | ## Static Frontend plans | Limits table (price, traffic, builds, etc.) |
| 5 | fact | Static Frontend (bullets) | Free capsule count and traffic placeholder behaviour |
| 6 | fact | ## Backups | Backup storage price table |
| 7 | fact | ## Examples | Two worked monthly cost scenarios |
| 8 | fact | ## Related | Three internal links to how-to and tutorial |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Reference page; no mixed procedural content. |
| Check 1: Content (facts only) | pass | No instructions or marketing-only sections. |
| Check 2: Prerequisites | not applicable | Reference type. |
| Check 3: Links | pass | Related links resolve to `docs/b/react.md`, `docs/b/angular.md`, `docs/d/build-a-mern-job-board.md` by slug. No images. |
| Check 4: Format and style | pass | Section order matches template; tables include units; **Related** has three links. Frontmatter complete per `writing_style.md`. |

## Tickets

None

## Proposed outline

Not applicable (format pass).