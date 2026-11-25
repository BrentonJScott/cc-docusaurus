# Format report — alerting

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/alerting.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Set Up Deployment Notifications
- **Goal:** Expect to receive a notification when a deployment completes
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (misaligned) | (under `#` title) | Save alert and notification preferences. When you finish, choices persist after **Save Preferences**. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card link to `/docs/shared/create-an-account`) |
| 3 | goal | `## Save preferences` | **Open notifications** — Open **Alerting** or **Notifications** in the dashboard menu. |
| 4 | goal (incomplete) | `## Save preferences` | **Toggle events** — Enable or disable in-app and email alerts for **Capsule Not Running**, **High CPU Usage**, **High Memory Usage**. |
| 5 | goal (wrong end state) | `## Save preferences` | **Save** — Click **Save Preferences**; reload; toggles match what you saved. |
| 6 | — | `## Troubleshooting` | Email alerts never arrive — confirm email enabled and account email on **Account**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps never enable or verify deployment-completion notifications; last step confirms saved toggles, not receiving a notification when a deployment completes; title/description/H1 describe general preferences, not the documented feature goal. |
| Check 2: Prerequisites | fail | Prerequisite links to `/docs/shared/create-an-account`; no `docs/shared/` page exists in the repo. |
| Check 3: Links | fail | Internal link `/docs/shared/create-an-account` has no matching file under `docs/`. |
| Check 4: Format and style | fail | H1 (`Set Up Notification Preferences`) does not match frontmatter `title` or feature; steps heading is not `## <Verb> your <Thing>`; intro/description do not state the deployment-notification outcome per `how_to_format.md` Title and description. |

## Tickets

### alerting-1

- **Type:** Missing goal step
- **Title:** Add steps to enable and verify deployment-completion notifications.
- **Problem:** Under `## Save preferences`, step 2 lists **Capsule Not Running**, **High CPU Usage**, and **High Memory Usage** only. Step 3 ends with “your toggles match what you saved,” not receiving a notification when a deployment completes.
- **Rule:** `FORMAT.MD`, Check 1 (How-to guide: goal steps) — steps must reach the feature goal; last step must say what the reader sees when the goal is reached.
- **Change:** Add a goal step that enables in-app and/or email notifications for deployment completion (use the exact UI label). Add a final verification step: trigger or wait for a deployment, then confirm the notification arrives in the channel the reader chose.
- **Done when:** A reader following only the numbered steps can enable deployment notifications and the last step describes seeing a deployment-completion notification.

### alerting-2

- **Type:** Format fix
- **Title:** Align title, H1, and description with deployment notifications.
- **Problem:** Frontmatter `title` is “How to Set Up Deployment Notifications” but `#` title is “Set Up Notification Preferences.” `description` and the intro under the title say preferences persist after **Save Preferences**, not that the reader receives a notification when a deployment completes.
- **Rule:** `how_to_format.md`, Title and description — intro must match the feature’s goal in the documented features list; `writing_style.md`, Every doc — one or two sentences repeat `description`.
- **Change:** Set `#` title and `description` (and intro copy) to state that when the reader finishes, they receive a notification when a deployment completes (after enabling the right event and saving).
- **Done when:** `title`, `description`, `#` heading, and intro sentences all describe the deployment-notification outcome consistently.

### alerting-3

- **Type:** Format fix
- **Title:** Rename steps section to verb + your + thing.
- **Problem:** Steps live under `## Save preferences` instead of `## <Verb> your <Thing>`.
- **Rule:** `how_to_format.md`, Steps — heading must be `## <Verb> your <Thing>`.
- **Change:** Rename to something like `## Set up your deployment notifications` or `## Save your notification preferences` (if the UI is preference-based but the goal remains deployment notifications).
- **Done when:** The `##` heading before the numbered list matches the template pattern.

### alerting-4

- **Type:** Shared page
- **Title:** Create shared page for Code Capsules account sign-up.
- **Problem:** `## Prerequisites` card `href` is `/docs/shared/create-an-account`; file does not exist under `docs/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links); `how_to_format.md`, Prerequisites — link to shared pages under `/docs/shared/`.
- **Change:** Add `docs/shared/create-an-account.md` with slug `/shared/create-an-account`, frontmatter per `writing_style.md`, and steps to sign up and open a Personal Team (content currently implied by the prerequisite card only).
- **Done when:** `/docs/shared/create-an-account` resolves to an existing doc and the alerting prerequisite card link works.

### alerting-5

- **Type:** Broken link
- **Title:** Fix prerequisite link after shared page exists.
- **Problem:** Same broken `href` as alerting-4 until the page exists.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** No change on `alerting.md` if `href` is already correct; otherwise set `href` to `/docs/shared/create-an-account`. Depends on alerting-4.
- **Done when:** Link target exists in `docs/` and matches slug.

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
   On **Alerting** or **Notifications**, ...

2. **Enable deployment notifications**
   Turn on in-app and/or email for the deployment-completion event (<exact UI label>).

3. **Save preferences**
   Click **Save Preferences**. ...

4. **Verify a deployment notification**
   Run or wait for a deployment; confirm notification in app and/or email.

## Troubleshooting

<details>
<summary><symptom></summary>
<cause and fix>
</details>
```