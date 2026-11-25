# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/cli/readme/getting-started/installation-and-usage.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Install and Use the CLI
- **Goal:** Expect the CLI help output to run
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | Steps reach `codecaps` help output. |
| Check 2: Prerequisites | pass |  |
| Check 3: Links | fail | `[commands reference](/cli/readme/commands/)` is not under `/docs/` and does not resolve. |
| Check 4: Format and style | pass | Steps section name differs slightly but acceptable. |

## Tickets

### installation-and-usage-1

- **ID:** installation-and-usage-1
- **Type:** Broken link
- **Title:** Fix commands reference href
- **Problem:** Step 3 links to `/cli/readme/commands/`.
- **Rule:** FORMAT.MD Check 3; writing_style.md internal links use `/docs/`
- **Change:** Change to `/docs/cli/readme/commands`.
- **Done when:** Link resolves to the commands doc.

## Proposed outline

How-to: Prerequisites, Install steps, Troubleshooting.
