---
slug: "/database/mysql"
description: >-
  MySQL deployment and framework guides for managed MySQL Data Capsules on Code
  Capsules.
title: "MySQL Hosting Reference"
sidebar_label: "MySQL"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# MySQL hosting

MySQL deployment and framework guides for managed MySQL Data Capsules on Code Capsules.

## Overview

MySQL Data Capsules support versions **5.7** and **8.0**. Bind a capsule to a Backend Capsule on the **Config** tab to add a `DATABASE_URL` environment variable.

## Guides

| Guide | Deploys | Demo repository |
| --- | --- | --- |
| [Flask + MySQL](/docs/database/mysql/flask-+-mysql) | Flask with MySQL | `codecapsules-io/demo-flask-mysql` |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/database', label: '📋 Database hosting', description: 'Compare MongoDB, PostgreSQL, and Redis options.'},
    {type: 'link', href: '/docs/products/database-capsule/mysql/versions/upgrades', label: '📋 MySQL upgrades', description: 'Supported versions and upgrade paths.'},
    {type: 'link', href: '/docs/database/mysql/flask-+-mysql', label: '🛠️ Flask + MySQL', description: 'Deploy Flask with a MySQL Data Capsule.'},
  ]}
/>
