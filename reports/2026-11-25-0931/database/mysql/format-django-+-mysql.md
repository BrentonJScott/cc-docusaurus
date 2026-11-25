# Format report: django-+-mysql.md

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/database/mysql/django-+-mysql.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host Django with MySQL
- **Goal:** Deploy Django app with MySQL
- **Format check:** fail

## Content list (Check 1)

1. `goal` — (under `# Host Your Django MySQL Application`) — Deploy a Django app with a MySQL database on Code Capsules from GitHub; demo loads at the capsule public URL when finished.
2. `prerequisite` — `## Prerequisites` — Code Capsules account → `/docs/shared/create-an-account`
3. `prerequisite` — `## Prerequisites` — Fork `django-demo` → `/docs/shared/fork-a-demo-repo`
4. `prerequisite` — `## Prerequisites` — A Space → `/docs/shared/create-a-space`
5. `prerequisite` — `## Prerequisites` — GitHub connected → `/docs/shared/configure-git-for-code-capsules`
6. `goal` — `## Deploy your Django MySQL app` — **Start the MySQL capsule** — New Capsule wizard entry plus **Capsule Details** for MySQL cluster.
7. `goal` — `## Deploy your Django MySQL app` — **Create the MySQL capsule** — **Create Capsule**.
8. `goal` — `## Deploy your Django MySQL app` — **Start the Backend capsule** — New Capsule plus **Capsule Details** for Backend Capsule.
9. `goal` — `## Deploy your Django MySQL app` — **Choose the plan** — **Plan**, **Basic**.
10. `goal` — `## Deploy your Django MySQL app` — **Configure the repository** — **Configure**, `codecapsules-io/django-demo`, `main`, blank **Run Command**.
11. `goal` — `## Deploy your Django MySQL app` — **Create the Backend capsule** — **Create Capsule**.
12. `goal` — `## Deploy your Django MySQL app` — **Wait for the build** — **Deploy** → **Builds**.
13. `goal` — `## Deploy your Django MySQL app` — **Connect the capsules** — **Config**, **Data capsules**, `DATABASE_URL`.
14. `goal` — `## Deploy your Django MySQL app` — **Open the application** — public URL; Django demo loads.
15. `—` — `## Troubleshooting` — UI mismatch — recheck Team and Space.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | pass | Steps under `## Deploy your Django MySQL app` reach the goal; intro matches `description`; plan, repo, branch, and Run Command are stated. |
| Check 2: Prerequisites | pass | Each prerequisite is a linked `DocCardList` card; all targets exist under `docs/shared/`. |
| Check 3: Links | pass | All prerequisite `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | Steps 1 and 8 bundle two wizard screens; steps 2, 6, and 11 omit the screen name; steps 1, 3, and 11 use **+** instead of naming controls (`how_to_format.md`, Steps; `writing_style.md`, Words). |

## Tickets

### django-+-mysql-1

- **Type:** Format fix
- **Title:** Split MySQL deployment into one step per wizard screen.
- **Problem:** Step **Start the MySQL capsule** says “In your Space, click **+** and select **New Capsule**” and continues on **Capsule Details** in the same numbered item.
- **Rule:** `how_to_format.md`, Steps — one step covers one wizard screen; description opens with the screen name in bold.
- **Change:** Mirror `docs/backend/node.js/express.js.md`: first step only starts **New Capsule** from the Space; next step is only **Capsule Details** for **Data Capsule** / **MySQL Database Cluster**, Team, and Space.
- **Done when:** No single MySQL wizard step mixes the Space action with **Capsule Details**.

### django-+-mysql-2

- **Type:** Format fix
- **Title:** Split Backend deployment into one step per wizard screen.
- **Problem:** Step **Start the Backend capsule** combines starting **New Capsule** with **Capsule Details** and **Next** in one item.
- **Rule:** `how_to_format.md`, Steps — one step per screen.
- **Change:** Separate **New Capsule** from **Capsule Details** (Backend Capsule, Team, Space, **Next**), keeping **Plan**, **Configure**, and **Create Capsule** as their own steps.
- **Done when:** Each Backend wizard screen has its own numbered step, each opening with “On **<Screen>**, …”.

### django-+-mysql-3

- **Type:** Format fix
- **Title:** Name capsule and connection controls by label.
- **Problem:** Steps use “click **+**” for new capsules and “Click **+** next to **Connection string**”.
- **Rule:** `writing_style.md`, Words — name UI controls by label or action, not symbol alone.
- **Change:** Replace **+** with the on-screen control labels (e.g. **New Capsule**, **Add connection** or whatever the UI shows) in every step.
- **Done when:** No step relies on **+** alone to describe an action.

### django-+-mysql-4

- **Type:** Format fix
- **Title:** Open create-capsule steps with the screen name.
- **Problem:** **Create the MySQL capsule** and **Create the Backend capsule** are only “Click **Create Capsule**.” with no leading “On **…**, …”.
- **Rule:** `how_to_format.md`, Steps — start each description with the screen name in bold.
- **Change:** Prefix each with the wizard screen that shows **Create Capsule** (for example **Review** or the final confirmation step used in the UI).
- **Done when:** Every step body opens with “On **<Screen>**, …”.

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

Deploy a Django app with a MySQL database on Code Capsules from GitHub. When you finish, the demo app loads at the capsule public URL.

## Prerequisites

<DocCardList — account, fork django-demo, Space, GitHub → existing /docs/shared/ pages>

## Deploy your Django MySQL app

1. **Start a new capsule (MySQL)**

   In your Space, select **New Capsule** (or the labeled control).

2. **Configure the MySQL cluster**

   On **Capsule Details**, choose **Data Capsule**, **MySQL Database Cluster**, Team, Space.

3. **Create the MySQL capsule**

   On **<final MySQL wizard screen>**, click **Create Capsule**.

4. **Start a new capsule (Backend)**

   In your Space, select **New Capsule**.

5. **Choose Backend Capsule, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, Team, Space. Click **Next**.

6. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

7. **Configure the repository**

   On **Configure**, select `codecapsules-io/django-demo`, branch `main`, leave **Run Command** blank.

8. **Create the Backend capsule**

   On **<final Backend wizard screen>**, click **Create Capsule**.

9. **Wait for the build**

   On **Deploy** → **Builds**, confirm the first build is running or complete.

10. **Connect the capsules**

    On **Config** → **Data capsules**, add `DATABASE_URL`, **Save**.

11. **Open the application**

    On **Details**, open the public URL; the Django demo loads.

## Troubleshooting

<details>
<summary>The UI does not match these steps</summary>

Confirm Team and Space, then repeat from the first step.

</details>
```