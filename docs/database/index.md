---
slug: "/database"
description: >-
  Connect your applications to managed database instances on Code Capsules,
  including MySQL, PostgreSQL, MongoDB, and Redis.
title: "Managed Database Hosting — MySQL, MongoDB, Postgres & Redis"
sidebar_label: "Database"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Managed database hosting

Connect your applications to managed database instances on Code Capsules, including MySQL, PostgreSQL, MongoDB, and Redis.

## Overview

Each database runs as its own capsule in a Space. You bind connection details to Backend Capsules with environment variables such as `DATABASE_URL` or `REDIS_URL`.

## Deployment guides

| Database | Capsule type | Getting started |
| --- | --- | --- |
| MongoDB | MongoDB Capsule (Atlas) | [MongoDB](/docs/database/mongodb) |
| MySQL | MySQL Data Capsule | [MySQL](/docs/database/mysql) |
| PostgreSQL | PostgreSQL Data Capsule | [PostgreSQL](/docs/database/postgres) |
| Redis | Redis Data Capsule | Not documented yet |

## Framework guides

| Stack | Guide |
| --- | --- |
| Flask + MySQL | [Deploy guide](/docs/database/mysql/flask-+-mysql) |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/database-capsule', label: '📋 Database Capsules', description: 'Product reference for managed databases.'},
    {type: 'link', href: '/docs/products/backend-capsule', label: '📋 Backend Capsules', description: 'Reference for the apps that connect to these databases.'},
    {type: 'link', href: '/docs/database/postgres', label: '💡 PostgreSQL explained', description: 'How PostgreSQL Data Capsules work.'},
  ]}
/>
