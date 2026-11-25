# Tutorial Format

A Tutorial teaches by building something. The reader follows one fixed path, sees a result at every stage, and ends with something working they built themselves. Unlike a How-to guide, it is written for a beginner and the author is responsible for every step working. It keeps explanation to a minimum and links to Explanation pages instead. `FORMAT.MD` checks Tutorials against this file. A doc that breaks any rule marked **must** fails the format check.

- **Use it for:** "Build a…" pages that walk through a whole project.
- **Location:** A Tutorial can live in any folder inside `docs/`. The format check identifies it by its structure, not by the folder it's in.
- **Example in this repo:** `docs/d/build-a-mern-job-board.md`.

## Layout

```
Build a MERN Job Board                        ← # title
Turn a MERN boilerplate app into ...          ← description

What you'll build                             ← short paragraph

Prerequisites                                 ← cards, 2 columns
  [🛠️ Deployed MERN boilerplate] [💻 Node.js installed]
  You also need basic knowledge of React.     ← knowledge, as one sentence

Part 1: Run the boilerplate locally           ← one part per milestone
  In this part, you'll ...
  1. Clone your repo                          ← numbered steps, numbering
     Clone the repo ...  [code]                 continues across parts
  2. Set the database connection
  ┌ Checkpoint ─────────────────────────┐     ← green callout: what the
  │ Open localhost:8080. You see ...    │       reader sees now
  └─────────────────────────────────────┘

Part 2: Build the frontend
  4. Add the job form ...

Summary                                       ← what the reader built

Next steps                                    ← cards

Troubleshooting                               ← gray boxes with a yellow
  ▸ The job list stays empty ...                border, collapsed
```

## Sections

A Tutorial **must** have these sections, in this order:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, the `DocCardList` import, one `#` title, and one or two sentences on what the reader will build. |
| 2 | `## What you'll build` | The finished result, in a short paragraph. |
| 3 | `## Prerequisites` | Cards for what the reader needs before Part 1. |
| 4 | `## Part N: Title` | The work, in parts. Each part has numbered steps and ends with a checkpoint. |
| 5 | `## Summary` | What the reader built. |
| 6 | `## Next steps` | Two or three cards for where to go next. |
| 7 | `## Troubleshooting` | Optional. Problems the reader might hit, each a collapsed box with its fix. |

## What you'll build
- Describe the finished app from the reader's point of view, such as "A job board where users can post jobs and browse open listings."
- Don't include screenshots.
- Say what the reader will **do**, not what they will learn. Write "You'll add a form for posting jobs and an API that stores them," not "You'll learn how Mongoose models work."

## Prerequisites
- **Must** be one `DocCardList`, with one card per prerequisite, linked to a page in `docs/shared/`, a How-to guide, or the site to download a tool from.
- If the tutorial builds on a deployed app, add a card for the How-to guide that deploys it, such as `🛠️ Deployed MERN boilerplate`.
- Name the tools the reader needs as cards, such as `💻 Node.js installed`.
- Knowledge the reader needs has no page to link, so it goes in one sentence under the cards, such as "You also need basic knowledge of JavaScript and React."

## Parts
- Group the work into two to five parts. Each part is one milestone, such as "Build the frontend" or "Add the backend."
- Each part **must** start with one or two sentences saying what the reader will do in it.
- The steps in a part **must** be one numbered list. Each item has a bold title, a short imperative phrase, then its description and code indented under it. Don't write "Step N:".
- Number steps from 1 across the whole tutorial, not per part. Start each part's list at the next number, such as `4.` for the first step of Part 2.
- Show the full code the reader adds, with the file path in code format on its own line above each code block.
- Each step **must** give the reader something to do and, where possible, something they can see happen, such as a command's output or a change in the browser.
- Keep explanation to one sentence at most per step, such as "This model tells MongoDB what a job looks like." For anything longer, link an Explanation page.
- Give one path only. Don't offer alternatives, options, or "you could also…". Choose for the reader.
- Each part **must** end with a checkpoint: a `:::tip[Checkpoint]` box after the list that says what the reader should see now, such as "Run `npm start` and open `localhost:3000`. The form shows **Title** and **Company** fields." No screenshots.
- The last part ends with the app deployed on Code Capsules.

## Summary
- Two to four sentences on what the reader built and what it now does. Don't introduce anything new.

## Next steps
- **Must** be one `DocCardList` of two or three cards: a related tutorial, a How-to guide, a Reference page, or an Explanation of something the tutorial used without explaining.

## Troubleshooting
- Optional. Include it when a step is likely to fail for a reason the reader can't see, such as a missing environment variable.

## Template

````md
---
slug: "/<section>/<name>"
title: "Build a <Thing>"
description: >-
  <One or two sentences on what the reader will build.>
sidebar_label: "<Thing>"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Build a <Thing>

<Same one or two sentences as the description.>

## What you'll build

<Short description of the finished result.>

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/<path>', label: '<emoji> <Title>', description: '<One line.>'},
  ]}
/>

You also need <knowledge>.

## Part 1: <Milestone>

<What the reader will do in this part.>

1. **<Title>**

   <Description.>

   `<path/to/file>`

   ```js
   <code>
   ```

:::tip[Checkpoint]

<What the reader should see now.>

:::

## Part 2: <Milestone>

<What the reader will do in this part.>

2. **<Title>**

   <Description.>

:::tip[Checkpoint]

<What the reader should see now.>

:::

## Summary

<What the reader built and what it now does.>

## Next steps

<DocCardList
  items={[
    {type: 'link', href: '/docs/<path>', label: '<emoji> <Title>', description: '<Why to go there.>'},
  ]}
/>

## Troubleshooting

<details>
<summary><Symptom></summary>

<Cause and fix.>

</details>
````
