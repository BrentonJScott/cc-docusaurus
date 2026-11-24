---
slug: "/products/storage-capsule/deploy"
title: "Persistent Storage Explained"
description: >-
  Persistent Storage Capsules provide shared file storage you can bind to Backend and Docker Capsules on Code Capsules.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Persistent Storage Capsules

Persistent Storage Capsules provide shared file storage you can bind to Backend and Docker Capsules on Code Capsules.

## Overview

A Persistent Storage Capsule acts like a virtual disk in your Space. Multiple Backend or Docker Capsules can bind to the same volume so they share files and scale together—without running a full database Capsule.

## Why it matters

Applications that need durable files (uploads, shared assets, WordPress content) need storage that survives redeploys. Binding a Storage Capsule exposes a `PERSISTENT_STORAGE_DIR` path your code reads and writes.

## How it works

You create a **Persistent Storage** Capsule in a Space, then bind it from a Backend or Docker Capsule on the **Config** tab. Code Capsules sets `PERSISTENT_STORAGE_DIR` on the app Capsule after binding. Optional **Public Access** on the Storage Capsule enables authenticated [WebDAV](https://en.wikipedia.org/wiki/WebDAV) browsing from macOS, Windows, or Linux—not public internet file listing.

Application examples use `os.getenv('PERSISTENT_STORAGE_DIR')` in Python or `process.env.PERSISTENT_STORAGE_DIR` in Node.js. See [Configure](/products/storage-capsule/configure/) for binding details and [persistent storage overview](/persistent-storage/) for platform concepts.

## When to use it

| Need | Storage Capsule fits when |
| --- | --- |
| Shared files across app replicas | Several capsules must read/write the same directory |
| Uploads or generated files | Data should survive container restarts |
| Light file share | You do not need relational queries or a DB engine |

Use a [Database Capsule](/products/database-capsule/) when you need structured queries. Use object storage patterns inside your app when you only need a single mount point.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/storage-capsule/configure', label: '⚙️ Configure storage', description: 'Bind capsules and WebDAV.'},
    {type: 'link', href: '/persistent-storage', label: '💡 Persistent storage', description: 'Platform overview.'},
    {type: 'link', href: '/products/backend-capsule/configure', label: '⚙️ Configure backend', description: 'Environment variables on apps.'},
  ]}
/>