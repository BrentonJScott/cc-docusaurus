---
slug: "/database/mysql"
description: "In this tutorial, we'll create a MySQL Data Capsule to provide persistent storage for your applications hosted on Code Capsules."
title: "Managed MySQL Hosting"
sidebar_label: "MySQL"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';


# Host Your MySQL Database

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

In this tutorial, we'll create a MySQL Data Capsule to provide persistent storage for your applications hosted on Code Capsules.

:::info

Code Capsules supports MySQL **5.7** and **8.0**. See [MySQL Versions](/products/database-capsule/mysql/versions/) for upgrade paths and prerequisites.

:::

## Create a MySQL Data Capsule

Log in to your [Code Capsules](/docs/shared/create-an-account) account and navigate to the Space your MySQL Data Capsule will be contained in. Click the yellow `+` button and select the **MySQL Data Capsule** option from the dropdown.



Choose your payment option, then click the **Create Capsule** button.

## Connecting a Data Capsule to a Backend Capsule

To use the Data Capsule with your Backend Capsule, you'll need to link the two. Navigate to the Backend Capsule and click **Config** to open the Capsule's configuration tab. Scroll down to the **Data capsules** section and you'll see your recently created Data Capsule.



Click **View** to view the environment variables from the Data Capsule. Click the `+` next to the `Connection string` variable to create a `DATABASE_URL` environmental variable in your Backend Capsule, which gives access to services and features of your Data Capsule.

We can use this database variable in code to read and write to our Data Capsule. Copy the value of the `DATABASE_URL` variable and append `/your_db_name` to it as a query parameter. Make sure to replace `your_db_name` with the actual name of your database. This tells the Data Capsule to read and write to the specified database. If a database named `your_db_name` doesn't exist, the Data Capsule will create it. This allows you to have multiple databases in one Data Capsule. Take note, if you copy the `DATABASE_URL` value from the Capsule, it will already include the name of the default database you used whilst creating the Data Capsule as part of the string.

### Connecting to a MySQL Data Capsule from a Python Application

If your Backend Capsule is a Python application, use the following code to connect to your MySQL Data Capsule:

```python
import os
import mysql.connector

data_capsule_url = os.getenv('DATABASE_URL')
employees_database_url = data_capsule_url + "/employees"

cnx = mysql.connector.connect(user='yourusername', password='yourpassword',
                              host=employees_database_url,
                              database='employees')

### Do something with the cnx variable here

cnx.close()

```

### Connecting to a MySQL Data Capsule from a Node.js Application

If your Backend Capsule is a Node.js application, use the following code to connect to your MySQL Data Capsule:

```js
var mysql = require('mysql');
var data_capsule_url = process.env.DATABASE_URL
var employees_database_url = data_capsule_url + "/employees"

var con = mysql.createConnection({
  host: employees_database_url,
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // Do something with the db here
});

```

If you’d like to deploy another application in a different language or framework, take a look at our other [deployment guides](/database/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

