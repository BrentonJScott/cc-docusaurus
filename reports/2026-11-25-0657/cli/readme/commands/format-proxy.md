# Format report — proxy

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/cli/readme/commands/proxy.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Proxy a Database Connection With the CLI
- **Goal:** Expect a database client to connect through the local port
- **Format check:** fail

## Content list

1. (`explain`) under `Troubleshooting` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### proxy-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/cli/readme/commands/proxy.md` to match how_to_format.md — see tickets above.)
