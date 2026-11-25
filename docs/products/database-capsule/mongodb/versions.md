---
slug: "/products/database-capsule/mongodb/versions"
title: "Supported MongoDB Versions"
description: >-
  Supported MongoDB major versions on Dedicated and Shared MongoDB Capsules, default provisioning, and allowed upgrade paths on Code Capsules.
sidebar_label: Versions
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# MongoDB Versions

Supported MongoDB major versions on Dedicated and Shared MongoDB Capsules, default provisioning, and allowed upgrade paths on Code Capsules.

## Overview

MongoDB Capsules run on MongoDB Atlas. Major-version rules differ for **Dedicated** and **Shared** clusters. The current MongoDB server version is shown on the **Config** tab under **MongoDB Configuration**.

## Dedicated clusters

| Version | Status |
| --- | --- |
| **7.0** | Supported |
| **8.0** | Supported |
| **latest** | Supported. Automatically upgraded when new versions are released. |

- New Dedicated capsules are provisioned on the latest supported version unless another version is selected during setup.

## Shared clusters

| Version | Status |
| --- | --- |
| **8.0** | Supported |

- Shared cluster versions cannot be changed from the dashboard.

## Upgrade paths

| From | To | Allowed | Guide |
| --- | --- | --- | --- |
| 7.0 | 8.0 | Yes | [7.0 to 8.0](/docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0/) |
| 8.0 | latest | Yes | None |
| latest | None | Automatic when new versions are released | None |
| Any | Earlier | No. Downgrades are not supported. | None |

- Major upgrades happen one step at a time.
- Manual major upgrades are available only on **Dedicated** clusters.
- Major upgrades are difficult to reverse, so take a manual backup first.
- The capsule status shows **Updating** while the new version is applied. Applications may see short connection interruptions.
- Patch releases within a major version are applied by MongoDB Atlas without any action from you.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0', label: '🛠️ Upgrade 7.0 to 8.0', description: 'Change the version on a Dedicated capsule.'},
    {type: 'link', href: '/docs/products/database-capsule/mongodb/monitor', label: '🛠️ Monitor MongoDB', description: 'View usage metrics for your capsule.'},
  ]}
/>
