---
slug: "/products/alerting"
description: >-
  Save alert and notification preferences. When you finish, choices persist
  after Save Preferences.
title: "How to Set Up Deployment Notifications"
sidebar_label: "Notifications"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Set Up Notification Preferences

Save alert and notification preferences. When you finish, choices persist after **Save Preferences**.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Save preferences

1. **Open notifications**

   Open **Alerting** or **Notifications** in the dashboard menu.

2. **Toggle events**

   Enable or disable in-app and email alerts for events such as **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage**.

3. **Save**

   Click **Save Preferences**. Reload the page; your toggles match what you saved.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Email alerts never arrive</summary>

Confirm email notifications are enabled for each event and your account email on **Account** is correct. Check spam folders.

</details>
