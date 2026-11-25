# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/agent-capsule/chat/index.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** Add a Chat Interface to an AI Agent
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Instructions: "Implement the endpoints", "Use them to authenticate". |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass | DocCardList links resolve (OpenAPI URL is external). |
| Check 4: Format and style | fail | Reference subjects should be tables of facts; imperatives fail facts-only rule. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Move to another doc
- **Title:** Move implementation steps to How-to
- **Problem:** `### Endpoints` and `### Request headers` tell the reader to implement and use headers.
- **Rule:** reference_format.md Subject sections: no steps
- **Change:** Replace with endpoint/method/header tables; link a How-to for implementing the chat API.
- **Done when:** Reference lists facts only.

## Proposed outline

Reference: Overview, endpoint/header tables, Related.
