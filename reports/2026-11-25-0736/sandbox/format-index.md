# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/sandbox/index.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** AI Agent Sandboxes: Firecracker microVMs
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | Facts and examples. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | fail | `/sandbox/quickstart`, `/sandbox/python/api-reference` missing. |
| Check 4: Format and style | pass |  |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Broken link
- **Title:** Fix quickstart and Python API links
- **Problem:** Overview table and Related link `/sandbox/quickstart`; Related links `/sandbox/python/api-reference`.
- **Rule:** FORMAT.MD Check 3
- **Change:** Publish missing pages or update hrefs to existing sandbox docs.
- **Done when:** Every internal link opens a doc in docs/.

## Proposed outline

Reference Overview table + Related.
