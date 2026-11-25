# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/backend/docker/caddy-docker-site.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Host a Caddy Site with Docker
- **Goal:** Expect to Deploy the Caddy demo app to a Docker Capsule and see it building in the Builds tab
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | Goal steps present under Deploy section. |
| Check 2: Prerequisites | pass | DocCardList links to shared pages. |
| Check 3: Links | pass | Internal links resolve. |
| Check 4: Format and style | fail | Step 1 does not open with a wizard screen name in bold. |

## Tickets

### caddy-docker-site-1

- **ID:** caddy-docker-site-1
- **Type:** Format fix
- **Title:** Lead step 1 with wizard screen name
- **Problem:** Step 1 **Start a Docker Capsule** says "In your Space, click **+**" without a bold screen name such as Quick Start.
- **Rule:** how_to_format.md Steps: one step per wizard screen; start with screen name
- **Change:** Rewrite step 1 to begin "On **Quick Start**" or merge capsule creation into step 2 starting on **Capsule Details**.
- **Done when:** Every step description opens with a bold wizard screen name.

## Proposed outline

How-to: Prerequisites, Deploy steps (screen-led), Troubleshooting.
