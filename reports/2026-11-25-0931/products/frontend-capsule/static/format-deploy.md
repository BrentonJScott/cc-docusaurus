# Format report — deploy

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/frontend-capsule/static/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Static Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | (intro) | `# Host Your Static Frontend Site` | Deploy a static site or SPA with Static hosting; when you finish, first build in progress on **Deploy** tab **Builds**. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules` |
| 5 | prerequisite | `## Prerequisites` | Build settings → `/docs/products/frontend-capsule/deploy` |
| 6 | goal | `## Deploy your static frontend site` | **Open the capsule wizard** — Open the Space; select **New Capsule**. |
| 7 | goal | `## Deploy your static frontend site` | **Choose capsule details** — On **Capsule Details**, **Frontend Capsule**, Team, Space; **Next**. |
| 8 | goal | `## Deploy your static frontend site` | **Choose static hosting** — On **Hosting**, **Static**; **Next**. |
| 9 | goal (vague values) | `## Deploy your static frontend site` | **Choose a plan** — On **Plan**, **Free** or **Paid** (plan not named). |
| 10 | goal (vague values) | `## Deploy your static frontend site` | **Connect the repository** — On **Configure**, a **Git Repository** and **Branch** (unnamed); optional **Repo subpath**; **Next**. |
| 11 | goal (vague values) | `## Deploy your static frontend site` | **Set build settings** — On **Deploy**, **Build Command** (e.g. `npm run build` or empty), **Path to static content** (e.g. `dist`), **Capsule Name**; **Build & Deploy**. |
| 12 | goal | `## Deploy your static frontend site` | **Check the build** — On **Builds**, first build queued or in progress. |
| 13 | — | `## Troubleshooting` | Build succeeds but page blank — **Path to static content**; Framework Guides link. |
| 14 | — | `## Troubleshooting` | Changes did not save — refresh and **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps 4–6 do not name the plan, repository, branch, build command, or output path the walkthrough depends on; no fork prerequisite for a demo repository. |
| Check 2: Prerequisites | fail | A Git repository with static content (and fork, when using a demo repo) is required for the goal but not listed as a card. |
| Check 3: Links | pass | Every `href` in prerequisites and troubleshooting resolves under `docs/`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps — values the goal depends on must be stated exactly; step 7 omits **Deploy** tab before **Builds** (peer `docs/frontend/static-html.md` names both). |

## Tickets

### deploy-1

- **Type:** Move to prerequisites
- **Title:** Add a fork prerequisite when the walkthrough uses a demo repository.
- **Problem:** Steps assume a **Git Repository** and **Branch** without naming them; there is no 🍴 fork card.
- **Rule:** `how_to_format.md`, Prerequisites — list everything the reader must have before the first goal step; `FORMAT.MD`, Check 2.
- **Change:** When aligning with `docs/frontend/static-html.md`, add a `DocCardList` item to `/docs/shared/fork-a-demo-repo` (or the framework’s demo repo) with label `🍴 Fork …` and a one-line description naming the repo.
- **Done when:** `## Prerequisites` includes the fork card when the guide targets a named demo repo.

### deploy-2

- **Type:** Format fix
- **Title:** State exact plan, repository, and branch in the steps.
- **Problem:** Step **Choose a plan** offers **Free** or **Paid**. Step **Connect the repository** does not name **Git Repository** or **Branch**.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** Name the plan tier used on test-platform (for example **Free** only), the repository (for example `codecapsules-io/demo-html` or the framework fork), and branch `main`, matching the chosen walkthrough path.
- **Done when:** Steps 4–5 name plan, repository, and branch with no unnamed dropdowns.

### deploy-3

- **Type:** Format fix
- **Title:** State exact build command and static content path in step 6.
- **Problem:** Step **Set build settings** uses “for example `npm run build`” and “for example `dist`” instead of the values for the documented path.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** Set **Build Command** and **Path to static content** to the concrete values for the walkthrough (for example empty and `/` for pre-built HTML, or `npm run build` and `dist` for a named framework demo), consistent with `docs/frontend/static-html.md` or the linked framework guide.
- **Done when:** Step 6 names build command and path without “for example” placeholders.

### deploy-4

- **Type:** Format fix
- **Title:** Open step 7 on the Deploy tab before Builds.
- **Problem:** Step **Check the build** says “On **Builds**” without “On the capsule **Deploy** tab”.
- **Rule:** `writing_style.md`, Words — UI labels in bold exactly as on screen; peer deploy guides state **Deploy** tab **Builds**.
- **Change:** Match `docs/frontend/static-html.md` step 7: open the capsule **Deploy** tab, then **Builds**, and confirm the first build is in progress or queued.
- **Done when:** Step 7 names **Deploy** tab and **Builds** and ends on the builds-tab goal.

## Proposed outline

```md
# Host Your Static Frontend Site

<Repeat description with **Deploy** tab **Builds** bolded.>

## Prerequisites

<DocCardList — 👤 account, 🍴 fork (if demo repo), 📦 Space, 🔌 GitHub, optional 🛠️ framework guide when not using demo-html>

## Deploy your static frontend site

1. **Open the capsule wizard** — Space → **New Capsule**.
2. **Choose capsule details** — On **Capsule Details**, **Frontend Capsule**, Team, Space → **Next**.
3. **Choose static hosting** — On **Hosting**, **Static** → **Next**.
4. **Choose a plan** — On **Plan**, <named plan> → **Next**.
5. **Connect the repository** — On **Configure**, named repo and `main` → **Next**.
6. **Set build settings** — On **Deploy**, named **Build Command**, **Path to static content**, **Capsule Name** → **Build & Deploy**.
7. **Check the build** — On **Deploy** tab **Builds**, first build in progress or queued.

## Troubleshooting

<details> blank page / changes did not save </details>
```