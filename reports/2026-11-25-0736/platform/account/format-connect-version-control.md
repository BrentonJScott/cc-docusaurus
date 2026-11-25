# Format report — connect-version-control

- **Run:** 2026-11-25-0736
- **Doc:** `docs/platform/account/connect-version-control.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Connect GitHub or GitLab (`docs/platform/account/connect-version-control.md`)
- **Goal:** Expect to see your repositories appear in the Git Repository dropdown when you create a Capsule
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | (intro) | Connect GitHub; repositories appear in **Git Repository** dropdown when you create a Capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card). |
| 3 | goal | `## Connect version control` | Open **Repos**. |
| 4 | goal | `## Connect version control` | Click **Install** next to **GitHub**; sign in if prompted. |
| 5 | goal | `## Connect version control` | On **Only select repositories**, choose repositories; **Install & Authorize**. |
| 6 | goal | `## Connect version control` | Sidebar **+** → **New Capsule**. |
| 7 | goal | `## Connect version control` | On **Capsule Details**, **Frontend** and Team; **Next**. |
| 8 | goal | `## Connect version control` | On **Hosting**, **Static**; **Next**. |
| 9 | goal | `## Connect version control` | On **Plan**, **Free**; **Next**. |
| 10 | goal | `## Connect version control` | On **Configure**, **Git Repository** lists selected repositories. |
| 11 | goal | `## Troubleshooting` | Empty dropdown — repeat **Install** and repository selection. |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Documented feature includes GitLab; page covers GitHub only. **Capsule Details** omits **Space** (required wizard value in peer guides). |
| Check 2: Prerequisites | pass | Account prerequisite is linked via `DocCardList`; no prerequisites explained inline. |
| Check 3: Links | pass | `/docs/shared/create-an-account` resolves to `docs/shared/create-an-account.md`. |
| Check 4: Format and style | fail | Steps section heading, step-description pattern, and UI labels break `how_to_format.md` / `writing_style.md`. |
| Walkthrough | not applicable | Format fail — walkthrough not run. |

## Tickets

### connect-version-control-1

- **Type:** Format fix
- **Title:** Rename the steps section to the verb-your-thing heading.
- **Problem:** Steps live under `## Connect version control` instead of a heading such as `## Connect your GitHub account`.
- **Rule:** `how_to_format.md` Sections and Steps: heading **must** be `## <Verb> your <Thing>`.
- **Change:** Replace `## Connect version control` with `## Connect your GitHub account` (or equivalent that names what the reader is doing).
- **Done when:** The steps section uses the required heading pattern from the template.

### connect-version-control-2

- **Type:** Format fix
- **Title:** Start each step description with the screen name.
- **Problem:** Step 1 begins with “In the dashboard, open **Repos**.” Step 2 lacks an `On **…**` opener. Step 4 describes the sidebar without naming the wizard screen.
- **Rule:** `how_to_format.md` Steps: “Start the description with the screen's name in bold, such as ‘On **Plan**, …’.”
- **Change:** Reword steps 1–4 (and any others that need it) so each body starts with `On **<Screen>**, …`.
- **Done when:** Every step description follows the screen-first pattern used in `docs/frontend/angular.md`.

### connect-version-control-3

- **Type:** Format fix
- **Title:** State Space (and exact capsule type) on Capsule Details.
- **Problem:** Step 5 says “choose **Frontend** and your Team” with no **Space**; peer guides use **Frontend Capsule** with Team and Space.
- **Rule:** `how_to_format.md` Steps: “Every value the goal depends on **must** be stated exactly”; `FORMAT.MD` Check 1 (goal steps).
- **Change:** On **Capsule Details**, specify **Frontend Capsule** (or the exact on-screen label), the Team, and the Space the reader uses, matching the live wizard.
- **Done when:** Step 5 names Team, Space, and capsule type exactly as shown in the UI.

### connect-version-control-4

- **Type:** Missing goal step
- **Title:** Cover GitLab or narrow the documented feature.
- **Problem:** Feature is “Connect GitHub or GitLab”; title, sidebar, and steps mention only GitHub. No GitLab install or auth path.
- **Rule:** `FORMAT.MD` Check 1 — steps must reach the goal for the feature named in `cc_documented_features.md`; `writing_style.md` — one page, one coherent task.
- **Change:** Either add GitLab connection steps (and prerequisites if any) through the same goal, or split GitLab into its own guide and update the features list; align title/sidebar with what the page covers.
- **Done when:** A reader following the page can connect the VCS provider(s) the feature name promises and see repos in **Git Repository** when creating a capsule.

### connect-version-control-5

- **Type:** Format fix
- **Title:** Fix GitHub authorization UI labels in step 3.
- **Problem:** Step 3 uses “On **Only select repositories**” as a screen and lower-case UI text. Shared page uses “**Only Select Repositories**” on the GitHub install flow.
- **Rule:** `writing_style.md` Words: “Put UI labels in bold, exactly as they appear on screen.”
- **Change:** Rewrite step 3 to describe the GitHub install screen (e.g. `On GitHub, …`) and bold labels exactly as on GitHub/Code Capsules.
- **Done when:** Step 3 matches on-screen capitalization and does not treat a radio option as a Code Capsules screen name.

## Proposed outline

```md
---
slug: "/platform/account/connect-version-control"
title: "How to Connect GitHub to Code Capsules"
description: >-
  Connect GitHub to Code Capsules. When you finish, your repositories appear in
  the Git Repository dropdown when you create a Capsule.
sidebar_label: "Connect GitHub"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect GitHub to Code Capsules

Connect GitHub to Code Capsules. When you finish, your repositories appear in the **Git Repository** dropdown when you create a Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Connect your GitHub account

1. **Open Repos**

   On **Repos**, open the version-control providers list.

2. **Install GitHub**

   On **Repos**, click **Install** next to **GitHub**. Sign in to GitHub if prompted.

3. **Limit repository access**

   On GitHub, select **Only Select Repositories**, choose the repositories you deploy from, and click **Install & Authorize**.

4. **Open the capsule wizard**

   Open your Space. On the sidebar, click **New Capsule**.

5. **Choose capsule details**

   On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. Click **Next**.

6. **Choose static hosting**

   On **Hosting**, select **Static**. Click **Next**.

7. **Choose a plan**

   On **Plan**, select **Free**. Click **Next**.

8. **Confirm your repositories**

   On **Configure**, open **Git Repository**. Your selected repositories are listed.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

The repository is not granted to Code Capsules, or GitHub is not connected. Repeat **Install** on **Repos** and include that repository in **Only Select Repositories**.

</details>
```