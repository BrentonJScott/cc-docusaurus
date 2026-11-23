# Guide Format Check Instructions

Run this check on every guide **before** the walkthrough in `WALKTHROUGH.md`. It is a read-only review of the guide file. Don't open the browser or Playwright for this check.

A guide that fails this check is not walked through. Instead, you write a format report with tickets that describe how to fix the guide, and that report goes into the run's pull request.

## Setup
- Follow the Setup section of `WALKTHROUGH.md` first (git sync, then read `DOCUMENTED_FEATURES.md`).
- Build the feature list and match each feature to its guide as `WALKTHROUGH.md` describes.
- Read `STYLE.md` in full before checking any guide. It is the standard every guide is checked against.

## Ground rules
- Don't edit guides. Every finding becomes a ticket in a report.
- Don't commit directly to any repo or branch. Reports are delivered through a pull request.
- Run all three checks below on every guide, even after the first problem. The report must list every problem so the guide can be fixed in one pass.
- A guide passes only if all three checks pass. Any failed check fails the guide.

## Check 1: Goal steps
Find the steps that reach the feature's goal from `DOCUMENTED_FEATURES.md`.

- Write down the goal, for example: Create an Angular Frontend Capsule (GOAL: Expect to see capsule building in builds tab).
- Read the guide top to bottom and list every instruction it gives the reader, numbered in order, whether or not it sits under a step heading.
- Label each instruction:
  - `goal`: needed to reach the goal, for a reader who already has every prerequisite. For the Angular guide, that is choosing the Frontend Capsule type, team, Space, plan, repo and branch, build settings, creating the capsule, and checking the build.
  - `prerequisite`: something the reader must have or do first that isn't part of the goal, such as signing up, forking the demo repo, or creating a Space.
  - `remove`: not needed for the goal or as a prerequisite, such as links to other guides, video tips, or explanations of platform concepts.
- This check fails if:
  - Any `goal` instruction is outside `## Steps`.
  - Any `prerequisite` or `remove` instruction is inside `## Steps`.
  - The steps, as written, stop before the goal, or the last step doesn't say what the reader should see when the goal is reached.
  - A value the goal depends on (repo, branch, plan, build command, output directory) is missing or unclear.

## Check 2: Prerequisites
Check that every `prerequisite` from Check 1 is in `## Prerequisites` and linked out, not explained.

- Each prerequisite must be one bullet with a link to a shared page in this repo's `docs/`, as `STYLE.md` describes.
- For every link, confirm the target page exists in `docs/` by matching its slug or file path. Don't assume a page exists because the link looks right.
- This check fails if:
  - A prerequisite is missing from `## Prerequisites`.
  - A prerequisite is explained step by step on the guide page instead of linked.
  - A prerequisite has no link, or links to a page that doesn't exist in `docs/`.
- For each shared page that doesn't exist, raise a **shared page** ticket (see below). Check `reports/` and the open pull requests first. If a ticket for that shared page already exists, reference it instead of raising a new one.

## Check 3: Format and style
Check the guide against every rule in `STYLE.md`.

- Go through `STYLE.md` section by section and record each rule the guide breaks, quoting the guide's text or heading and naming the `STYLE.md` rule.
- At minimum, confirm:
  - The only `##` headings are `Prerequisites`, `Steps`, and `Troubleshooting`, in that order.
  - Every step uses `### Step N: Title`, numbered from 1 with no gaps, with a description under it.
  - No images appear inside steps, and screenshots are grouped under `### Screenshots` at the end of the Steps section.
  - `## Troubleshooting` exists and has at least one entry.
  - The writing style rules are followed.

## If the guide fails
- Stop work on that guide. Don't run the `WALKTHROUGH.md` walkthrough for it.
- Write a format report for it (see below) with one ticket per fix.
- In the run summary, mark the feature `Format check: fail` and `Walkthrough: not run (format fail)`, and link the format report.

## If the guide passes
- Write a short format report that records the pass and the Check 1 instruction list.
- Continue with the `WALKTHROUGH.md` walkthrough for that guide.

## Tickets
Each ticket is one piece of work someone can pick up on its own. Use these types:

- **Format fix**: change the guide to meet `STYLE.md`. One ticket per guide, with a checklist of every change.
- **Move to prerequisites**: move a non-goal instruction out of the steps into `## Prerequisites` and replace it with a link.
- **Remove content**: delete content labelled `remove` in Check 1.
- **Missing goal step**: the steps don't reach the goal, or a needed value is missing.
- **Shared page**: create a shared page in `docs/shared/` that doesn't exist yet, so guides can link to it.

Each ticket must have:
- **ID**: `<feature>-<n>`, for example `angular-1`. Shared page tickets use `shared-<page-name>`, for example `shared-create-a-space`, so every guide that needs the page points to the same ticket.
- **Type**: one of the types above.
- **Title**: a short imperative summary, such as "Move account sign-up to Prerequisites."
- **Problem**: what the guide does now, quoting its text and heading.
- **Rule**: the `STYLE.md` rule or check it breaks.
- **Change**: exactly what to change. For a shared page, give the proposed file path, slug, and an outline of what the page should cover, taken from the content being moved out of the guide.
- **Done when**: how a reviewer can confirm the fix.

## What each format report must include
- **Header**: run timestamp, guide file, feature and goal, and `Format check: pass` or `Format check: fail`.
- **Instruction list**: the numbered instructions from Check 1, each labelled `goal`, `prerequisite`, or `remove`, with the heading it currently sits under.
- **Check results**: a table with one row per check (Goal steps, Prerequisites, Format and style), its status (`pass` or `fail`), and a short reason.
- **Tickets**: every ticket, in the format above. Write "None" only if the guide passed all three checks.
- **Proposed outline**: for a failed guide, the guide rewritten as an outline that meets `STYLE.md`: the Prerequisites bullets with their links, each `### Step N: Title` with a one-line description, the screenshots list, and the Troubleshooting headings. Don't write the full guide.

## Report files
- Save each report as `reports/YYYY-MM-DD-format-<feature-slug>.md`, with a matching `.json` file that holds the same data (header fields, instruction list, check results, tickets).
- Add a format column to the run summary report so each feature shows `Format check` and `Walkthrough` results side by side.

## Deliver
- Put all format reports in the same pull request as the run's walkthrough reports. If only the format check was run, open one pull request with all the format reports.
- List the shared page tickets in the pull request description so they can be picked up first. Guides that depend on a shared page can't pass Check 2 until it exists.
