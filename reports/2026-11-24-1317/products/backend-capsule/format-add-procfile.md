# Format report — add-procfile

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/backend-capsule/add-procfile.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Add a Procfile to a Backend Capsule
- **Goal:** Expect to see the capsule start with the process from the Procfile
- **Format check:** fail

## Content list

1. (`explain`) under `Troubleshooting` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### add-procfile-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### add-procfile-2
- **Type:** Format fix
- **Title:** Add frontmatter field sidebar_label
- **Problem:** Missing frontmatter `sidebar_label`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `sidebar_label` to frontmatter.
- **Done when:** All required frontmatter fields present.

## Proposed outline

(Rewrite `docs/products/backend-capsule/add-procfile.md` to match how_to_format.md — see tickets above.)
