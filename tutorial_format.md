# Tutorial Format

A Tutorial teaches by building something. The reader follows one fixed path, sees a result at every stage, and ends with something working they built themselves. Unlike a How-to guide, it is written for a beginner and the author is responsible for every step working. It keeps explanation to a minimum and links to Explanation pages instead. `FORMAT.MD` checks Tutorials against this file. A doc that breaks any rule marked **must** fails the format check.

- **Use it for:** "Build a…" pages that walk through a whole project.
- **Location:** A Tutorial can live in any folder inside `docs/`. The format check identifies it by its structure, not by the folder it's in.
- **Example in this repo:** `docs/tutorials/build-a-mern-job-board.md` (How to build a MERN job board).
- **Writing style:** follow `writing_style.md`.

## Sections

A Tutorial **must** have these sections, in this order:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, one `#` title, and one or two sentences on what the reader will build. |
| 2 | `## What you'll build` | The finished result, in a short paragraph and one screenshot. |
| 3 | `## Prerequisites` | What the reader needs before Part 1, linked out. |
| 4 | `## Part N: Title` | The work, in parts. Each part has steps and ends with a checkpoint. |
| 5 | `## Summary` | What the reader built. |
| 6 | `## Next steps` | Two or three links to where to go next. |
| 7 | `## Troubleshooting` | Optional. Problems the reader might hit, each with its fix. |

## What you'll build
- Describe the finished app from the reader's point of view, such as "A job board where users can post jobs and browse open listings."
- Include one screenshot of the finished result.
- Say what the reader will **do**, not what they will learn. Write "You'll add a form for posting jobs and an API that stores them," not "You'll learn how Mongoose models work."

## Prerequisites
- Same rules as How-to guides: one bullet per prerequisite, linked to a page in `docs/shared/` or to a How-to guide.
- If the tutorial builds on a deployed app, link the How-to guide that deploys it, such as "A deployed MERN boilerplate app. See [Deploy a MERN stack app](...)."
- Name the tools and knowledge the reader needs, such as Node.js installed or basic React.

## Parts
- Group the work into two to five parts. Each part is one milestone, such as "Build the frontend" or "Add the backend."
- Each part **must** start with one or two sentences saying what the reader will do in it.
- Each step inside a part **must** have a heading in the form `### Step N: Title`. Number steps from 1 across the whole tutorial, not per part.
- Show the full code the reader adds, with the file path above each code block.
- Each step **must** give the reader something to do and, where possible, something they can see happen, such as a command's output or a change in the browser.
- Keep explanation to one sentence at most per step, such as "This model tells MongoDB what a job looks like." For anything longer, link an Explanation page.
- Give one path only. Don't offer alternatives, options, or "you could also…". Choose for the reader.
- Each part **must** end with a `### Checkpoint` that says what the reader should see now, such as "Run `npm start` and open `localhost:3000`. The form shows **Title** and **Company** fields." One screenshot is allowed at each checkpoint.
- The last part ends with the app deployed on Code Capsules.

## Summary
- Two to four sentences on what the reader built and what it now does. Don't introduce anything new.

## Next steps
- Two or three bullets, each with a link: a related tutorial, a How-to guide, a Reference page, or an Explanation of something the tutorial used without explaining.

## Troubleshooting
- Optional. Include it when a step is likely to fail for a reason the reader can't see, such as a missing environment variable.
- Each entry is a `###` heading that describes the symptom as the reader sees it, followed by the cause and the fix.

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

# Build a <Thing>

<Same one or two sentences as the description.>

## What you'll build

<Short description of the finished result.>

![<Alt text>](/img/<docs-folder>/<name>/result.png)

## Prerequisites

- <What they need>. See [<Page>](/docs/<path>).

## Part 1: <Milestone>

<What the reader will do in this part.>

### Step 1: <Title>

<Description.>

`<path/to/file>`

```js
<code>
```

### Checkpoint

<What the reader should see now.>

## Part 2: <Milestone>

<What the reader will do in this part.>

### Step 2: <Title>

<Description.>

### Checkpoint

<What the reader should see now.>

## Summary

<What the reader built and what it now does.>

## Next steps

- [<Page>](/docs/<path>): <why to go there>.

## Troubleshooting

### <Symptom>

<Cause and fix.>
````
