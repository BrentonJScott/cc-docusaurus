# Format report: django-+-mysql.md

- **Run:** 2026-11-25-1218
- **Doc file:** `docs/database/mysql/django-+-mysql.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host Django with MySQL
- **Goal:** Expect to Deploy a Django app with a MySQL database
- **Format check:** fail

## Content list

1. **goal (intro)** — (under `#` title) — Deploy a Django app with a MySQL database on Code Capsules from GitHub. When you finish, the demo app loads at the capsule public URL.
2. **prerequisite** — `## Prerequisites` — Code Capsules account → `/docs/shared/create-an-account`
3. **prerequisite** — `## Prerequisites` — Fork `django-demo` → `/docs/shared/fork-a-demo-repo`
4. **prerequisite** — `## Prerequisites` — A Space → `/docs/shared/create-a-space`
5. **prerequisite** — `## Prerequisites` — GitHub connected → `/docs/shared/configure-git-for-code-capsules`
6. **goal** — `## Deploy your Django MySQL app` — **Start the MySQL capsule** — In Space, **+** / **New Capsule**; on **Capsule Details**, Data Capsule, MySQL Database Cluster, Team, Space.
7. **goal** — `## Deploy your Django MySQL app` — **Create the MySQL capsule** — Click **Create Capsule**.
8. **goal** — `## Deploy your Django MySQL app` — **Start the Backend capsule** — **+** / **New Capsule**; **Capsule Details**, Backend Capsule, Team, Space; **Next**.
9. **goal** — `## Deploy your Django MySQL app` — **Choose the plan** — On **Plan**, **Basic**; **Next**.
10. **goal** — `## Deploy your Django MySQL app` — **Configure the repository** — On **Configure**, `codecapsules-io/django-demo`, `main`, blank **Run Command**.
11. **goal** — `## Deploy your Django MySQL app` — **Create the Backend capsule** — Click **Create Capsule**.
12. **goal** — `## Deploy your Django MySQL app` — **Wait for the build** — **Deploy** tab **Builds**; first build runs on create.
13. **goal** — `## Deploy your Django MySQL app` — **Connect the capsules** — **Config**, **Data capsules**, **Connection string**, `DATABASE_URL`, **Save**.
14. **goal** — `## Deploy your Django MySQL app` — **Open the application** — **Details** public URL; Django demo loads.
15. **—** — `## Troubleshooting` — UI does not match steps — recheck Team and Space.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Steps 1 and 3 combine opening the capsule wizard (Space, **+**, **New Capsule**) with actions on **Capsule Details** in one numbered step instead of one wizard screen per step. |
| Check 2: Prerequisites | pass | Four prerequisite cards each link to an existing `docs/shared/` page. |
| Check 3: Links | pass | All prerequisite `href` values resolve to files under `docs/shared/`. |
| Check 4: Format and style | fail | Steps 1 and 3 use **+** instead of naming the control; several step bodies do not open with the screen name in bold per `how_to_format.md` (steps 1–3, 6). |

## Tickets

### django-+-mysql-1

- **Type:** Format fix
- **Title:** Split wizard entry from Capsule Details for each capsule.
- **Problem:** Step **Start the MySQL capsule** says “In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose …” in one list item. Step **Start the Backend capsule** repeats the same pattern.
- **Rule:** `how_to_format.md`, Steps — “One step covers one wizard screen.”
- **Change:** Add a first step pattern like `docs/products/frontend-capsule/static/deploy.md` step 1 (**Open the capsule wizard** → “Open the Space … Select **New Capsule**.”), then a separate step that starts “On **Capsule Details**, …” for MySQL and again for Backend.
- **Done when:** No numbered step mixes wizard entry with **Capsule Details** fields.

### django-+-mysql-2

- **Type:** Format fix
- **Title:** Name the control used to add a capsule.
- **Problem:** Steps 1 and 3 say “click **+**” to start a new capsule.
- **Rule:** `writing_style.md`, Words — name UI controls by label or action, not position or symbol alone.
- **Change:** Replace **+** with the on-screen action (for example “Select **New Capsule**”) as in the static frontend deploy guide.
- **Done when:** No step describes the action using **+** alone.

### django-+-mysql-3

- **Type:** Format fix
- **Title:** Open each step body with the screen name in bold.
- **Problem:** Step **Create the MySQL capsule** is only “Click **Create Capsule**.” Step **Create the Backend capsule** is the same. Steps **Start the MySQL capsule** and **Start the Backend capsule** open with “In your Space …” instead of “On **<Screen>**, …”.
- **Rule:** `how_to_format.md`, Steps — “Start the description with the screen's name in bold, such as ‘On **Plan**, …’.”
- **Change:** Begin each step body with the relevant screen (for example “On **Capsule Details**, click **Create Capsule**.”).
- **Done when:** Every step description opens with “On **<Screen>**, …” except a dedicated wizard-entry step that matches the static deploy pattern.

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

1. **Open the MySQL capsule wizard**

   Open the Space for this app. Select **New Capsule**.

2. **Choose the MySQL capsule details**

   On **Capsule Details**, choose **Data Capsule**, **MySQL Database Cluster**, your Team, and your Space.

3. **Create the MySQL capsule**

   On **Capsule Details**, click **Create Capsule**.

4. **Open the Backend capsule wizard**

   Open the same Space. Select **New Capsule**.

5. **Choose the Backend capsule details**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

6. **Choose a plan**

   On **Plan**, select **Basic**. Click **Next**.

7. **Configure the repository**

   On **Configure**, select `codecapsules-io/django-demo`, branch `main`, leave **Run Command** blank.

8. **Create the Backend capsule**

   On **Configure** (or final screen), click **Create Capsule**.

9. **Watch the build**

   On **Deploy** → **Builds**, confirm the first build is running.

10. **Bind the database**

    On **Config** → **Data capsules**, add `DATABASE_URL`, click **Save**.

11. **Open the app**

    On **Details**, open the public URL; the Django demo loads.

## Troubleshooting

<details>
<summary>The UI does not match these steps</summary>

Confirm Team and Space, then repeat from the first step.

</details>
```