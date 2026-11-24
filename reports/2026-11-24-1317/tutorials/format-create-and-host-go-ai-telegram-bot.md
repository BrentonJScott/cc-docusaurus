# Format report — create-and-host-go-ai-telegram-bot

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/tutorials/create-and-host-go-ai-telegram-bot.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** Host a Go AI Telegram Bot
- **Goal:** Expect the reader to understand: Build a Go Telegram bot that replies with AI and a custom personality, then deploy it to production on Code Capsules. Step-by-step tutorial
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

### create-and-host-go-ai-telegram-bot-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** tutorial_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### create-and-host-go-ai-telegram-bot-2
- **Type:** Format fix
- **Title:** Add checkpoint to Part 1
- **Problem:** Part 1 has no ### Checkpoint.
- **Rule:** tutorial_format.md
- **Change:** Add checkpoint describing what reader sees.
- **Done when:** Every part ends with checkpoint.

### create-and-host-go-ai-telegram-bot-3
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/tutorials/create-and-host-go-ai-telegram-bot.md` to match tutorial_format.md — see tickets above.)
