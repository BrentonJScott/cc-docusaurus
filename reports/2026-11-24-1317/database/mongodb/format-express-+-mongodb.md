# Format report — express-+-mongodb

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/database/mongodb/express-+-mongodb.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy Express with MongoDB
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

1. (`explain`) under `Troubleshooting` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### express-+-mongodb-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### express-+-mongodb-2
- **Type:** Format fix
- **Title:** Use DocCardList for prerequisites
- **Problem:** Prerequisites not a DocCardList.
- **Rule:** writing_style.md
- **Change:** Replace bullet prerequisites with DocCardList cards linking to shared pages.
- **Done when:** Prerequisites use DocCardList only.

### express-+-mongodb-3
- **Type:** Format fix
- **Title:** Add frontmatter field sidebar_label
- **Problem:** Missing frontmatter `sidebar_label`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `sidebar_label` to frontmatter.
- **Done when:** All required frontmatter fields present.

## Proposed outline

(Rewrite `docs/database/mongodb/express-+-mongodb.md` to match how_to_format.md — see tickets above.)
