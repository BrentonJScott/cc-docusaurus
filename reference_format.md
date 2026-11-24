# Reference Format

A Reference page lists facts the reader looks up: values, limits, prices, options. It's for scanning, not reading top to bottom. It describes how things are and doesn't tell the reader what to do or why. `FORMAT.MD` checks Reference pages against this file. A doc that breaks any rule marked **must** fails the format check.

- **Use it for:** pricing, plans and limits, supported runtimes and versions, CLI commands, environment variables, API methods.
- **Location:** A Reference page can live in any folder inside `docs/`. The format check identifies it by its structure, not by the folder it's in.
- **Example in this repo:** `docs/c/how-does-the-pricing-work.md`.
- **Writing style:** follow `writing_style.md`, including its [Page pieces](writing_style.md#page-pieces) for cards.

## Sections

A Reference page **must** have these sections, in this order:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, the `DocCardList` import, one `#` title, and one or two sentences on what the page lists. |
| 2 | `## Overview` | The one or two facts that apply to everything on the page. |
| 3 | `## <Subject>` | One section per subject. Each is mostly a table. |
| 4 | `## Examples` | Optional. Worked examples that use the values above. |
| 5 | `## Related` | Links to the How-to guides and Explanations that use this information. |

## Overview
- State the rules that apply to every entry, such as "Billing is hourly. You pay only for the hours a capsule runs."
- No steps, no opinions, no marketing.

## Subject sections
- One `##` section per subject the reader looks up, such as one per plan type or one per capsule type.
- Put the values in a table. Every table on the page uses the same columns in the same order where the subjects allow it, such as **Plan**, **CPU**, **RAM**, **Price per month**.
- Each value **must** have its unit: `$3/month`, `512 MB`, `0.25 vCPU`.
- A short sentence before the table can say what the table covers. Any detail that doesn't fit the table goes in a bullet under it.
- Never include steps. If the reader needs to do something, link the How-to guide in **Related**.

## Examples
- Optional. Use it when the values need combining, such as working out a monthly bill.
- Each example has a one-line scenario, the working, and the result.

## Related
- **Must** be one `DocCardList` of two to five cards. Each card's description says in a few words why to go there.

## Template

```md
---
slug: "/<section>/<name>"
title: "<Subject> Reference"
description: >-
  <One or two sentences on what the page lists.>
sidebar_label: "<Subject>"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# <Subject>

<Same one or two sentences as the description.>

## Overview

<The facts that apply to everything on the page.>

## <Subject A>

<What the table covers.>

| <Column> | <Column> | <Column> |
|---|---|---|
| <Value> | <Value> | <Value> |

## <Subject B>

| <Column> | <Column> | <Column> |
|---|---|---|
| <Value> | <Value> | <Value> |

## Examples

**<Scenario>**: <working>. Result: <result>.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/<path>', label: '<emoji> <Title>', description: '<Why to go there.>'},
  ]}
/>
```
