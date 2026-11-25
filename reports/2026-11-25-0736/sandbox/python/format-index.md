# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/sandbox/python/index.md`
- **Doc type:** Explanation
- **Template:** `explanation_format.md`
- **Feature:** Sandbox SDK for Python
- **Goal:** Expect the reader to understand: The codecapsules-sandbox Python SDK for creating and managing Firecracker microVM sandboxes
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | `pip install` and usage blocks in How it works are instructions. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | fail | `/sandbox/python/api-reference` and `/sandbox/quickstart` missing. |
| Check 4: Format and style | fail | Explanation How it works: no steps. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Move to another doc
- **Title:** Move install/run steps to quickstart How-to
- **Problem:** `## How it works` contains install and `Sandbox.create()` walkthrough.
- **Rule:** explanation_format.md How it works
- **Change:** Describe SDK architecture; link quickstart for commands.
- **Done when:** How it works is conceptual only.

### index-2

- **ID:** index-2
- **Type:** Broken link
- **Title:** Fix Related hrefs
- **Problem:** Related links missing Python API reference and quickstart pages.
- **Rule:** FORMAT.MD Check 3
- **Change:** Add docs or update hrefs.
- **Done when:** Links resolve.

## Proposed outline

Explanation per template; quickstart How-to for install.
