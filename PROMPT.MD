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

## Running the guides
- Use the FORMAT.md document on each guide.