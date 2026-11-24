---
slug: "/shared/configure-git-for-code-capsules"
title: "Configure Git for Code Capsules"
description: >-
  Connect GitHub to Code Capsules so your repositories appear in the capsule
  wizard.
sidebar_label: "Configure Git"
doc_version: drift
---

# Configure Git for Code Capsules

<Description />

## Prerequisites

<LinkCards>
  <LinkCard title="Code Capsules account" to="/docs/shared/create-an-account" icon="account">
    Sign up and reach your Personal Team.
  </LinkCard>
  <LinkCard title="Fork a demo repo" to="/docs/shared/fork-a-demo-repo" icon="fork">
    Have a repository in your GitHub account to deploy.
  </LinkCard>
</LinkCards>

## Connect GitHub

<Steps>

1. **Open Configure Git**

   In the capsule wizard, on **Connect a Git Repository**, click **Configure Git for Code Capsules**.

2. **Sign in to GitHub**

   Sign in to GitHub if asked.

3. **Grant access**

   Grant access to the repository you forked, or to all repositories.

4. **Check the repository list**

   Return to Code Capsules and open the **Git Repository** dropdown again. Your repository is listed.

</Steps>

## Troubleshooting

<Accordion>

<details>
<summary>Your repository still isn't in the dropdown</summary>

Code Capsules only sees the repositories you granted access to. Click **Configure Git for Code Capsules** again and add your fork.

</details>

</Accordion>
