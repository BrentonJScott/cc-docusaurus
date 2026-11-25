# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/database/mysql/flask-+-mysql.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Deploy Flask with MySQL
- **Goal:** Expect to Deploy a Flask app with a MySQL database on Code Capsules from GitHub. Connect Flask to a managed MySQL Data Capsule, step by step
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Step 2 selects `codecapsules-io/demo-flask-mysql` while Prerequisites require forking the repo to the reader's GitHub. |
| Check 2: Prerequisites | fail | GitHub prerequisite links to `configure-git-for-code-capsules` with 🔌 emoji instead of `/docs/shared/connect-github`. |
| Check 3: Links | pass | Internal `/docs/` links resolve. |
| Check 4: Format and style | fail | Repository in steps must match fork prerequisite; several steps do not open with wizard screen names. |

## Tickets

### flask-+-mysql-1

- **ID:** flask-+-mysql-1
- **Type:** Missing goal step
- **Title:** Use the reader's fork in Configure
- **Problem:** Step 2 **Create the Backend capsule** sets Repository to `codecapsules-io/demo-flask-mysql` instead of the fork from Prerequisites.
- **Rule:** FORMAT.MD Check 1 How-to: values the goal depends on must match prerequisites
- **Change:** Set **Repository** to the reader's `demo-flask-mysql` fork and `main` branch explicitly in step 2.
- **Done when:** Steps name the same repo the fork prerequisite describes.

### flask-+-mysql-2

- **ID:** flask-+-mysql-2
- **Type:** Format fix
- **Title:** Link GitHub prerequisite to connect-github
- **Problem:** Prerequisites card href is `/docs/shared/configure-git-for-code-capsules`.
- **Rule:** how_to_format.md Prerequisites: use 🔌 GitHub connected → `/docs/shared/connect-github`
- **Change:** Point the GitHub card at `/docs/shared/connect-github` with description about granting repo access.
- **Done when:** Card matches the shared GitHub pattern used in other deploy guides.

## Proposed outline

How-to with Prerequisites, `## Deploy your Flask MySQL app` steps through MySQL + Backend connect, Troubleshooting.
