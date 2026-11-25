# How-to Guide Format

A How-to guide takes a reader who already knows what they want to do to one goal, such as deploying an Angular capsule. It's task-focused: no teaching, no background. `FORMAT.MD` checks How-to guides against this file. A guide that breaks any rule marked **must** fails the format check.

- **Use it for:** deployment guides and other single-task pages.
- **Location:** a How-to guide can live in any folder inside `docs/`. The format check identifies it by its structure, not by the folder it's in.
- **Examples in this repo:** `docs/b/angular.md` and `docs/b/react.md`.
- **Built-in pieces only:** use Markdown and what Docusaurus provides out of the box: the `DocCardList` theme component for prerequisites and `<details>` for troubleshooting. Don't add custom components, CSS, inline `style` props, or other files. `src/css/custom.css` styles these pieces on every page.

## Layout

```
Host Your Angular Application                 ← # title
Deploy an Angular application on ...          ← description

Prerequisites
  ┌─────────────────────┐ ┌─────────────────────┐
  │ 👤 Code Capsules     │ │ 🍴 Fork demo-angular │  ← one card per prerequisite,
  │ Sign up and ...     │ │ Fork the repo ...   │    2 columns, each links to
  └─────────────────────┘ └─────────────────────┘    a shared page
  ┌─────────────────────┐ ┌─────────────────────┐
  │ 📦 A Space           │ │ 🔌 GitHub connected  │
  └─────────────────────┘ └─────────────────────┘

Deploy your Angular app                       ← says what the reader is doing
  1. Start the Angular capsule                ← numbered steps: title, then
     On Quick Start, click Deploy Now ...       description, flowing into
  2. Choose the capsule type, Team, and Space   each other
     On Capsule Details, choose Frontend ...
  7. Check the build                          ← last step: the goal is reached
     The first build is in progress.

Troubleshooting
  ▸ The Git Repository dropdown is empty      ← each symptom is a collapsed
  ▾ The Branch dropdown shows "No items ..."    item; click to expand the fix
      No repository is selected yet ...
```

## Sections

A How-to guide **must** have these sections, in this order, and no others:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, the `DocCardList` import, one `#` title, and one or two sentences that say what the reader will have at the end. |
| 2 | `## Prerequisites` | One card for each thing the reader needs before the first step that isn't part of the goal. |
| 3 | `## <Verb> your <Thing>` | The steps, as one numbered list. The heading says what the reader is doing, such as `## Deploy your Angular app`. |
| 4 | `## Troubleshooting` | Problems the reader might hit, each a collapsed item with its fix. |

No other sections: no Goal, Screenshots, Setup, Next steps, or Video guides.

## Converting an existing guide

Older guides are laid out as a run of task sections, such as **Setup**, **Create an Account with Code Capsules**, **Create a Space for Your App**, and **Create the Capsule**. Move each part like this:

| Old content | Where it goes |
|---|---|
| Intro paragraph | The one or two sentences under the title. |
| **Setup**, **Create an Account**, **Create a Space**, forking the demo repo, connecting GitHub | `## Prerequisites`: one card each. Their steps are removed. |
| Logging in | Removed. Having an account is the prerequisite. |
| **Create the Capsule** (the numbered list) | The steps section: one step per wizard screen. |
| "You should see your deployed application" and similar end states | The end of the last step. |
| Images and screenshots | Removed. |
| Explanations of Teams, Spaces, or Capsules | Removed. |
| "Other deployment guides" links, **Video Guides** tips, "Next steps" | Removed. |

## Title and description

- Directly after the frontmatter, import the card list: `import DocCardList from '@theme/DocCardList';`
- The page **must** have one `#` title, in the form "Host Your <Framework> Application". Don't add phrases like "in Minutes".
- Directly under the title, one or two sentences repeat the `description`. They say what the reader will see at the end, and **must** match the feature's goal in the documented features list.
- Nothing else goes between the title and `## Prerequisites`: no images, tips, or admonitions.

## Prerequisites

- List everything the reader must have or do first that isn't part of the goal. For a guide whose goal is creating an Angular Frontend Capsule, that's a Code Capsules account, a fork of the demo repo, a Space, and GitHub connected to Code Capsules.
- The prerequisites **must** be one `<DocCardList items={[...]} />`, with one item per prerequisite:
  - `type`: always `'link'`.
  - `href`: the shared page that explains how to do it. Shared pages have slugs starting with `/shared/`, so link them as `/docs/shared/<page>`. Never link to a `codecapsules.io` URL.
  - `label`: one emoji, then two to four words naming what the reader needs, such as `'📦 A Space'`. The emoji becomes the card icon.
  - `description`: one line saying what the reader does on that page, such as `'Create a Space to deploy into.'`
- Use the same emoji for the same prerequisite in every guide: 👤 account, 🍴 fork, 📦 Space, 🔌 GitHub connected.
- Don't explain a prerequisite on the guide page.
- If the shared page doesn't exist yet, the format check raises a ticket to create it.

## Steps

- The heading **must** be `## <Verb> your <Thing>`, saying what the reader is doing, such as `## Deploy your Angular app`.
- The steps **must** be one numbered list directly under the heading. Each item is:
  - A title in bold on the first line: a short imperative phrase, such as **Connect the repository**. Don't write "Step N:" (the number is the list number).
  - A description under it, indented to the list item: one to three short sentences, or a short bulleted list when the reader enters several values on one screen.
- Steps contain only the actions needed to reach the goal, starting from a reader who has every prerequisite and is logged in.
- One step covers one wizard screen. Start the description with the screen's name in bold, such as "On **Plan**, …".
- Every value the goal depends on **must** be stated exactly: plan, repository, branch, build command, output folder. Don't write "your plan" or "such as `master`".
- Steps **must not** contain images, tips, or admonitions.
- The last step **must** end with the reader seeing the goal.

## Troubleshooting

- **Must** have at least one entry.
- Each entry **must** be one `<details>` block:
  - `<summary>`: the symptom as the reader sees it, such as "The build fails because `dist/ng4-complete-guide` isn't found." Keep it to one line.
  - Body: one or two sentences, the cause and then the fix.
- Leave a blank line after `<summary>…</summary>` and before `</details>`, so the body renders as Markdown.

## Template

````md
---
slug: "/<category>/<framework>"
title: "How to Host a <Framework> Application"
description: >-
  <One or two sentences on what the reader will see at the end.>
sidebar_label: "<Framework>"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your <Framework> Application

<Same one or two sentences as the description.>

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/<page>', label: '<emoji> <Title>', description: '<One line.>'},
  ]}
/>

## Deploy your <Framework> app

1. **<Title>**

   On **<Screen>**, <action>. Click **Next**.

2. **<Title>**

   <Description that ends with the reader seeing the goal.>

## Troubleshooting

<details>
<summary><Symptom></summary>

<Cause and fix.>

</details>
````
