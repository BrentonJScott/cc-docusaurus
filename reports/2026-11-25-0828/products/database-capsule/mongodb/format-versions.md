# Format report — versions (MongoDB)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/database-capsule/mongodb/versions.md`
- **Doc type:** Mixed Reference and How-to guide (should be Reference)
- **Template:** `formats/reference_format.md`
- **Feature:** Supported MongoDB Versions
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|--------|---------|-----------|
| 1 | prerequisite (misplaced) | `## Prerequisites` | Account, Space, GitHub connected (cards). |
| 2 | remove | After `## Prerequisites` | Intro paragraph on Atlas, Dedicated vs Shared, and what “this guide covers” (not under `#`). |
| 3 | fact | `## Supported Versions` / Dedicated | Version 7.0, 8.0, **latest** supported on Dedicated clusters. |
| 4 | fact | `## Supported Versions` / Dedicated | New Dedicated capsules provision on latest unless chosen otherwise. |
| 5 | fact | `## Supported Versions` / Shared | Version 8.0 supported on Shared clusters. |
| 6 | fact + instruction | `## Supported Versions` / Shared | Shared versions cannot change; upgrade via **Scale** tab. |
| 7 | fact | `## Supported Versions` | Patch releases applied by MongoDB Atlas without reader action. |
| 8 | instruction | `## Check Your Version` | Read version on **Config** → **MongoDB Configuration**. |
| 9 | instruction | `## Check Your Version` | Run `db.version()` after connecting with `mongosh`. |
| 10 | fact | `## Upgrade Paths` | One-step major upgrades; no downgrades; Dedicated only. |
| 11 | fact | `## Upgrade Paths` | Upgrade path table (7.0→8.0→latest). |
| 12 | instruction | `## Before Any Major Upgrade` | Take manual backup; plan disruption; follow 7.0→8.0 guide. |
| 13 | instruction | `## Change the MongoDB Version` | Four-step UI flow on **Config** to change version. |
| 14 | instruction | `## After Upgrading` | Verify connectivity, `db.version()`, logs. |
| 15 | instruction | `## Troubleshooting` | Generic UI mismatch symptom. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (facts only) | fail | Multiple `instruction` sections (`## Check Your Version`, `## Before Any Major Upgrade`, `## Change the MongoDB Version`, `## After Upgrading`, `## Troubleshooting`); misplaced `## Prerequisites` and intro on a Reference page; page mixes version lookup with upgrade how-tos. |
| Check 2: Prerequisites | not applicable | Reference pages have no Prerequisites section. |
| Check 3: Links | fail | Missing under `docs/`: `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, `/docs/shared/configure-git-for-code-capsules`; `/products/database-capsule/mongodb/scale/`; `/products/database-capsule/mongodb/backups/`; `/database/mongodb/#connect-from-outside-code-capsules`. |
| Check 4: Format and style | fail | Wrong doc type layout; no `## Overview` or `## Related`; `##` sections do not match `reference_format.md` section order; H1 is a how-to title while frontmatter title is reference-style; intro does not sit directly under `#` or repeat `description`. |

## Tickets

### versions-1

- **Type:** Wrong doc type
- **Title:** Split version facts from upgrade and check-version procedures.
- **Problem:** Frontmatter `title` is “Supported MongoDB Versions” but the H1 is “Choose and Upgrade Your MongoDB Version,” and the page combines version tables with numbered upgrade steps, connection instructions, and troubleshooting.
- **Rule:** `writing_style.md`, Choose the doc type — one page, one type; `FORMAT.MD`, Step 1 — mixed Reference and How-to.
- **Change:** Keep `versions.md` as a Reference page (supported versions per cluster type, upgrade-path matrix, policies). Move “check version,” “before upgrade,” “change version,” “after upgrading,” and troubleshooting into How-to guide(s) (e.g. extend `versions/upgrades/7-0-to-8-0.md` and add a dedicated “change MongoDB version” or “check MongoDB version” guide). Cross-link via `## Related` on both sides.
- **Done when:** `versions.md` contains only reference content and each procedure lives on a how-to page linked from `## Related`.

### versions-2

- **Type:** Move to another doc
- **Title:** Move check-version steps to a How-to guide.
- **Problem:** Under `## Check Your Version`, the doc tells the reader to open **Config**, run `db.version()`, and connect with `mongosh` via the public connection string.
- **Rule:** `FORMAT.MD`, Check 1 (Reference: facts only) — `instruction` content belongs in a How-to guide.
- **Change:** Create or reuse a how-to (e.g. `docs/products/database-capsule/mongodb/check-version.md`) with those steps; on `versions.md`, replace the section with one factual line that the current server version is shown on **Config** (no numbered steps), and link the how-to from `## Related`.
- **Done when:** No imperative steps remain under `## Check Your Version` on the reference page and the how-to is linked.

### versions-3

- **Type:** Move to another doc
- **Title:** Move version-change and pre/post-upgrade steps off the reference page.
- **Problem:** `## Before Any Major Upgrade`, `## Change the MongoDB Version`, and `## After Upgrading` are numbered and bulleted procedures overlapping the dedicated upgrade guide at `versions/upgrades/7-0-to-8-0.md`.
- **Rule:** `FORMAT.MD`, Check 1 (Reference); `reference_format.md`, Subject sections — “Never include steps.”
- **Change:** Delete those sections from `versions.md` after their content is merged into the appropriate how-to guides (general version change + 7.0→8.0). Keep only factual policies on the reference page (e.g. backup required, brief **Updating** disruption) as bullets under an upgrade-paths subject section if they are limits, not steps.
- **Done when:** `versions.md` has no numbered lists outside optional **Examples** and procedures exist only on how-to pages.

### versions-4

- **Type:** Format fix
- **Title:** Restructure `versions.md` to the Reference section table.
- **Problem:** The page opens with `## Prerequisites` and an intro after the cards; it lacks `## Overview` and `## Related`; subject sections use non-template headings (`## Check Your Version`, etc.).
- **Rule:** `reference_format.md`, Sections — order: title/description, `## Overview`, subject `##` sections (tables), optional `## Examples`, `## Related` with `DocCardList` (two to five cards).
- **Change:** Remove `## Prerequisites` (not needed for lookup). Put Atlas / Dedicated vs Shared rules in `## Overview`. Rename or merge subject sections to `## Dedicated clusters`, `## Shared clusters`, `## Upgrade paths` (tables). Add `## Related` with cards to upgrade how-tos, scale, backups (when those docs exist).
- **Done when:** Only the reference template’s `##` sections appear, in order, and `## Related` has at least two valid cards.

### versions-5

- **Type:** Format fix
- **Title:** Align H1, `description`, and intro on the reference purpose.
- **Problem:** `# Choose and Upgrade Your MongoDB Version` disagrees with `title: "Supported MongoDB Versions"`. The intro after prerequisites does not repeat the frontmatter `description` and promises tasks (“how to check,” “how to plan upgrade”) instead of what the page lists.
- **Rule:** `writing_style.md`, Every doc — one `#` title and one or two sentences repeating `description` directly under the title; `reference_format.md`, Title and description.
- **Change:** Set H1 to `# MongoDB Versions` (or match `title`). Place one or two sentences under the H1 that match `description`, scoped to supported versions and upgrade paths (not step-by-step upgrade tasks).
- **Done when:** H1, `description`, and intro all describe the same reference scope.

### versions-6

- **Type:** Remove content
- **Title:** Remove irrelevant GitHub prerequisite from a versions reference.
- **Problem:** Prerequisites include `🔌 GitHub connected` even though looking up or choosing a MongoDB version does not require GitHub.
- **Rule:** `FORMAT.MD`, Check 1 — `remove` on a Reference page; Reference template has no Prerequisites.
- **Change:** Remove the entire `## Prerequisites` block when converting to Reference (included in versions-4).
- **Done when:** No prerequisite cards remain on `versions.md`.

### versions-7

- **Type:** Broken link
- **Title:** Fix MongoDB Scale, backups, and external connection links.
- **Problem:** Links target `/products/database-capsule/mongodb/scale/`, `/products/database-capsule/mongodb/backups/`, and `/database/mongodb/#connect-from-outside-code-capsules` with no matching files under `docs/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add the missing MongoDB docs under `docs/` or point links at existing slugs; move connection steps to a how-to so the reference page only links to in-repo guides.
- **Done when:** Every internal link on the page (or its replacement reference outline) resolves under `docs/`.

### versions-8

- **Type:** Shared page (reference)
- **Title:** Drop shared-page dependencies when the page becomes Reference-only.
- **Problem:** While the page still has Prerequisites, cards link to `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, and `/docs/shared/configure-git-for-code-capsules`, which have no files under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 3; shared tickets in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` and `shared-configure-git-for-code-capsules` in `reports/2026-11-25-0828/frontend/format-static-html.md`.
- **Change:** Removing Prerequisites (versions-4/versions-6) eliminates these broken links from this doc; no duplicate shared-page work required solely for `versions.md`.
- **Done when:** `versions.md` has no prerequisite cards pointing at missing shared paths.

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

<Same one or two sentences as description.>

## Overview

MongoDB Capsules run on MongoDB Atlas; major-version rules differ for **Dedicated** and **Shared** clusters.

## Dedicated clusters

| Version | Status |
| --- | --- |
| **7.0** | Supported |
| **8.0** | Supported |
| **latest** | Supported — auto-upgraded when new versions release |

- New Dedicated capsules default to the latest supported version unless another version is selected at setup.

## Shared clusters

| Version | Status |
| --- | --- |
| **8.0** | Supported |

- Shared cluster major versions cannot be changed from the dashboard (link Scale how-to when it exists).

## Upgrade paths

| From | To | Allowed | Guide |
| --- | --- | --- | --- |
| 7.0 | 8.0 | Yes | [7.0 to 8.0](/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0/) |
| 8.0 | latest | Yes | — |
| latest | — | Auto when new versions release | — |
| Any | Earlier | No | — |

- Major upgrades are one step at a time; downgrades are not supported; only **Dedicated** clusters allow manual major upgrades.
- Patch releases within a major version are applied by Atlas without reader action.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0', label: '🛠️ Upgrade 7.0 to 8.0', description: 'Change the version on a Dedicated capsule.'},
    {type: 'link', href: '/products/database-capsule/mongodb/monitor', label: '🛠️ Monitor MongoDB', description: 'Check capsule health after upgrades.'},
  ]}
/>
```