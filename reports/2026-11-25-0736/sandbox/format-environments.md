# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/sandbox/environments.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Sandbox Environments & Flavors
- **Goal:** Expect to see a sandbox start with the chosen flavor
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Steps describe flavor tables and SDK options; do not end with sandbox running with chosen flavor. |
| Check 2: Prerequisites | fail | Prerequisite links to missing `/sandbox/quickstart`. |
| Check 3: Links | fail | `/sandbox/quickstart` missing from docs/. |
| Check 4: Format and style | fail | Goal outcome not stated in last step. |

## Tickets

### environments-1

- **ID:** environments-1
- **Type:** Broken link
- **Title:** Fix or create quickstart prerequisite target
- **Problem:** Prerequisites and body reference `/sandbox/quickstart` which has no doc file.
- **Rule:** FORMAT.MD Check 3
- **Change:** Add `docs/sandbox/quickstart.md` or link an existing getting-started page.
- **Done when:** Href resolves under docs.

### environments-2

- **ID:** environments-2
- **Type:** Missing goal step
- **Title:** End with sandbox running chosen flavor
- **Problem:** Last step only describes API parameters, not a visible running sandbox.
- **Rule:** FORMAT.MD Check 1 How-to
- **Change:** Add a final step: create sandbox with chosen `flavor` and confirm running state in dashboard or SDK output.
- **Done when:** Last step matches DOCUMENTED_FEATURES goal.

## Proposed outline

How-to: Prerequisites, choose flavor steps ending in running sandbox.
