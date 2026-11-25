# Format report: Supported MongoDB Versions

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/database-capsule/mongodb/versions.md`
- **Doc type:** Reference
- **Template:** `formats/reference_format.md`
- **Feature:** Supported MongoDB Versions
- **Goal:** see each supported version
- **Format check:** fail

## Content list (Check 1)

1. `fact` — (under `# MongoDB Versions`) — Intro repeats `description`: supported majors on Dedicated and Shared, default provisioning, allowed upgrade paths.
2. `fact` — `## Overview` — MongoDB Capsules run on Atlas; Dedicated vs Shared rules differ; current version appears on **Config** under **MongoDB Configuration**.
3. `fact` — `## Dedicated clusters` — Table: **7.0**, **8.0**, **latest** supported.
4. `fact` — `## Dedicated clusters` — New Dedicated capsules default to latest unless another version is selected at setup.
5. `fact` — `## Shared clusters` — Table: **8.0** supported.
6. `fact` — `## Shared clusters` — Shared cluster versions cannot be changed from the dashboard.
7. `fact` — `## Upgrade paths` — Table of from/to, allowed flags, and guide links.
8. `fact` — `## Upgrade paths` — Major upgrades are one step at a time; manual major upgrades only on **Dedicated** clusters.
9. `instruction` — `## Upgrade paths` — "take a manual backup first."
10. `fact` — `## Upgrade paths` — **Updating** status during upgrade; short connection interruptions possible.
11. `fact` — `## Upgrade paths` — Patch releases within a major are applied by Atlas without reader action.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (facts only) | fail | Bullet under `## Upgrade paths` tells the reader to take a manual backup (`instruction`). |
| Check 2: Prerequisites | not applicable | Reference page. |
| Check 3: Links | pass | Upgrade table and `## Related` `href` values resolve to `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md` and `docs/products/database-capsule/mongodb/monitor.md`. |
| Check 4: Format and style | pass | Frontmatter, section order, tables, and `DocCardList` in `## Related` match `reference_format.md` and `writing_style.md`. |

## Tickets

### versions-1

- **Type:** Move to another doc
- **Title:** Replace backup imperative with a policy fact or link the upgrade guide.
- **Problem:** Under `## Upgrade paths`, the bullet "Major upgrades are difficult to reverse, so take a manual backup first." tells the reader what to do.
- **Rule:** `FORMAT.MD`, Check 1 — Reference: facts only; `reference_format.md`, Subject sections — never include steps.
- **Change:** Reword to a non-imperative policy fact (for example, that major upgrades cannot be reversed and that upgrades should follow the linked upgrade guide, which covers backups), or remove the sentence and add a Related card to the upgrade guide if backup policy must stay procedural.
- **Done when:** No imperative backup instruction remains on the Reference page; backup or upgrade procedure lives only on a How-to guide linked from `## Related`.

## Proposed outline

```md
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

<Same as description.>

## Overview

<Atlas; Dedicated vs Shared; version on **Config** → **MongoDB Configuration**.>

## Dedicated clusters

| Version | Status |
| **7.0**, **8.0**, **latest** | Supported |

- Default provisioning sentence.

## Shared clusters

| Version | Status |
| **8.0** | Supported |

- Dashboard cannot change shared version.

## Upgrade paths

| From | To | Allowed | Guide |
| (matrix) |

- Policy bullets only (no imperatives); note irreversibility as fact; link procedures in **Related**.

## Related

<DocCardList — upgrade guide, monitor, any backup/upgrade how-to as needed.>
```