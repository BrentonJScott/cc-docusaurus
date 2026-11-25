# Format report — logs (Persistent Storage)

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/storage-capsule/logs.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** View logs for a Persistent Storage Capsule
- **Goal:** Expect to see the logs for the storage capsule
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | View **Capsule logs**, **Build logs**, and **Access logs** for your Persistent Storage Capsule on Code Capsules. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite (missing) | — | A deployed Persistent Storage Capsule (assumed in step 1; not listed in Prerequisites) |
| 5 | goal | `## View your Persistent Storage logs` | **Open the Capsule** — On your Space dashboard, select the Persistent Storage Capsule. |
| 6 | goal | `## View your Persistent Storage logs` | **Open Logs** — On the Capsule page, click the **Logs** tab. |
| 7 | goal | `## View your Persistent Storage logs` | **Read a log stream** — On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**; the latest entries for that stream are visible in the list. |
| 8 | — | `## Troubleshooting` | Build logs are empty — trigger a new build from **Deploy** or push, then refresh **Build logs**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Steps reach the documented goal: the last step states that latest log entries are visible for the stream the reader opened. |
| Check 2: Prerequisites | fail | A deployed Persistent Storage Capsule is required but is not a prerequisite card in `## Prerequisites`. |
| Check 3: Links | pass | `/docs/shared/create-an-account` and `/docs/shared/create-a-space` resolve under `docs/`. |
| Check 4: Format and style | fail | Steps 1 and 2 do not open with the screen name in bold per `how_to_format.md`, Steps. |

## Tickets

### logs-1

- **Type:** Move to prerequisites
- **Title:** Add a Persistent Storage Capsule prerequisite card.
- **Problem:** Step 1 assumes the reader already has a Persistent Storage Capsule in the Space; only account and Space appear under `## Prerequisites`.
- **Rule:** `how_to_format.md`, Prerequisites — list everything the reader must have before the goal; `FORMAT.MD`, Check 2.
- **Change:** Add a `DocCardList` item with label `🛠️ Storage Capsule`, description `Create the Capsule first.`, and `href` to the in-repo Persistent Storage deploy how-to when it exists.
- **Done when:** `## Prerequisites` includes the capsule card and the steps start from opening that Capsule.

### logs-2

- **Type:** Broken link (blocked by logs-1)
- **Title:** Link the capsule prerequisite to an existing deploy guide.
- **Problem:** There is no `docs/products/storage-capsule/deploy.md` (or equivalent) for the prerequisite `href`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add the Persistent Storage deploy how-to under `docs/products/storage-capsule/` or point the card at the correct slug once that page is restored.
- **Done when:** The prerequisite card `href` resolves to a file under `docs/`.

### logs-3

- **Type:** Format fix
- **Title:** Open steps 1 and 2 on the screen name in bold.
- **Problem:** Step 1 begins with “On your Space dashboard,” without the Space screen name in bold. Step 2 uses “On the Capsule page,” with **Capsule** not bold.
- **Rule:** `how_to_format.md`, Steps — start the description with the screen's name in bold, such as “On **Plan**, …”.
- **Change:** Rewrite step 1 to open on the Space dashboard with the UI label in bold (for example “On your **Space** dashboard, select the Persistent Storage Capsule.”). Rewrite step 2 to open on the Capsule page with the UI label in bold (for example “On the **Capsule** page, click the **Logs** tab.”).
- **Done when:** Both step descriptions follow the template’s “On **Screen**, …” pattern.

## Proposed outline

```md
---
slug: "/products/storage-capsule/logs"
title: "How to View Logs for a Persistent Storage Capsule"
description: >-
  View **Capsule logs**, **Build logs**, and **Access logs** for your
  Persistent Storage Capsule on Code Capsules.
sidebar_label: Logs
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# View Your Persistent Storage Logs

View **Capsule logs**, **Build logs**, and **Access logs** for your Persistent Storage Capsule on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/storage-capsule/deploy', label: '🛠️ Storage Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## View your Persistent Storage logs

1. **Open the Capsule**

   On your **Space** dashboard, select the Persistent Storage Capsule.

2. **Open Logs**

   On the **Capsule** page, click the **Logs** tab.

3. **Read a log stream**

   On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**. The latest entries for that stream are visible in the list.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from the **Deploy** tab or push to the connected branch, then refresh **Build logs**.

</details>
```