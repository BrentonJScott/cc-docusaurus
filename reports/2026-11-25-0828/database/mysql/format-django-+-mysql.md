# Format report: django-+-mysql.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/database/mysql/django-+-mysql.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host Django with MySQL
- **Goal:** Expect to Deploy a Django app with a MySQL database
- **Format check:** fail

## Content list

1. **goal (intro)** — (under `#` title) — Deploy a Django app with a MySQL Data Capsule and a Backend Capsule from GitHub. When you finish, the demo app loads at the capsule public URL.
2. **prerequisite** — `## Prerequisites` — Code Capsules account → `/docs/shared/create-an-account`
3. **prerequisite** — `## Prerequisites` — Fork `django-demo` → `/docs/shared/fork-a-demo-repo`
4. **prerequisite** — `## Prerequisites` — A Space → `/docs/shared/create-a-space`
5. **prerequisite** — `## Prerequisites` — GitHub connected → `/docs/shared/configure-git-for-code-capsules`
6. **goal** — `## Deploy your Django MySQL app` — **Create the MySQL capsule** — New Capsule, Data Capsule, MySQL Database Cluster, Create Capsule.
7. **goal** — `## Deploy your Django MySQL app` — **Create the Backend capsule** — Backend Capsule, plan, `codecapsules-io/django-demo` / `main`, blank Run Command, Create Capsule.
8. **goal** — `## Deploy your Django MySQL app` — **Wait for the build** — Builds tab on Deploy.
9. **goal** — `## Deploy your Django MySQL app` — **Connect the capsules** — Config tab, Data capsules, `DATABASE_URL`, Save.
10. **goal** — `## Deploy your Django MySQL app` — **Open the application** — Details tab public URL; Django demo loads.
11. **—** — `## Troubleshooting` — UI does not match steps — recheck Team and Space.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Step 2 does not state an exact plan; it bundles **Plan**, **Configure**, and **Create Capsule** in one numbered step instead of one wizard screen per step. |
| Check 2: Prerequisites | fail | All four prerequisite cards link to `docs/shared/` pages that do not exist under `docs/` (see existing run tickets `shared-create-an-account`, `shared-create-a-space`). |
| Check 3: Links | fail | Internal hrefs `/docs/shared/create-an-account`, `/docs/shared/fork-a-demo-repo`, `/docs/shared/create-a-space`, and `/docs/shared/configure-git-for-code-capsules` have no matching files under `docs/`. |
| Check 4: Format and style | fail | Intro under the `#` title does not repeat frontmatter `description`; step 1 uses **+** instead of naming the control; step bodies do not consistently open with the screen name in bold per `how_to_format.md`. |

## Tickets

### django-+-mysql-1

- **Type:** Format fix
- **Title:** Make the intro repeat the frontmatter description.
- **Problem:** Frontmatter `description` says “Deploy a Django app with a **MySQL database on Code Capsules** from GitHub.” The intro under `# Host Your Django MySQL Application` says “**MySQL Data Capsule and a Backend Capsule** from GitHub.”
- **Rule:** `writing_style.md`, Every doc — directly under the `#` title, one or two sentences repeat `description`.
- **Change:** Set the intro to match `description` exactly, or update both fields so they are identical.
- **Done when:** The intro paragraph and `description` field use the same wording.

### django-+-mysql-2

- **Type:** Format fix
- **Title:** Split deployment steps to one wizard screen per step.
- **Problem:** Step **Create the Backend capsule** covers **Plan**, **Configure** (repo, branch, Run Command), and **Create Capsule** in a single list item. Step **Create the MySQL capsule** mixes capsule-type selection and **Create Capsule**.
- **Rule:** `how_to_format.md`, Steps — “One step covers one wizard screen”; each description starts with the screen name in bold.
- **Change:** Split into separate numbered steps per screen (e.g. MySQL **Capsule Details** → **Create Capsule**; Backend **Plan** with a named plan; **Configure** with exact repo, branch, and Run Command; **Create Capsule**; etc.). Open each body with “On **<Screen>**, …”.
- **Done when:** Each numbered step maps to one screen and opens with that screen in bold.

### django-+-mysql-3

- **Type:** Format fix
- **Title:** State the exact Backend Capsule plan.
- **Problem:** Step 2 says “On **Plan**, choose a plan” without naming the plan value the guide depends on.
- **Rule:** `how_to_format.md`, Steps — “Every value the goal depends on **must** be stated exactly: plan, repository, branch, build command, output folder.”
- **Change:** Replace “choose a plan” with the exact plan name or tier the demo deployment uses on the test platform.
- **Done when:** The plan step names a specific selectable plan, not a placeholder.

### django-+-mysql-4

- **Type:** Format fix
- **Title:** Name the control used to add a capsule.
- **Problem:** Step 1 says “click **+**” to add a capsule.
- **Rule:** `writing_style.md`, Words — name UI controls by label or action, not position or symbol alone.
- **Change:** Use the on-screen label for starting a new capsule (for example **New Capsule** or **Add Capsule**) consistently in both capsule-creation steps.
- **Done when:** Neither step relies on **+** alone to describe the action.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-an-account`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; same ticket as in `reports/2026-11-25-0828/platform/capsules/format-health-checks.md`.
- **Change:** Add the shared account page per that ticket.
- **Done when:** `/docs/shared/create-an-account` resolves in `docs/` and this guide’s account card works.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-a-space`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; same ticket as in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`.
- **Change:** Add the shared Space page per that ticket.
- **Done when:** `/docs/shared/create-a-space` resolves in `docs/` and this guide’s Space card works.

### shared-fork-a-demo-repo

- **Type:** Shared page
- **Title:** Create `docs/shared/fork-a-demo-repo.md`.
- **Problem:** Prerequisites link to `/docs/shared/fork-a-demo-repo`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/fork-a-demo-repo.md` with slug `/shared/fork-a-demo-repo` and steps to fork a named demo repo on GitHub (card copy can stay repo-specific on each guide).
- **Done when:** `/docs/shared/fork-a-demo-repo` resolves in `docs/` and the django-demo prerequisite card works.

### shared-configure-git-for-code-capsules

- **Type:** Shared page
- **Title:** Create `docs/shared/configure-git-for-code-capsules.md`.
- **Problem:** Prerequisites link to `/docs/shared/configure-git-for-code-capsules`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/configure-git-for-code-capsules.md` with slug `/shared/configure-git-for-code-capsules`, covering linking GitHub so the fork appears in the deployment wizard.
- **Done when:** `/docs/shared/configure-git-for-code-capsules` resolves in `docs/` and the GitHub-connected card works.

## Proposed outline

```md
---
slug: "/database/mysql/django-+-mysql"
title: "How to Host Django with MySQL"
description: >-
  Deploy a Django app with a MySQL database on Code Capsules from GitHub. When
  you finish, the demo app loads at the capsule public URL.
sidebar_label: "Django + MySQL"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Django MySQL Application

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — account, fork django-demo, Space, GitHub → /docs/shared/…>

## Deploy your Django MySQL app

1. **Start the MySQL capsule**

   On **Capsule Details**, choose **Data Capsule**, **MySQL Database Cluster**, Team, Space. Click **Create Capsule**.

2. **Start the Backend capsule**

   On **Capsule Details**, choose **Backend Capsule**, Team, Space.

3. **Choose a plan**

   On **Plan**, select <exact plan name>.

4. **Configure the repository**

   On **Configure**, select `codecapsules-io/django-demo`, branch `main`, leave **Run Command** blank.

5. **Create the Backend capsule**

   Click **Create Capsule**.

6. **Watch the build**

   On **Deploy** → **Builds**, …

7. **Bind the database**

   On **Config** → **Data capsules**, add `DATABASE_URL`, **Save**.

8. **Open the app**

   On **Details**, open the public URL; the Django demo loads.

## Troubleshooting

<details>
<summary>The UI does not match these steps</summary>

Confirm Team and Space, then repeat from the first step.

</details>
```