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
- The page has one `#` title. Directly under it, one or two sentences repeat the `description`.
- Pages that use cards import `DocCardList` between the frontmatter and the title (see [Page pieces](#page-pieces)).
- Shared prerequisite pages live in `docs/shared/`. Link to them; never repeat their steps.

## Words
- Address the reader as "you." Write steps in the imperative ("Click **Next**").
- Use short sentences and plain words. Don't use "simply," "just," or "easy."
- Put UI labels in bold, exactly as they appear on screen: **Create Capsule**, **Build Command**.
- Put values the reader types or selects in code format: `npm run build`, `main`.
- Name UI controls by what they say or do, not by colour or position alone ("click **New Space**," not "click the yellow `+` on the bottom left").
- Don't name UI frameworks. Say "dropdown," not "ng-select."

## Page pieces
Every doc type uses the same built-in Docusaurus pieces, so all pages feel the same. `src/css/custom.css` styles them on every page, so the markup must match the patterns below exactly. Don't add custom components, CSS, inline `style` props, or other files.

- **Cards for lists of links.** Prerequisites, Next steps, and Related are a `DocCardList` of cards, not bullets. Import it once, directly after the frontmatter: `import DocCardList from '@theme/DocCardList';`. Each card is `{type: 'link', href: '<link>', label: '<emoji> <Title>', description: '<One line.>'}`.
  - The title is two to five words. The description is one line saying what the reader does or finds there.
  - The emoji picks the card's line icon. Use one from this table; any other emoji shows a page icon:

    | Emoji | Links to |
    |---|---|
    | 👤 | Create an account |
    | 🍴 | Fork a demo repo |
    | 📦 | Create a Space |
    | 🔌 | Connect GitHub |
    | 🛠️ | How-to guide |
    | 🎓 | Tutorial |
    | 📋 | Reference page |
    | 💡 | Explanation |
    | 💻 | A tool to install, such as Node.js |

  - A card needs a link. Something with nothing to link to, such as "basic knowledge of React," goes in one sentence under the cards.
- **Numbered lists for steps.** Each step is a list item with a bold title alone on its first line, a blank line, then its description and any code indented under it. No "Step N:" headings. A list styles as steps only when its first item starts with a bold title on its own line:

  ```md
  1. **Connect the repository**

     On **Configure**, select ...
  ```
- **Gray boxes with a yellow border for troubleshooting.** Each entry is a collapsed plain `<details>` block, with no `style` prop:

  ```md
  <details>
  <summary>The symptom, as the reader sees it</summary>

  The cause, then the fix.

  </details>
  ```

## Links and images
- Internal links use the docs path, such as `/docs/shared/create-a-space`, never a `codecapsules.io` URL.
- Link text says where the link goes, never "here."
- No screenshots or other images in docs for now. They'll be added back later.
