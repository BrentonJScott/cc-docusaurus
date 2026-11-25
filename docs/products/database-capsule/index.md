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
| Deploy | Create a capsule and framework guides |
| Configure | Connection details, SQL modes, versions |
| Connect Locally | CLI proxy from your laptop |
| Versions | Supported versions and upgrades |
| Schema Migrations | Schema changes with db-migrate |
| Scale | CPU, RAM, storage, replicas |
| Backups | Manual and scheduled backups |
| Monitor | Metrics |
| Logs | System logs |
| Alerting | Notifications |

## MongoDB

MongoDB Capsules are managed clusters on MongoDB Atlas—the **recommended** option for MongoDB-compatible workloads.

| Topic | What it covers |
| --- | --- |
| Deploy | Create a capsule and framework guides |
| [Configure](/docs/products/database-capsule/mongodb/configure) | Connection and versions |
| Versions | Supported versions and upgrades |
| Scale | Instance size, storage, replicas |
| Backups | Manual and scheduled backups |
| Monitor | Usage metrics |
| Alerting | Notifications |

## DocumentDB

DocumentDB is self-hosted and MongoDB API–compatible. For new projects, prefer a MongoDB Capsule.

| Topic | What it covers |
| --- | --- |
| Deploy | Create and connect applications |
| Configure | Connection and binding |
| Connect Locally | CLI proxy |
| Scale | Resources |
| Backups | Manual and scheduled backups |
| Monitor | Metrics |
| Logs | System logs |
| Alerting | Notifications |

## PostgreSQL

| Topic | What it covers |
| --- | --- |
| Deploy | Getting started |
| Configure | Connection details |
| Connect Locally | CLI proxy |
| Scale | Resources |
| Backups | Manual and scheduled backups |
| Monitor | Metrics |
| Logs | System logs |
| Alerting | Notifications |

## Redis

| Topic | What it covers |
| --- | --- |
| Deploy | Getting started |
| Configure | Connection details |
| Connect Locally | CLI proxy |
| Scale | Resources |
| Monitor | Metrics |
| Logs | System logs |
| Alerting | Notifications |

## Deployment guides

| Link | What it covers |
| --- | --- |
| [All Database Deployment Guides](/docs/database) | Framework connection tutorials |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/database', label: '📋 Database tutorials', description: 'Connect apps to each engine.'},
    {type: 'link', href: '/docs/products/database-capsule/mongodb/configure', label: '🛠️ Configure MongoDB', description: 'View MongoDB connection details.'},
    {type: 'link', href: '/docs/products/database-capsule/mysql/versions/upgrades', label: '🛠️ Upgrade MySQL', description: 'Move to a newer MySQL major version.'},
  ]}
/>
