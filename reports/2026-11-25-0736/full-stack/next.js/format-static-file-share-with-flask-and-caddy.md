# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/full-stack/next.js/static-file-share-with-flask-and-caddy.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Deploy a File-Sharing Site with Flask and Caddy
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Steps use `codecapsules-io/*` repos instead of reader forks from Prerequisites. |
| Check 2: Prerequisites | fail | GitHub card uses `configure-git-for-code-capsules` not `connect-github`. |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | Repo/branch values must match prerequisites. |

## Tickets

### static-file-share-with-flask-and-caddy-1

- **ID:** static-file-share-with-flask-and-caddy-1
- **Type:** Missing goal step
- **Title:** Select forked repos in Configure
- **Problem:** Steps 2–3 set `codecapsules-io/flask-file-uploads` and `codecapsules-io/caddy-file-server`.
- **Rule:** how_to_format.md Steps: exact repo values
- **Change:** Name each fork from Prerequisites in **Repository** and branch `main`.
- **Done when:** Steps and prerequisites name the same repos.

## Proposed outline

How-to deploy file share with both forks and storage bind.
