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
| [Django + MySQL](/database/mysql/django-+-mysql/) | Django with MySQL | `codecapsules-io/django-demo` |
| [Flask + MySQL](/database/mysql/flask-+-mysql/) | Flask with MySQL | `codecapsules-io/demo-flask-mysql` |
| [Java + MySQL](/database/mysql/java-+-mysql/) | Java with MySQL | `codecapsules-io/demo-java-mysql` |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ Deploy MySQL', description: 'Create a MySQL Data Capsule in the dashboard.'},
    {type: 'link', href: '/database', label: '📋 Database hosting', description: 'Compare MongoDB, PostgreSQL, and Redis options.'},
    {type: 'link', href: '/products/database-capsule/mysql/versions', label: '📋 MySQL versions', description: 'Supported versions and upgrade paths.'},
  ]}
/>