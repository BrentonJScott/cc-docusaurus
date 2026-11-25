# Format report — angular

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/frontend/angular.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Host an Angular Application
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `(intro)` — Deploy an Angular application on Code Capsules. When you finish, the first
2. (`goal`) under `(intro)` — build is in progress on the Deploy tab Builds section.
3. (`goal`) under `(intro)` — title: "How to Host an Angular Application"
4. (`goal`) under `(intro)` — Deploy an Angular application on Code Capsules. When you finish, the first build…
5. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules a…
6. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-angula…
7. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', descript…
8. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 G…
9. (`goal`) under `Deploy your Angular app` — 1. **Open the capsule wizard**
10. (`goal`) under `Deploy your Angular app` — Open the Space for this app. Click the yellow **+** and select **New Capsule**.
11. (`goal`) under `Deploy your Angular app` — 2. **Choose capsule details**
12. (`goal`) under `Deploy your Angular app` — On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. …
13. (`goal`) under `Deploy your Angular app` — 3. **Choose static hosting**
14. (`goal`) under `Deploy your Angular app` — On **Hosting**, select **Static**. Click **Next**.
15. (`goal`) under `Deploy your Angular app` — 4. **Choose a plan**
16. (`goal`) under `Deploy your Angular app` — On **Plan**, select **Free**. Click **Next**.
17. (`goal`) under `Deploy your Angular app` — 5. **Connect the repository**
18. (`goal`) under `Deploy your Angular app` — On **Configure**, select the **Git Repository** `codecapsules-io/demo-angular` a…
19. (`goal`) under `Deploy your Angular app` — 6. **Set build settings**
20. (`goal`) under `Deploy your Angular app` — On **Deploy**, set **Build Command** to `npm run build` and **Path to static con…
21. (`goal`) under `Deploy your Angular app` — 7. **Check the build**
22. (`goal`) under `Deploy your Angular app` — On the capsule **Deploy** tab, open **Builds**. The first build is in progress o…
23. (`goal`) under `Troubleshooting` — You have not connected GitHub, or the fork is missing from the granted repositor…
24. (`goal`) under `Troubleshooting` — The Angular project in `codecapsules-io/demo-angular` outputs to `dist/ng4-compl…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### angular-1
- **Type:** Format fix
- **Title:** Describe controls by label
- **Problem:** Step references control by colour/position (e.g. "yellow **+**").
- **Rule:** writing_style.md Words
- **Change:** Name the control by its UI label instead.
- **Done when:** No colour-only control references.

## Proposed outline

(Rewrite `docs/frontend/angular.md` to match how_to_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Prerequisites — DocCardList cards
- ## Deploy your … — numbered bold steps to goal
- ## Troubleshooting — `<details>` entries
