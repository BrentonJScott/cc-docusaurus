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
- Shared prerequisite pages live in `docs/shared/`. Link to them; never repeat their steps.

## Words
- Address the reader as "you." Write steps in the imperative ("Click **Next**").
- Use short sentences and plain words. Don't use "simply," "just," or "easy."
- Put UI labels in bold, exactly as they appear on screen: **Create Capsule**, **Build Command**.
- Put values the reader types or selects in code format: `npm run build`, `main`.
- Name UI controls by what they say or do, not by colour or position alone ("click **New Space**," not "click the yellow `+` on the bottom left").
- Don't name UI frameworks. Say "dropdown," not "ng-select."

## Links and images
- Internal links use the docs path, such as `/docs/shared/create-a-space`, never a `codecapsules.io` URL.
- Link text says where the link goes, never "here."
- Every image has alt text that describes what it shows.
