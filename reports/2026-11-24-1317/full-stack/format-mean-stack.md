# Format report — mean-stack

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/full-stack/mean-stack.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy a MEAN Stack Application
- **Goal:** Expect to Deploy a full-stack MEAN (MongoDB, Express, Angular, Node) app to Code Capsules from GitHub. Ship your JavaScript stack in production
- **Format check:** fail

## Content list

1. (`explain`) under `View Application` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### mean-stack-1
- **Type:** Remove content
- **Title:** Remove ## Setup
- **Problem:** Doc has forbidden section `## Setup`.
- **Rule:** how_to_format.md, sections
- **Change:** Remove `## Setup` and relocate content per template.
- **Done when:** Section absent.

### mean-stack-2
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### mean-stack-3
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### mean-stack-4
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### mean-stack-5
- **Type:** Format fix
- **Title:** Add frontmatter field doc_version
- **Problem:** Missing frontmatter `doc_version`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `doc_version` to frontmatter.
- **Done when:** All required frontmatter fields present.

### mean-stack-6
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

### mean-stack-7
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/full-stack/mean-stack.md` to match how_to_format.md — see tickets above.)
