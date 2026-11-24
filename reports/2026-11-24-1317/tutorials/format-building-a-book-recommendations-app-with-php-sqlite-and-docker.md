# Format report — building-a-book-recommendations-app-with-php-sqlite-and-docker

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** PHP Book Recommendations App
- **Goal:** Expect the reader to understand: Build a book recommendations web app with PHP, SQLite and Docker, then deploy it to Code Capsules. A step-by-step containerized tutorial
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

### building-a-book-recommendations-app-with-php-sqlite-and-docker-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** tutorial_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### building-a-book-recommendations-app-with-php-sqlite-and-docker-2
- **Type:** Format fix
- **Title:** Add checkpoint to Part 1
- **Problem:** Part 1 has no ### Checkpoint.
- **Rule:** tutorial_format.md
- **Change:** Add checkpoint describing what reader sees.
- **Done when:** Every part ends with checkpoint.

### building-a-book-recommendations-app-with-php-sqlite-and-docker-3
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md` to match tutorial_format.md — see tickets above.)
