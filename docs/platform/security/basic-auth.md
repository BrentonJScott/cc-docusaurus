---
slug: "/platform/security/basic-auth"
title: "Add HTTP Basic Authentication"
description: >-
  Enable HTTP Basic authentication on a Capsule's public URL. When you finish,
  the browser prompts for the credentials shown in the dashboard.
sidebar_label: "HTTP Basic Auth"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# HTTP Basic Authentication

Enable HTTP Basic authentication on a Capsule's public URL. When you finish, the browser prompts for the credentials shown in the dashboard.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/products/backend-capsule', label: '🛠️ A running Capsule', description: 'Learn about Backend Capsules, which have a public URL.'},
  ]}
/>

## Protect your Capsule

1. **Open Domains**

   Open the Capsule and select the **Domains** tab.

2. **Enable authentication**

   In **Basic Auth**, toggle **Basic Http authentication** to **Enabled**.

3. **Use the credentials**

   In **Basic auth credentials**, click **show**. Note the username and password. Open the Capsule URL in a private window; the browser asks for these credentials.

## Troubleshooting

<details>
<summary>Health checks fail after enabling Basic Auth</summary>

Platform health checks reach replicas directly and are not blocked by domain Basic Auth. Application-level auth on paths such as `/health` can still fail checks; leave `/health` unauthenticated.

</details>