# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/docker-capsule/container-requirements.md`
- **Doc type:** How-to guide (intended)
- **Template:** `how_to_format.md`
- **Feature:** Docker Container Runtime Requirements
- **Goal:** Expect the container to start listening on the PORT environment variable
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Steps list Dockerfile requirements, not actions that verify PORT on a running capsule. |
| Check 2: Prerequisites | pass |  |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | # title is not Host Your… pattern; steps are not dashboard wizard steps. |

## Tickets

### container-requirements-1

- **ID:** container-requirements-1
- **Type:** Wrong doc type
- **Title:** Reclassify as Reference or Explanation
- **Problem:** Page title "Make Your Container Ready" and steps describe PORT/0.0.0.0 rules rather than deploying a container.
- **Rule:** FORMAT.MD Step 1
- **Change:** Rewrite as Reference (requirements table) or Explanation; optional How-to deploy validates PORT.
- **Done when:** Template matches content and DOCUMENTED_FEATURES goal.

## Proposed outline

Reference table of PORT, bind address, CMD, and PORT env var rules.
