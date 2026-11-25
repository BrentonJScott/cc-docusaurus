# Format report — build-a-slackbot-with-node.js-to-monitor-your-applications

- **Run:** 2026-11-25-1218
- **Doc file:** `docs/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a Monitoring Slackbot
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io (Node.js Slackbot posts on startup and responds to `/stats` with signature verification)
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | — | (under `#` title) | Deploy a Node.js Slackbot on Code Capsules that posts on startup and answers `/stats`. |
| 2 | build | `## What you'll build` | Express app on Code Capsules; startup Slack message; `/stats` with signature verification. |
| 3 | prerequisite | `## Prerequisites` | Code Capsules account card |
| 4 | prerequisite | `## Prerequisites` | Space card |
| 5 | prerequisite | `## Prerequisites` | GitHub connected card |
| 6 | prerequisite | `## Prerequisites` | Git installed card (external) |
| 7 | prerequisite | `## Prerequisites` | Node.js installed card (external) |
| 8 | prerequisite | `## Prerequisites` | Slack workspace card (external) |
| 9 | prerequisite | `## Prerequisites` | Basic JavaScript knowledge (sentence under cards) |
| 10 | build | `## Part 1` | Create GitHub repo _slackbot_, clone, `npm init`, install packages, add files, push |
| 11 | build | `## Part 2` | Create **Backend Capsule** (plan not named), Slack app, OAuth, `/stats` command URL |
| 12 | build | `## Part 3` | Bot token, env vars, channel ID, startup code, `package.json` start script, push deploy |
| 13 | build | `## Part 4` | Slash handler, signature middleware in `signing.js`, env var, final push |
| 14 | — | `## Summary` | What the reader built (startup message, `/stats`, signature check) |
| 15 | — | `## Next steps` | Cards to MERN tutorial, full-stack index, frontend deploy guide |
| 16 | — | `## Troubleshooting` | Deploy fails after git push — build logs, branch, env vars |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (build steps) | fail | Step 6 tells the reader to “Choose your payment plan” without naming the plan the walkthrough uses—an open choice instead of one fixed path. |
| Check 2: Prerequisites | pass | Every prerequisite is a linked card (shared pages or external tool URLs); knowledge is one sentence under the cards. |
| Check 3: Links | pass | All internal `href` values and prerequisite paths resolve under `docs/`. |
| Check 4: Format and style | fail | `tutorial_format.md`, Parts — “Give one path only”; step 6 must name the plan tier on **Plan** for the test-platform walkthrough. |

## Tickets

### build-a-slackbot-with-node.js-to-monitor-your-applications-1

- **Type:** Format fix
- **Title:** Name the capsule plan tier in step 6.
- **Problem:** Step **Create a Backend Capsule** says “Choose your payment plan” without telling the reader which plan to select for this tutorial.
- **Rule:** `tutorial_format.md`, Parts — “Give one path only. Don't offer alternatives, options, or ‘you could also…’”; `FORMAT.MD`, Check 1 (Tutorial: one path only).
- **Change:** On **Plan**, name the exact tier used on test-platform for this walkthrough (for example **Free** or **Paid**), in bold, matching the value the format walkthrough will use. Remove “choose your payment plan” wording.
- **Done when:** Step 6 names one plan option with no open-ended plan choice.

### build-a-slackbot-with-node.js-to-monitor-your-applications-2

- **Type:** Format fix
- **Title:** State the Git branch in the capsule wizard step.
- **Problem:** Step 6 selects the _slackbot_ repository but does not name which **Branch** to pick when linking GitHub to the capsule.
- **Rule:** `tutorial_format.md`, Parts — one fixed path; `writing_style.md`, Words — values the reader selects in code format.
- **Change:** In step 6 (or an added sentence in the same step), state the branch to select (for example `main`), consistent with the repository default and the test-platform walkthrough.
- **Done when:** A reader can complete the capsule wizard without guessing the branch.

## Proposed outline

```md
# Build a Slackbot with Node.js to Monitor your Applications
<Repeat description.>

## What you'll build
<Express on Code Capsules; startup Slack message; `/stats` with signing.>

## Prerequisites
<DocCardList: account, Space, GitHub, Git, Node.js, Slack workspace>
You also need basic knowledge of JavaScript.

## Part 1: Create the repository and base project
<Intro.>
1. **Create the GitHub repository** …
…
:::tip[Checkpoint] …

## Part 2: Create the capsule and Slack app
<Intro.>
6. **Create a Backend Capsule** — On **Plan**, select **<named tier>**. … On **Source**, select _slackbot_ and branch `main`. …
…
:::tip[Checkpoint] …

## Part 3: Send a startup message
…
:::tip[Checkpoint] Slack startup message …

## Part 4: Add the /stats command with verification
…
:::tip[Checkpoint] `/stats` works; unsigned requests get 401 …

## Summary
…

## Next steps
<DocCardList …>

## Troubleshooting
<details> … </details>
```