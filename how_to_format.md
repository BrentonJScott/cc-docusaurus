# How-to Guide Format

A How-to guide takes a reader who already knows what they want to do to one goal, such as deploying an Angular capsule. It's task-focused: no teaching, no background. `FORMAT.MD` checks How-to guides against this file. A guide that breaks any rule marked **must** fails the format check.

- **Use it for:** deployment guides, the shared prerequisite pages, and other single-task pages.
- **Location:** a How-to guide can live in any folder inside `docs/`. The format check identifies it by its structure, not by the folder it's in.
- **Examples in this repo:** `docs/b/angular.md`, `docs/b/react.md`, and the shared pages in `docs/e/`.
- **Writing style:** follow `writing_style.md`, including its [Page pieces](writing_style.md#page-pieces): `Description`, `LinkCards`, `Steps`, and `Accordion`.

## Layout

```
Host Your Angular Application                 ← # title
Deploy an Angular application on ...          ← <Description />, large lead text

Prerequisites
  ┌──────────────────────┐ ┌──────────────────────┐
  │ [icon] Code Capsules →│ │ [icon] Fork demo-...→│  ← <LinkCards>: one card per
  │ Sign up and ...      │ │ Fork the repo ...    │    prerequisite, 2 columns
  └──────────────────────┘ └──────────────────────┘
  ┌──────────────────────┐ ┌──────────────────────┐
  │ [icon] A Space      →│ │ [icon] GitHub ...   →│
  └──────────────────────┘ └──────────────────────┘

Deploy your Angular app                       ← says what the reader is doing
  ① Start the Angular capsule                 ← <Steps>: grey numbered circles
  │  On Quick Start, click Deploy Now ...        joined by one line
  ② Choose the capsule type, Team, and Space
  │  On Capsule Details, choose Frontend ...
  ⑦ Check the build                           ← last circle in yellow: the goal
     The first build is in progress.             is reached here

Troubleshooting
  ┌────────────────────────────────────────┐
  │ The Git Repository dropdown is empty  ⌄│  ← <Accordion>: gray boxes with a
  └────────────────────────────────────────┘    yellow border; click to expand
  ┌────────────────────────────────────────┐
  │ The Branch dropdown shows ...         ⌃│
  │   No repository is selected yet ...    │
  └────────────────────────────────────────┘
```

## Sections

A How-to guide **must** have these sections, in this order, and no others:

| # | Section | What goes in it |
|---|---|---|
| 1 | Title and description | Frontmatter, one `#` title, and `<Description />`. |
| 2 | `## Prerequisites` | One card for each thing the reader needs before the first step that isn't part of the goal. |
| 3 | `## <Verb> your <Thing>` | The steps, as one numbered list inside `<Steps>`. The heading says what the reader is doing, such as `## Deploy your Angular app`. |
| 4 | `## Troubleshooting` | Problems the reader might hit, each a collapsed item with its fix, inside `<Accordion>`. |

No other sections: no Goal, Screenshots, Setup, Next steps, or Video guides.

## Converting an existing guide

Older guides are laid out as a run of task sections, such as **Setup**, **Create an Account with Code Capsules**, **Create a Space for Your App**, and **Create the Capsule**. Move each part like this:

| Old content | Where it goes |
|---|---|
| Intro paragraph | The frontmatter `description`, shown by `<Description />`. |
| **Setup**, **Create an Account**, **Create a Space**, forking the demo repo, connecting GitHub | `## Prerequisites`: one card each. Their steps are removed. |
| Logging in | Removed. Having an account is the prerequisite. |
| **Create the Capsule** (the numbered list) | The steps section: one step per wizard screen. |
| "You should see your deployed application" and similar end states | The end of the last step. |
| Images and screenshots | Removed. |
| Explanations of Teams, Spaces, or Capsules | Removed. |
| "Other deployment guides" links, **Video Guides** tips, "Next steps" | Removed. |

## Title and description

- Frontmatter **must** have every field `writing_style.md` lists.
- The page **must** have one `#` title, in the form "Host Your <Framework> Application". Don't add phrases like "in Minutes".
- Directly under the title, `<Description />` shows the frontmatter `description` as the lead. The description says what the reader will see at the end, and **must** match the feature's goal in the documented features list.
- Nothing else goes between the title and `## Prerequisites`: no images, tips, or admonitions.

## Prerequisites

- List everything the reader must have or do first that isn't part of the goal. For a guide whose goal is creating an Angular Frontend Capsule, that's a Code Capsules account, a fork of the demo repo, a Space, and GitHub connected to Code Capsules.
- The prerequisites **must** be one `<LinkCards>` block, with one `<LinkCard>` per prerequisite:
  - `title`: two to four words naming what the reader needs, such as `A Space`.
  - `to`: the shared page that explains how to do it. Shared pages have slugs starting with `/shared/`, so link them as `/docs/shared/<page>`. Never link to a `codecapsules.io` URL.
  - `icon`: the icon for that kind of page, from the table in `writing_style.md`: `account`, `fork`, `space`, or `git` for the shared pages.
  - Text inside the card: one line saying what the reader does on that page, such as "Create a Space to deploy into."
- Don't explain a prerequisite on the guide page.
- If the reader needs nothing first, write one sentence saying so instead of the cards, such as "You don't need anything before you start."
- If the shared page doesn't exist yet, the format check raises a ticket to create it.

## Steps

- The heading **must** be `## <Verb> your <Thing>`, saying what the reader is doing, such as `## Deploy your Angular app`.
- The steps **must** be one numbered list inside `<Steps>`, directly under the heading. Each item is:
  - A title in bold on the first line: a short imperative phrase, such as **Connect the repository**. Don't write "Step N:" (the number is shown in the circle).
  - A description under it, indented to the list item: one to three short sentences, or a short bulleted list when the reader enters several values on one screen.
- Steps contain only the actions needed to reach the goal, starting from a reader who has every prerequisite and is logged in.
- One step covers one wizard screen. Start the description with the screen's name in bold, such as "On **Plan**, …".
- Every value the goal depends on **must** be stated exactly: plan, repository, branch, build command, output folder. Don't write "your plan" or "such as `master`".
- Steps **must not** contain images, tips, or admonitions.
- The last step **must** end with the reader seeing the goal. Its circle is yellow.

## Troubleshooting

- **Must** have at least one entry.
- The entries **must** be inside one `<Accordion>`, each one `<details>` block:
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

# Host Your <Framework> Application

<Description />

## Prerequisites

<LinkCards>
  <LinkCard title="<Title>" to="/docs/shared/<page>" icon="<icon>">
    <One line.>
  </LinkCard>
</LinkCards>

## Deploy your <Framework> app

<Steps>

1. **<Title>**

   On **<Screen>**, <action>. Click **Next**.

2. **<Title>**

   <Description that ends with the reader seeing the goal.>

</Steps>

## Troubleshooting

<Accordion>

<details>
<summary><Symptom></summary>

<Cause and fix.>

</details>

</Accordion>
````
