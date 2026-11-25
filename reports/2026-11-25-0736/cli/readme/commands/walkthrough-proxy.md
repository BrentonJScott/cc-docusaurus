# Walkthrough report: Proxy a database connection with the CLI

- **Run**: 2026-11-25-0736
- **Guide**: `docs/cli/readme/commands/proxy.md`
- **Feature**: Proxy a database connection with the CLI
- **Goal**: Expect a database client to connect through the local port
- **Target**: https://test-platform.codecapsules.io (UI) and `@codecapsules/cli` (`codecaps`)
- **Format check**: pass
- **Manifest goals reached**: no

## Setup (not testable)

- Installed the CLI with `npm i -g @codecapsules/cli` into a user-level npm prefix, because the global prefix was not writable. The proxy guide does not cover installation; it links to the install guide.
- Signed in to the test platform in headless Playwright with the EMAIL / PASSWORD env vars to look for a database capsule (values not recorded). The Capsules list has only MySQL capsules in the `to-delete` Team, all `not running` (`MySQL Capsule 5.7`, `Another 5.7`, `5.7`, `5.7 check`, `malloc`). No running database capsule exists in `Document Drift`.
- `codecaps login -e … -p …` with the same account fails with "Failed to login". The CLI config points at the production API (`api-v2.codecapsules.io`), while the account exists on `test-platform`. A CLI login against the test platform cannot be done in this run, so a signed-in CLI session is `not testable`.
- Used Space slug `customer-api-xkfw` (`Document Drift`) and the guide's example capsule ID `12345678` for the command, since there is no running database capsule to use.

## Actions taken

1. Ran the guide's command: `codecaps proxy capsule -s customer-api-xkfw -c 12345678 -P 50001`.
2. Ran the guide's client example: `mysql -u root -p'MyPass' -h 127.0.0.1 -P 50001 app`. Not attempted because no tunnel exists.

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|---|---|---|---|
| 1 | fail | `codecaps proxy capsule -s <space slug> -c <capsule id> [-P <local port>]` opens a secure TCP tunnel to the Capsule on local port 50001 | CLI prints `✖ An error occurred while creating the proxy` and `[ERROR] You have not logged in. Please login first.` The guide never mentions logging in. Syntax, argument and option names match `codecaps proxy -h` (`-s`, `-c`, `-P`, target `capsule`). | — |
| 2 | blocked | `mysql … -h 127.0.0.1 -P 50001 app` connects through the tunnel | Depends on action 1. The tunnel is not open, so the client cannot connect. Goal not reached. | — |

## Mismatches / issues

- Action 1: the guide shows the proxy command with no login step. The CLI refuses to run it with `You have not logged in. Please login first.` The guide's only pointer is the **Install and use** link in Related, which covers installing, not logging in.
- Action 2: the example uses `app` as the database name and `MyPass` as the password, but the guide never says where these come from (the database capsule's connection details). It also needs a running MySQL capsule, which the guide does not list.
- Compared against `codecaps proxy -h`: the Syntax, Arguments and Options tables match. The `-P` default (random port) matches.

## Tickets

### proxy-wt-1
- **ID**: proxy-wt-1
- **Type**: Missing prerequisite
- **Title**: Add a logged-in CLI session as a prerequisite of `proxy`.
- **Problem**: The guide gives `codecaps proxy capsule -s my-space-slug-123 -c 12345678 -P 50001` with no mention of logging in. Running it logs out with "[ERROR] You have not logged in. Please login first." (action 1, no screenshot because this is CLI output).
- **Change**: Add a sentence under `## Overview` (or a prerequisites card) that says to install the CLI and run `codecaps login` first, linking `/docs/cli/readme/getting-started/installation-and-usage` and the login command page once it exists.
- **Done when**: A reader who follows the guide from a fresh install runs `codecaps login` before `codecaps proxy` and action 1 no longer fails for lack of login.

### proxy-wt-2
- **ID**: proxy-wt-2
- **Type**: Missing step
- **Title**: Say where the database name, user, password and capsule ID come from.
- **Problem**: The example `mysql -u root -p'MyPass' -h 127.0.0.1 -P 50001 app` and `-c 12345678` use values the guide never explains, and the guide does not say a running database capsule is required. The goal "a database client connects through the local port" cannot be reached from the guide alone (action 2 blocked).
- **Change**: In `## Examples`, add one sentence before the commands: find the capsule ID and the database user, password and name on the database capsule's page, and make sure the capsule is running. Match the field names to the platform labels.
- **Done when**: A reader with a running MySQL capsule can find every value in the example commands and the `mysql` client connects through the local port.
