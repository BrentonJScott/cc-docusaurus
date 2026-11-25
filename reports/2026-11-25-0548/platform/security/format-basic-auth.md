# Format report — basic-auth

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/platform/security/basic-auth.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Add HTTP Basic Authentication
- **Goal:** Expect the capsule URL to ask for the credentials shown in the dashboard
- **Format check:** fail

## Content list

1. (`goal`) under `(intro)` — Enable HTTP Basic authentication on a Capsule's public URL. When you finish,
2. (`goal`) under `(intro)` — the browser prompts for the credentials shown in the dashboard.
3. (`goal`) under `(intro)` — Enable HTTP Basic authentication on a Capsule's public URL. When you finish, the…
4. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules a…
5. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/platform/capsules/how-do-i-add-remove-stop-capsules', lab…
6. (`goal`) under `Enable Basic Auth` — 1. **Open Domains**
7. (`goal`) under `Enable Basic Auth` — Open the Capsule and select the **Domains** tab.
8. (`goal`) under `Enable Basic Auth` — 2. **Enable authentication**
9. (`goal`) under `Enable Basic Auth` — In **Basic Auth**, toggle **Basic Http authentication** to **Enabled**.
10. (`goal`) under `Enable Basic Auth` — 3. **Use the credentials**
11. (`goal`) under `Enable Basic Auth` — In **Basic auth credentials**, click **show**. Note the username and password. O…
12. (`goal`) under `Troubleshooting` — Platform health checks reach replicas directly and are not blocked by domain Bas…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### basic-auth-1
- **Type:** Format fix
- **Title:** Align page with template section order
- **Problem:** Section headings or content do not fully match the current template.
- **Rule:** how_to_format.md
- **Change:** Restructure headings and content to match the template section table.
- **Done when:** Template section check passes.

## Proposed outline

(Rewrite `docs/platform/security/basic-auth.md` to match how_to_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Prerequisites — DocCardList cards
- ## Deploy your … — numbered bold steps to goal
- ## Troubleshooting — `<details>` entries
