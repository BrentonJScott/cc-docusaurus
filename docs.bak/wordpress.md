---
slug: "/wordpress"
description: "Host WordPress on Code Capsules with a managed, git-free WordPress Capsule: built-in database, storage, and caching. Get started here."
title: "Managed WordPress Hosting"
sidebar_label: "WordPress"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# WordPress, Fully Managed

Host WordPress on Code Capsules with a managed WordPress Capsule: built-in database, storage, and caching.

## Overview

A WordPress Capsule bundles the PHP runtime, MySQL database, persistent file storage, and caching layer. You can deploy a default WordPress build from the wizard or connect a Git-managed site.

## Why it matters

Self-hosted WordPress usually means managing PHP versions, database backups, and plugins on a VPS. The WordPress Capsule removes that operations load while keeping familiar WordPress admin and themes.

## How it works

The Capsule provisions MySQL and persistent storage bindings during creation. Code Capsules builds and deploys your chosen WordPress source, routes traffic to the site URL, and runs caching and cron inside the Capsule. Git-managed deployments rebuild on each push like other Capsules.

## When to use it

Choose the WordPress Capsule when you need a content site or blog without operating LAMP stack infrastructure. Use a Backend Capsule instead when WordPress is only one part of a custom application.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/wordpress-capsule/deploy', label: '🛠️ Deploy WordPress', description: 'Step-by-step Capsule wizard guide.'},
    {type: 'link', href: '/products/wordpress-capsule/configure', label: '📋 Configure WordPress', description: 'Database, caching, and routing settings.'},
    {type: 'link', href: '/products/wordpress-capsule/caching', label: '💡 Page caching', description: 'How built-in caching works.'},
  ]}
/>