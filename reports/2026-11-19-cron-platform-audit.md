# Documented features audit (2026-11-19)

**Platform:** https://test-platform.codecapsules.io  
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 3 entries  
**Manifest ↔ docs sync:** No add/remove PR (guides match manifest exactly).

## Summary (this run)

| Guide | feature_functional | doc_fidelity (main @ pre-PR) | doc_completeness (main) | doc_fidelity (branch prose + screenshots) |
|---|---|---|---|---|
| create-angular-frontend-capsule | pass | fail | incomplete | pass |
| create-react-frontend-capsule | pass | drift | incomplete | pass |
| create-java-backend-capsule | pass | drift | incomplete | pass |

**Acceptance criteria (observable):**

- **Angular / React:** Reach `/new/capsule?capsuleType=frontend` with **New Capsule**, **Capsule Details**, **Next**, **Cancel** via **Quick Start** → framework **Deploy Now**.
- **Java:** Reach **New Capsule** from **Capsules** → **+**, open **Choose a Capsule**, and select **Backend** (copy: “Node, Java, Go or Python deployments”).

---

## Manifest sync

| Source | Entries |
|---|---|
| DOCUMENTED_FEATURES.MD | Create Angular frontend capsule, Create React frontend capsule, Create Java backend capsule |
| `docs/guides/*.md` | `create-angular-frontend-capsule.md`, `create-react-frontend-capsule.md`, `create-java-backend-capsule.md` |

No orphan guides; no missing guides.

---

## create-angular-frontend-capsule

### feature_functional

**pass** — Logged in, opened `/dash/overview/quick-start`, clicked **Deploy Now** on **Angular** card → `https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend` with **New Capsule**, **Choose a Capsule**, **Frontend**, **Next**, **Cancel**.

### doc_fidelity — main branch (pre-PR, existing prose)

| Step (doc quote) | Fidelity | Screen evidence |
|---|---|---|
| “click the **Sign Up** button” on www.codecapsules.io | fail | Test run uses test-platform; visible entry is **Create your account** + **Log in**, not **Sign Up** |
| “**Quick Start** page” + **Deploy Now** on **Angular** | pass | **Quick Start** sidebar, heading **What type of capsule would you like to deploy?**, **Deploy Now** on **Angular** row |
| “On **Hosting**, select **Static**” | drift | After **Next** on capsule details, **Static** is visible; visible section label **Hosting** was not found |
| “On **Plan**, select **Free** or **Paid**” | drift | **Plan** step and **Next** visible; **Free** / **Paid** text not found as visible labels in headless capture |
| “**Connect a Git Repository**” … **Git Repository** | fail | Not verified on pre-finished wizard without team/space/repo selections in this run |

**Mismatches (bullets):**

- Doc: “**Sign Up** button in the top right corner” → Screen: test-platform registration shows **Create your account**, **Log in** link (no **Sign Up** in the same position on test-platform).
- Doc: “On **Hosting**, select **Static**” → Screen: **Static** option visible; **Hosting** heading not visible at same step.

### doc_fidelity — PR branch (numbered test-platform steps)

| Step | Fidelity | Evidence |
|---|---|---|
| 1. **Create your account** / **Log in** | pass | Visible on `https://test-platform.codecapsules.io/auth/registration` |
| 2. **Welcome back** / **Email** | pass | Heading **Welcome back**, textbox **Email**, placeholder “Enter your email” |
| 3. **Password** | pass | Textbox **Password**, placeholder “Enter your password” |
| 4. **Log in** button | pass | Button **Log in** |
| 5. **Quick Start** + heading **What type of capsule would you like to deploy?** | pass | Sidebar link **Quick Start**, heading visible |
| 6. **Angular** + **Deploy Now** | pass | **Angular** card, **Deploy Now** button |
| 7. **New Capsule** / **Capsule Details** / **Frontend** / **Next** / **Cancel** | pass | All visible at wizard entry (screenshot captured) |

---

## create-react-frontend-capsule

### feature_functional

**pass** — **Quick Start** → **React** row **Deploy Now** → same frontend wizard URL and controls as Angular.

### doc_fidelity — main branch (pre-PR)

| Step (doc quote) | Fidelity | Screen evidence |
|---|---|---|
| Prerequisites only (no test-platform login steps) | fail | No numbered steps for platform entry; doc_completeness **incomplete** |
| **Quick Start** / **Deploy Now** on **React** | pass | Same Quick Start page as Angular |
| Wizard numbered steps 1–6 (Hosting, Plan, Git, Build) | drift | Same **Hosting** / **Free**/**Paid** label gaps as Angular when wizard advanced |

**Mismatches:**

- Doc: implies production site setup (Teams/Spaces via marketing copy) → Screen: minimum path is test-platform login + Quick Start (not documented on main).

### doc_fidelity — PR branch

| Step | Fidelity | Evidence |
|---|---|---|
| 1–4. Login | pass | Same as Angular |
| 5–6. **Quick Start** / **React** / **Deploy Now** | pass | **React** card **Deploy Now** opens wizard |
| 7. **New Capsule** wizard | pass | Screenshot `create-react-frontend-capsule/step-5-new-capsule-wizard.png` |

---

## create-java-backend-capsule

### feature_functional

**pass** — **Capsules** sidebar → **+** → `/new/capsule` with **Choose a Capsule**; **Backend** option text includes “Node, Java, Go or Python deployments”.

### doc_fidelity — main branch (pre-PR)

| Step (doc quote) | Fidelity | Screen evidence |
|---|---|---|
| “Space containing your recently created **Data Capsule**” | fail | No **Data Capsule** prerequisite on live test account path used |
| “Capsule Details page” / “Configure Plan page” | drift | Live UI uses **Capsule Details** + breadcrumb **Plan** / **Configure** / **Deploy** (not “Configure Plan page” heading) |
| **Backend** selection | pass | Dropdown option **Backend** with Java in description |

**Mismatches:**

- Doc: “recently created **Data Capsule**” → Screen: Java path uses **Capsules** → **+** only (no Data Capsule required).
- Doc: “Configure Plan page” → Screen: breadcrumb **Plan** / **Configure** / **Deploy**, not a **Configure Plan** page title.

### doc_fidelity — PR branch

| Step | Fidelity | Evidence |
|---|---|---|
| 1–4. Login | pass | Shared login labels |
| 5. **Capsules** | pass | Sidebar **Capsules** at `/dash/overview/capsules` |
| 6. **+** → **New Capsule** | pass | Yellow **+** opens wizard |
| 7. **Choose a Capsule** / **Backend** / “Node, Java, Go or Python…” | pass | Combobox placeholder “Search/Select a Capsule Type”, options list captured in screenshot |
| 8. **Choose a Team** / **Next** | pass | Placeholder “Search/Select a team”, **Next** button |

---

## Notes

- Functional probes used routes `/dash/overview/quick-start` and `/dash/overview/capsules` (not bare `/quickstart` or `/capsules`, which return **404**).
- No application code changes; stale main-branch GitBook prose is replaced in the PR with test-platform steps and refreshed Playwright screenshots.