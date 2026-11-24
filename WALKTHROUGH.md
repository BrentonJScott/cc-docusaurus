## Match features to guides
- Feature has a guide: Follow the guide using headless Playwright and test whether the goal is reached.
- Guide exists but the feature isn't in the list: Report that the feature is missing from the site.
- Feature is in the list but has no guide: Explore the site to reach the goal yourself, then write a report recommending a new guide for that feature.

## Format gate
- Before walking through any guide, run the format check in `formats/FORMAT.MD` on it.
- If the guide fails the format check, don't walk it through. Its format report replaces the walkthrough report, and the run summary shows `Walkthrough: not run (format fail)`. This is the only allowed reason to skip a guide.
- Only guides that pass the format check go on to the walkthrough below.

## Before running each test
- Open and read the feature's guide file before launching Playwright.
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
- `Manifest goals reached: no` is only allowed after you've attempted the guide in the browser. Every `fail` must cite an action number, and its screenshot if one exists.

## Screenshots
- Take a screenshot whenever you find an issue.
- Name screenshots to match the action number: `step-1.jpg` for action 1, `step-5.jpg` for action 5.
- If the guide already uses that image name, use `failure-step-N.jpg` instead.
- Include a screenshot in the report only if the file exists and the screenshot is for an issue (a `fail` or `blocked` action). Check that the file is saved before you link it.
- Screenshots exist only for issues. Don't take screenshots for passing actions, and never link or embed an image that doesn't exist. Where there is no screenshot, leave the report's Screenshot cell as `—`.
- Guides are allowed to embed images. Don't report a guide's images as issues, and don't recommend removing them. Test the guide's text and values, not its pictures.

## Scripts and tooling
- This file is the single source of truth for how to test. If any script, parser, or helper disagrees with it, this file wins.
- Only use scripts that are on `main` at the start of the run. Don't restore or run scripts from git history, caches, other directories, or other repos (for example, the removed walkthrough-guide-utils scripts).
- Drive Playwright directly from the guide's text. Don't look for or parse `### Step N` headings or any other fixed step format. Number the actions yourself as you take them.
- Any helper script you write during a run is throwaway. Don't commit it, and don't let it decide pass or fail on its own. If it only checks against a fixed list of known issues, it isn't good enough.
- The walkthrough results are the final word on whether a goal was reached.

## What each report must include
- Actions taken: A numbered list of the actions you took from the guide, including `not testable` setup actions and what you did instead.
- Guide alignment: A table with the status (`pass`, `fail`, `blocked`, or `not testable`) for each action, plus columns for what the guide expects and what actually happened.
- Mismatches / issues: Every difference between the guide and the site, with the guide's wording next to what you saw. Only write "None observed" if you actually compared the whole guide.
- Suggested fixes: How the guide should be updated to reflect the real steps.

## Report files
- Save each walkthrough report as `reports/<datetime>/<guide folder>/walkthrough-<guide-name>.md`.
- `<datetime>` is the run's start time as `YYYY-MM-DD-HHmm`, the same value used for every report in the run, so file names don't need a date.
- `<guide folder>` is the guide's folder under `docs/`, so the reports mirror the docs structure. A report for `docs/cli/readme/commands/<guide-name>.md` goes in `reports/<datetime>/cli/readme/commands/`. Create the folders if they don't exist.
- For a feature with no guide, use the folder where the recommended guide should live.
- Screenshots stay with the report they belong to.

## Final summary
- If any action failed, set `Manifest goals reached: no` in the summary

## Deliver
- Open one pull request containing all the new reports.