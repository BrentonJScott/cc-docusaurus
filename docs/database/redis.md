---
slug: "/database/redis"
description: "In this tutorial, we’ll create a Redis Data Capsule to provide low-latency, in-memory data storage for your application hosted on Code Capsules."
title: "Managed Redis Hosting"
sidebar_label: "Redis"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Host Your Redis Instance

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

In this tutorial, we’ll create a Redis Data Capsule to provide low-latency, in-memory data storage for your application hosted on Code Capsules.

## Create a Redis Data Capsule

Log in to your [Code Capsules](/docs/shared/create-an-account) account and navigate to the Space your Redis Capsule will be contained in. Click the yellow `+` button in the bottom left of the screen, select **New Capsule**, then select **Redis** from the dropdown.



Choose a payment option, and click **Create Capsule**.

## Connecting a Data Capsule to a Backend Capsule

Now we need to connect our Data Capsule to a Backend Capsule using a database connection URL.

Navigate to your Backend Capsule and click on the **Configure** tab. Scroll down to the **Data capsules** section and click **View**. Click the `+` next to the `Connection string` variable to create a `DATABASE_URL` environmental variable in your Backend Capsule, which gives access to services and features of your Data Capsule.

We'll use this environment variable in our app to connect to the Redis database.



## Connecting to a Redis Data Capsule from a Python Application

If your Backend Capsule is a Python application, use the following code to connect to your Redis database:

```python
import os
import redis

redis_url = os.getenv('REDIS_URL')

connection = redis.from_url(redis_url)

# Do something here
```

## Connecting to a Redis Data Capsule from a Node.js Application

If your Backend Capsule is a Node.js application, use the following code to connect to your Redis database:

```js
let redis = require('redis');
let redis_url = process.env.REDIS_URL

let connection = redis.createClient({
  url: redis_url
});

connection.connect();

// Do something here 

connection.quit();
```

If you’d like to deploy another application in a different language or framework, take a look at our other [deployment guides](/database/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

