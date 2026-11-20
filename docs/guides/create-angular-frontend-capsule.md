---
slug: "/frontend/angular"
description: >-
  Create an Angular Frontend Capsule on the Code Capsules test platform and confirm
  the first build appears under Deploy → Builds.
title: "How to Host an Angular Application"
sidebar_label: "Angular"
---

# Create Angular frontend capsule

**Goal:** After you finish the wizard, you should see the capsule **building** on the capsule **Deploy** tab under **Builds**.

Steps below match visible labels on [test-platform.codecapsules.io](https://test-platform.codecapsules.io) as verified on **2026-11-20**. For production signup and marketing copy, use [codecapsules.io](https://www.codecapsules.io/); this guide targets the test platform used for documentation audits.

## Prerequisites

- A Code Capsules account on the test platform
- A Git repository with an Angular app (example: `npm run build`, static output under `dist/.../browser`)
- GitHub connected to your team (**Configure Git for Code Capsules** if the repository list is empty)

## Steps

1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”.

   ![Open the test platform](/img/guides/shared/step-0-open-site.png)

2. On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox.

   ![Welcome back login form](/img/guides/shared/step-1-login-page.png)

3. Click **Log in**.

4. Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?**

   ![Quick Start with framework rows](/img/guides/shared/step-2-quick-start.png)

5. On **Quick Start**, find the **Angular** card (**Angular applications**) and click **Deploy Now**. You should reach **New Capsule** at `/new/capsule?capsuleType=frontend` with breadcrumbs **Hosting** / **Plan** / **Configure** / **Deploy**.

   ![New Capsule wizard entry](/img/guides/create-angular-frontend-capsule/step-5-new-capsule-wizard.png)

6. On **Capsule Details**:
   - Under **Choose a Capsule**, the first `ng-select` may still show **Backend** even from the Angular quick start. Open that dropdown and choose **Frontend** (“Angular, React, Vue or static site deployments”).
   - Under **Choose a Team**, click the **combobox** under the label (not only the **Search/Select a team** placeholder), wait for the list, and pick your team (for example **Personal Team**).
   - Under **Choose a Space**, click the **combobox** under **Choose a Space**, wait for spaces to load, and pick a space.
   - Click **Next** when all three fields are filled.

   ![Capsule Details with Frontend, team, and space selected](/img/guides/create-angular-frontend-capsule/step-6-capsule-details-filled.png)

7. On **Hosting**, click the **Static** option card (radio row that includes **No server**), then click **Next**. If validation shows **Choose how your site is hosted to continue**, the Static row is not selected yet.

   ![Hosting step with Static selected](/img/guides/create-angular-frontend-capsule/step-6-hosting-static.png)

8. On **Plan**, click the **Free** plan card, then **Next** (other tiers use the same card-style radio rows).

   ![Plan step with Free selected](/img/guides/create-angular-frontend-capsule/step-7-plan-free.png)

9. On **Connect a Git Repository**:
   - Open **Search/Select a Repository**, wait for repositories to load, and choose your Angular GitHub repo. On the documentation audit account, pick **`BrentonJScott/demo-angular-22 Team Repository`** (type `demo-angular-22` in the filter if the long list does not show it immediately). If the list is empty, click **Configure Git for Code Capsules**, connect GitHub, return, and open the dropdown again.
   - Under **Select a Branch to deploy from**, open **Search/Select a Branch** and choose **main** after the repository is selected (**No items found** is normal until a repository is chosen).
   - Click **Next**.

   ![Connect a Git Repository step](/img/guides/create-angular-frontend-capsule/step-8-git-repository.png)

10. On **Build & Deploy**, fill the fields that use placeholder examples on the live form:
    - **`example... npm run build`:** `npm run build`
    - **`example... dist`:** your Angular output folder (for example `dist/cc-demo-angular/browser`)
    - **Capsule Name:** defaults from the repository; change if needed.

    ![Build & Deploy fields](/img/guides/create-angular-frontend-capsule/step-10-build-deploy.png)

11. Click **Create Capsule**.

12. On the capsule **Deploy** tab, open **Builds** (or the **Builds** side panel). Confirm the latest build shows **Building**, **Queued**, or **In progress**.

    ![Deploy tab with build in progress](/img/guides/create-angular-frontend-capsule/step-12-deploy-builds.png)

## Troubleshooting

- **Please select a Capsule, Team and Space:** Fill all three dropdowns on **Capsule Details** before **Next**; use the combobox inputs under each label so ng-select receives the click.
- **Backend instead of Frontend on Capsule Details:** Switch **Choose a Capsule** to **Frontend** before selecting team and space.
- **No repositories in Search/Select a Repository:** Connect GitHub via **Configure Git for Code Capsules**; without a repository you cannot reach **Create Capsule** or a build on **Deploy → Builds** (see `failure-git-empty.png` when the repository list is empty).
- **Angular repo not visible in the dropdown:** Type part of the repository name (for example `demo-angular-22`) in **Search/Select a Repository**; the platform loads many team repos and may only show the first page until you filter.
- **Wrong repository selected:** Step 9 must be an Angular app repo; substituting a non-Angular repository can still show **Building** but the build may fail later (see `failure-git-repo-missing.png` when a named repo is absent).

## Platform note (2026-11-20 audit)

**2026-11-20T07:30Z:** All numbered steps **pass** on the test platform with **`BrentonJScott/demo-angular-22 Team Repository`**, branch **main**, and **`dist/cc-demo-angular/browser`** on **Build & Deploy**; **Deploy → Builds** shows **Building** (**GOAL** reached).