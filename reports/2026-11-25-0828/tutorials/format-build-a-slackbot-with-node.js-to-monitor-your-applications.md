# Format report: build-a-slackbot-with-node.js-to-monitor-your-applications.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications.md`
- **Doc type:** Tutorial
- **Template:** `formats/tutorial_format.md`
- **Feature:** Build a Monitoring Slackbot
- **Goal:** Node.js Slackbot deployed on Code Capsules that posts on startup and responds to `/stats`
- **Format check:** fail

## Content list

1. **remove** — Introductory copy about Slack as a communication tool — `## What you'll build`
2. **prerequisite** — Card: Code Capsules account — `## Prerequisites`
3. **prerequisite** — Card: A Space — `## Prerequisites`
4. **prerequisite** — Card: GitHub connected — `## Prerequisites`
5. **prerequisite** — Sign up for Slack workspace — `### Overview and Requirements`
6. **prerequisite** — Install Git, GitHub account, Node.js, IDE — `### Overview and Requirements`
7. **prerequisite** — Code Capsules account (duplicated) — `### Overview and Requirements`
8. **build** — Create GitHub repo `slackbot` — `#### Create a new repo on GitHub`
9. **remove** — Optional: add to an existing backend project — `#### Create a new repo on GitHub`
10. **build** — `npm init`, install packages, add `index.js` and `.gitignore`, push — `#### Initialise the base project` / `#### Install our packages`
11. **build** — Create Backend Capsule and link GitHub repo — `#### Create a new Code Capsule`
12. **build** — Create Slack app, OAuth scope, slash command URL — `#### Register an app on Slack`
13. **build** — Express base code in `index.js` — `#### Adding the base code`
14. **build** — Startup message via Superagent, env vars — `#### Sending a startup message to Slack`
15. **build** — Add `start` script, push, verify Slack message — `#### Deploying to Code Capsules`
16. **build** — Slash command handler in `index.js` — `#### Adding a slash command`
17. **build** — Request signing in `signing.js`, middleware — `#### Adding verification`
18. **build** — Final push and test deploy — end of `#### Adding verification`
19. **remove** — Extension ideas (more slash commands, modals, etc.) — `### Things to Try Next`
20. **remove** — Summary sentence only — `## Summary`

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (build steps) | fail | Prerequisites and optional content live inside `## Part 1`; work uses `####` headings instead of one numbered list; only one part; checkpoint does not state deployed Slackbot behavior; alternatives offered; many steps explain beyond one sentence. |
| Check 2: Prerequisites | fail | Git, Node.js, Slack, and setup steps are inside Part 1, not cards in `## Prerequisites`. Shared account/Space pages missing under `docs/`. |
| Check 3: Links | fail | `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, `/platform/account/connect-version-control`, `/tutorials`, `/frontend/index`, and `/backend/index` have no matching files under `docs/`. |
| Check 4: Format and style | fail | No one- or two-sentence intro under `#` title; `## What you'll build` does not describe the finished bot; parts lack numbered steps and cross-part numbering; code blocks lack required `` `path` `` lines; Part 1 opening is not milestone intro sentences. |

## Tickets

### build-a-slackbot-with-node.js-to-monitor-your-applications-1

- **Type:** Format fix
- **Title:** Restructure the tutorial to match `tutorial_format.md`.
- **Problem:** The page mixes prerequisite setup, long explanations, and build work under a single `## Part 1: Build the project` with `###`/`####` headings instead of 2–5 parts with one numbered step list, milestone intros, and deploy-focused checkpoints.
- **Rule:** `tutorial_format.md`, Sections, Parts, What you'll build; `writing_style.md`, Every doc and Page pieces.
- **Change:** (1) Add one or two sentences under `# Build a Slackbot with Node.js to Monitor your Applications` matching the description. (2) Rewrite `## What you'll build` to state the finished Node.js app on Code Capsules that posts to Slack on startup and answers `/stats` with verification. (3) Split into 2–5 parts (for example: local project + GitHub; Code Capsules deploy; Slack app wiring; bot code and env vars; slash command and signing). (4) Convert every step to the numbered-list pattern with bold titles, file paths above code blocks, and at most one sentence of explanation per step with links elsewhere. (5) Move Git, Node.js, Slack workspace, and account/Space setup to `## Prerequisites` as cards plus one knowledge sentence. (6) Remove `### Things to Try Next` and other optional paths. (7) End the last part with a checkpoint describing the live deploy (Slack startup message and `/stats` on Code Capsules). (8) Expand `## Summary` to 2–4 sentences on what was built.
- **Done when:** Section order and headings match the template table; each part uses numbered steps and a `:::tip[Checkpoint]` with observable results; no prerequisite bullets remain inside parts.

### build-a-slackbot-with-node.js-to-monitor-your-applications-2

- **Type:** Broken link
- **Title:** Fix Next steps and GitHub card targets that are missing under `docs/`.
- **Problem:** Cards link to `/platform/account/connect-version-control`, `/tutorials`, `/frontend/index`, and `/backend/index`, which are not present as docs paths in this repo.
- **Rule:** `FORMAT.MD`, Check 3; `writing_style.md`, Links and images.
- **Change:** Point each card at an existing doc slug (for example a shared GitHub-connect page once created, `docs/full-stack/index.md` or another index page that exists, and tutorial category pages that resolve in `docs/`). Update `href` values to `/docs/...` paths that match real files.
- **Done when:** Every `DocCardList` `href` in this file resolves to a file under `docs/`.

### build-a-slackbot-with-node.js-to-monitor-your-applications-3

- **Type:** Missing goal step
- **Title:** Align capsule steps with the GitHub repo the reader created.
- **Problem:** `#### Create a new Code Capsule` tells the reader to choose "the repository you forked at the start of the tutorial" while earlier steps say to create a new repo named _slackbot_, not fork one.
- **Rule:** `FORMAT.MD`, Check 1 (Tutorial: one path only); `tutorial_format.md`, Parts.
- **Change:** Replace fork language with the repo name from the create-repo step; use one consistent GitHub repository through deploy and Slack URL setup.
- **Done when:** Capsule and Slack Request URL instructions reference the same repository the reader created, with no fork alternative.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Prerequisites and in-part links use `/docs/shared/create-an-account`, which does not exist under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3.
- **Change:** See **shared-create-an-account** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`.
- **Done when:** The shared page exists and this tutorial’s account links resolve.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-a-space`, which does not exist under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3.
- **Change:** See **shared-create-a-space** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`.
- **Done when:** The shared Space page exists and this tutorial’s Space card resolves.

## Proposed outline

```md
# Build a Monitoring Slackbot
<1–2 sentences: deploy a Node.js Slackbot on Code Capsules.>

## What you'll build
<Short paragraph: Express app on Code Capsules; startup Slack message; `/stats` with signed requests.>

## Prerequisites
<DocCardList: account, Space, GitHub, Node.js, Git, Slack workspace>
You also need basic JavaScript.

## Part 1: Create the repository and local app
<Intro sentence.>
1. **Create the GitHub repo** …
2. **Initialize Node.js** … `index.js`, `.gitignore`, `package.json`
:::tip[Checkpoint] …
:::

## Part 2: Deploy on Code Capsules
1. **Create a Backend Capsule** …
:::tip[Checkpoint] …
:::

## Part 3: Configure Slack
1. **Create the Slack app** … OAuth, slash command URL
:::tip[Checkpoint] …
:::

## Part 4: Startup notification
1. **Add Express and Superagent** … env vars on capsule
:::tip[Checkpoint] Slack startup message after deploy
:::

## Part 5: Slash command and verification
1. **Handle `/stats`** … `signing.js`
:::tip[Checkpoint] `/stats` works; unsigned Postman requests get 401
:::

## Summary
<2–4 sentences.>

## Next steps
<DocCardList: 2–3 valid doc links>

## Troubleshooting
<details> deploy fails … </details>
```