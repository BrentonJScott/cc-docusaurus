---
slug: "/database/postgres"
description: "In this tutorial, we'll create a PostgreSQL Data Capsule to provide persistent storage for your applications hosted on Code Capsules."
title: "Managed PostgreSQL Hosting"
sidebar_label: "Postgres"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Host Your PostgreSQL Database

In this tutorial, we'll create a PostgreSQL Data Capsule to provide persistent storage for your applications hosted on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Create a PostgreSQL Data Capsule

Log in to your [Code Capsules](/docs/shared/create-an-account) account and navigate to the Space your PostgreSQL Data Capsule will be contained in. Click the yellow `+` button and select the **PostgreSQL Data Capsule** option from the dropdown.



Choose your payment option, then click the **Create Capsule** button.

## Connecting a Data Capsule to a Backend Capsule

To use the Data Capsule with your Backend Capsule, you'll need to link the two. Navigate to the Backend Capsule and click **Config** to open the Capsule's configuration tab. Scroll down to the **Data capsules** section and you'll see your recently created Data Capsule.



Click **View** to view the environment variables from the Data Capsule. Click the `+` next to the `Connection string` variable to create a `DATABASE_URL` environmental variable in your Backend Capsule, which gives access to services and features of your Data Capsule.

We can use this database variable in code to read and write to our Data Capsule. Copy the value of the `DATABASE_URL` variable and append `/your_db_name` to it as a query parameter. Make sure to replace `your_db_name` with the actual name of your database. This tells the Data Capsule to read and write to the specified database. If a database named `your_db_name` doesn't exist, the Data Capsule will create it. This allows you to have multiple databases in one Data Capsule. Take note, if you copy the `DATABASE_URL` value from the Capsule, it will already include the name of the default database you used whilst creating the Data Capsule as part of the string.

### Connecting to a PostgreSQL Data Capsule from a Python Application

If your Backend Capsule is a Python application, use the following code to connect to your PostgreSQL Data Capsule:

```python
import os
import psycopg2

# Get the DATABASE_URL from environment variables
data_capsule_url = os.getenv('DATABASE_URL')

# Connect to the PostgreSQL database
conn = psycopg2.connect(data_capsule_url)

# Create a cursor to interact with the database
cur = conn.cursor()

# Example query (optional)
cur.execute("SELECT version();")
print(cur.fetchone())

# Always close cursor and connection when done
cur.close()
conn.close()
```

### Connecting to a PostgreSQL Data Capsule from a Node.js Application

If your Backend Capsule is a Node.js application, use the following code to connect to your PostgreSQL Data Capsule:

```js
const { Client } = require('pg');

// Get the DATABASE_URL from environment variables
const client = new Client({
  connectionString: process.env.DATABASE_URL
});

// Connect and interact with the database
client.connect()
  .then(() => {
    console.log("Connected!");
    // Example query (optional)
    return client.query('SELECT version();');
  })
  .then(res => {
    console.log(res.rows[0]);
  })
  .catch(err => {
    console.error("Connection error", err.stack);
  })
  .finally(() => {
    client.end();
  });
```

If you’d like to deploy another application in a different language or framework, take a look at our other [deployment guides](/database/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

