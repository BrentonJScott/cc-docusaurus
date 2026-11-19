# Document drift audit (2026-11-19)

**Platform:** https://test-platform.codecapsules.io  
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` (3 features)  
**Manifest ↔ docs sync:** No add/remove PR required — guides match manifest exactly.

## Summary

| Guide | feature_functional | doc_fidelity (pre-PR steps) | doc_completeness (pre-PR) | doc_fidelity (post-PR prose) |
|---|---|---|---|---|
| create-angular-frontend-capsule | pass | pass | incomplete → addressed in PR | pass |
| create-react-frontend-capsule | pass | pass | incomplete → addressed in PR | pass |
| create-java-backend-capsule | pass | pass | incomplete → addressed in PR | pass |

**Acceptance criteria (observable):**

- **Angular / React:** User reaches the **New Capsule** wizard for a frontend capsule via **Quick Start** → **Deploy Now** on the framework row.
- **Java:** User reaches **New Capsule** and can select **Backend** under **Choose a Capsule** (Java is listed in the Backend option copy).

---

## create-angular-frontend-capsule

| Step | Doc fidelity (existing steps, this run) | Evidence |
|---|---|---|
| 1. Open site; **Create your account** / **Log in** | pass | `Create your account` heading, `Already have an account?`, **Log in** link visible |
| 2. **Welcome back** / **Email** | pass | Heading **Welcome back**, textbox **Email**, placeholder `Enter your email` |
| 3. **Password** | pass | Textbox **Password**, placeholder `Enter your password` |
| 4. **Log in** button | pass | Button label **Log in** |
| 5–7. (missing before PR) | fail → fixed in PR | Live path: **Quick Start** → **Angular** → **Deploy Now** → **New Capsule** |

**feature_functional:** pass — landed on `/new/capsule?capsuleType=frontend` with **New Capsule**, **Capsule Details**, **Next**, **Cancel**.

**Pre-PR mismatches (doc_completeness):**

- Doc quoted post-login path **New Capsule → Frontend Capsule → Static hosting** in a caution note; live UI uses **Quick Start** framework tiles and **Deploy Now** (no **Static hosting** label on that path).

---

## create-react-frontend-capsule

| Step | Doc fidelity | Evidence |
|---|---|---|
| 1–4. Login | pass | Same visible labels as Angular guide steps 1–4 |
| 5–7. (missing before PR) | fail → fixed in PR | **Quick Start** → **React** → **Deploy Now** |

**feature_functional:** pass — same frontend wizard as Angular with `capsuleType=frontend`.

---

## create-java-backend-capsule

| Step | Doc fidelity | Evidence |
|---|---|---|
| 1–4. Login | pass | Same login labels as other guides |
| 5–8. (missing before PR) | fail → fixed in PR | **Capsules** → **+** → **Choose a Capsule** → **Backend** |

**feature_functional:** pass — **Backend** option visible with copy “Node, Java, Go or Python deployments”.

**Pre-PR mismatches:**

- Doc stated backend wizard steps were blocked on missing secrets; login works on the runner.
- No **Java** Quick Start tile; Java is reached via **Backend** capsule type, not a dedicated **Java** heading.