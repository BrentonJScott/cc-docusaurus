---
slug: "/products/storage-capsule/how-state-works"
title: "How Persistent Storage State Works"
description: >-
  How local disk on a Capsule differs from persistent Storage Capsules on Code Capsules.
sidebar_label: "How State Works"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Persistent storage on Capsules

How local disk on a Capsule differs from persistent Storage Capsules on Code Capsules.

## Overview

A Capsule can write to a local file system, but those files do not persist after the Capsule restarts. Persistent files belong on a **Storage Capsule** or an external database.

## Why it matters

Restarts happen on deploy, scale, and failure. Data written only inside the container filesystem is lost unless you store it elsewhere.

## How it works

When a Capsule starts, it receives a fresh runtime from Git or an image. Local paths are ephemeral. A **Storage Capsule** mounts durable object storage your app can read and write across restarts.

## When to use it

| Data | Use |
| --- | --- |
| Uploads, assets, backups | Storage Capsule |
| Relational or document data | Database Capsule |
| Build output only | Ephemeral disk on a Frontend Capsule |

Use a Storage Capsule when users or jobs must see the same files after every deploy.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/storage-capsule/deploy', label: '🛠️ Deploy storage', description: 'Create a Storage Capsule.'},
    {type: 'link', href: '/products/storage-capsule/configure', label: '🛠️ Configure storage', description: 'Connection and WebDAV access.'},
    {type: 'link', href: '/products/database-capsule/index', label: '📋 Database Capsules', description: 'Managed databases for app state.'},
  ]}
/>