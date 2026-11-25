# Format report — alerting

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/alerting.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Set Up Deployment Notifications
- **Goal:** Expect to receive a notification when a deployment completes
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (misaligned) | (under `#` title) | Enable deployment-completion alerts. When you finish, you receive a notification when a deployment completes. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card link to `/docs/shared/create-an-account`) |
| 3 | goal | `## Set up your deployment notifications` | **Open notifications** — Open **Alerting** or **Notifications** in the dashboard menu. |
| 4 | goal | `## Set up your deployment notifications` | **Enable deployment notifications** — Turn on in-app alerts, email alerts, or both for the deployment-completion event. |
| 5 | remove | `## Set up your deployment notifications` | **Enable deployment notifications** — You can also enable alerts for **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage**. |
| 6 | goal | `## Set up your deployment notifications` | **Save preferences** — Click **Save Preferences**. Reload the page; your toggles match what you saved. |
| 7 | goal | `## Set up your deployment notifications` | **Verify a deployment notification** — Run a deployment, or wait for one to finish. You receive a notification in the channel you chose, in the app, by email, or both. |
| 8 | goal | `## Troubleshooting` | Email alerts never arrive — confirm email notifications are enabled and account email on **Account** is correct; check spam. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | A `remove` instruction (optional **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage** alerts) is inside the numbered steps section. |
| Check 2: Prerequisites | pass | The only prerequisite is listed in `## Prerequisites` with a link to `docs/shared/create-an-account.md`. |
| Check 3: Links | pass | Internal prerequisite link resolves; no images. |
| Check 4: Format and style | fail | Step 2 uses the phrase `deployment-completion event` instead of the exact on-screen event label in bold, per `how_to_format.md` Steps (values the goal depends on must be stated exactly). |

## Tickets

### alerting-1

- **Type:** Remove content
- **Title:** Remove optional alert types from the enable step.
- **Problem:** In step **Enable deployment notifications**, the sentence “You can also enable alerts for **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage**.” describes events outside the deployment-notification goal.
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps) — `remove` instructions must not appear inside the steps section.
- **Change:** Delete the “You can also enable alerts for …” sentence from step 2. Leave only the actions needed to turn on in-app and/or email alerts for deployment completion.
- **Done when:** Step 2 contains only goal instructions for deployment-completion notifications.

### alerting-2

- **Type:** Format fix
- **Title:** State the deployment-completion event label exactly.
- **Problem:** Step 2 says “for the deployment-completion event” while other events in the doc use bold UI labels (**Save Preferences**, **High CPU Usage**, etc.).
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `writing_style.md`, Words — put UI labels in bold, exactly as they appear on screen.
- **Change:** Replace `deployment-completion event` with the exact toggle or event name from the dashboard (for example **Deployment Complete**, if that is the label), in bold.
- **Done when:** Step 2 names the deployment-completion control with the same bold label a reader sees in **Alerting** or **Notifications**.

## Proposed outline

```md
---
slug: "/products/alerting"
title: "How to Set Up Deployment Notifications"
description: >-
  Enable deployment-completion alerts. When you finish, you receive a
  notification when a deployment completes.
sidebar_label: "Notifications"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Set Up Deployment Notifications

<Same as description.>

## Prerequisites

<DocCardList — Code Capsules account → /docs/shared/create-an-account>

## Set up your deployment notifications

1. **Open notifications**
2. **Enable deployment notifications** — in-app and/or email for **<exact deployment event label>**
3. **Save preferences**
4. **Verify a deployment notification**

## Troubleshooting

<details> Email alerts never arrive </details>
```