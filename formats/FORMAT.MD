# Doc Format Check Instructions

Run this check on every doc **before** the walkthrough in `WALKTHROUGH.md`. It is a read-only review of the doc file. Don't open the browser or Playwright for this check.

Every doc is checked against the template for its type. A doc that fails is not walked through. Instead, you write a format report with tickets that describe how to fix it, and that report goes into the run's pull request.

## Templates
There are four doc types. Each has its own template, and all of them share `writing_style.md`.

| Doc type | Template | The reader wants to… |
|---|---|---|
| How-to guide | `how_to_format.md` | get one task done |
| Tutorial | `tutorial_format.md` | learn by building something |
| Reference | `reference_format.md` | look up a fact |
| Explanation | `explanation_format.md` | understand a topic |

A doc of any type can live in any folder inside `docs/`. The folder is never part of the check.

## Setup
- Follow the Setup section of `WALKTHROUGH.md` first (git sync, then read `DOCUMENTED_FEATURES.md`).
- Build the feature list and match each feature to its doc as `WALKTHROUGH.md` describes.
- Read `writing_style.md` and all four templates in full before checking any doc.

## Ground rules
- Don't edit docs. Every finding becomes a ticket in a report.
- Don't commit directly to any repo or branch. Reports are delivered through a pull request.
- Run every check that applies to the doc's type, even after the first problem. The report must list every problem so the doc can be fixed in one pass.
- A doc passes only if every check that applies to it passes.

## Step 1: Decide the doc type
Decide the type from what the page does, not which folder it's in.

- Read the page and choose the type from the "reader wants to" column above. A page that walks through one task to one goal is a How-to guide, whatever folder it's in.
- Write down the type and its template. Every later check uses that template.
- The doc fails this step if:
  - It mixes types, such as a Reference page with deployment steps. Raise a **Wrong doc type** ticket that says how to split it and which part goes to which template.
- If the doc fails this step, still run the remaining checks against the template for the type it **should** be, so the report covers every fix.

## Which checks apply

| Check | How-to guide | Tutorial | Reference | Explanation |
|---|---|---|---|---|
| Check 1: Content | Goal steps | Build steps | Facts only | Understanding only |
| Check 2: Prerequisites | yes | yes | no | no |
| Check 3: Links | yes | yes | yes | yes |
| Check 4: Format and style | `how_to_format.md` | `tutorial_format.md` | `reference_format.md` | `explanation_format.md` |
| Walkthrough in `WALKTHROUGH.md` | yes | yes | no | no |

## Check 1: Content
Read the doc top to bottom and list every instruction or statement it gives the reader, numbered in order, with the heading it sits under. Then check it for its type.

### How-to guide: goal steps
- Write down the feature's goal from `DOCUMENTED_FEATURES.md`, for example: Create an Angular Frontend Capsule (GOAL: Expect to see capsule building in builds tab).
- Label each instruction:
  - `goal`: needed to reach the goal, for a reader who already has every prerequisite. For the Angular guide, that is choosing the Frontend Capsule type, team, Space, plan, repo and branch, build settings, creating the capsule, and checking the build.
  - `prerequisite`: something the reader must have or do first that isn't part of the goal, such as signing up, forking the demo repo, or creating a Space.
  - `remove`: not needed for the goal or as a prerequisite, such as links to other guides, video tips, or explanations of platform concepts.
- This check fails if:
  - Any `goal` instruction is outside `## Steps`.
  - Any `prerequisite` or `remove` instruction is inside `## Steps`.
  - The steps, as written, stop before the goal, or the last step doesn't say what the reader should see when the goal is reached.
  - `## Goal` doesn't match the feature's goal.
  - A value the goal depends on (repo, branch, plan, build command, output directory) is missing or unclear.

### Tutorial: build steps
- Write down what the reader builds, from `## What you'll build` (or from the intro, if that section is missing).
- Label each instruction:
  - `build`: part of building the result, including the code the reader adds and the final deploy.
  - `prerequisite`: something the reader must have or do before Part 1, such as deploying the boilerplate app or installing Node.js.
  - `remove`: not needed to build the result.
- This check fails if:
  - Any `build` instruction is outside a `## Part N` section.
  - Any `prerequisite` or `remove` instruction is inside a part.
  - A part has no `### Checkpoint`, or a checkpoint doesn't say what the reader should see.
  - Code the reader must add is missing, or has no file path.
  - The last part doesn't end with the result deployed on Code Capsules.
  - A step offers alternatives or options instead of one path.
  - A step explains for more than a sentence instead of linking an Explanation page.

### Reference: facts only
- Label each statement:
  - `fact`: a value, limit, price, or option the reader looks up.
  - `instruction`: something the reader is told to do. It belongs in a How-to guide.
  - `remove`: opinion, marketing, or background. Background belongs in an Explanation.
- This check fails if any statement is labelled `instruction` or `remove`. For each `instruction`, raise a **Move to another doc** ticket that names the How-to guide to move it to, and link that guide from `## Related`.
- It also fails if a value has no unit, or a table is missing values.

### Explanation: understanding only
- Label each statement:
  - `explain`: says what the topic is, why it matters, how it works, or when to use it.
  - `instruction`: something the reader is told to do. It belongs in a How-to guide.
  - `fact`: a list of values or limits. It belongs in a Reference page.
- This check fails if any statement is labelled `instruction`, or if `fact` lists take up a whole section. Raise a **Move to another doc** ticket for each, and link the target page from `## Related`.
- It also fails if any of `## Why it matters`, `## How it works`, or `## When to use it` has no content. A doc for a feature that isn't available yet still has to describe it, not only say "Coming soon."

## Check 2: Prerequisites
**How-to guides and Tutorials only.** Check that every `prerequisite` from Check 1 is in `## Prerequisites` and linked out, not explained.

- Each prerequisite must be one bullet with a link, as the template describes. A How-to guide links to a shared page in `docs/shared/`. A Tutorial can also link to a How-to guide. Links to the live Code Capsules site don't count.
- This check fails if:
  - A prerequisite is missing from `## Prerequisites`.
  - A prerequisite is explained step by step on the page instead of linked.
  - A prerequisite has no link.
- For each shared page that doesn't exist, raise a **Shared page** ticket (see below). Check `reports/` and the open pull requests first. If a ticket for that shared page already exists, reference it instead of raising a new one.

## Check 3: Links
**All doc types.**

- For every internal link, in any section, confirm the target page exists in `docs/` by matching its slug or file path. Don't assume a page exists because the link looks right.
- For every image, confirm the file exists in `static/`.
- This check fails if any internal link or image points to something that doesn't exist, or if a link points to the live Code Capsules site instead of a page in `docs/`.
- For Reference pages and Explanations, `## Related` must have at least two links, and every one must exist.

## Check 4: Format and style
Check the doc against every rule in the template for its type from Step 1, and against `writing_style.md`.

- Go through the template section by section and record each rule the doc breaks, quoting the doc's text or heading and naming the rule.
- At minimum, confirm:
  - The frontmatter has every field `writing_style.md` lists.
  - The `##` headings are exactly the ones in the template's section table, in that order. Optional sections can be missing, but not reordered.
  - Each section follows the template's rules for it, such as `### Step N: Title` in a How-to guide, a `### Checkpoint` at the end of each Tutorial part, tables with units in a Reference, and no steps in an Explanation.
  - The rules in `writing_style.md` are followed.

## If the doc fails
- Stop work on that doc. Don't run the `WALKTHROUGH.md` walkthrough for it.
- Write a format report for it (see below) with one ticket per fix.
- In the run summary, mark the doc `Format check: fail` and, for How-to guides and Tutorials, `Walkthrough: not run (format fail)`. Link the format report.

## If the doc passes
- Write a short format report that records the pass, the doc type, and the Check 1 list.
- How-to guides and Tutorials continue to the `WALKTHROUGH.md` walkthrough. Reference pages and Explanations are done; mark them `Walkthrough: not applicable`.

## Tickets
Each ticket is one piece of work someone can pick up on its own. Use these types:

- **Format fix**: change the doc to meet its template. One ticket per doc, with a checklist of every change.
- **Wrong doc type**: rewrite the doc to the right template, or split it into one doc per type.
- **Move to prerequisites**: move a non-goal instruction out of the steps or parts into `## Prerequisites` and replace it with a link.
- **Move to another doc**: move an instruction out of a Reference or Explanation into a How-to guide, or a list of values into a Reference page, and link it from `## Related`.
- **Remove content**: delete content labelled `remove` in Check 1.
- **Missing goal step**: a How-to guide's steps don't reach the goal, or a Tutorial's parts don't reach the finished result.
- **Broken link**: fix or remove a link or image that points to something that doesn't exist.
- **Shared page**: create a shared page in `docs/shared/` that doesn't exist yet, so docs can link to it.

Each ticket must have:
- **ID**: `<doc-name>-<n>`, for example `angular-1`. Shared page tickets use `shared-<page-name>`, for example `shared-create-a-space`, so every doc that needs the page points to the same ticket.
- **Type**: one of the types above.
- **Title**: a short imperative summary, such as "Move account sign-up to Prerequisites."
- **Problem**: what the doc does now, quoting its text and heading.
- **Rule**: the template file and rule, or the check, it breaks, such as "`how_to_format.md`, Steps: steps must not contain images."
- **Change**: exactly what to change. For a shared page, give the proposed file path, slug, and an outline of what the page should cover, taken from the content being moved out of the doc.
- **Done when**: how a reviewer can confirm the fix.

## What each format report must include
- **Header**: run timestamp, doc file, doc type, template used, feature and goal (How-to guides and Tutorials), and `Format check: pass` or `Format check: fail`.
- **Content list**: the numbered list from Check 1, each item with its label and the heading it currently sits under.
- **Check results**: a table with one row per check that applies to the doc type, its status (`pass` or `fail`), and a short reason. List checks that don't apply as `not applicable`.
- **Tickets**: every ticket, in the format above. Write "None" only if the doc passed every check.
- **Proposed outline**: for a failed doc, the doc rewritten as an outline that follows its template's section table: each `##` heading in order, with the bullets, step or part titles, or table columns that go under it. Don't write the full doc.

## Report files
- Save each report as `reports/<doc folder>/YYYY-MM-DD-format-<doc-name>.md`, with a matching `.json` file in the same folder that holds the same data (header fields, content list, check results, tickets).
- `<doc folder>` is the doc's folder under `docs/`, so the reports mirror the docs structure. A report for `docs/guides/backend/go/<doc-name>.md` goes in `reports/guides/backend/go/`. Create the folders if they don't exist.
- Add a format column to the run summary report so each doc shows its type, `Format check`, and `Walkthrough` results side by side.

## Deliver
- Put all format reports in the same pull request as the run's walkthrough reports. If only the format check was run, open one pull request with all the format reports.
- List the shared page tickets in the pull request description so they can be picked up first. Docs that depend on a shared page can't pass Check 2 until it exists.
