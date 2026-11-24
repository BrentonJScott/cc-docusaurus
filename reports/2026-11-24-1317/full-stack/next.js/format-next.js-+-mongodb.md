# Format report — next.js-+-mongodb

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/full-stack/next.js/next.js-+-mongodb.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy Next.js with MongoDB
- **Goal:** Expect to Deploy a full-stack Next.js app with MongoDB on Code Capsules from GitHub. Connect Next.js to a managed Mongo Data Capsule, step by step
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

### next.js-+-mongodb-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### next.js-+-mongodb-2
- **Type:** Format fix
- **Title:** Use DocCardList for prerequisites
- **Problem:** Prerequisites not a DocCardList.
- **Rule:** writing_style.md
- **Change:** Replace bullet prerequisites with DocCardList cards linking to shared pages.
- **Done when:** Prerequisites use DocCardList only.

### next.js-+-mongodb-3
- **Type:** Format fix
- **Title:** Add frontmatter field sidebar_label
- **Problem:** Missing frontmatter `sidebar_label`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `sidebar_label` to frontmatter.
- **Done when:** All required frontmatter fields present.

## Proposed outline

(Rewrite `docs/full-stack/next.js/next.js-+-mongodb.md` to match how_to_format.md — see tickets above.)
