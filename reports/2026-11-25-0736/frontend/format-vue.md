# Format report: Host Vue

- **Run**: 2026-11-25-0736
- **Doc**: `docs/frontend/vue.md`
- **Doc type**: How-to guide
- **Template**: `how_to_format.md`
- **Feature**: Host a Vue Application
- **Goal**: Expect to see capsule building in builds tab
- **Format check**: fail

## Content list

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | `## Deploy your Vue app` | Open wizard via sidebar **+**, **New Capsule** |
| 2 | goal | `## Deploy your Vue app` | Capsule Details: Frontend, Team, Space |
| 3 | goal | `## Deploy your Vue app` | Hosting: Static |
| 4 | goal | `## Deploy your Vue app` | Plan: Free |
| 5 | goal | `## Deploy your Vue app` | Configure: Git Repository `codecapsules-io/demo-vue`, branch `main` |
| 6 | goal | `## Deploy your Vue app` | Deploy: `npm run build`, path `dist` |
| 7 | goal | `## Deploy your Vue app` | Deploy tab Builds: first build in progress or queued |
| 8 | remove | `## Troubleshooting` | Empty Git dropdown — link Configure Git guide |
| 9 | remove | `## Troubleshooting` | Build fails — path `dist` |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Repository value `codecapsules-io/demo-vue` conflicts with fork prerequisite; last step matches builds goal |
| Check 2: Prerequisites | pass | Account, fork, Space, Git configured — linked shared pages |
| Check 3: Links | pass | Internal links resolve |
| Check 4: Format and style | fail | Step 1 uses **+** before **New Capsule**; repository not stated exactly for a forked demo |

## Tickets

### vue-1

- **ID**: vue-1
- **Type**: Format fix
- **Title**: Name the new-capsule control by action, not **+**.
- **Problem**: Step 1 says: "In the sidebar, click **+** and select **New Capsule**."
- **Rule**: `writing_style.md`, Words — name UI controls by what they say or do, not by colour or position alone.
- **Change**: Rewrite step 1 so the reader clicks **New Capsule** (or the control’s on-screen label) without leading with **+** or sidebar position alone.
- **Done when**: Step 1 follows the writing-style rule and opens the capsule wizard.

### vue-2

- **ID**: vue-2
- **Type**: Format fix
- **Title**: State the forked Git repository exactly on Configure.
- **Problem**: Step 5 tells the reader to select **Git Repository** `codecapsules-io/demo-vue` while **Prerequisites** require forking `codecapsules-io/demo-vue` into the reader’s GitHub account.
- **Rule**: `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; don't write ambiguous repo names.
- **Change**: On **Configure**, name the reader’s fork (for example `\<your-github-username\>/demo-vue` or the fork owner/name shown in GitHub after fork), matching the prerequisite and the repository granted in Configure Git.
- **Done when**: Step 5 names the fork the reader created, and the flow still reaches a build on the **Deploy** tab **Builds** section.

## Proposed outline

```md
# Host Your Vue Application
<First build in progress on Deploy tab Builds — matches goal.>

## Prerequisites
<DocCardList — account, fork demo-vue, Space, GitHub connected>

## Deploy your Vue app
1. **Open the capsule wizard** — **New Capsule** (no **+**-only wording)
2. **Choose capsule details** — Frontend Capsule, Team, Space
3. **Choose static hosting** — Static
4. **Choose a plan** — Free
5. **Connect the repository** — reader’s `demo-vue` fork on `main`
6. **Set build settings** — `npm run build`, `dist`
7. **Check the build** — Builds: in progress or queued

## Troubleshooting
<details> … </details>
```