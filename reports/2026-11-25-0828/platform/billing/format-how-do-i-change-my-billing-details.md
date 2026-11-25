# Format report: how-do-i-change-my-billing-details.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/platform/billing/how-do-i-change-my-billing-details.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Change billing details
- **Goal:** Expect saved billing contact details to match what the reader entered
- **Format check:** fail

## Content list

1. **prerequisite** — `## Prerequisites` — Code Capsules account (card → `/docs/shared/create-an-account`).
2. **goal** — `## Update billing details` — Open **Billing** in the top navigation bar.
3. **goal** — `## Update billing details` — In **Billing Details**, click **Edit**; update name, company, address, or tax details.
4. **goal** — `## Update billing details` — Click **Save**; **Billing Details** shows updated information (goal reached).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | pass | Steps reach the goal; prerequisites are outside the steps section. |
| Check 2: Prerequisites | fail | Account card links to `/docs/shared/create-an-account`; no file under `docs/shared/`. See **shared-create-an-account** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. |
| Check 3: Links | fail | `/docs/shared/create-an-account` has no matching file under `docs/`. |
| Check 4: Format and style | fail | Steps section heading is `## Update billing details`; `how_to_format.md` requires `## <Verb> your <Thing>` (e.g. `## Update your billing details`). |
| Walkthrough | not run (format fail) | — |

## Tickets

### how-do-i-change-my-billing-details-1

- **Type:** Format fix
- **Title:** Rename the steps section to `## Update your billing details`.
- **Problem:** Steps live under `## Update billing details`, which omits “your” from the required `## <Verb> your <Thing>` pattern.
- **Rule:** `how_to_format.md`, Steps — heading must be `## <Verb> your <Thing>`.
- **Change:** Rename `## Update billing details` to `## Update your billing details`.
- **Done when:** The steps section uses `## Update your billing details` and no other `##` headings were added.

### how-do-i-change-my-billing-details-2

- **Type:** Shared page (reference)
- **Title:** Unblock prerequisite link to create-an-account.
- **Problem:** Prerequisites card `href` is `/docs/shared/create-an-account`; file does not exist under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3.
- **Change:** Complete **shared-create-an-account** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`. No duplicate shared-page work on this doc.
- **Done when:** `/docs/shared/create-an-account` resolves to a file in `docs/` and Check 2 passes for this guide.

## Proposed outline

```md
---
slug: "/platform/billing/how-do-i-change-my-billing-details"
title: "How to Change Billing Details"
description: >-
  Update billing contact details on your Team. When you finish, the saved
  details match what you entered.
sidebar_label: "Change billing details"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Change Billing Details

Update billing contact details on your Team. When you finish, the saved details match what you entered.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Update your billing details

1. **Open Billing**

   Click **Billing** in the top navigation bar.

2. **Edit details**

   In **Billing Details**, click **Edit**. Update name, company, address, or tax details as needed.

3. **Save**

   Click **Save**. The **Billing Details** section shows your updated information.

## Troubleshooting

<details>
<summary>Save does nothing or shows an error</summary>

Fill every required field marked on the form. If the error mentions tax or VAT, check the format matches your country.

</details>
```