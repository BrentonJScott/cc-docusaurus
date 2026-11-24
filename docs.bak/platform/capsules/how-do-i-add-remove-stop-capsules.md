---
slug: "/platform/capsules/how-do-i-add-remove-stop-capsules"
description: >-
  Add a Capsule, turn it off, and remove it. When you finish, the Capsule was
  added, switched off, and deleted.
title: "How to Add, Remove, and Stop Hosted Apps"
sidebar_label: "Add, Remove, and Turn Off Capsules"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Add, Remove, and Turn Off Capsules

Add a Capsule, turn it off, and remove it. When you finish, the Capsule was added, switched off, and deleted.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to hold the Capsule.'},
    {type: 'link', href: '/platform/account/connect-version-control', label: '🔌 GitHub connected', description: 'Connect GitHub for repository deploys.'},
  ]}
/>

## Manage your Capsule

1. **Add a Capsule**

   In your Space, click the yellow **+** and select **New Capsule**. On **Capsule Details**, choose a **Capsule Type**, **Team**, and **Space**, then click **Next**. Complete **Plan**, **Configure**, and **Deploy**, then click **Create Capsule** or **Build & Deploy**. The new Capsule opens on **Details**.

2. **Turn off the Capsule**

   On the Capsule **Details** page, toggle the switch at the top right to off. The Capsule stops serving traffic until you turn it on again.

3. **Remove the Capsule**

   On **Details**, scroll to **Remove Capsule**. Enter the Capsule name and click **Delete**. The Capsule no longer appears in the Space.

## Troubleshooting

<details>
<summary>Delete is permanent</summary>

You cannot recover a removed Capsule. Turn the Capsule off instead if you only need to pause billing temporarily.

</details>