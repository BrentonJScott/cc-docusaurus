# Format report — vue

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/frontend/vue.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Host a Vue Application
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `(intro)` — Deploy a Vue application on Code Capsules. When you finish, the first build is
2. (`goal`) under `(intro)` — in progress on the Deploy tab Builds section.
3. (`goal`) under `(intro)` — Deploy a Vue application on Code Capsules. When you finish, the first build is i…
4. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules a…
5. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-vue', …
6. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', descript…
7. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 G…
8. (`goal`) under `Deploy your Vue app` — 1. **Open the capsule wizard**
9. (`goal`) under `Deploy your Vue app` — Open the Space for this app. Click the yellow **+** and select **New Capsule**.
10. (`goal`) under `Deploy your Vue app` — 2. **Choose capsule details**
11. (`goal`) under `Deploy your Vue app` — On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. …
12. (`goal`) under `Deploy your Vue app` — 3. **Choose static hosting**
13. (`goal`) under `Deploy your Vue app` — On **Hosting**, select **Static**. Click **Next**.
14. (`goal`) under `Deploy your Vue app` — 4. **Choose a plan**
15. (`goal`) under `Deploy your Vue app` — On **Plan**, select **Free**. Click **Next**.
16. (`goal`) under `Deploy your Vue app` — 5. **Connect the repository**
17. (`goal`) under `Deploy your Vue app` — On **Configure**, select the **Git Repository** `codecapsules-io/demo-vue` and t…
18. (`goal`) under `Deploy your Vue app` — 6. **Set build settings**
19. (`goal`) under `Deploy your Vue app` — On **Deploy**, set **Build Command** to `npm run build` and **Path to static con…
20. (`goal`) under `Deploy your Vue app` — 7. **Check the build**
21. (`goal`) under `Deploy your Vue app` — On the capsule **Deploy** tab, open **Builds**. The first build is in progress o…
22. (`goal`) under `Troubleshooting` — You have not connected GitHub, or the fork is missing from the granted repositor…
23. (`goal`) under `Troubleshooting` — The Vue demo in `codecapsules-io/demo-vue` outputs to `dist`. Set **Path to stat…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### vue-1
- **Type:** Format fix
- **Title:** Describe controls by label
- **Problem:** Step references control by colour/position (e.g. "yellow **+**").
- **Rule:** writing_style.md Words
- **Change:** Name the control by its UI label instead.
- **Done when:** No colour-only control references.

## Proposed outline

(Rewrite `docs/frontend/vue.md` to match how_to_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Prerequisites — DocCardList cards
- ## Deploy your … — numbered bold steps to goal
- ## Troubleshooting — `<details>` entries
