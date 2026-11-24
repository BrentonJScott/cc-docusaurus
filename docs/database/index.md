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
| MongoDB | MongoDB Capsule (Atlas) | [MongoDB](/database/mongodb/) |
| MySQL | MySQL Data Capsule | [MySQL](/database/mysql/) |
| PostgreSQL | PostgreSQL Data Capsule | [PostgreSQL](/database/postgres/) |
| Redis | Redis Data Capsule | [Redis](/database/redis/) |

## Framework guides

| Stack | Guide |
| --- | --- |
| Django + MongoDB | [Deploy guide](/database/mongodb/django-+-mongodb/) |
| Express + MongoDB | [Deploy guide](/database/mongodb/express-+-mongodb/) |
| Flask + MongoDB | [Deploy guide](/database/mongodb/flask-+-mongodb/) |
| Django + MySQL | [Deploy guide](/database/mysql/django-+-mysql/) |
| Flask + MySQL | [Deploy guide](/database/mysql/flask-+-mysql/) |
| Java + MySQL | [Deploy guide](/database/mysql/java-+-mysql/) |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/database-capsule', label: '📋 Database Capsules', description: 'Product reference for managed databases.'},
    {type: 'link', href: '/backend', label: '📋 Backend hosting', description: 'Deploy the apps that connect to these databases.'},
    {type: 'link', href: '/full-stack', label: '📋 Full-stack guides', description: 'Deploy apps that include their own database capsule.'},
  ]}
/>