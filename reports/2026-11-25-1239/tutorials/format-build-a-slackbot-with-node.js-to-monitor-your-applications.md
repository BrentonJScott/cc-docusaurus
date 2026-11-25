# Format report — build-a-slackbot-with-node.js-to-monitor-your-applications

- **Run:** 2026-11-25-1239
- **Doc file:** `docs/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a Monitoring Slackbot
- **Goal:** Expect a deployed Slackbot that posts on startup and answers `/stats` with signature verification
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | build | `## What you'll build` | Express on Code Capsules; startup Slack message; `/stats` with verification. |
| 2–8 | prerequisite | `## Prerequisites` | Account, Space, GitHub, Git, Node.js, Slack workspace; knowledge sentence. |
| 9–17 | build | `## Part 1–4` | Repo, capsule (plan **Basic** named), Slack app, env vars, handlers, signing secret, deploy. |
| 18 | remove | `## Part 1` step 3 | Three-sentence package explanation before install command. |
| 19–21 | — | Summary / Next steps / Troubleshooting | — |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (build steps) | fail | Step **Install the packages** explains Express, body-parser, and superagent in three sentences—`remove` / over-explanation inside a part. |
| Check 2: Prerequisites | pass | Prerequisites are linked cards plus one knowledge sentence. |
| Check 3: Links | pass | Internal `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | `tutorial_format.md`, Parts — at most one sentence of explanation per step. |

## Tickets

### build-a-slackbot-with-node.js-to-monitor-your-applications-1

- **Type:** Format fix
- **Title:** Reduce package explanation in step 3 to one sentence.
- **Problem:** Under **Install the packages**, the doc says “[Express](…) is the web server, [body-parser](…) parses the data Slack sends, and [superagent](…) sends messages to Slack.”
- **Rule:** `tutorial_format.md`, Parts — one sentence at most per step before commands.
- **Change:** Replace with a single imperative (for example “Install Express, body-parser, and superagent.”) and keep only the `npm install` block.
- **Done when:** Step 3 has at most one sentence before the bash block.

## Proposed outline

(Same tutorial structure; Part 1 step 3 loses the three-package explanation paragraph.)