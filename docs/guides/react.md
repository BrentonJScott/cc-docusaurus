---
slug: "/frontend/react"
description: >-
  Create a React Frontend Capsule on the Code Capsules test platform and confirm
  the first build appears under Deploy → Builds.
title: "How to Host a React Application"
sidebar_label: "React"
---

# Create React frontend capsule

Create and deploy a React frontend capsule on the test platform, from login through the capsule wizard, until a build shows as in progress on **Deploy → Builds**.

Verified on **2026-07-03** at [test-platform.codecapsules.io](https://test-platform.codecapsules.io). For production marketing and signup copy, see [codecapsules.io](https://www.codecapsules.io/).

## Goal

After you finish the wizard, you should see the capsule **building** on the capsule **Deploy** tab under **Builds**.

## Prerequisites

- A Code Capsules account on the test platform
- A Git repository with a React app (for example `npm run build`, static output under `build`)
- GitHub connected to your team (**Configure Git for Code Capsules** if the repository list is empty)

## Steps

### Step 1

Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”.

![Step 1 — open the test platform](/img/guides/create-react-frontend-capsule/step-1.jpg)

### Step 2

On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox.

![Step 2 — Welcome back login form](/img/guides/create-react-frontend-capsule/step-2.jpg)

### Step 3

Click **Log in**.

![Step 3 — signed in to the dashboard](/img/guides/create-react-frontend-capsule/step-3.jpg)

### Step 4

On the dashboard, click **Create New Capsule** and pick **React**. You should reach **New Capsule** at `/new/capsule?capsuleType=frontend`.

![Step 5 — New Capsule wizard entry](/img/guides/create-react-frontend-capsule/step-5.jpg)

### Step 5

On **Capsule Details**:

- Under **Choose a Capsule**, open the dropdown and choose **Frontend** (“Angular, React, Vue or static site deployments”) if **Backend** is still shown after **Deploy Now**.
- Under **Choose a Team**, open the dropdown under that label, wait for teams to load, and choose **Personal Team** (or your team name).
- Click **Next** when both fields are filled.

![Step 6 — Capsule Details with Frontend and team](/img/guides/create-react-frontend-capsule/step-6.jpg)

### Step 6

On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation shows **Choose how your site is hosted to continue**, the Static row is not selected yet.

![Step 7 — Hosting with Static selected](/img/guides/create-react-frontend-capsule/step-7.jpg)

### Step 7

On **Plan**, select the **Starter** plan card, then **Next**.

![Step 8 — Plan with Starter selected](/img/guides/create-react-frontend-capsule/step-8.jpg)

### Step 8

On **Connect a Git Repository**:

- Open **Search/Select a Repository**, wait for repositories to load, and choose your React GitHub repo. On the documentation audit account, select **`BrentonJScott/demo-react Team Repository`** (type `demo-react` in the filter if the list is long). If the list is empty, use **Configure Git for Code Capsules**, connect GitHub, return, and open the repository dropdown again.
- Under **Select a Branch to deploy from**, open **Search/Select a Branch** and choose **master** after the repository is selected (**No items found** is normal until a repository is chosen).
- Click **Next**.

![Step 9 — Connect a Git Repository](/img/guides/create-react-frontend-capsule/step-9.jpg)

### Step 9

On **Build & Deploy**, fill the fields that use placeholder examples on the live form:

- Build command placeholder → `npm run build`
- Output directory placeholder → `build` (Create React App output folder)
- **Capsule Name** defaults from the repository; change it if needed.

![Step 10 — Build & Deploy fields](/img/guides/create-react-frontend-capsule/step-10.jpg)

### Step 10

Click **Create Capsule**.

![Step 11 — Build & Deploy ready to submit](/img/guides/create-react-frontend-capsule/step-11.jpg)

### Step 11

On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progress**.

![Step 12 — Deploy tab with build in progress](/img/guides/create-react-frontend-capsule/step-12.jpg)

## Troubleshooting

- **Please select a Capsule, Team and Space:** Fill all three dropdowns on **Capsule Details** before **Next**; use the inputs under each label so the dropdown receives the click.
- **Backend instead of Frontend on Capsule Details:** Switch **Choose a Capsule** to **Frontend** before selecting team and space.
- **No repositories in Search/Select a Repository:** Connect GitHub via **Configure Git for Code Capsules**; without a repository you cannot reach **Create Capsule** or a build on **Deploy → Builds**.
- **React repo not visible in the dropdown:** Type part of the repository name (for example `demo-react`) in **Search/Select a Repository**; the platform may only show the first page until you filter.
- **Named repository missing:** Step 8 must list **`BrentonJScott/demo-react Team Repository`** for the audit account; if it is absent, stop and connect the repo or pick the correct team—do not substitute another repository and expect a successful React build.