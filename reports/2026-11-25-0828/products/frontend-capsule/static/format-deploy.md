# Format report — deploy

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/frontend-capsule/static/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Static Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | `# Host Your Static Frontend Site` | Deploy a static site or SPA on Code Capsules with Static hosting; when you finish, first build in progress on **Deploy** tab **Builds**. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules` |
| 5 | prerequisite | `## Prerequisites` | Build settings → `/products/frontend-capsule/supported-runtimes` |
| 6 | goal | `## Deploy your static frontend site` | **Open the capsule wizard** — Open the Space; click yellow **+**; **New Capsule**. |
| 7 | goal | `## Deploy your static frontend site` | **Choose capsule details** — **Frontend Capsule**, Team, Space; **Next**. |
| 8 | goal | `## Deploy your static frontend site` | **Choose static hosting** — **Static**; **Next**. |
| 9 | goal | `## Deploy your static frontend site` | **Choose a plan** — **Free** or **Paid**; link to plans page. |
| 10 | goal | `## Deploy your static frontend site` | **Connect the repository** — **Git Repository**, **Branch**, optional **Repo subpath**; **Next**. |
| 11 | goal | `## Deploy your static frontend site` | **Set build settings** — **Build Command**, **Path to static content**, **Capsule Name**; **Build & Deploy**. |
| 12 | goal + remove | `## Deploy your static frontend site` | **Check the build and site** — build queued/in progress on **Builds** (goal); then URL on **Details**, HTTPS/SPA/caching prose, links to Configure, Framework Guides, Container deploy. |
| 13 | — | `## Troubleshooting` | Blank page after successful build — check **Path to static content**; Supported Runtimes link. |
| 14 | — | `## Troubleshooting` | Changes did not save — refresh and **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Step 7 includes `remove` content (platform feature list and “next steps” links) after the goal; step 1 names a control by colour (“yellow **+**”). |
| Check 2: Prerequisites | fail | Three shared prerequisite targets are missing under `docs/shared/`; build-settings card points at `supported-runtimes`, which has no file under `docs/`. |
| Check 3: Links | fail | Missing targets: shared pages, `supported-runtimes`, `static/plans`, `custom-domains`, `configure` (step 7 and cards/troubleshooting). |
| Check 4: Format and style | fail | Frontmatter `title` uses “Deploy” instead of the required “How to Host …” pattern; step 1 colour wording; step 7 holds disallowed cross-guide links in the numbered list. |

## Tickets

### deploy-1

- **Type:** Remove content
- **Title:** End step 7 on the Builds outcome only.
- **Problem:** Step 7 **Check the build and site** states the build is queued or in progress, then continues with opening **Details**, marketing copy about HTTPS/SPA/caching/custom domains, and links to [Configure](/products/frontend-capsule/configure/), [Framework Guides](/products/frontend-capsule/deploy/), and [Container hosting](/products/frontend-capsule/container/deploy/).
- **Rule:** `FORMAT.MD`, Check 1 (How-to: goal steps) — `remove` must not sit inside `## Steps`; `how_to_format.md`, Steps — last step must end with the reader seeing the goal.
- **Change:** After the sentence that confirms the first build is queued or in progress on **Builds**, stop. Delete the URL visit paragraph, feature list, and cross-guide links from the numbered list.
- **Done when:** The last numbered step ends on the **Builds** tab build-in-progress outcome matching `DOCUMENTED_FEATURES.MD`.

### deploy-2

- **Type:** Format fix
- **Title:** Name the new-capsule control by label, not colour.
- **Problem:** Step 1 says “Click the yellow **+** and select **New Capsule**.”
- **Rule:** `writing_style.md`, Words — do not name UI controls by colour or position alone.
- **Change:** Rewrite step 1 to open the Space and select **New Capsule** using bold on-screen labels only.
- **Done when:** Step 1 has no colour or position wording.

### deploy-3

- **Type:** Format fix
- **Title:** Align frontmatter title with the Host pattern.
- **Problem:** Frontmatter `title` is “How to Deploy a Static Frontend”; the H1 is “Host Your Static Frontend Site.”
- **Rule:** `how_to_format.md`, Title and description — `title` “How to Host a &lt;Framework&gt; Application”; H1 “Host Your &lt;Framework&gt; Application”.
- **Change:** Set `title` to “How to Host a Static Frontend Site” (or equivalent Host wording) so it matches the H1 and template.
- **Done when:** `title` and `#` heading follow the Host pattern.

### deploy-4

- **Type:** Broken link
- **Title:** Fix or remove the plans link in step 4.
- **Problem:** Step 4 links to [Free and Paid Plans](/products/frontend-capsule/static/plans/), which has no file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** When `docs/products/frontend-capsule/static/plans.md` exists, keep the link; until then remove the link or state **Free** and **Paid** without linking.
- **Done when:** Every link in step 4 resolves under `docs/` or is removed.

### deploy-5

- **Type:** Broken link
- **Title:** Fix prerequisite and troubleshooting links to Supported Runtimes.
- **Problem:** Prerequisite card and troubleshooting link to `/products/frontend-capsule/supported-runtimes`, which has no file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3; `how_to_format.md`, Prerequisites — `href` must target a page that explains the prerequisite.
- **Change:** Add `docs/products/frontend-capsule/supported-runtimes.md` when that feature is documented, or point the card at an existing reference page under `docs/`.
- **Done when:** The build-settings prerequisite card and troubleshooting link resolve.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Account card links to `/docs/shared/create-an-account`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-an-account).
- **Done when:** That shared page exists and this guide’s account card resolves.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** Space card links to `/docs/shared/create-a-space`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-a-space).
- **Done when:** That shared page exists and this guide’s Space card resolves.

### shared-configure-git-for-code-capsules

- **Type:** Shared page
- **Title:** Create `docs/shared/configure-git-for-code-capsules.md`.
- **Problem:** GitHub card links to `/docs/shared/configure-git-for-code-capsules`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/frontend/format-static-html.md` (shared-configure-git-for-code-capsules).
- **Done when:** That shared page exists and this guide’s GitHub card resolves.

## Proposed outline

```md
# Host Your Static Frontend Site

<Repeat description: static deploy finished; first build in progress on Deploy tab Builds.>

## Prerequisites

<DocCardList: account, Space, GitHub, build settings (links that exist under docs/)>

## Deploy your static frontend site

1. **Open the capsule wizard** — Space → **New Capsule** (labels only).
2. **Choose capsule details** — **Frontend Capsule**, Team, Space → **Next**.
3. **Choose static hosting** — **Static** → **Next**.
4. **Choose a plan** — **Free** or **Paid** on **Plan** → **Next** (optional plans link only if page exists).
5. **Connect the repository** — **Git Repository**, **Branch**, optional **Repo subpath** → **Next**.
6. **Set build settings** — **Build Command**, **Path to static content**, **Capsule Name** → **Build & Deploy**.
7. **Check the build** — On **Builds**, first build queued or in progress (end here).

## Troubleshooting

<details> blank page — path to static content; supported runtimes when page exists </details>
<details> changes did not save — refresh and Save </details>
```