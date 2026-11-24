# Format report — go-telegram-bot

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/backend/go/go-telegram-bot.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy a Go Telegram Bot from GitHub
- **Goal:** Expect to Deploy a Go Telegram bot to Code Capsules straight from GitHub. Connect the Telegram Bot API, build with Docker, and run it in production
- **Format check:** fail

## Content list

1. (`explain`) under `Chat with the Bot` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### go-telegram-bot-1
- **Type:** Remove content
- **Title:** Remove ## Setup
- **Problem:** Doc has forbidden section `## Setup`.
- **Rule:** how_to_format.md, sections
- **Change:** Remove `## Setup` and relocate content per template.
- **Done when:** Section absent.

### go-telegram-bot-2
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### go-telegram-bot-3
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### go-telegram-bot-4
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### go-telegram-bot-5
- **Type:** Format fix
- **Title:** Add frontmatter field sidebar_label
- **Problem:** Missing frontmatter `sidebar_label`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `sidebar_label` to frontmatter.
- **Done when:** All required frontmatter fields present.

### go-telegram-bot-6
- **Type:** Format fix
- **Title:** Add frontmatter field doc_version
- **Problem:** Missing frontmatter `doc_version`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `doc_version` to frontmatter.
- **Done when:** All required frontmatter fields present.

### go-telegram-bot-7
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

## Proposed outline

(Rewrite `docs/backend/go/go-telegram-bot.md` to match how_to_format.md — see tickets above.)
