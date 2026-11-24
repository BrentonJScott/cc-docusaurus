---
slug: "/frontend/angular"
description: >-
  Deploy an Angular application on Code Capsules and confirm the first build
  appears under Deploy → Builds.
title: "How to Host an Angular Application"
sidebar_label: "Angular"
doc_version: drift
---

# Host Your Angular Application

Deploy an Angular application on Code Capsules and confirm the first build appears under **Deploy → Builds**.

## Prerequisites

- A Code Capsules account. See [Create an account](/docs/shared/create-an-account).
- A [GitHub](https://github.com/) account.
- A fork of the [demo-angular](https://github.com/codecapsules-io/demo-angular) repo. See [Fork a demo repo](/docs/shared/fork-a-demo-repo).
- A Space to deploy into. See [Create a Space](/docs/shared/create-a-space).
- GitHub connected to Code Capsules. See [Configure Git for Code Capsules](/docs/shared/configure-git-for-code-capsules).

## Goal

The capsule's **Builds** tab shows the first build as **Building**, **Queued**, or **In progress**.

## Steps

### Step 1: Log in

Open the [test platform](https://test-platform.codecapsules.io) and log in. You land on **Quick Start**.

### Step 2: Start the Angular capsule

On **Quick Start**, click **Deploy Now** on the **Angular** card.

### Step 3: Choose the Capsule type, Team, and Space

On **Capsule Details**, choose **Frontend** under **Choose a Capsule**, then choose your Team and your Space. Click **Next**.

### Step 4: Choose hosting and plan

On **Hosting**, select the **Static** option and click **Next**. On **Plan**, select your plan and click **Next**.

### Step 5: Connect the repository

On **Connect a Git Repository**, open **Search/Select a Repository** and choose your fork of `demo-angular`. Under **Branch**, choose the branch you want to deploy, such as `master`. Click **Next**.

### Step 6: Set the build settings

On **Build & Deploy**, enter `npm run build` as the build command and `dist/ng4-complete-guide` as the output directory. Click **Create Capsule**.

### Step 7: Check the build

Open the capsule's **Deploy** tab and find **Builds**. The latest build shows **Building**, **Queued**, or **In progress**.

## Screenshots

![Quick Start with the Angular card](/img/guides/create-angular-frontend-capsule/step-4.jpg)
Step 2: Start the Angular capsule.

![Connect a Git Repository](/img/guides/create-angular-frontend-capsule/step-9.jpg)
Step 5: Connect the repository.

![Capsule building](/img/guides/create-angular-frontend-capsule/step-12.jpg)
Step 7: Check the build.

## Troubleshooting

### The repository dropdown is empty

GitHub isn't connected to your Team. Click **Configure Git for Code Capsules**, grant access to your fork, and reopen the dropdown.

### The branch dropdown shows "No items found"

No repository is selected yet. Choose a repository first, then open the branch dropdown.

### The build fails with `dist/ng4-complete-guide` not found

The output directory doesn't match the build output. Set the output directory to `dist/ng4-complete-guide` and rebuild.
