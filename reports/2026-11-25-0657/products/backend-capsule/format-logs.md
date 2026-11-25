# Format report — logs

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/products/backend-capsule/logs.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** View Logs for a Backend Application
- **Goal:** Expect to see capsule logs and access logs
- **Format check:** fail

## Content list

1. (`goal`) under `(intro)` — title: "How to View Logs for a Backend Application"
2. (`goal`) under `(intro)` — View and stream logs from your Backend Capsule on Code Capsules to monitor reque…
3. (`goal`) under `(intro)` — View build, runtime, and access logs for your Backend Capsule.
4. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules a…
5. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', descript…
6. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend Caps…
7. (`goal`) under `View logs` — 1. **Open the Capsule**
8. (`goal`) under `View logs` — Open the Space and select the Backend Capsule.
9. (`goal`) under `View logs` — 2. **Open Logs**
10. (`goal`) under `View logs` — Click the **Logs** tab.
11. (`goal`) under `View logs` — 3. **Switch log streams**
12. (`goal`) under `View logs` — Open **Capsule logs**, **Build logs**, or **Access logs** as listed. Scroll to t…
13. (`goal`) under `Troubleshooting` — Trigger a new build from the **Deploy** tab or push to the connected branch, the…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### logs-1
- **Type:** Format fix
- **Title:** Align page with template section order
- **Problem:** Section headings or content do not fully match the current template.
- **Rule:** how_to_format.md
- **Change:** Restructure headings and content to match the template section table.
- **Done when:** Template section check passes.

## Proposed outline

(Rewrite `docs/products/backend-capsule/logs.md` to match how_to_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Prerequisites — DocCardList cards
- ## Deploy your … — numbered bold steps to goal
- ## Troubleshooting — `<details>` entries
