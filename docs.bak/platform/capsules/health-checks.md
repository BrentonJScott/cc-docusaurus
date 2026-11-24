---
slug: "/platform/capsules/health-checks"
title: "How to Configure Health Checks"
description: >-
  Turn on an HTTP health check for a Capsule. When you finish, the Capsule
  reports healthy on the dashboard.
sidebar_label: "Health checks"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Health Checks

Turn on an HTTP health check for a Capsule. When you finish, the Capsule reports healthy on the dashboard.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/platform/capsules/how-do-i-add-remove-stop-capsules', label: '🛠️ A Backend or Docker Capsule', description: 'Health checks apply to server Capsules.'},
  ]}
/>

## Enable a health check

1. **Open Configure**

   Open the Capsule and select the **Configure** tab (or **Config**, depending on Capsule type).

2. **Set Automatic health check**

   Set **Health Check** to **Automatic**. Set **Endpoint** to `/health`. Your application must respond with HTTP status `200`–`399` on that path.

3. **Apply**

   Save or redeploy if prompted. Changing the health check redeploys the Capsule without a new build.

4. **Confirm healthy status**

   After replicas pass checks, the dashboard shows the Capsule as healthy and routes traffic only to passing replicas.

## Troubleshooting

<details>
<summary>Replicas never become healthy</summary>

Add a `GET /health` route that returns `200` quickly. Do not protect `/health` with application login. See [Configure a Backend Capsule](/products/backend-capsule/configure/) for Manual timeout settings if startup takes longer than 10 seconds.

</details>