# Documentation Testing Instructions

## Setup
- Pull the latest code from both repos before you start.
- Don't rely on memory from previous runs. Always work from what's on disk now.
- Finish the git sync before reading any files. Use one shell command that syncs git and then prints `DOCUMENTED_FEATURES.MD`.
- Don't read `DOCUMENTED_FEATURES.MD` at the same time as, or before, any `git fetch`, `git pull`, or `git reset`.

## Ground rules
- Don't commit directly to any repo or branch. All your work goes into reports, delivered through a pull request.
- Don't fix code to match the docs. If something doesn't work (for example, a button does nothing), report it as an issue.
- Don't name UI frameworks in reports. Say "dropdown," not "ng-select."

## Build the feature list
- Use only `DOCUMENTED_FEATURES.MD` to build the feature list.
- Each line has a feature and a goal, for example: Create a shopping list (GOAL: User is taken to the newly created list with no items).
- Each feature should have one matching guide in the docs.

## Match features to guides
- Feature has a guide: Follow the guide using headless Playwright and test whether the goal is reached.
- Guide exists but the feature isn't in the list: Report that the feature is missing from the site.
- Feature is in the list but has no guide: Explore the site to reach the goal yourself, then write a report recommending a new guide for that feature.

## Before running each test
- Open and read the feature's guide file (for example, `docs/guides/react.md`) before launching Playwright.
- Guides may be written as narrative text and don't need numbered steps or `### Step N` headings.

## Running the guide
- Perform the actions the guide describes, in the order it describes them. Don't skip, combine, or reorder them.
- Number each action you take, in order, so you can refer to it in the report and screenshots.
- Use exactly the values the guide names (repo, branch, plan, paths, commands).
- Some dropdowns load data slowly, so wait for options to appear before selecting.
- Find fields by their label, not by position. Use the field's label and the option's name, such as `getByRole('option', { name: … })`.
- Don't pick "the first option," "the nth dropdown," or "any repo." Only use `first()` or `nth()` as a last resort, and only inside a section already narrowed down by its label.
- After selecting a value, confirm on screen that the correct value is actually selected.

## Pass or fail rules
- An action passes only if you followed the guide's instructions exactly and the screen shows what the guide says it should.
- If you reached the result a different way or with a different value, the action fails.
- If a value the guide names (such as a repo) isn't available, the action fails and the goal fails. Don't substitute another value.
- The goal is reached only if every action passes and the final goal check passes.

## Screenshots
- Take a screenshot whenever you find an issue.
- Name screenshots to match the action number: `step-1.jpg` for action 1, `step-5.jpg` for action 5.
- If the guide already uses that image name, use `failure-step-N.jpg` instead.
- Include a screenshot in the report for every issue.

## Scripts

- If a script only checks against a fixed list of known issues, it isn't good enough. Improve it or write a new one that follows the guide.
- The walkthrough results are the final word on whether a goal was reached.

## What each report must include
- Actions taken: A numbered list of the actions you took from the guide.
- Guide alignment: A table with pass or fail for each action, plus columns for what the guide expects and what actually happened.
- Mismatches / issues: Every difference between the guide and the site, with the guide's wording next to what you saw. Only write "None observed" if you actually compared the whole guide.
- Suggested fixes: How the guide should be updated to reflect the real steps.

## Final summary
- If any action failed, set `Manifest goals reached: no` in the summary

## Deliver
- Open one pull request containing all the new reports.