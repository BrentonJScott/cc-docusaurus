---
slug: "/frontend/angular"
description: >-
  Create an Angular Frontend Capsule on the Code Capsules test platform and confirm
  the first build appears under Deploy → Builds.
title: "How to Host an Angular Application"
sidebar_label: "Angular"
---

# Create Angular frontend capsule

**Goal:** After you finish the wizard, you should see the capsule **building** on the capsule **Deploy** tab under **Builds** (status such as **Building**, **Queued**, or **In progress**).

Steps below match visible labels on [test-platform.codecapsules.io](https://test-platform.codecapsules.io) as verified on **2026-11-20**. For production signup and marketing copy, use [codecapsules.io](https://www.codecapsules.io/); this guide targets the test platform used for documentation audits.

## Prerequisites

- A Code Capsules account on the test platform
- A Git repository with an Angular app (example: `npm run build`, static output under `dist/.../browser`)
- GitHub connected to your team (**Configure Git for Code Capsules** if the repository list is empty)

## Steps

1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”.
2. On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox.
3. Click **Log in**.
4. Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?**
5. In the **Angular** row, click **Deploy Now**. You should reach **New Capsule** at `/new/capsule?capsuleType=frontend` with breadcrumbs **Plan** / **Configure** / **Deploy**.
6. On **Capsule Details**:
   - Under **Choose a Capsule**, ensure **Frontend** is selected (Angular quick start should preselect frontend; if the screen shows **Backend** instead, open **Search/Select a Capsule Type** and choose **Frontend**).
   - Under **Choose a Team**, open **Search/Select a team** and pick your team (for example **Personal Team**).
   - Under **Choose a Space**, open **Search/Select a space** and pick a space.
   - Click **Next** when validation no longer asks you to select a capsule, team, and space.
7. On **Hosting**, select **Static** and click **Next**.
8. On **Plan**, select **Free** (or a paid plan) and click **Next**.
9. On **Connect a Git Repository**, choose a repository from **Git Repository**. If the list is empty, use **Configure Git for Code Capsules**, connect GitHub, then return and reload this step. Click **Next**.
10. On **Build & Deploy**, set:
    - **Build Command:** `npm run build`
    - **Path to static content:** your Angular output folder (for example `dist/cc-demo-angular/browser`)
    - Optionally adjust **Capsule Name**.
11. Click **Create Capsule**.
12. Open the **Deploy** tab. Under **Builds**, confirm the latest build shows a building state (**Building**, **Queued**, or **In progress**). The **Details** tab may also show **Building** under capsule status while the build runs.

![Registration / log in entry](/img/guides/shared/step-0-open-site.png)

![Welcome back login form](/img/guides/shared/step-1-login-page.png)

![Quick Start capsule chooser](/img/guides/shared/step-2-quick-start.png)

![New Capsule — Capsule Details](/img/guides/create-angular-frontend-capsule/step-5-new-capsule-wizard.png)

![Hosting — Static](/img/guides/create-angular-frontend-capsule/step-6-hosting-static.png)

![Plan selection](/img/guides/create-angular-frontend-capsule/step-7-plan-free.png)

![Connect a Git Repository](/img/guides/create-angular-frontend-capsule/step-8-git-repository.png)

## Troubleshooting

- **Please select a Capsule, Team and Space:** Fill all three dropdowns on **Capsule Details** before **Next**.
- **No repositories in Git Repository:** Connect GitHub via **Configure Git for Code Capsules**; without a repository you cannot reach **Create Capsule** or a build on **Deploy → Builds**.