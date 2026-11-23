# Guide Format and Style Standard

Every guide in `docs/guides/` must follow this standard. `FORMAT.MD` checks guides against it. A guide that breaks any rule marked **must** fails the format check.

## Page structure
- A guide **must** contain these parts, in this order, and nothing else at the top level:
  1. Frontmatter (`slug`, `title`, `description`, `sidebar_label`).
  2. One `#` title.
  3. An optional intro of no more than two sentences that states what the reader will have at the end.
  4. `## Prerequisites`
  5. `## Steps`
  6. `## Troubleshooting`
- No other `##` headings are allowed. Content such as "Setup," "Create an Account," "Next steps," or "Video guides" either belongs in one of the three sections or is removed.

## Prerequisites
- Prerequisites list everything the reader needs before Step 1 that is **not** part of the guide's goal. For a guide whose goal is creating an Angular Frontend Capsule, that includes having an account, forking the demo repo, and having a Space.
- Each prerequisite **must** be a single bullet: one short sentence and a link. Don't explain how to do it on this page.
- Each link **must** point to a shared page in this repo's `docs/` that explains how to do it (for example, `docs/shared/create-a-space.md`). The same shared page is reused by every guide that needs it.
- An external link on its own is only allowed for a third-party account with no Code Capsules-specific instructions (for example, "A [GitHub](https://github.com/) account.").
- Values the reader will need later (demo repo URL, branch) can be named in the bullet.

Example:

```md
## Prerequisites

- A Code Capsules account. See [Create an account](/shared/create-an-account).
- A [GitHub](https://github.com/) account.
- A fork of the [demo-angular](https://github.com/codecapsules-io/demo-angular) repo. See [Fork a demo repo](/shared/fork-a-demo-repo).
- A Space to deploy into. See [Create a Space](/shared/create-a-space).
```

## Steps
- Steps contain only the actions needed to reach the guide's goal, starting from a reader who has every prerequisite.
- Each step **must** have a heading in the form `### Step N: Title`.
  - `N` starts at 1 and goes up by one with no gaps.
  - The title is a short imperative phrase, such as "Choose the Frontend Capsule type."
- Each step **must** have a description directly under its heading, written as a short paragraph or a numbered list of actions.
- Steps **must not** contain images. Screenshots go at the end of the Steps section (see below).
- The last step **must** end with the reader seeing the goal, for example the capsule building in the **Builds** tab, and say what they should see.

## Screenshots
- Screenshots **must** be placed together at the end of the Steps section, after the last step and before `## Troubleshooting`, under `### Screenshots`.
- Each screenshot has alt text and a one-line caption that names the step it belongs to, such as "Step 6: Build settings."
- Image files live in `static/img/guides/<guide-name>/`.

## Troubleshooting
- The section **must** exist and have at least one entry.
- Each entry is a `###` heading that describes the symptom as the reader sees it ("The build fails with `dist` not found"), followed by the cause and the fix.

## Writing style
- Address the reader as "you" and write steps in the imperative ("Click **Next**").
- Put UI labels in bold, exactly as they appear on screen: **Create Capsule**, **Build Command**.
- Put values the reader types or selects in code format: `npm run build`, `main`.
- Name UI controls by what they do or say, not by colour or position alone ("click **New Space**," not "click the yellow `+` on the bottom left").
- Don't name UI frameworks. Say "dropdown," not "ng-select."
- Internal links use the page slug (`/shared/create-a-space`), never a full `codecapsules.io` URL.

## Template

```md
---
slug: "/frontend/<framework>"
title: "How to Host a <Framework> Application"
description: >-
  <One sentence.>
sidebar_label: "<Framework>"
---

# Host Your <Framework> Application

<Optional: at the end of this guide, you'll have ...>

## Prerequisites

- <Requirement>. See [<Shared page>](/shared/<page>).

## Steps

### Step 1: <Title>

<Description.>

### Step 2: <Title>

<Description.>

### Screenshots

![<Alt text>](/img/guides/<guide-name>/step-1.png)
Step 1: <Caption>.

## Troubleshooting

### <Symptom>

<Cause and fix.>
```
