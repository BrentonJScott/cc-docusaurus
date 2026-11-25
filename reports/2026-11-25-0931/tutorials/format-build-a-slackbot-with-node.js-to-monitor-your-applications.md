# Format report: build-a-slackbot-with-node.js-to-monitor-your-applications.md

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a Monitoring Slackbot
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list (Check 1)

1. `build` — Deploy intro sentence — `# Build a Slackbot with Node.js to Monitor your Applications`
2. `build` — Finished bot description — `## What you'll build`
3. `prerequisite` — Code Capsules account card — `## Prerequisites`
4. `prerequisite` — Space card — `## Prerequisites`
5. `prerequisite` — GitHub connected card — `## Prerequisites`
6. `prerequisite` — Git installed card — `## Prerequisites`
7. `prerequisite` — Node.js installed card — `## Prerequisites`
8. `prerequisite` — Slack workspace card — `## Prerequisites`
9. `prerequisite` — JavaScript knowledge — `## Prerequisites`
10. `build` — Create GitHub repo — Part 1, step 1
11. `build` — `npm init` — Part 1, step 2
12. `build` — Install express, body-parser, superagent — Part 1, step 3
13. `build` — Add `index.js`, `.gitignore` — Part 1, step 4
14. `build` — Push base project — Part 1, step 5
15. `build` — Create Backend Capsule — Part 2, step 6
16. `build` — Create Slack app — Part 2, step 7
17. `build` — OAuth scope `chat:write` — Part 2, step 8
18. `build` — Create `/stats` slash command — Part 2, step 9
19. `build` — Install bot token — Part 3, step 10
20. `build` — Set `SLACK_BOT_TOKEN` — Part 3, step 11
21. `build` — Copy channel ID from Slack link — Part 3, step 12
22. `build` — Set `SLACK_CHANNEL_ID`, rebuild — Part 3, step 13
23. `build` — Invite bot to channel — Part 3, step 14
24. `build` — Add startup code to `index.js` — Part 3, step 15
25. `build` — Add `start` script to `package.json` — Part 3, step 16
26. `build` — Push startup code — Part 3, step 17
27. `build` — Add slash command handler — Part 4, step 18
28. `build` — Push handler — Part 4, step 19
29. `build` — Try `/stats` in Slack — Part 4, step 20
30. `build` — Save raw request body — Part 4, step 21
31. `build` — Add `signing.js` middleware — Part 4, step 22
32. `build` — Set `SLACK_SIGNING_SECRET` — Part 4, step 23
33. `build` — Wire signature check in `index.js` — Part 4, step 24
34. `build` — Push final version — Part 4, step 25
35. `remove` — Summary recap only — `## Summary` (section role, not extra content)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (build steps) | fail | Steps 12 and 18 use more than one sentence of explanation instead of one sentence plus a link. |
| Check 2: Prerequisites | pass | Prerequisites are `DocCardList` cards plus one knowledge sentence; shared pages exist under `docs/shared/`. |
| Check 3: Links | pass | Every `DocCardList` `href` and Next steps link resolves under `docs/` or is an allowed external tool URL. |
| Check 4: Format and style | fail | `tutorial_format.md`, Parts: at most one sentence of explanation per step; `writing_style.md`, Page pieces: Slack prerequisite card uses 💬, which is not in the emoji table. |

## Tickets

### build-a-slackbot-with-node.js-to-monitor-your-applications-1

- **Type:** Format fix
- **Title:** Shorten multi-sentence step explanations in Parts 3 and 4.
- **Problem:** Step 12 ends with a second sentence explaining how to read the channel ID from the Slack link. Step 18 uses two sentences (“Then add the handler below. It replies with the app's stats in the format Slack expects.”) to describe the handler.
- **Rule:** `FORMAT.MD`, Check 1 (Tutorial); `tutorial_format.md`, Parts (“Keep explanation to one sentence at most per step”).
- **Change:** Merge each step’s guidance into a single imperative sentence (or one short “this does X” sentence). If more background is needed, link an Explanation page instead of adding a second sentence.
- **Done when:** Steps 12 and 18 each have at most one explanatory sentence; remaining steps already meet the limit.

### build-a-slackbot-with-node.js-to-monitor-your-applications-2

- **Type:** Format fix
- **Title:** Use a standard prerequisite-card emoji for Slack workspace.
- **Problem:** The Slack workspace card uses `💬`, which is not listed in `writing_style.md` Page pieces.
- **Rule:** `writing_style.md`, Page pieces (Cards for lists of links).
- **Change:** Pick an emoji from the table (for example keep the card text as “Slack workspace” and use an allowed emoji, or rely on the default page icon by choosing a listed emoji that fits best).
- **Done when:** Every prerequisite card uses an emoji from the table in `writing_style.md`.

## Proposed outline

```md
# Build a Slackbot with Node.js to Monitor your Applications
<Same as description.>

## What you'll build
<Express Slackbot on Code Capsules; startup message; `/stats` with signing.>

## Prerequisites
<DocCardList — account, Space, GitHub, Git, Node.js, Slack (standard emoji).>
You also need basic knowledge of JavaScript.

## Part 1–4
<Keep current four-part structure, numbering, checkpoints, and code blocks; shorten steps 12 and 18 to one explanation sentence each.>

## Summary / ## Next steps / ## Troubleshooting
<Unchanged.>
```