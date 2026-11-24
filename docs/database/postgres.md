---
slug: "/database/postgres"
description: >-
  How PostgreSQL Data Capsules work on Code Capsules and how apps connect to
  them.
title: "PostgreSQL on Code Capsules Explained"
sidebar_label: "Postgres"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# PostgreSQL on Code Capsules

How PostgreSQL Data Capsules work on Code Capsules and how apps connect to them.

## Overview

A PostgreSQL Data Capsule is a managed relational database that lives in the same Space as your applications. Code Capsules provisions the instance and exposes connection details you bind to Backend Capsules.

## Why it matters

Web apps need durable storage for accounts, orders, and other structured data. A PostgreSQL capsule removes the work of installing, patching, and backing up your own database server while keeping data in your Space.

## How it works

You create a **PostgreSQL** capsule from the Space menu. After provisioning finishes, the **Details** tab shows credentials and a connection string.

To use the database from an app, open the Backend Capsule **Config** tab, find **Data capsules**, and link the PostgreSQL capsule. Code Capsules adds a `DATABASE_URL` environment variable the app reads at runtime. Drivers such as `psycopg2` (Python) and `pg` (Node.js) accept that URL directly.

You can target a logical database name by appending it to the URL when your ORM or driver expects a separate database parameter.

## When to use it

| Factor | PostgreSQL Data Capsule | Self-hosted Postgres elsewhere |
| --- | --- | --- |
| Setup | Dashboard wizard in your Space | Install and secure your own server |
| Networking | Bind via **Config** to capsules in the Space | Configure firewalls and TLS yourself |
| Best for | Apps already on Code Capsules | Data that must stay outside the platform |

Choose PostgreSQL when you need SQL, JSON columns, or extensions the managed capsule supports. Use [MySQL](/database/mysql/) if your stack already targets MySQL, or [MongoDB](/database/mongodb/) for document data.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/database-capsule/postgresql/deploy', label: '🛠️ Deploy PostgreSQL', description: 'Create a PostgreSQL Data Capsule.'},
    {type: 'link', href: '/database', label: '📋 Database hosting', description: 'Compare all managed database options.'},
    {type: 'link', href: '/products/database-capsule/postgresql/configure', label: '📋 PostgreSQL configuration', description: 'Connection strings and bindings.'},
  ]}
/>