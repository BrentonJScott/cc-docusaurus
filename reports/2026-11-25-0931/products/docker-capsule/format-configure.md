# Format report: configure.md

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/products/docker-capsule/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md` (with `formats/writing_style.md`)
- **Feature:** Configure a Docker Container
- **Goal:** Expect to see updated capsule parameters and env vars saved
- **Format check:** fail
- **Walkthrough:** not run (format fail)

## Content list

1. `prerequisite` — `## Prerequisites`: Code Capsules account card
2. `prerequisite` — `## Prerequisites`: A Space card
3. `prerequisite` — `## Prerequisites`: Docker Capsule card
4. `goal` — `## Configure your Docker container`, step 1: open the Docker Capsule and the **Config** tab
5. `goal` — step 2: **Edit** **Build**; set **Docker File** and **Docker Build Context**; **Save** and confirm
6. `goal` — step 3: **Edit** **Runtime**; set **Network port** and **Health Check**/**Endpoint** (and Manual timeouts); **Save** and confirm
7. `goal` — step 4: enter variable **Name** and **Value**; **Save**; check saved values
8. `remove` — step 2 and step 3: sentences "Saving rebuilds and deploys the capsule." and "Saving redeploys the capsule without a new build." (platform behaviour)
9. `remove` — `## Troubleshooting`: none (the entry is a symptom with a fix)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | fail | Values the goal depends on are not stated exactly: step 3 says "such as `/health`", "**Automatic** or **Manual**" and "the default is `3000`"; step 2 gives path "of your Dockerfile" with defaults; step 4 gives no variable name or value. Two steps explain platform behaviour. |
| Check 2: Prerequisites | pass | Account, Space and Docker Capsule are each one linked card; all linked pages exist. |
| Check 3: Links | pass | `/docs/shared/create-an-account`, `/docs/shared/create-a-space` and `/docs/products/docker-capsule/git/deploy` exist in `docs/`. No images. |
| Check 4: Format and style | fail | Steps run longer than one to three short sentences; steps offer alternatives and a "(Git only)" branch; step 3 uses "such as"; steps do not start with the screen name in bold. |
| Walkthrough | not run (format fail) | — |

## Tickets

### configure-1

- **ID:** configure-1
- **Type:** Format fix
- **Title:** State exact values and keep to one path in the steps.
- **Problem:** Under `## Configure your Docker container`: step 3 says "Set **Health Check** to **Automatic** or **Manual**, and enter the **Endpoint** your application responds to, such as `/health`". Step 4 says "Enter the variable **Name** and **Value**" with no values. Step 2 is titled "Save the build parameters (Git only)" and says "the default is `/Dockerfile`" and "the default is `/`".
- **Rule:** `how_to_format.md`, Steps: "Every value the goal depends on **must** be stated exactly… Don't write 'your plan' or 'such as `master`'." Also "Steps contain only the actions needed to reach the goal."
- **Change:** Checklist:
  - [ ] Step 3: pick one health check mode and state it (for example **Automatic**), and write `/health` without "such as". Remove the **Manual** timeouts sentence (or move it to a Reference page and link it).
  - [ ] Step 3: state the **Network port** value to enter, not "the port your application listens on".
  - [ ] Step 2: state the **Docker File** and **Docker Build Context** values to enter (`/Dockerfile` and `/`). Drop "(Git only)" from the title; move the Git-only condition to Prerequisites (a Docker Capsule deployed from Git).
  - [ ] Step 4: state one example variable **Name** and **Value** to enter, and which editor to use (**Key/Val Editor**), then say the saved **Name** and **Value** show in the list.
- **Done when:** Every value the reader enters in steps 2 to 4 is written out exactly, and no step says "such as", "or", or "Git only".

### configure-2

- **ID:** configure-2
- **Type:** Format fix
- **Title:** Shorten step descriptions and start each with the screen name.
- **Problem:** Step 2 has five sentences, step 3 has about eight, and step 4 has five. Examples: "Saving rebuilds and deploys the capsule." and "Saving redeploys the capsule without a new build."
- **Rule:** `how_to_format.md`, Steps: each description is "one to three short sentences, or a short bulleted list when the reader enters several values on one screen", and "Start the description with the screen's name in bold, such as 'On **Plan**, …'".
- **Change:** Checklist:
  - [ ] Start steps 2 to 4 with "On **Config**, …" (or the matching screen name).
  - [ ] Put the values in a short bulleted list (**Docker File**, **Docker Build Context**; **Network port**, **Health Check**, **Endpoint**).
  - [ ] Remove the two sentences describing rebuild/redeploy behaviour (platform explanation).
  - [ ] Keep the last step ending with what the reader sees: the saved values on **Capsule Parameters** and in the environment variables list.
- **Done when:** Each step is at most three sentences plus an optional bulleted list, begins with a bold screen name, and has no platform explanations.

## Proposed outline

```md
---
slug, title, description, sidebar_label, doc_version: drift
---
import DocCardList from '@theme/DocCardList';

# Configure Your Docker Container
<one or two sentences matching the description and the goal>

## Prerequisites
<DocCardList>: 👤 account, 📦 A Space, 🛠️ Docker Capsule (deployed from Git)

## Configure your Docker container
1. **Open Config** — On the Docker Capsule page, open **Config**.
2. **Save the build parameters** — On **Config**, **Edit** next to **Build**: bullets for **Docker File** `/Dockerfile` and **Docker Build Context** `/`. Click **Save**, then **Confirm**.
3. **Save the runtime parameters** — On **Config**, **Edit** next to **Runtime**: bullets for **Network port**, **Health Check** `Automatic`, **Endpoint** `/health`. Click **Save**, then **Confirm**.
4. **Save the environment variables** — On **Config**, **Key/Val Editor**: one **Name** and **Value**. Click **Save**. The saved values show in **Capsule Parameters** and the list.

## Troubleshooting
<details> Changes did not save — cause, then fix </details>
```
