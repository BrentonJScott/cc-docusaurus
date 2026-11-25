---
slug: "/products/alerting"
description: >-
  Enable deployment-completion alerts. When you finish, you receive a notification when a deployment completes.
title: "How to Set Up Deployment Notifications"
sidebar_label: "Notifications"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Set Up Deployment Notifications

Enable deployment-completion alerts. When you finish, you receive a notification when a deployment completes.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Set up your deployment notifications

1. **Open notifications**

   Open **Alerting** or **Notifications** in the dashboard menu.

2. **Enable deployment notifications**

   Turn on in-app alerts, email alerts, or both for the deployment-completion event. You can also enable alerts for **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage**.

3. **Save preferences**

   Click **Save Preferences**. Reload the page; your toggles match what you saved.

4. **Verify a deployment notification**

   Run a deployment, or wait for one to finish. You receive a notification in the channel you chose, in the app, by email, or both.

## Troubleshooting

<details>
<summary>Email alerts never arrive</summary>

Confirm email notifications are enabled for each event and your account email on **Account** is correct. Check spam folders.

</details>
