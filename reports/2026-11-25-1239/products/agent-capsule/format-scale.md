# Format report — scale (Agent Capsule)

- **Run:** 2026-11-25-1239
- **Doc:** `docs/products/agent-capsule/scale.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Scale an AI Agent
- **Goal:** Expect to see new resources saved in the Scale tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Scale Agent Capsule by allocating more CPU and memory as workload grows. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite (missing) | (steps assume) | An existing Agent Capsule in the Space |
| 5 | goal | `## Scale your Agent capsule` | **Open the Scale tab** — Open Agent Capsule; select **Scale**. |
| 6 | goal | `## Scale your Agent capsule` | **Edit resources** — On **Scale**, **Edit**; set **CPU**, **RAM**, **Storage**, **Replicas**. |
| 7 | goal | `## Scale your Agent capsule` | **Save** — On **Edit**, **Save** and confirm; resources show on **Scale**. |
| 8 | — | `## Troubleshooting` | Save disabled — paid plan or stop capsule before scaling storage. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | pass | Last step states saved resources visible on **Scale**. |
| Check 2: Prerequisites | fail | Steps require an Agent Capsule; `## Prerequisites` has no deploy card (compare `docs/products/docker-capsule/scale.md`). |
| Check 3: Links | pass | Prerequisite links resolve under `docs/`. |
| Check 4: Format and style | fail | Step **Save** opens on **Edit** instead of **Scale**; step 1 does not open with `On **…**,`. |

## Tickets

### scale-1

- **Type:** Move to prerequisites
- **Title:** Add an Agent Capsule prerequisite card.
- **Problem:** Step 1 opens an Agent Capsule, but only account and Space are listed under **Prerequisites**.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites.
- **Change:** Add a `DocCardList` item (🛠️ Agent Capsule) with `href: '/docs/products/agent-capsule/deploy'`.
- **Done when:** The deploy prerequisite appears as a linked card before the steps section.

### scale-2

- **Type:** Format fix
- **Title:** Fix screen names in the save step and step 1.
- **Problem:** Step **Save** says “On **Edit**, click **Save**” instead of `On **Scale**,`. Step **Open the Scale tab** starts with “Open your Agent Capsule” without `On **Space**,` or equivalent.
- **Rule:** `how_to_format.md`, Steps — start each description with the screen name in bold.
- **Change:** Rewrite steps 1 and 3 so each body begins with `On **Scale**,` (or `On your **Space**,` for navigation) and **Save** is performed from **Scale**, not **Edit**.
- **Done when:** Every step description starts with `On **…**,` naming the UI surface the reader acts on.

## Proposed outline

```md
# Scale Your AI Agent

<Same sentences as description.>

## Prerequisites

<DocCardList — account, Space, Agent Capsule deploy>

## Scale your Agent capsule

1. **Open the Scale tab** — On your **Space**, open the Agent Capsule. On **Scale**, …
2. **Edit resources** — On **Scale**, click **Edit**. Set **CPU**, **RAM**, **Storage**, **Replicas**.
3. **Save** — On **Scale**, click **Save** and confirm. New resources show on **Scale**.

## Troubleshooting

<details> … </details>
```