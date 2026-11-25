# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/cli/index.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** CLI Overview and Commands
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Overview instructs: Install, authenticate with login, then run commands. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | Reference Overview: no steps. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Move to another doc
- **Title:** Remove install/login imperatives from Overview
- **Problem:** `## Overview` tells the reader to install and log in.
- **Rule:** reference_format.md Overview
- **Change:** State what the CLI is; link installation How-to in Related/Pages table.
- **Done when:** Overview is factual only.

## Proposed outline

Reference hub with Pages table and Related.
