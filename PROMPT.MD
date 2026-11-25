# Documentation Testing Instructions

## Setup
- Pull the latest code from both repos before you start.
- `DOCUMENTED_FEATURES.md` is only read from the site repo not from the docs repo.
- Don't rely on memory from previous runs. Always work from what's on disk now.
- Finish the git sync before reading any files. Use one shell command that syncs git and then prints `DOCUMENTED_FEATURES.MD`.
- Don't read `DOCUMENTED_FEATURES.MD` at the same time as, or before, any `git fetch`, `git pull`, or `git reset`.

## Target environment
- Test every guide against `https://test-platform.codecapsules.io`, whatever site or UI the guide was written for.
- A guide's age, or wording that refers to production or an older UI, is never a reason to skip it. Outdated labels, values, and steps are the findings this audit exists to report.
- Never mark a guide "not applicable," "out of scope," or "legacy" and move on. Every guide for a listed feature must be attempted in the browser.

## Platform credentials
- Sign in to `https://test-platform.codecapsules.io` with the account in the environment variables `EMAIL` and `PASSWORD`. Never write their values into a report, ticket, log or PR.
- Sign in once at the start of the run and reuse the session. Don't sign up for a new account.
- If sign-in fails or either variable is missing, stop and report it. Don't mark guides `not testable` as a workaround.

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
- Run the format check in `formats/FORMAT.MD` on every guide, then follow `WALKTHROUGH.md`.
- Read `formats/FORMAT.MD` after the git sync, from the freshly synced branch. If another `FORMAT.MD` exists anywhere else (for example the repo root), ignore it. `formats/FORMAT.MD` is the only source for format rules.
- Never write a report from memory or from an earlier run's reports. If a `reports/` folder from a previous run shows a different pattern, don't copy it.

## One subagent per guide
- Run every guide in its own subagent. Don't run the format check or the walkthrough for more than one guide in the same context.
- You are the coordinator. Do the setup and build the feature list yourself, then start one subagent per guide. Each subagent gets only its guide's path, its feature and goal line, the target URL, the run's `<datetime>`, and the paths to `formats/FORMAT.MD` and `WALKTHROUGH.md`. Don't paste the feature list or other guides' results into it.
- Each subagent runs the format check, then the walkthrough if the guide passes and is a how-to or tutorial. It writes its own report files (only as `formats/FORMAT.MD` and `WALKTHROUGH.md` allow) and returns one line: the guide, its doc type, `Format check: pass|fail`, its walkthrough status, and the report path if it wrote one.
- Subagents sign in with the credentials from "Platform credentials" and must not write their values anywhere. Subagents don't commit or open pull requests.
- Start walkthrough subagents one at a time, since they share one test account and can interfere with each other. Format-check subagents can run in parallel.
- Build `run-summary.md` from the one-line results only. Don't re-read the reports to fill it in.
- Every guide that passed and is a how-to or tutorial needs a walkthrough subagent. If one fails to start or returns nothing, mark the guide `blocked` with the reason. Never leave it as a bare `not run`.

## Report files (applies to every run)
- A format report (`format-<doc>.md`) exists only for a guide that failed a format check or has tickets.
- A guide that passes gets no `format-*.md` file. Record its doc type and `Format check: pass` as a row in `run-summary.md` only.
- Before opening the pull request, list every `format-*.md` file in this run's folder. Open each one and confirm it says `Format check: fail` and contains at least one ticket. Delete any that don't.
