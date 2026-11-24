---
slug: "/frontend/angular"
description: >-
  Deploy an Angular application on Code Capsules and confirm the first build
  appears under Deploy → Builds.
title: "How to Host an Angular Application"
sidebar_label: "Angular"
doc_version: drift
---

# How to Host an Angular Application

This guide shows you how to deploy an Angular application as a static frontend capsule on Code Capsules and confirm that the first build has started under **Deploy → Builds**.

## Before you begin

Make sure you have:

- A Code Capsules account. See [Create an account](/docs/shared/create-an-account).
- A [GitHub](https://github.com/) account.
- A fork of the [demo-angular](https://github.com/codecapsules-io/demo-angular) repo. See [Fork a demo repo](/docs/shared/fork-a-demo-repo).
- A Space to deploy into. See [Create a Space](/docs/shared/create-a-space).
- GitHub connected to Code Capsules. See [Configure Git for Code Capsules](/docs/shared/configure-git-for-code-capsules).

## Deploy the application

1. Open the [test platform](https://test-platform.codecapsules.io) and log in. You land on **Quick Start**.

2. On **Quick Start**, click **Deploy Now** on the **Angular** card.

   ![Quick Start with the Angular card](/img/guides/create-angular-frontend-capsule/step-4.jpg)

3. On **Capsule Details**, under **Choose a Capsule**, select **Frontend**. Select your Team and your Space, then click **Next**.

4. On **Hosting**, select **Static** and click **Next**.

5. On **Plan**, select your plan and click **Next**.

6. On **Connect a Git Repository**:

   1. Open **Search/Select a Repository** and select your fork of `demo-angular`.
   2. Under **Branch**, select the branch you want to deploy, such as `master`.
   3. Click **Next**.

   ![Connect a Git Repository](/img/guides/create-angular-frontend-capsule/step-9.jpg)

7. On **Build & Deploy**, enter the following, then click **Create Capsule**:

   - **Build command:** `npm run build`
   - **Output directory:** `dist/ng4-complete-guide`

8. Open the capsule's **Deploy** tab and find **Builds**.

   The latest build shows **Building**, **Queued**, or **In progress**.

   ![Capsule building](/img/guides/create-angular-frontend-capsule/step-12.jpg)

## Troubleshooting

### The repository dropdown is empty

GitHub isn't connected to your Team. Click **Configure Git for Code Capsules**, grant access to your fork, and reopen the dropdown.

### The branch dropdown shows "No items found"

No repository is selected yet. Select a repository first, then open the branch dropdown.

### The build fails with `dist/ng4-complete-guide` not found

The output directory doesn't match the build output. Set the output directory to `dist/ng4-complete-guide` and rebuild.
