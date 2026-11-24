---
slug: "/frontend/angular"
title: "How to Host an Angular Application"
description: >-
  Deploy an Angular application on Code Capsules and see the first build start
  on the capsule's Builds tab.
sidebar_label: "Angular"
doc_version: drift
---

# Host Your Angular Application

<Description />

## Prerequisites

<LinkCards>
  <LinkCard title="Code Capsules account" to="/docs/shared/create-an-account" icon="account">
    Sign up and reach your Personal Team.
  </LinkCard>
  <LinkCard title="Fork demo-angular" to="/docs/shared/fork-a-demo-repo" icon="fork">
    Fork `demo-angular` to your GitHub account.
  </LinkCard>
  <LinkCard title="A Space" to="/docs/shared/create-a-space" icon="space">
    Create a Space to deploy into.
  </LinkCard>
  <LinkCard title="GitHub connected" to="/docs/shared/configure-git-for-code-capsules" icon="git">
    Let Code Capsules list your repositories.
  </LinkCard>
</LinkCards>

## Deploy your Angular app

<Steps>

1. **Start the Angular capsule**

   On **Quick Start**, click **Deploy Now** on the **Angular** card.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Frontend** under **Choose a Capsule**, then choose your Team and your Space. Click **Next**.

3. **Choose hosting**

   On **Hosting**, select **Static** and click **Next**.

4. **Choose a plan**

   On **Plan**, select **Free** and click **Next**.

5. **Connect the repository**

   On **Connect a Git Repository**, choose your fork of `demo-angular` under **Git Repository**. Under **Branch**, choose `main`. Click **Next**.

6. **Set the build settings**

   On **Build & Deploy**, enter:

   - **Build Command:** `npm run build`
   - **Path to static content:** `dist/ng4-complete-guide`

   Leave **Capsule Name** as it is and click **Create Capsule**.

7. **Check the build**

   Open the capsule's **Builds** tab. The first build is in progress.

</Steps>

## Troubleshooting

<Accordion>

<details>
<summary>The Git Repository dropdown is empty</summary>

GitHub isn't connected to your Team. Click **Configure Git for Code Capsules**, give access to your fork, and reopen the dropdown.

</details>

<details>
<summary>The Branch dropdown shows "No items found"</summary>

No repository is selected yet. Choose your fork under **Git Repository** first, then open **Branch**.

</details>

<details>
<summary>The Free plan can't be selected</summary>

You're already using all of your free capsules. Delete a free capsule you no longer need, or select **Paid**.

</details>

<details>
<summary>The build fails because `dist/ng4-complete-guide` isn't found</summary>

**Path to static content** doesn't match the folder the build creates. Set it to `dist/ng4-complete-guide` on the capsule's **Config** tab.

</details>

</Accordion>
