---
slug: "/frontend/react"
description: >-
  Create a React Frontend Capsule on the Code Capsules test platform and confirm
  the first build appears under Deploy → Builds.
title: "How to Host a React Application"
sidebar_label: "React"
doc_version: drift
---

# Host Your React Application

At the end of this guide, you'll have a React Frontend Capsule building from your GitHub repository.

## Prerequisites

- A Code Capsules account. See [Create an account](/docs/shared/create-an-account).
- A [GitHub](https://github.com/) account.
- A fork of a React demo repo, such as `demo-react`. See [Fork a demo repo](/docs/shared/fork-a-demo-repo).
- A Space to deploy into. See [Create a Space](/docs/shared/create-a-space).
- GitHub connected to Code Capsules. See [Configure Git for Code Capsules](/docs/shared/configure-git-for-code-capsules).

## Steps

### Step 1: Log in

Open the [test platform](https://test-platform.codecapsules.io). If you see **Create your account**, click **Log in**. Enter your email and password, then click **Log in**.

### Step 2: Start the React capsule

On the dashboard, click **Create New Capsule** and choose **React**. You reach **New Capsule**.

### Step 3: Choose the Capsule type and Team

On **Capsule Details**, choose **Frontend** under **Choose a Capsule**, choose your Team under **Choose a Team**, and click **Next**.

### Step 4: Choose hosting

On **Hosting**, select the **Static** option (**No server**) and click **Next**.

### Step 5: Choose a plan

On **Plan**, select the **Starter** plan and click **Next**.

### Step 6: Connect the repository

On **Connect a Git Repository**, open **Search/Select a Repository** and choose your React repo, such as `demo-react`. Under **Select a Branch to deploy from**, choose `master`. Click **Next**.

### Step 7: Set the build settings

On **Build & Deploy**, enter `npm run build` as the build command and `build` as the output directory. Change **Capsule Name** if needed.

### Step 8: Create the capsule and check the build

Click **Create Capsule**. On the capsule's **Deploy** tab, open **Builds**. The latest build shows **Building**, **Queued**, or **In progress**.

### Screenshots

![Dashboard signed in](/img/guides/create-react-frontend-capsule/step-3.jpg)
Step 1: Logged in.

![New Capsule wizard](/img/guides/create-react-frontend-capsule/step-5.jpg)
Step 2: Start the React capsule.

![Capsule Details](/img/guides/create-react-frontend-capsule/step-6.jpg)
Step 3: Capsule type and Team.

![Hosting with Static selected](/img/guides/create-react-frontend-capsule/step-7.jpg)
Step 4: Hosting.

![Plan with Starter selected](/img/guides/create-react-frontend-capsule/step-8.jpg)
Step 5: Plan.

![Connect a Git Repository](/img/guides/create-react-frontend-capsule/step-9.jpg)
Step 6: Connect the repository.

![Build & Deploy fields](/img/guides/create-react-frontend-capsule/step-10.jpg)
Step 7: Build settings.

## Troubleshooting

### The repository dropdown is empty

GitHub isn't connected. Click **Configure Git for Code Capsules**, grant access to your fork, and reopen **Search/Select a Repository**.

### The branch dropdown shows "No items found"

No repository is selected yet. Choose a repository first, then open the branch dropdown.

### The wizard shows "Choose how your site is hosted to continue"

The **Static** option isn't selected on **Hosting**. Select it and click **Next**.

### Capsule Details shows Backend instead of Frontend

Switch **Choose a Capsule** to **Frontend** before choosing your Team.
