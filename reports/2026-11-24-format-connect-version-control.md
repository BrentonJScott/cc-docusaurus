# Format report: connect-version-control

| Field | Value |
|---|---|
| Run timestamp | 2026-11-24T08:21:00Z |
| Doc file | `docs/platform/account/connect-version-control.md` |
| Doc type | How-to guide |
| Template | `how_to_format.md` |
| Feature | Connect GitHub or GitLab |
| Goal | Expect to see repos listed when creating a capsule |
| Format check | **fail** |

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | prerequisite | (title area) | To deploy applications on Code Capsules, you need to connect to a version control provider and give Code Capsules permission to read the relevant repository. |
| 2 | goal | (title area) | Navigate to **Repos** in the dashboard and click **Install** next to your preferred provider. |
| 3 | goal | (title area) | Follow the prompts to give Code Capsules access to your repos. |
| 4 | goal | (title area) | For GitHub: enable **Only Select Repositories**, select the repository, click **Install & Authorize**. |
| 5 | remove | (title area) | Screenshot: Version Control Providers |
| 6 | remove | (title area) | Screenshot: Install & authorize github |
| 7 | remove | (title area) | Link to [share repos with your Teams](/platform/teams/share-a-repo-with-a-team/). |

## Check results

| Check | Status | Reason |
|---|---|---|
| Step 1: Doc type | pass | Single task how-to; no mixed types requiring split. |
| Check 1: Content | fail | Goal steps live under the title, not in a steps section; no end state confirming repos appear when creating a capsule; prerequisite explained inline. |
| Check 2: Prerequisites | fail | No `## Prerequisites`; account and provider setup not linked via `DocCardList`. |
| Check 3: Links | fail | Images `/gitbook-assets/platform/choose-version-control-providers.png` and `/gitbook-assets/platform/github-integration.png` are not under `static/`. Internal team link exists. |
| Check 4: Format and style | fail | Missing `doc_version`, `sidebar_label`, `DocCardList` import; wrong section structure; screenshots; no `## Troubleshooting`; description truncated in frontmatter. |

## Tickets

### connect-version-control-1

- **Type:** Format fix
- **Title:** Restructure connect version control as a how-to guide
- **Problem:** The page is a short intro with inline steps and images. It has no `## Prerequisites`, no `## <Verb> your <Thing>` steps section, and no `## Troubleshooting`.
- **Rule:** `how_to_format.md`, Sections; `writing_style.md`, Every doc
- **Change:**
  - [ ] Add `sidebar_label` and `doc_version: drift` to frontmatter; complete `description` to match the goal (repos listed when creating a capsule).
  - [ ] Add `import DocCardList from '@theme/DocCardList';` after frontmatter.
  - [ ] Replace `# Connect Version Control` with a task-focused `#` title; repeat the description in one or two sentences under the title.
  - [ ] Add `## Prerequisites` with `DocCardList` linking to `/docs/shared/create-an-account` (👤).
  - [ ] Add `## Connect your version control` with a numbered list: open **Repos**, **Install**, complete provider authorization, verify repos appear on **Connect a Git Repository** when creating a capsule.
  - [ ] End the last step with the goal outcome (repository dropdown lists connected repos).
  - [ ] Remove both screenshots.
  - [ ] Remove the share-repos paragraph (or move to a separate teams how-to; link from troubleshooting only if needed).
  - [ ] Add `## Troubleshooting` with at least one `<details>` block (e.g. empty repo list after install).
- **Done when:** Section order matches the how-to template and the last step states the documented goal.

### connect-version-control-2

- **Type:** Remove content
- **Title:** Remove non-goal link to share repos with a team
- **Problem:** After connecting VCS, the page links: "Once version control is connected, you can [share repos with your Teams](...)."
- **Rule:** `FORMAT.MD`, Check 1 How-to: label `remove`
- **Change:** Delete that sentence from this guide.
- **Done when:** The page ends at the connection goal with no team-sharing detour.

### connect-version-control-3

- **Type:** Broken link
- **Title:** Remove or replace missing screenshot assets
- **Problem:** `![Version Control Providers](/gitbook-assets/platform/choose-version-control-providers.png)` and `![Install & authorize github](/gitbook-assets/platform/github-integration.png)` reference paths not present under `static/`.
- **Rule:** `FORMAT.MD`, Check 3: Links; `writing_style.md`, No screenshots
- **Change:** Remove both images (preferred per writing style).
- **Done when:** No image references remain on the page.

## Proposed outline

```md
---
slug: "/platform/account/connect-version-control"
title: "Connect GitHub or GitLab"
description: >-
  Connect GitHub or GitLab to Code Capsules and confirm your repositories
  appear when you create a capsule.
sidebar_label: "Connect GitHub or GitLab"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect GitHub or GitLab

<description repeat>

## Prerequisites

<DocCardList account card → /docs/shared/create-an-account>

## Connect your version control

1. **Open Repos**
2. **Install your provider**
3. **Authorize access**
4. **Confirm repos in the capsule wizard** (goal outcome)

## Troubleshooting

<details>…</details>
```