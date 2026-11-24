# How-to Guide Format

A How-to guide takes a reader who already knows what they want to do to one goal, such as deploying an Angular capsule. It's task-focused: no teaching, no background. `FORMAT.MD` checks How-to guides against this file. A guide that breaks any rule marked **must** fails the format check.

- **Use it for:** deployment guides and other single-task pages.
- **Example in this repo:** `docs/guides/angular.md` (Deploying an Angular capsule).
- **Writing style:** follow `writing_style.md`.

## Sections

A How-to guide **must** have these sections, in this order, and no others:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, one `#` title, and one or two sentences that say what the reader will have at the end. |
| 2 | `## Prerequisites` | Everything the reader needs before Step 1 that isn't part of the goal. |
| 3 | `## Goal` | One sentence that says what the reader will see when they're done. |
| 4 | `## Steps` | `### Step N: Title` headings, each with a description. |
| 5 | `## Screenshots` | Screenshots for the steps, all together. |
| 6 | `## Troubleshooting` | Problems the reader might hit, each with its fix. |

Content such as "Setup," "Create an Account," "Next steps," or "Video guides" either belongs in one of these sections or is removed.

## Prerequisites
- List everything the reader must have or do first that isn't part of the goal. For a guide whose goal is creating an Angular Frontend Capsule, that's having an account, forking the demo repo, having a Space, and connecting GitHub.
- Each prerequisite **must** be one bullet: one short sentence and a link to the shared page in `docs/shared/` that explains how to do it. Don't explain it on the guide page.
- If the shared page doesn't exist yet, the format check raises a ticket to create it.
- An external link on its own is only allowed for a third-party account with no Code Capsules-specific steps, such as a GitHub account.

## Goal
- **Must** be one sentence describing what the reader sees on screen when they've finished, such as "The capsule shows a build in progress on the **Builds** tab."
- It matches the goal for this feature in `cc_documented_features.md`.

## Steps
- Steps contain only the actions needed to reach the goal, starting from a reader who has every prerequisite.
- Each step **must** have a heading in the form `### Step N: Title`, numbered from 1 with no gaps. The title is a short imperative phrase, such as "Connect the repository."
- Each step **must** have a description directly under its heading: a short paragraph or a numbered list of actions.
- Steps **must not** contain images.
- The last step **must** end with the reader seeing the goal.

## Screenshots
- Screenshots **must** be grouped in this section, not placed inside steps.
- Each screenshot has alt text and a one-line caption naming its step, such as "Step 5: Connect the repository."
- Image files live in `static/img/guides/<guide-name>/`.

## Troubleshooting
- **Must** have at least one entry.
- Each entry is a `###` heading that describes the symptom as the reader sees it ("The build fails with `dist` not found"), followed by the cause and the fix.

## Template

```md
---
slug: "/<category>/<framework>"
title: "How to Host a <Framework> Application"
description: >-
  <One or two sentences on what the reader will have at the end.>
sidebar_label: "<Framework>"
doc_version: drift
---

# Host Your <Framework> Application

<Same one or two sentences as the description.>

## Prerequisites

- <What they need>. See [<Shared page>](/docs/shared/<page>).

## Goal

<One sentence: what the reader sees when they're done.>

## Steps

### Step 1: <Title>

<Description.>

### Step 2: <Title>

<Description.>

## Screenshots

![<Alt text>](/img/guides/<guide-name>/step-1.png)
Step 1: <Caption>.

## Troubleshooting

### <Symptom>

<Cause and fix.>
```
