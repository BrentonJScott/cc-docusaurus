# Format report: how-to-create-and-host-a-telegram-bot-on-code-capsules

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/tutorials/how-to-create-and-host-a-telegram-bot-on-code-capsules.md`
- **Feature:** Create MEAN stack capsules
- **Goal:** Expect to see the app load with its capsules connected
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.8)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/tutorials/telegram-bot-chat.png Image missing in static/: /gitbook-assets/tutorials/bot-api-key-env.png Broken internal link: /gitbook-assets/tutorials/telegram-bot-chat.png Broken internal link: /gitbook-assets/tutorials/bot-api-key-env.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/tutorials/telegram-bot-chat.png Image missing in static/: /gitbook-assets/tutorials/bot-api-key-env.png Broken internal link: /gitbook-assets/tutorials/telegram-bot-chat.png Broken internal link: /gitbook-assets/tutorials/bot-api-key-env.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/tutorials/telegram-bot-chat.png
- Image missing in static/: /gitbook-assets/tutorials/bot-api-key-env.png
- Broken internal link: /gitbook-assets/tutorials/telegram-bot-chat.png
- Broken internal link: /gitbook-assets/tutorials/bot-api-key-env.png

## Tickets

### how-to-create-and-host-a-telegram-bot-on-code-capsules-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/tutorials/telegram-bot-chat.png
- Image missing in static/: /gitbook-assets/tutorials/bot-api-key-env.png
- Broken internal link: /gitbook-assets/tutorials/telegram-bot-chat.png
- Broken internal link: /gitbook-assets/tutorials/bot-api-key-env.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

