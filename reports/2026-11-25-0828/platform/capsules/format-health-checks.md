# Format report: health-checks.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/platform/capsules/health-checks.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure Health Checks
- **Goal:** Expect to see the health check settings saved on the capsule
- **Format check:** fail

## Content list

1. **prerequisite** — Card: Code Capsules account (sign up, Personal Team) — `## Prerequisites`
2. **prerequisite** — Card: A Backend or Docker Capsule — `## Prerequisites`
3. **goal** — Open the Capsule and select **Configure** or **Config** — `## Enable a health check`
4. **goal** — Set **Health Check** to **Automatic**, **Endpoint** to `/health`; application must return HTTP `200`–`399` — `## Enable a health check`
5. **goal** — Save or redeploy if prompted — `## Enable a health check`
6. **goal** — After replicas pass checks, dashboard shows Capsule healthy and routes traffic to passing replicas — `## Enable a health check`
7. **remove** (relative to documented goal) — Troubleshooting body: add `GET /health`, do not protect with login; link to Backend Capsule configure for Manual timeout — `## Troubleshooting`

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Description and last step target healthy dashboard status, not the documented goal (settings saved on the capsule). |
| Check 2: Prerequisites | fail | `create-an-account` shared page missing in `docs/`; capsule prerequisite links to a page not in `docs/`. |
| Check 3: Links | fail | Three internal targets missing from `docs/`: shared account page, capsule prerequisite page, Backend configure page. |
| Check 4: Format and style | fail | Steps section heading does not follow `## <Verb> your <Thing>`; description does not match documented feature goal. |
| Walkthrough | not applicable | — |

## Tickets

### health-checks-1

- **Type:** Missing goal step
- **Title:** Align description and last step with the documented goal.
- **Problem:** Frontmatter `description`, the intro under `# Configure Health Checks`, and step 4 end state say the Capsule “reports healthy on the dashboard.” The documented feature goal is: “Expect to see the health check settings saved on the capsule.”
- **Rule:** `FORMAT.MD`, Check 1 (How-to: goal steps); `how_to_format.md`, Title and description: “must match the feature's goal”; Steps: “The last step **must** end with the reader seeing the goal.”
- **Change:** Rewrite `description`, the intro paragraph, and the last step so the reader confirms **Health Check**, **Endpoint**, and related settings are saved on the Capsule **Configure** / **Config** tab (and remain visible after save/redeploy). Keep a separate note only if healthy routing is explicitly in scope for the same feature.
- **Done when:** A reviewer can read the title description and final step and see the same end state as `DOCUMENTED_FEATURES.md` for Configure Health Checks.

### health-checks-2

- **Type:** Format fix
- **Title:** Rename the steps section heading.
- **Problem:** The steps live under `## Enable a health check`, which is not `## <Verb> your <Thing>`.
- **Rule:** `how_to_format.md`, Steps: “The heading **must** be `## <Verb> your <Thing>`.”
- **Change:** Rename to something like `## Configure your health check` and keep the numbered list under it.
- **Done when:** The only `##` section between Prerequisites and Troubleshooting matches the verb-your-thing pattern.

### health-checks-3

- **Type:** Broken link
- **Title:** Fix the Backend or Docker Capsule prerequisite link.
- **Problem:** Prerequisites card uses `href: '/platform/capsules/how-do-i-add-remove-stop-capsules'`. No file exists at `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md` (only under `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3: Links; `how_to_format.md`, Prerequisites: `href` must target a page that explains the prerequisite.
- **Change:** Point the card at an existing how-to in `docs/`, for example `/products/docker-capsule/git/deploy` or `/products/docker-capsule/configure`, with label and description updated to match. If a single “Backend or Docker Capsule” page is required, add that doc first, then link it.
- **Done when:** The `href` resolves to a file under `docs/` and the card text matches what that page covers.

### health-checks-4

- **Type:** Broken link
- **Title:** Fix the troubleshooting link to Backend configure.
- **Problem:** Troubleshooting links to `[Configure a Backend Capsule](/products/backend-capsule/configure/)`. No `docs/products/backend-capsule/configure.md` exists (only `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3: Links.
- **Change:** Link to an in-repo page that documents Manual health-check timeout settings, e.g. `/products/docker-capsule/configure` (health check section), or restore/add `docs/products/backend-capsule/configure.md` and link there.
- **Done when:** The markdown link target exists under `docs/`.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-an-account`, but `docs/shared/` has no `create-an-account` page.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/create-an-account.md` with slug `/shared/create-an-account`, how-to structure for signing up and opening the Personal Team, and sidebar entry if required by the site config. Reuse the card copy already used across guides.
- **Done when:** `docs/shared/create-an-account.md` exists and `/docs/shared/create-an-account` is a valid docs path.

## Proposed outline

```md
---
slug: "/platform/capsules/health-checks"
title: "How to Configure Health Checks"
description: >-
  Save HTTP health check settings on a Capsule. When you finish, **Configure** shows your choices saved.
sidebar_label: "Health checks"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Health Check

<Intro aligned with description and feature goal.>

## Prerequisites

<DocCardList — account → /docs/shared/create-an-account; existing server Capsule → valid deploy/configure doc in docs/.>

## Configure your health check

1. **Open Configure**

   On **Configure** / **Config**, …

2. **Set Automatic health check**

   **Health Check** **Automatic**, **Endpoint** `/health`, …

3. **Save settings**

   Save/redeploy; state what the reader sees on the tab when settings are persisted.

4. **Confirm saved settings** (optional healthy status only if in scope for the feature)

   Reader sees saved values on the Capsule configuration UI.

## Troubleshooting

<details>
<summary>Replicas never become healthy</summary>

Cause and fix; internal link to an existing configure doc for Manual timeouts.

</details>
```