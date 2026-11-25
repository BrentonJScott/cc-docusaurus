---
slug: "/products/backend-capsule/logs"
title: "How to View Logs for a Backend Application"
description: >-
  View and stream logs from your Backend Capsule on Code Capsules to monitor requests, debug errors, and track your app in production.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# View Your Backend Capsule Logs

View build, runtime, and access logs for your Backend Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/backend-capsule', label: '📋 Backend Capsule', description: 'Create a Backend Capsule to view logs for.'},
  ]}
/>

## View your logs

1. **Open the Capsule**

   Open the Space and select the Backend Capsule.

2. **Open Logs**

   Click the **Logs** tab.

3. **Switch log streams**

   Open **Capsule logs**, **Build logs**, or **Access logs** as listed. Scroll to the latest entries after a deploy. You now see the capsule logs, build logs, and access logs for your Backend Capsule.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from the **Deploy** tab or push to the connected branch, then refresh **Build logs**.

</details>
