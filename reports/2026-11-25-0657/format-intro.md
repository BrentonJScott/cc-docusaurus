# Format report — intro

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/intro.mdx`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** introx
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

1. (`explain`) under `(body)` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### intro-1
- **Type:** Format fix
- **Title:** Add required frontmatter fields
- **Problem:** Missing frontmatter: description, doc_version, sidebar_label, slug, title.
- **Rule:** writing_style.md Every doc
- **Change:** Add description, doc_version, sidebar_label, slug, title to frontmatter.
- **Done when:** All required fields present.

### intro-2
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

### intro-3
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### intro-4
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### intro-5
- **Type:** Missing goal step
- **Title:** Add steps section
- **Problem:** No `## <Verb> your <Thing>` steps section.
- **Rule:** how_to_format.md Sections
- **Change:** Add numbered bold step list under a verb heading.
- **Done when:** Steps reach the feature goal.

## Proposed outline

(Rewrite `docs/intro.mdx` to match how_to_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Prerequisites — DocCardList cards
- ## Deploy your … — numbered bold steps to goal
- ## Troubleshooting — `<details>` entries
