# Format report — alerting

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/alerting.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Set Up Deployment Notifications
- **Goal:** Expect to receive a notification when a deployment completes
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | — | (under `#` title) | Enable deployment-completion alerts. When you finish, you receive a notification when a deployment completes. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card link to `/docs/shared/create-an-account`) |
| 3 | goal | `## Set up your deployment notifications` | **Open notifications** — Open **Alerting** or **Notifications** in the dashboard menu. |
| 4 | goal | `## Set up your deployment notifications` | **Enable deployment notifications** — Turn on in-app alerts, email alerts, or both for the deployment-completion event. |
| 5 | remove | `## Set up your deployment notifications` | **Enable deployment notifications** (same step) — You can also enable alerts for **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage**. |
| 6 | goal | `## Set up your deployment notifications` | **Save preferences** — Click **Save Preferences**. Reload the page; your toggles match what you saved. |
| 7 | goal | `## Set up your deployment notifications` | **Verify a deployment notification** — Run a deployment, or wait for one to finish. You receive a notification in the channel you chose, in the app, by email, or both. |
| 8 | — | `## Troubleshooting` | Email alerts never arrive — confirm email enabled and account email on **Account**; check spam. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Step 2 includes non-goal instructions for **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage** inside the steps section. |
| Check 2: Prerequisites | pass | Single prerequisite card links to existing `docs/shared/create-an-account.md`. |
| Check 3: Links | pass | `/docs/shared/create-an-account` resolves under `docs/`. |
| Check 4: Format and style | fail | Step 2 does not state the deployment-completion control label exactly as on screen (uses “deployment-completion event” only). Steps 1 and 3 do not open with the screen name in bold per the Steps rules. |

## Tickets

### alerting-1

- **Type:** Remove content
- **Title:** Drop unrelated alert types from step 2.
- **Problem:** Under **Enable deployment notifications**, the sentence “You can also enable alerts for **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage**” is not required to receive a deployment-completion notification.
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps) — `remove` instructions must not appear inside the steps section; `how_to_format.md`, Steps — steps contain only actions needed to reach the goal.
- **Change:** Delete that sentence from item 2. Keep only enabling in-app and/or email for the deployment-completion event.
- **Done when:** Step 2 mentions only deployment-completion notifications (and save/verify steps still reach the documented goal).

### alerting-2

- **Type:** Format fix
- **Title:** Use the exact deployment-completion UI label in step 2.
- **Problem:** Step 2 refers to “the deployment-completion event” without the on-screen label in bold.
- **Rule:** `how_to_format.md`, Steps — “Every value the goal depends on **must** be stated exactly”; `writing_style.md`, Words — “Put UI labels in bold, exactly as they appear on screen.”
- **Change:** Replace the generic phrase with the exact toggle or event name from the **Alerting** / **Notifications** screen (for example **Deployment complete** or whatever the product shows), in bold, for both in-app and email toggles if they are separate.
- **Done when:** A reader can match every bold label in step 2 to text on the live notifications screen.

### alerting-3

- **Type:** Format fix
- **Title:** Start step descriptions with the screen name in bold.
- **Problem:** Steps 1 and 3 do not begin with “On **&lt;Screen&gt;**, …” (step 1 opens with “Open **Alerting** or **Notifications**”; step 3 opens with “Click **Save Preferences**”).
- **Rule:** `how_to_format.md`, Steps — “Start the description with the screen's name in bold, such as ‘On **Plan**, …’.”
- **Change:** Rewrite step 1 to open on the dashboard or notifications screen (for example “On the dashboard menu, open **Alerting** or **Notifications**.”). Rewrite step 3 to open on the notifications preferences screen before **Save Preferences** and reload.
- **Done when:** Each numbered step’s description starts with the screen or tab name in bold.

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

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 Code Capsules account → /docs/shared/create-an-account>

## Set up your deployment notifications

1. **Open notifications**
   On the dashboard menu, open **Alerting** or **Notifications**.

2. **Enable deployment notifications**
   On **Notifications**, turn on in-app and/or email for **<exact deployment-completion label>**.

3. **Save preferences**
   On **Notifications**, click **Save Preferences**. Reload; toggles match what you saved.

4. **Verify a deployment notification**
   Run or wait for a deployment; confirm a notification in the app and/or email.

## Troubleshooting

<details>
<summary>Email alerts never arrive</summary>

Confirm email notifications and account email on **Account**; check spam.

</details>
```