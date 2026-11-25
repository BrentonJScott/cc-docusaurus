---
slug: "/shared/connect-github"
title: "How to Connect GitHub to Code Capsules"
description: >-
  Install the Code Capsules GitHub app and grant it access so your fork appears in the capsule wizard's Repository dropdown.
sidebar_label: "Connect GitHub"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect GitHub to Code Capsules

Install the Code Capsules GitHub app and grant it access so your fork appears in the capsule wizard's **Repository** dropdown.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 A forked demo repo', description: 'Fork the repository you want to deploy.'},
  ]}
/>

## Connect your GitHub account

1. **Install the Code Capsules GitHub app**

   In the capsule wizard, connect GitHub and install the Code Capsules GitHub app on your GitHub account.

2. **Grant access to your fork**

   Give the app access to your fork. Your fork now appears in the **Repository** dropdown.

## Troubleshooting

<details>
<summary>Your fork is missing from the Repository dropdown</summary>

Code Capsules doesn't have access to your fork. Add the repository to the Code Capsules GitHub app, then reopen the capsule wizard.

</details>
