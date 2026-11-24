# Writing Style

These rules apply to every doc type: How-to guides (`how_to_format.md`), Tutorials (`tutorial_format.md`), Reference pages (`reference_format.md`), and Explanations (`explanation_format.md`).

## Choose the doc type
- **How-to guide:** the reader wants to get one task done.
- **Tutorial:** the reader wants to learn by building something.
- **Reference:** the reader wants to look up a fact.
- **Explanation:** the reader wants to understand a topic.
- One page is one type. If a page mixes them, split it and link the parts together.

## Every doc
- Frontmatter has `slug`, `title`, `description`, `sidebar_label`, and `doc_version: drift`.
- The page has one `#` title. Directly under it, `<Description />` shows the `description` as the lead.
- Shared prerequisite pages live in `docs/shared/`. Link to them; never repeat their steps.

## Words
- Address the reader as "you." Write steps in the imperative ("Click **Next**").
- Use short sentences and plain words. Don't use "simply," "just," or "easy."
- Put UI labels in bold, exactly as they appear on screen: **Create Capsule**, **Build Command**.
- Put values the reader types or selects in code format: `npm run build`, `main`.
- Name UI controls by what they say or do, not by colour or position alone ("click **New Space**," not "click the yellow `+` on the bottom left").
- Don't name UI frameworks. Say "dropdown," not "ng-select."

## Page pieces
Every doc type uses the same page components, so all pages look the same. They live in `src/components/DocBlocks/` and are available in every doc without an import. Each one wraps plain Markdown, so headings, lists, and text stay in the doc source. Colours and spacing come from the theme in `src/css/custom.css`; don't add inline styles.

| Component | Use it for | Used by |
|---|---|---|
| `<Description />` | The frontmatter `description` as the lead under the `#` title. | Every doc |
| `<LinkCards>` with `<LinkCard title to icon>` | Any list of links: Prerequisites, Next steps, Related. | Every doc |
| `<Steps>` | Wraps a numbered list; draws each number as a circle joined by a line. The last circle is yellow. | How-to guides, Tutorials |
| `<Callout kind="checkpoint">` | What the reader should see at the end of a part. | Tutorials |
| `<Callout kind="example">` | One worked example. | Reference pages |
| `<Accordion>` | Wraps `<details>` blocks; each becomes a gray box with a yellow border that expands. | How-to guides, Tutorials |

- **Cards.** Each card is `<LinkCard title="<Title>" to="<link>" icon="<icon>">` with one line of text inside. The title is two to five words. The text says what the reader does or finds there. Use one icon per kind of page:

  | `icon` | Links to |
  |---|---|
  | `account` | Create an account, or another account to sign up for |
  | `fork` | Fork a demo repo |
  | `space` | Create a Space |
  | `git` | Connect GitHub |
  | `guide` | How-to guide |
  | `tutorial` | Tutorial |
  | `reference` | Reference page |
  | `explanation` | Explanation |
  | `tool` | A tool to install, such as Node.js |

  A card needs a link. Something with nothing to link to, such as "basic knowledge of React," goes in one sentence under the cards.
- **Steps.** Each step is a list item with a bold title, then its description and any code indented under it. No "Step N:" headings. A list that starts at another number, such as `4.`, keeps its numbering. Indent everything under a step to line up with the title: 3 spaces under `1.` to `9.`, 4 spaces under `10.` and above. With less, the text drops out of the step and the numbering breaks.
- **Blank lines.** Leave a blank line after every opening tag and before every closing tag (`<Steps>`, `<Callout>`, `<Accordion>`, `<details>` bodies). Without it, the Markdown inside isn't rendered.

## Links and images
- Internal links use the docs path, such as `/docs/shared/create-a-space`, never a `codecapsules.io` URL.
- Link text says where the link goes, never "here."
- No screenshots or other images in docs for now. They'll be added back later.
