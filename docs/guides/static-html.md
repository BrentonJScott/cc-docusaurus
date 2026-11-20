---
slug: "/frontend/static-html"
description: >-
  Create a Static HTML Frontend Capsule on the Code Capsules test platform and confirm
  the first build appears under Deploy → Builds.
title: "How to Host a Static HTML Website"
sidebar_label: "Static HTML"
---

# Create Static HTML capsule

Create and deploy a Static HTML frontend capsule on the test platform, from login through the capsule wizard, until a build shows as in progress on **Deploy → Builds**.

Verified on **2026-11-20** at [test-platform.codecapsules.io](https://test-platform.codecapsules.io). For production marketing and signup copy, see [codecapsules.io](https://www.codecapsules.io/).

## Goal

After you finish the wizard, you should see the capsule **building** on the capsule **Deploy** tab under **Builds**.

## Prerequisites

- A Code Capsules account on the test platform
- A Git repository with a Static HTML app (for example `npm run build`, static output under dist or public per your bundler)
- GitHub connected to your team (**Configure Git for Code Capsules** if the repository list is empty)

## Steps

### Step 1

Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”.

![Step 1 — open the test platform](/img/guides/create-static-html-capsule/step-1.jpg)

### Step 2

On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox.

![Step 2 — Welcome back login form](/img/guides/create-static-html-capsule/step-2.jpg)

### Step 3

Click **Log in**.

![Step 3 — signed in to the dashboard](/img/guides/create-static-html-capsule/step-3.jpg)

### Step 4

Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?**

![Step 4 — Quick Start framework list](/img/guides/create-static-html-capsule/step-4.jpg)

### Step 5

On **Quick Start**, find the **Static HTML** card and click **Deploy Now**. You should reach **New Capsule** at `/new/capsule?capsuleType=frontend` with breadcrumbs **Hosting** / **Plan** / **Configure** / **Deploy**.

![Step 5 — New Capsule wizard entry](/img/guides/create-static-html-capsule/step-5.jpg)

### Step 6

On **Capsule Details**:

- Under **Choose a Capsule**, open the dropdown and choose **Frontend** (“Angular, React, Vue or static site deployments”) if **Backend** is still shown after **Deploy Now**.
- Under **Choose a Team**, open the dropdown under that label, wait for teams to load, and choose **Personal Team** (or your team name).
- Under **Choose a Space**, open the dropdown under **Choose a Space**, wait for spaces to load, and choose a space (for example **Personal Space** on the audit account).
- Click **Next** when all three fields are filled.

![Step 6 — Capsule Details with Frontend, team, and space](/img/guides/create-static-html-capsule/step-6.jpg)

### Step 7

On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation shows **Choose how your site is hosted to continue**, the Static row is not selected yet.

![Step 7 — Hosting with Static selected](/img/guides/create-static-html-capsule/step-7.jpg)

### Step 8

On **Plan**, select the **Free** plan card, then **Next**.

![Step 8 — Plan with Free selected](/img/guides/create-static-html-capsule/step-8.jpg)

### Step 9

On **Connect a Git Repository**:

- Open **Search/Select a Repository**, wait for repositories to load, and choose your Static HTML GitHub repo. On the documentation audit account, select **`BrentonJScott/demo-html Team Repository`** (type `demo-html` in the filter if the list is long). If the list is empty, use **Configure Git for Code Capsules**, connect GitHub, return, and open the repository dropdown again.
- Under **Select a Branch to deploy from**, open **Search/Select a Branch** and choose **main** after the repository is selected (**No items found** is normal until a repository is chosen).
- Click **Next**.

![Step 9 — Connect a Git Repository](/img/guides/create-static-html-capsule/step-9.jpg)

### Step 10

On **Build & Deploy**, leave **Build Command** and **Path to static content** blank unless your repo needs a build step.

![Step 10 — Build & Deploy fields](/img/guides/create-static-html-capsule/step-10.jpg)

### Step 11

Click **Create Capsule**.

![Step 11 — Build & Deploy ready to submit](/img/guides/create-static-html-capsule/step-11.jpg)

### Step 12

On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progress**.

![Step 12 — Deploy tab with build in progress](/img/guides/create-static-html-capsule/step-12.jpg)

## Troubleshooting

- **Please select a Capsule, Team and Space:** Fill all three dropdowns on **Capsule Details** before **Next**; use the inputs under each label so the dropdown receives the click.
- **Backend instead of Frontend on Capsule Details:** Switch **Choose a Capsule** to **Frontend** before selecting team and space.
- **No repositories in Search/Select a Repository:** Connect GitHub via **Configure Git for Code Capsules**; without a repository you cannot reach **Create Capsule** or a build on **Deploy → Builds**.
- **Static HTML repo not visible in the dropdown:** Type part of the repository name (for example `demo-html`) in **Search/Select a Repository**; the platform may only show the first page until you filter.
- **Named repository missing:** Step 9 must list **`BrentonJScott/demo-html Team Repository`** for the audit account; if it is absent, stop and connect the repo or pick the correct team—do not substitute another repository and expect a successful Static HTML build.