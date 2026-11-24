# Explanation Format

An Explanation helps the reader understand a topic: what it is, why it exists, how it works, and when to choose it. It's read away from the dashboard, so it has no steps. `FORMAT.MD` checks Explanations against this file. A doc that breaks any rule marked **must** fails the format check.

- **Use it for:** concepts and options, such as Enterprise deployment on your own cloud, what a Space is, or how persistent storage keeps state.
- **Location:** An Explanation can live in any folder inside `docs/`. The format check identifies it by its structure, not by the folder it's in.
- **Writing style:** follow `WRITING_STYLE.MD`.

## Sections

An Explanation **must** have these sections, in this order:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, one `#` title, and one or two sentences on what the topic is. |
| 2 | `## Overview` | What it is, in plain words, in one short paragraph. |
| 3 | `## Why it matters` | The context and the problem it solves, and who it's for. |
| 4 | `## How it works` | The parts involved and how they fit together. |
| 5 | `## <Topic section>` | Optional, any number. Further discussion the topic needs, such as design decisions, limits, or how it relates to a concept the reader already knows. |
| 6 | `## Alternatives and trade-offs` | How it compares with the other options, when to choose it, when not to, and what it costs the reader. |
| 7 | `## Related` | Links to the How-to guides, Tutorials, and Reference pages for this topic. |

## Overview
- Two to four sentences a reader new to the topic can follow, such as "Enterprise on AWS runs the Code Capsules platform inside your own AWS account, so your apps and data stay in your cloud."
- If the feature isn't available yet, say so here in one sentence, such as "Enterprise on AWS is coming soon." The other sections still describe what it will be.

## Why it matters
- Name the problem from the reader's side, such as data residency, compliance, or using existing cloud spend.
- Say who it's for.

## How it works
- Describe the parts and how they connect, such as which parts run in your AWS account and which Code Capsules manages.
- Use subheadings (`###`) for each part if there are more than two. A diagram is allowed.
- No steps. Link the How-to guide in **Related** instead.

## Topic sections
- Optional. Add one `##` section for each further question the reader needs answered to understand the topic, such as why it was designed this way or what its limits are.
- Name each section for its subject, not for a generic label like "More information."

## Alternatives and trade-offs
- Compare it with the alternatives, such as Enterprise on AWS against the standard hosted platform or Enterprise on Azure.
- A table is allowed for the comparison.
- Include the trade-offs: cost, setup effort, and what the reader becomes responsible for.
- Say when not to choose it.

## Content that isn't confirmed
- Don't guess. If a section needs input from the product team, mark the gap with a `:::note[Content needed]` block that says what's missing. The format check raises a ticket for each block, and a doc that still has one can't pass.

## Related
- Two to five bullets, each a link with a few words on why to go there.

## Template

```md
---
slug: "/<section>/<name>"
title: "<Topic> Explained"
description: >-
  <One or two sentences on what the topic is.>
sidebar_label: "<Topic>"
doc_version: drift
---

# <Topic>

<Same one or two sentences as the description.>

## Overview

<What it is, in plain words.>

## Why it matters

<The context, the problem it solves, and who it's for.>

## How it works

<The parts involved and how they fit together.>

### <Part>

<What it does.>

## <Topic section>

<Further discussion the topic needs. Optional.>

## Alternatives and trade-offs

<How it compares, when to choose it, when not to, and the trade-offs.>

| | <Option A> | <Option B> |
|---|---|---|
| <Factor> | <Value> | <Value> |

## Related

- [<Page>](/docs/<path>): <why to go there>.
```
