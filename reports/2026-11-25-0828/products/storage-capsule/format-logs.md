# Format report — logs (Persistent Storage)

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/storage-capsule/logs.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** View logs for a Persistent Storage Capsule
- **Goal:** Expect to see capsule, build, and access log streams on the **Logs** tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove (intro mismatch) | (under `#` title) | View build, runtime, and access logs for your Storage Capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | Storage Capsule → `/products/storage-capsule/deploy` |
| 5 | goal | `## View logs` | **Open the Capsule** — Open the Space and select the Storage Capsule. |
| 6 | goal | `## View logs` | **Open Logs** — Click the **Logs** tab. |
| 7 | goal | `## View logs` | **Switch log streams** — Open **Capsule logs**, **Build logs**, or **Access logs**; scroll to the latest entries after a deploy. |
| 8 | goal | `## Troubleshooting` | Build logs are empty — trigger a new build or push, then refresh **Build logs**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Intro repeats neither `description` nor the documented log-stream goal (`description` cites monitoring and debugging; intro cites build/runtime/access streams). Last step does not state that the reader sees current log entries for the stream they opened. |
| Check 2: Prerequisites | fail | Account and Space cards link to `/docs/shared/*` pages that do not exist under `docs/`. See `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. |
| Check 3: Links | fail | `/docs/shared/create-an-account`, `/docs/shared/create-a-space`, and `/products/storage-capsule/deploy` have no matching files under `docs/`. |
| Check 4: Format and style | fail | H1 is `# Logs logs`; `title` is “How to View Logs for a Persistent Storage”. Intro does not repeat `description`. Steps section is `## View logs` not `## <Verb> your <Thing>`; step bodies do not open with the screen name in bold per `how_to_format.md`. |

## Tickets

### logs-1

- **Type:** Format fix
- **Title:** Fix H1 and align description with intro and log streams.
- **Problem:** H1 is `# Logs logs`. `description` says “View logs from your Persistent Storage Capsule … to monitor file activity and debug storage issues”; the intro says “View build, runtime, and access logs for your Storage Capsule.”
- **Rule:** `writing_style.md`, Every doc — one `#` title; intro repeats `description`. `FORMAT.MD`, Check 1 — goal wording must be consistent.
- **Change:** Set H1 to a clear task title aligned with frontmatter `title` (for example `# View Your Persistent Storage Logs`). Rewrite `description` and the sentences under the H1 so both state the same outcome: the reader opens **Logs** and can read **Capsule logs**, **Build logs**, and **Access logs** for their Persistent Storage Capsule.
- **Done when:** H1 is a clear task title; `description` and intro match; both mention the same log streams the steps use.

### logs-2

- **Type:** Format fix
- **Title:** Rename the steps section to verb + your + thing.
- **Problem:** Steps are under `## View logs` instead of `## <Verb> your <Thing>`.
- **Rule:** `how_to_format.md`, Steps — heading must be `## <Verb> your <Thing>`.
- **Change:** Rename to `## View your Persistent Storage logs` (or equivalent).
- **Done when:** The `##` heading before the numbered list matches the template pattern.

### logs-3

- **Type:** Format fix
- **Title:** Open each step on the screen name in bold; end with the goal check.
- **Problem:** Steps do not start with “On **…**,”. The last step does not state that the reader sees current log entries for the selected stream (documented goal).
- **Rule:** `how_to_format.md`, Steps — screen name in bold; last step must end with the reader seeing the goal.
- **Change:** Rewrite so step 1 opens on the Space/dashboard, step 2 on **Logs**, step 3 on the log stream selector (**Capsule logs** / **Build logs** / **Access logs**) and ends with latest log entries visible for the stream they opened.
- **Done when:** Each step follows the template pattern and the last step explicitly describes seeing log output on **Logs**.

### logs-4

- **Type:** Broken link
- **Title:** Link Storage Capsule prerequisite to an existing deploy guide.
- **Problem:** Prerequisite card `href` is `/products/storage-capsule/deploy`; there is no `docs/products/storage-capsule/deploy.md` in the repo.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/storage-capsule/deploy.md` or point the card at the correct in-repo deploy doc when Persistent Storage deploy is restored.
- **Done when:** The prerequisite card `href` resolves to a file under `docs/`.

### logs-5

- **Type:** Shared page (reference)
- **Title:** Use shared account and Space pages when available.
- **Problem:** Prerequisites depend on `/docs/shared/create-an-account` and `/docs/shared/create-a-space`, which are not in `docs/` yet.
- **Rule:** `FORMAT.MD`, Check 2 — reference existing shared-page tickets in this run.
- **Change:** No duplicate shared-page work on this doc; unblock Check 2 when `shared-create-an-account` and `shared-create-a-space` in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` are done.
- **Done when:** Both shared paths exist and this guide’s prerequisite cards resolve.

## Proposed outline

```md
---
slug: "/products/storage-capsule/logs"
title: "How to View Logs for a Persistent Storage"
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

   On your Space dashboard, select the Persistent Storage Capsule.

2. **Open Logs**

   On **Logs**, open the tab.

3. **Read a log stream**

   On **Logs**, open **Capsule logs**, **Build logs**, or **Access logs**. Latest entries for that stream are visible in the list.

## Troubleshooting

<details>
<summary>Build logs are empty</summary>

Trigger a new build from the **Deploy** tab or push to the connected branch, then refresh **Build logs**.

</details>
```