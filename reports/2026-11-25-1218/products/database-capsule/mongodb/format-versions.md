# Format report — versions (MongoDB)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/database-capsule/mongodb/versions.md`
- **Doc type:** Reference
- **Template:** `formats/reference_format.md`
- **Feature:** Supported MongoDB Versions
- **Goal:** Expect to see each supported version
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|--------|---------|-----------|
| 1 | fact | (under `#` title) | Supported MongoDB major versions on Dedicated and Shared MongoDB Capsules, default provisioning, and allowed upgrade paths on Code Capsules. |
| 2 | fact | `## Overview` | MongoDB Capsules run on MongoDB Atlas; major-version rules differ for **Dedicated** and **Shared** clusters. |
| 3 | fact | `## Overview` | Current MongoDB server version appears on **Config** under **MongoDB Configuration**. |
| 4 | fact | `## Dedicated clusters` | Table: **7.0**, **8.0**, and **latest** are supported on Dedicated clusters. |
| 5 | fact | `## Dedicated clusters` | New Dedicated capsules provision on the latest supported version unless another version is selected during setup. |
| 6 | fact | `## Shared clusters` | Table: **8.0** is supported on Shared clusters. |
| 7 | fact | `## Shared clusters` | Shared cluster versions cannot be changed from the dashboard. |
| 8 | fact | `## Upgrade paths` | Upgrade-path matrix (7.0→8.0, 8.0→latest, latest auto, no downgrades). |
| 9 | fact | `## Upgrade paths` | Major upgrades happen one step at a time; manual major upgrades only on **Dedicated** clusters. |
| 10 | instruction | `## Upgrade paths` | Major upgrades are difficult to reverse, so **take a manual backup first**. |
| 11 | fact | `## Upgrade paths` | Capsule status shows **Updating** during upgrade; brief connection interruptions possible. |
| 12 | fact | `## Upgrade paths` | Patch releases within a major version are applied by MongoDB Atlas without reader action. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (facts only) | fail | Item 10 is labelled `instruction` (imperative “take a manual backup first”) on a Reference page. |
| Check 2: Prerequisites | not applicable | Reference pages have no Prerequisites section. |
| Check 3: Links | pass | Table and `DocCardList` `href` values resolve to `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md` and `docs/products/database-capsule/mongodb/monitor.md`. |
| Check 4: Format and style | pass | `##` sections follow `reference_format.md` order (Overview, subject tables, Related `DocCardList` with two cards); H1 and intro repeat `description`. |

## Tickets

### versions-1

- **Type:** Move to another doc
- **Title:** Replace backup imperative with a factual policy line.
- **Problem:** Under `## Upgrade paths`, the doc says “Major upgrades are difficult to reverse, so take a manual backup first.”
- **Rule:** `FORMAT.MD`, Check 1 (Reference: facts only) — `instruction` content belongs in a How-to guide; `reference_format.md`, Subject sections — “Never include steps.”
- **Change:** Rephrase as a limit the reader looks up, e.g. “A manual backup is required before major upgrades,” with no imperative **take**. Keep procedural backup steps only on `versions/upgrades/7-0-to-8-0.md` (and a future MongoDB backups how-to when it exists). Optionally add a **Related** card to the backups guide when `docs/products/database-capsule/mongodb/backups.md` is added.
- **Done when:** No imperative backup wording remains under `## Upgrade paths` on the reference page and upgrade procedures stay on how-to pages linked from **Related**.

## Proposed outline

```md
---
slug: "/products/database-capsule/mongodb/versions"
title: "Supported MongoDB Versions"
description: >-
  Supported MongoDB major versions on Dedicated and Shared MongoDB Capsules,
  default provisioning, and allowed upgrade paths on Code Capsules.
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
- A manual backup is required before major upgrades.
- The capsule status shows **Updating** while the new version is applied. Applications may see short connection interruptions.
- Patch releases within a major version are applied by MongoDB Atlas without any action from you.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0', label: '🛠️ Upgrade 7.0 to 8.0', description: 'Change the version on a Dedicated capsule.'},
    {type: 'link', href: '/docs/products/database-capsule/mongodb/monitor', label: '🛠️ Monitor MongoDB', description: 'View usage metrics for your capsule.'},
  ]}
/>
```