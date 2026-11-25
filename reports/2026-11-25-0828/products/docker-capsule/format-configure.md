# Format report: `configure.md`

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/products/docker-capsule/configure.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Configure a Docker Container
- **Goal:** Expect to see updated capsule parameters and environment variables saved
- **Format check:** fail

## Content list

1. `remove` — (no heading) Configure a Docker Capsule in the **Config** tab…
2. `remove` — (no heading) Settings here control how your capsule is built…
3. `remove` — (no heading) Most settings apply to every Docker Capsule…
4. `remove` — (no heading) Settings marked **Git deployments only**…
5. `remove` — (no heading) The capsule source and deployment strategy…
6. `prerequisite` — `## Prerequisites` (DocCardList: account, Space, Docker Capsule)
7. `goal` — `## Configure your Docker capsule` — **Edit build settings (Git only)**
8. `goal` — `## Configure your Docker capsule` — **Edit runtime settings**
9. `goal` — `## Configure your Docker capsule` — **Set environment variables**
10. `remove` — `## Configure your Docker capsule` — **Bind data capsules** (not in feature goal)
11. `goal` — `## Capsule parameters` — numbered list to change a setting (duplicate of steps)
12. `remove` — `## Capsule parameters` — Build/Runtime table
13. `remove` — `### Build settings` — Git vs image explanation
14. `fact`/`remove` — `#### Docker File` — field description and examples table
15. `fact`/`remove` — `#### Docker Build Context` — field description
16. `fact`/`remove` — `#### Network port` — platform behavior
17. `goal` — `#### Health check` — numbered steps to set health check
18. `remove` — `## Environment variables` — platform variable table
19. `goal` — `## Environment variables` — numbered steps to add custom variables
20. `remove` — `## Environment variables` — view sensitive values
21. `remove` — `## Connect data capsules` — Database and Storage bind instructions
22. `remove` — `## Troubleshooting` — **Changes did not save** (symptom/fix present; section placement OK)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Reference and duplicate goal steps outside the steps section; last step does not state the saved-parameters goal; bind-data step is not required for the documented goal |
| Check 2: Prerequisites | fail | Shared prerequisite targets missing under `docs/shared/`; intro between title and prerequisites explains platform concepts |
| Check 3: Links | fail | Multiple internal links point to pages that do not exist in `docs/` |
| Check 4: Format and style | fail | Extra `##` sections; title/intro do not match template or goal; mixed doc types |
| Walkthrough | not run (format fail) | — |

## Tickets

### configure-1

- **Type:** Wrong doc type
- **Title:** Rewrite as a single-task How-to guide
- **Problem:** After the steps section the page adds `## Capsule parameters`, `## Environment variables`, and `## Connect data capsules` with reference tables, field definitions, and duplicate procedures.
- **Rule:** `FORMAT.MD` Step 1 — page mixes How-to with Reference material
- **Change:** Keep only template sections (title/description, Prerequisites, one steps section, Troubleshooting). Move field-level facts to a Reference page or link existing reference docs from the steps where needed; delete explanatory sections from this guide.
- **Done when:** The file has no `##` headings other than Prerequisites, one `## Configure your …` steps section, and Troubleshooting.

### configure-2

- **Type:** Format fix
- **Title:** Fix title, description, and intro to match the goal
- **Problem:** `# Configure Your Docker Container` and three intro paragraphs do not follow the template title pattern or repeat the description in one or two sentences that match the feature goal.
- **Rule:** `how_to_format.md`, Title and description
- **Change:** Align `#` title and opening sentences with `title`, `description`, and the documented goal (reader sees updated capsule parameters and environment variables saved). Remove paragraphs before `## Prerequisites` that are not those one or two sentences.
- **Done when:** Frontmatter, `#` title, and intro match the goal and `writing_style.md`; nothing except the import and intro sits between title and Prerequisites.

### configure-3

- **Type:** Missing goal step
- **Title:** End steps with saved parameters and environment variables
- **Problem:** Step 3 ends at **Save** without stating what the reader should see; step 4 is data-capsule binding, which is outside the feature goal in `DOCUMENTED_FEATURES.MD`.
- **Rule:** `FORMAT.MD` Check 1 — last step must reach the goal
- **Change:** Merge parameter and environment-variable actions into steps that end with confirmation that **Capsule Parameters** and **Environment Variables** show the saved values (after rebuild/redeploy where applicable). Remove or move **Bind data capsules** out of this guide.
- **Done when:** The last step explicitly states the reader sees updated capsule parameters and environment variables saved.

### configure-4

- **Type:** Move to prerequisites
- **Title:** Remove platform intro from the page body
- **Problem:** Paragraphs under the title explain Config vs Deploy tabs and Git-only settings before prerequisites.
- **Rule:** `how_to_format.md`, Title and description — nothing else between title and Prerequisites
- **Change:** Delete those paragraphs or replace with the one–two sentence intro only; link Deploy tab content from prerequisites or a single step if required for the goal.
- **Done when:** Only the short goal-focused intro appears between `#` title and `## Prerequisites`.

### configure-5

- **Type:** Remove content
- **Title:** Delete reference sections and duplicate steps
- **Problem:** `## Capsule parameters`, nested build/runtime docs, health-check walkthrough under `#### Health check`, platform env var table, and `## Connect data capsules` are not goal steps.
- **Rule:** `FORMAT.MD` Check 1 — `remove` and `goal` outside `## Steps` equivalent
- **Change:** Remove those sections; fold any essential clicks into the numbered steps list only.
- **Done when:** All configuration actions live only under `## Configure your Docker capsule` as numbered steps.

### configure-6

- **Type:** Broken link
- **Title:** Fix or remove missing internal links
- **Problem:** Links target pages not present in `docs/`: `/products/docker-capsule/deployments/`, `/products/docker-capsule/image/deploy/`, `/products/docker-capsule/container-requirements/`, `/products/database-capsule/`, `/products/storage-capsule/deploy/`.
- **Rule:** `FORMAT.MD` Check 3
- **Change:** Point each link at an existing doc path or remove the link until the target page exists.
- **Done when:** Every internal link in the file resolves to a file under `docs/`.

### configure-7

- **Type:** Shared page
- **Title:** Create shared prerequisite: create-an-account
- **Problem:** `href: '/docs/shared/create-an-account'` in Prerequisites; no `docs/shared/create-an-account.md`.
- **Rule:** `FORMAT.MD` Check 2
- **Change:** Add `docs/shared/create-an-account.md` with slug `/shared/create-an-account` covering sign-up and opening Personal Team (outline from existing product guides).
- **Done when:** The card link resolves and other guides can reuse the page.

### configure-8

- **Type:** Shared page
- **Title:** Create shared prerequisite: create-a-space
- **Problem:** `href: '/docs/shared/create-a-space'`; no `docs/shared/create-a-space.md`.
- **Rule:** `FORMAT.MD` Check 2
- **Change:** Add `docs/shared/create-a-space.md` with slug `/shared/create-a-space` covering creating a Space.
- **Done when:** The card link resolves and other guides can reuse the page.

### configure-9

- **Type:** Format fix
- **Title:** Normalize steps section heading and step bodies
- **Problem:** Steps use mixed screen naming; build/runtime steps lack explicit **Config** / **Capsule Parameters** screen lead-ins per template.
- **Rule:** `how_to_format.md`, Steps — one wizard screen per step, values stated exactly
- **Change:** Rename heading to `## Configure your Docker container` (match thing being configured). Start each step with the screen in bold; state exact fields (Network port, Docker File, Docker Build Context, etc.) and **Save** confirmations.
- **Done when:** Steps read as a single numbered list under one `## <Verb> your <Thing>` heading and follow the angular/react examples' pattern.

## Proposed outline

```md
# Host Your Docker Container Configuration (or goal-aligned title)

<One–two sentences: reader has saved capsule parameters and environment variables.>

## Prerequisites
<DocCardList: account, Space, Docker Capsule deploy guide>

## Configure your Docker container
1. **Open Config** — On **Config**, open **Capsule Parameters**.
2. **Save build parameters (Git only)** — Edit **Build**, set paths, **Save**, confirm rebuild.
3. **Save runtime parameters** — Edit **Runtime**, set port and health check, **Save**, confirm redeploy.
4. **Save environment variables** — Add/edit variables, **Save**; reader sees updated values and running capsule with new settings.

## Troubleshooting
<details>Changes did not save</details>
```