# Documentation Testing Instructions

## Setup
- Pull the latest code from both repos before you start.
- Don't rely on memory from previous runs. Always work from what's on disk now.
- Finish the git sync before reading any files. Use one shell command that syncs git and then prints `DOCUMENTED_FEATURES.MD`.
- Don't read `DOCUMENTED_FEATURES.MD` at the same time as, or before, any `git fetch`, `git pull`, or `git reset`.

## Target environment
- Test every guide against `https://test-platform.codecapsules.io`, whatever site or UI the guide was written for.
- A guide's age, or wording that refers to production or an older UI, is never a reason to skip it. Outdated labels, values, and steps are the findings this audit exists to report.
- Never mark a guide "not applicable," "out of scope," or "legacy" and move on. Every guide for a listed feature must be attempted in the browser.

## Ground rules
- Don't commit directly to any repo or branch. All your work goes into reports, delivered through a pull request.
- Don't fix code to match the docs. If something doesn't work (for example, a button does nothing), report it as an issue.
- Don't name UI frameworks in reports. Say "dropdown," not "ng-select."

## Build the feature list
- Use only `DOCUMENTED_FEATURES.MD` to build the feature list.
- Each line has a feature and a goal, for example: Create a shopping list (GOAL: User is taken to the newly created list with no items).
- Each feature should have one matching guide in the docs.
- If more than one guide could match a feature, test the one `DOCUMENTED_FEATURES.MD` names. If it names none, test the closest match by title and slug, and say in the report which guide you chose and why.

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
- Each action gets one status: `pass`, `fail`, `blocked`, or `not testable`.
- An action passes only if you followed the guide's instructions exactly and the screen shows what the guide says it should.
- If you reached the result a different way or with a different value, the action fails.
- If a value the guide names (such as a repo) isn't available, the action fails and the goal fails. Don't substitute another value.
- If a label, button, or field the guide names can't be found, mark the action `fail`, quote the guide's wording next to what the screen shows, and look for the closest equivalent on screen so you can keep going. Using an equivalent label to continue never turns the action into a pass. This does not apply to values the guide names (repo, branch, plan, paths, commands).
- `blocked`: the action can't be attempted because an earlier action failed and its result is needed. Name the action it depends on.
- `not testable`: the action needs something outside the test run, such as signing in to or forking on GitHub, signing up for an account, or a repository that must already exist. List these as setup, and say what you did instead (for example, which existing repo or logged-in session you used). They don't count as failures.
- The goal is reached only if every action is `pass` or `not testable` and the final goal check passes. Any `fail` or `blocked` action means the goal is not reached.

## After a failure
- Don't stop at the first failed action. Record it with a screenshot, then continue with the next action.
- Keep going until you've compared the whole guide, through to the final goal check.
- `Manifest goals reached: no` is only allowed after you've attempted the guide in the browser. Every `fail` must cite an action number and a screenshot.

## Screenshots
- Take a screenshot whenever you find an issue.
- Name screenshots to match the action number: `step-1.jpg` for action 1, `step-5.jpg` for action 5.
- If the guide already uses that image name, use `failure-step-N.jpg` instead.
- Include a screenshot in the report for every issue.

## Scripts
- If a script only checks against a fixed list of known issues, it isn't good enough. Improve it or write a new one that follows the guide.
- The walkthrough results are the final word on whether a goal was reached.

## What each report must include
- Actions taken: A numbered list of the actions you took from the guide, including `not testable` setup actions and what you did instead.
- Guide alignment: A table with the status (`pass`, `fail`, `blocked`, or `not testable`) for each action, plus columns for what the guide expects and what actually happened.
- Mismatches / issues: Every difference between the guide and the site, with the guide's wording next to what you saw. Only write "None observed" if you actually compared the whole guide.
- Suggested fixes: How the guide should be updated to reflect the real steps.

## Final summary
- If any action failed, set `Manifest goals reached: no` in the summary

## Deliver
- Open one pull request containing all the new reports.