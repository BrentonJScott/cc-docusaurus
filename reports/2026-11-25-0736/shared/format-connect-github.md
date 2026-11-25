# Format report — connect-github

- **Run:** 2026-11-25-0736
- **Doc:** `docs/shared/connect-github.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Connect GitHub or GitLab
- **Goal:** Expect to see repos listed when creating a capsule
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | remove | (intro) | Give Code Capsules access to the GitHub repository you want to deploy. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card) |
| 3 | remove | `## Prerequisites` | A forked demo repo (card) |
| 4 | goal | `## Connect your GitHub account` | Open **Repos** and click **Install** next to **GitHub**. |
| 5 | goal | `## Connect your GitHub account` | On GitHub, select username, **Only Select Repositories**, select repository. |
| 6 | goal | `## Connect your GitHub account` | Click **Install & Authorize**; repository appears in **Repos** list. |
| 7 | goal | `## Troubleshooting` | Fix when repository isn't in Repos list via GitHub app settings. |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Intro and last step describe Repos list access, not repos in the capsule wizard; fork is not needed for the goal. |
| Check 2: Prerequisites | fail | Forked demo repo is listed but is not a prerequisite for connecting GitHub for capsule creation. |
| Check 3: Links | pass | Internal prerequisite links resolve to `docs/shared/create-an-account.md` and `docs/shared/fork-a-demo-repo.md`. |
| Check 4: Format and style | fail | Description and intro do not match the documented feature goal; step 3 end state does not state the goal. |
| Walkthrough | not applicable | Format fail — walkthrough not run. |

## Tickets

### connect-github-1

- **Type:** Missing goal step
- **Title:** End steps with repos visible when creating a capsule.
- **Problem:** Step 3 ends with “The repository appears in the **Repos** list in Code Capsules,” under `## Connect your GitHub account`. The feature goal is repos listed when creating a capsule (for example the **Git Repository** dropdown).
- **Rule:** `FORMAT.MD` Check 1 (goal steps); `how_to_format.md` Steps: “The last step **must** end with the reader seeing the goal.”
- **Change:** Rewrite the last step so it states that when the reader starts creating a capsule, the connected repository appears in the **Git Repository** dropdown (and any other repo they authorized). Align wording with the platform goal, not only the **Repos** admin page.
- **Done when:** The final step explicitly describes the capsule-creation UI outcome from `cc_documented_features.md`.

### connect-github-2

- **Type:** Remove content
- **Title:** Remove forked demo repo from Prerequisites.
- **Problem:** Prerequisites include “🍴 A forked demo repo” linking to `/docs/shared/fork-a-demo-repo`.
- **Rule:** `FORMAT.MD` Check 1 — fork is labelled `remove` for this goal; Check 2 — prerequisite must be required for the goal.
- **Change:** Delete the fork card from the `DocCardList`. Keep only prerequisites needed before connecting GitHub (account).
- **Done when:** `## Prerequisites` lists only what the reader needs before the connect steps, with no fork card.

### connect-github-3

- **Type:** Format fix
- **Title:** Align title block with the documented goal.
- **Problem:** `description` and the sentence under `# Connect GitHub to Code Capsules` say “Give Code Capsules access to the GitHub repository you want to deploy,” which does not mention repos when creating a capsule.
- **Rule:** `how_to_format.md` Title and description: sentences “**must** match the feature's goal in the documented features list”; `writing_style.md` Every doc — description repeated under title.
- **Change:** Update `description` and the intro paragraph to state that after connecting, the reader’s repositories appear when they create a capsule (for example in the **Git Repository** dropdown). Match tone of `docs/platform/account/connect-version-control.md` without copying deployment-only steps.
- **Done when:** Frontmatter `description` and the `#` title paragraph both describe the capsule-creation outcome.

### connect-github-4

- **Type:** Format fix
- **Title:** Open step descriptions with the screen name.
- **Problem:** Step 1 body starts with “In the dashboard, open **Repos**…” instead of leading with the screen.
- **Rule:** `how_to_format.md` Steps: “Start the description with the screen's name in bold, such as ‘On **Plan**, …’.”
- **Change:** Reword step 1 (and adjust other steps if needed) so each description begins with `On **<Screen>**, …`.
- **Done when:** Every step description follows the screen-first pattern from the template.

## Proposed outline

```md
---
slug: "/shared/connect-github"
title: "How to Connect GitHub to Code Capsules"
description: >-
  Connect GitHub so your repositories appear when you create a capsule.
sidebar_label: "Connect GitHub"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect GitHub to Code Capsules

Connect GitHub so your repositories appear when you create a capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Connect your GitHub account

1. **Open GitHub install**

   On **Repos**, click **Install** next to **GitHub**.

2. **Choose repositories**

   On GitHub, select your account, enable **Only Select Repositories**, and select the repositories Code Capsules should access.

3. **Finish authorization**

   Click **Install & Authorize**. When you create a capsule, your repositories appear in the **Git Repository** dropdown.

## Troubleshooting

<details>
<summary>The repository isn't in the Git Repository dropdown when you create a capsule</summary>

The GitHub app may not have access to that repository. In GitHub, open **Settings** > **Applications**, configure the Code Capsules app, and add the repository.

</details>
```