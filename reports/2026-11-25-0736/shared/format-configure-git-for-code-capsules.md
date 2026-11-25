# Format report: Configure Git for Code Capsules

- **Run**: 2026-11-25-0736
- **Doc**: `docs/shared/configure-git-for-code-capsules.md`
- **Doc type**: How-to guide
- **Template**: `formats/how_to_format.md`
- **Feature**: Connect GitHub or GitLab
- **Goal**: Expect to see repos listed when creating a capsule
- **Format check**: fail
- **Walkthrough**: not run (format fail)

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | intro | Connect GitHub so Code Capsules can list your repositories when you create a Capsule. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card) |
| 3 | remove | `## Prerequisites` | Fork a repository (card): not needed to make repos listable |
| 4 | prerequisite (missing) | `## Connect GitHub for Code Capsules` | "In the capsule wizard, on **Connect a Git Repository**": reader must already have a Space and be on the wizard's Configure screen |
| 5 | goal | `## Connect GitHub for Code Capsules` | Click **Configure Git for Code Capsules** |
| 6 | goal | `## Connect GitHub for Code Capsules` | Complete the GitHub sign-in flow |
| 7 | goal | `## Connect GitHub for Code Capsules` | Grant repository access |
| 8 | goal | `## Connect GitHub for Code Capsules` | Open **Git Repository** dropdown; repository appears |
| 9 | goal | `## Troubleshooting` | Empty dropdown: repeat the flow and select the repository |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Fork card is `remove`; step 1 relies on the wizard being open with no steps or prerequisite to get there; step 3 gives no exact value. |
| Check 2: Prerequisites | fail | A Space (needed to open the capsule wizard) is missing from `## Prerequisites`; the fork card is not a prerequisite for the goal. |
| Check 3: Links | pass | `/docs/shared/create-an-account` and `/docs/shared/fork-a-demo-repo` resolve to existing pages. No images. |
| Check 4: Format and style | fail | Steps heading is not `## <Verb> your <Thing>`; intro does not repeat the description; step 3 offers alternatives and no exact value. |
| Walkthrough | not run | Format fail. |

## Tickets

### configure-git-for-code-capsules-1
- **Type**: Format fix
- **Title**: Rename the steps heading and make the intro repeat the description.
- **Problem**: The steps heading is `## Connect GitHub for Code Capsules`. The intro reads "Connect GitHub so Code Capsules can list your repositories when you create a Capsule." but the `description` reads "Connect GitHub to Code Capsules so your repositories appear in the capsule wizard."
- **Rule**: `how_to_format.md`, Steps: heading "must be `## <Verb> your <Thing>`"; Title and description: the sentences under the title repeat the `description` and match the goal.
- **Change**:
  - [ ] Rename the heading to `## Connect your GitHub account`.
  - [ ] Make the `description` and the intro the same one or two sentences, stating the goal: "Connect GitHub to Code Capsules. When you finish, your repositories are listed in the **Git Repository** dropdown when you create a capsule."
- **Done when**: The heading matches the pattern and the intro text equals the `description`.

### configure-git-for-code-capsules-2
- **Type**: Remove content
- **Title**: Remove the fork card from Prerequisites.
- **Problem**: `## Prerequisites` lists "🍴 Fork a repository" ("Fork the demo repo or one you plan to deploy."). Connecting GitHub so repos are listed does not need a fork.
- **Rule**: `FORMAT.MD` Check 1 (`remove` content), Check 2.
- **Change**: Delete the 🍴 card. Keep the 👤 account card.
- **Done when**: `## Prerequisites` has no fork card.

### configure-git-for-code-capsules-3
- **Type**: Move to prerequisites
- **Title**: Add a Space prerequisite for opening the capsule wizard.
- **Problem**: Step 1 says "In the capsule wizard, on **Connect a Git Repository**, click **Configure Git for Code Capsules**." The reader needs a Space to open the wizard and must pass the Capsule Details, Hosting and Plan screens first; none of this is in Prerequisites or the steps.
- **Rule**: `FORMAT.MD` Check 2 (every prerequisite is in `## Prerequisites`); `how_to_format.md`, Steps (start from a reader who has every prerequisite).
- **Change**: Add the card `{type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'}`. Add a first step that opens the wizard (sidebar **+**, **New Capsule**, then choose **Frontend**, **Static**, **Free** and click **Next** on each screen) so the reader reaches **Connect a Git Repository**, or state in one step how to reach it.
- **Done when**: A reader with every listed prerequisite can reach **Connect a Git Repository** by following the steps.

### configure-git-for-code-capsules-4
- **Type**: Format fix
- **Title**: State exact values in the repository access step.
- **Problem**: Step 3 says "Grant access to the repository you forked, or to all repositories your Team needs." It offers two options and names no value.
- **Rule**: `how_to_format.md`, Steps: "Every value the goal depends on must be stated exactly"; `FORMAT.MD` Check 1 (a value the goal depends on is unclear).
- **Change**: Replace with one path, e.g. "On GitHub, select **Only select repositories**, choose the repository you will deploy, then click **Install & Authorize**." Confirm labels against the live GitHub flow.
- **Done when**: Step 3 gives one path with the exact labels and no alternatives.

## Proposed outline

- Frontmatter (slug, title, description repeating the goal, sidebar_label, `doc_version: drift`) and `DocCardList` import
- `# Configure Git for Code Capsules` + sentence identical to the description
- `## Prerequisites`: 👤 Code Capsules account, 📦 A Space
- `## Connect your GitHub account`
  1. **Open the capsule wizard**: sidebar **+**, **New Capsule**, wizard screens through to **Connect a Git Repository**
  2. **Open Git configuration**: click **Configure Git for Code Capsules**
  3. **Sign in to GitHub**
  4. **Grant repository access**: one exact path
  5. **Confirm the repository list**: **Git Repository** dropdown lists the repository
- `## Troubleshooting`: empty **Git Repository** dropdown
