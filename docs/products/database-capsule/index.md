---
slug: "/products/database-capsule"
title: "Managed Database Hosting"
description: >-
  Deploy and manage database instances on Code Capsules, including MySQL, PostgreSQL, MongoDB, DocumentDB, and Redis.
sidebar_label: "Database Capsule"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Managed Database Hosting

Deploy and manage managed database instances on Code Capsules.

## Overview

Database Capsules provide managed MySQL, PostgreSQL, MongoDB, DocumentDB, and Redis in the same Space as your applications. Connect from app Capsules with binding and environment variables, or from your laptop through the CLI proxy guides.

## MySQL

| Topic | What it covers |
| --- | --- |
| [Deploy](/products/database-capsule/mysql/deploy/) | Create a capsule and framework guides |
| [Configure](/products/database-capsule/mysql/configure/) | Connection details, SQL modes, versions |
| [Connect Locally](/products/database-capsule/mysql/connect-locally/) | CLI proxy from your laptop |
| [Versions](/products/database-capsule/mysql/versions/) | Supported versions and upgrades |
| [Schema Migrations](/products/database-capsule/mysql/schema-migrations/) | Schema changes with db-migrate |
| [Scale](/products/database-capsule/mysql/scale/) | CPU, RAM, storage, replicas |
| [Backups](/products/database-capsule/mysql/backups/) | Manual and scheduled backups |
| [Monitor](/products/database-capsule/mysql/monitor/) | Metrics |
| [Logs](/products/database-capsule/mysql/logs/) | System logs |
| [Alerting](/products/alerting/) | Notifications |

## MongoDB

MongoDB Capsules are managed clusters on MongoDB Atlas—the **recommended** option for MongoDB-compatible workloads.

| Topic | What it covers |
| --- | --- |
| [Deploy](/products/database-capsule/mongodb/deploy/) | Create a capsule and framework guides |
| [Configure](/products/database-capsule/mongodb/configure/) | Connection and versions |
| [Versions](/products/database-capsule/mongodb/versions/) | Supported versions and upgrades |
| [Scale](/products/database-capsule/mongodb/scale/) | Instance size, storage, replicas |
| [Backups](/products/database-capsule/mongodb/backups/) | Manual and scheduled backups |
| [Monitor](/products/database-capsule/mongodb/monitor/) | Usage metrics |
| [Alerting](/products/alerting/) | Notifications |

## DocumentDB

DocumentDB is self-hosted and MongoDB API–compatible. For new projects, prefer a [MongoDB Capsule](/products/database-capsule/mongodb/deploy/).

| Topic | What it covers |
| --- | --- |
| [Deploy](/products/database-capsule/documentdb/deploy/) | Create and connect applications |
| [Configure](/products/database-capsule/documentdb/configure/) | Connection and binding |
| [Connect Locally](/products/database-capsule/documentdb/connect-locally/) | CLI proxy |
| [Scale](/products/database-capsule/documentdb/scale/) | Resources |
| [Backups](/products/database-capsule/documentdb/backups/) | Manual and scheduled backups |
| [Monitor](/products/database-capsule/documentdb/monitor/) | Metrics |
| [Logs](/products/database-capsule/documentdb/logs/) | System logs |
| [Alerting](/products/alerting/) | Notifications |

## PostgreSQL

| Topic | What it covers |
| --- | --- |
| [Deploy](/products/database-capsule/postgresql/deploy/) | Getting started |
| [Configure](/products/database-capsule/postgresql/configure/) | Connection details |
| [Connect Locally](/products/database-capsule/postgresql/connect-locally/) | CLI proxy |
| [Scale](/products/database-capsule/postgresql/scale/) | Resources |
| [Backups](/products/database-capsule/postgresql/backups/) | Manual and scheduled backups |
| [Monitor](/products/database-capsule/postgresql/monitor/) | Metrics |
| [Logs](/products/database-capsule/postgresql/logs/) | System logs |
| [Alerting](/products/alerting/) | Notifications |

## Redis

| Topic | What it covers |
| --- | --- |
| [Deploy](/products/database-capsule/redis/deploy/) | Getting started |
| [Configure](/products/database-capsule/redis/configure/) | Connection details |
| [Connect Locally](/products/database-capsule/redis/connect-locally/) | CLI proxy |
| [Scale](/products/database-capsule/redis/scale/) | Resources |
| [Monitor](/products/database-capsule/redis/monitor/) | Metrics |
| [Logs](/products/database-capsule/redis/logs/) | System logs |
| [Alerting](/products/alerting/) | Notifications |

## Deployment guides

| Link | What it covers |
| --- | --- |
| [All Database Deployment Guides](/database/) | Framework connection tutorials |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/database', label: '📋 Database tutorials', description: 'Connect apps to each engine.'},
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ Deploy MySQL', description: 'Create a MySQL Capsule.'},
    {type: 'link', href: '/products/database-capsule/mongodb/deploy', label: '🛠️ Deploy MongoDB', description: 'Create a MongoDB Capsule.'},
  ]}
/>