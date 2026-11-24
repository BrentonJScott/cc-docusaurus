---
slug: "/products/database-capsule/documentdb/scale"
title: "How to Scale a DocumentDB Database"
description: >-
  Scale your DocumentDB Capsule on Code Capsules by allocating more CPU, RAM, storage, and replicas as your document database workload grows.
sidebar_label: Scale
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Scale your Scale

Change CPU, RAM, replicas, or storage for your DocumentDB Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/documentdb/deploy', label: '🛠️ DocumentDB Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Scale the Capsule

1. **Open Scale**

   Open the Capsule and select the **Scale** tab.

2. **Edit resources**

   Click **Edit**. Adjust **CPU**, **RAM**, **Storage**, or **Replicas** as offered for this capsule type.

3. **Save**

   Click **Save** and confirm. The capsule redeploys or resizes with the new resources showing on **Scale**.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Save is disabled</summary>

Some capsule types require the capsule to be on a paid plan or to be stopped before scaling storage. Check the message on the Scale tab.

</details>
