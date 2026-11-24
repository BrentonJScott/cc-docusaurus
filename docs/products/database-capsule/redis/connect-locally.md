---
slug: "/products/database-capsule/redis/connect-locally"
title: "How to Connect to Redis Locally"
description: >-
  Connect to a Redis Capsule from your local machine with the Code Capsules CLI proxy and redis-cli.
sidebar_label: "Connect Locally"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect to Your Redis Database From Your Machine

Connect to a private Redis Capsule with the CLI proxy and `redis-cli`.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/getting-started/installation-and-usage', label: '🛠️ Code Capsules CLI', description: 'Install and run codecaps login.'},
    {type: 'link', href: '/products/database-capsule/redis/deploy', label: '🛠️ Redis Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Connect to your Redis database locally

1. **Install redis-cli**

   Install Redis client tools for your platform (for example `brew install redis` on macOS).

2. **Open a proxy tunnel**

   Run the proxy command from **Details**, for example `codecaps proxy capsule -s <space> -c <id> -P 6379`.

3. **Copy credentials**

   Reveal username and password on **Details**.

4. **Connect with redis-cli**

   Run `redis-cli -h 127.0.0.1 -p 6379 --user <username> -a '<password>'` and `PING` to verify.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>NOAUTH errors</summary>

Confirm username and password match **Connection Details** exactly.

</details>