---
slug: "/products/database-capsule/mysql/versions/upgrades"
title: "How to Upgrade MySQL Versions"
description: >-
  Upgrade your MySQL Capsule on Code Capsules one major version at a time. Pick the upgrade guide that matches your current and target MySQL version.
sidebar_label: Upgrades
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# MySQL Major Version Upgrades

Upgrade your MySQL Capsule one major version at a time. Pick the guide that matches your current and target MySQL version.

## Overview

Major version upgrades must run in sequence—you cannot skip a major version in one operation.

## Upgrade paths

| From → To | Guide |
| --- | --- |
| 5.7 → 8.0 | [5.7 to 8.0](/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0/) |

See [MySQL Versions](/products/database-capsule/mysql/versions/) for supported versions and general upgrade requirements.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/database-capsule/mysql/versions', label: '📋 MySQL versions', description: 'Supported versions and policies.'},
    {type: 'link', href: '/products/database-capsule/mysql/configure', label: '⚙️ Configure MySQL', description: 'Connection and SQL mode settings.'},
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ Deploy MySQL', description: 'Create a MySQL Capsule.'},
  ]}
/>