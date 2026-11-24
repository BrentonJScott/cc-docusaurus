# How-to Guide Format

A How-to guide takes a reader who already knows what they want to do to one goal, such as deploying an Angular capsule. It's task-focused: no teaching, no background. `FORMAT.MD` checks How-to guides against this file. A guide that breaks any rule marked **must** fails the format check.

- **Use it for:** deployment guides and other single-task pages.
- **Location:** a How-to guide can live in any folder inside `docs/`. The format check identifies it by its structure, not by the folder it's in.
- **Writing style:** follow `WRITING_STYLE.MD`.

## Sections

A How-to guide **must** have these sections, in this order:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, one `#` title, and one or two sentences that say what the reader will have at the end. |
| 2 | `## Prerequisites` | Everything the reader needs before Step 1 that isn't part of the goal. |
| 3 | `## Steps` | `### Step N: Title` headings, each with its actions and, where it helps, a screenshot. |
| 4 | `## Troubleshooting` | Problems the reader might hit, each with its fix. |
| 5 | `## Next steps` | Optional. One to three links to what the reader will want to do next. |

Content such as "Setup," "Create an Account," or "Video guides" either belongs in one of these sections or is removed.

## Title and description
- The `#` title **must** match the `title` in the frontmatter.
- The one or two sentences under the title say what the reader will have or see when they finish, such as "Deploy an Angular application on Code Capsules and confirm the first build appears under **Builds**." This is the guide's goal, so the guide has no separate Goal section.

## Prerequisites
- List everything the reader must have or do first that isn't part of the goal. For a guide whose goal is creating an Angular Frontend Capsule, that's having an account, forking the demo repo, having a Space, and connecting GitHub.
- Each prerequisite **must** be one bullet: one short sentence and a link to the shared page in `docs/shared/` that explains how to do it. Don't explain it on the guide page.
- If the shared page doesn't exist yet, the format check raises a ticket to create it.
- An external link on its own is only allowed for a third-party account with no Code Capsules-specific steps, such as a GitHub account.

## Steps
- Steps contain only the actions needed to reach the goal, starting from a reader who has every prerequisite.
- Each step **must** have a heading in the form `### Step N: Title`, numbered from 1 with no gaps. The title is a short imperative phrase, such as "Connect the repository."
- Each step **must** have a description directly under its heading: a short paragraph or a numbered list of actions. Put one action in each list item.
- Say where each action happens, such as the page, tab, or button name in bold.
- The last step **must** end with the reader seeing the goal, and say what they should see, such as "The latest build shows **Building**, **Queued**, or **In progress**."

### Screenshots
- Put a screenshot directly under the step it shows, not in a separate section.
- Use one only where it helps the reader find a control or confirm a result. Not every step needs one, and a step has at most one.
- Every image has alt text that describes what it shows, such as "Quick Start with the Angular card." No caption line is needed.
- Image files live in `static/img/<docs-folder>/<guide-name>/`, where `<docs-folder>` is the folder the guide is in under `docs/`.

## Troubleshooting
- **Must** have at least one entry.
- Each entry is a `###` heading that describes the symptom as the reader sees it ("The build fails with `dist` not found"), followed by the cause and the fix.

## Next steps
- Optional. One to three bullets, each a link with a few words on why to go there, such as the guide for adding a custom domain.
- Link only to pages that exist in `docs/`.

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

# How to Host a <Framework> Application

<Same one or two sentences as the description.>

## Prerequisites

- <What they need>. See [<Shared page>](/docs/shared/<page>).

## Steps

### Step 1: <Title>

<Description.>

![<Alt text>](/img/<docs-folder>/<guide-name>/step-1.png)

### Step 2: <Title>

1. <Action.>
2. <Action.>

<What the reader should see now.>

## Troubleshooting

### <Symptom>

<Cause and fix.>

## Next steps

- [<Page>](/docs/<path>): <why to go there>.
```
