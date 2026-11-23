# Template fit review: docusaurus-docs against the Diátaxis templates

- **Run:** 2026-11-23
- **Source:** https://github.com/codecapsules-io/docusaurus-docs (`main`, 20a15c2), all 225 pages in `docs/`
- **Templates:** `how_to_format.md`, `tutorial_format.md`, `reference_format.md`, `explanation_format.md`, `writing_style.md`

## Summary

No page fits a template as it is today. 149 pages fit after a rewrite. 76 don't fit: either they mix doc types and need splitting, or no template exists for their shape.

| Area | Pages | Fit with rewrite | Don't fit |
|---|---|---|---|
| Deploy guides (`backend`, `frontend`, `full-stack`, `database`, root pages) | 51 | 39 | 12 |
| Products (`products/`) | 99 | 64 | 35 |
| Platform, CLI, Sandbox, Enterprise, Agentic Automation | 50 | 28 | 22 |
| Tutorials (`tutorials/`) | 25 | 18 | 7 |
| **Total** | **225** | **149** | **76** |

| Diátaxis type | Pages |
|---|---|
| How-to | 107 |
| Mixed (two or more types on one page) | 48 |
| Landing (navigation only) | 25 |
| Explanation | 16 |
| Tutorial | 15 |
| Reference | 14 |

## Issues on almost every page

- No `doc_version: drift` in the frontmatter; many pages have no `sidebar_label`.
- Setup, Create an Account, and Create a Space are written as steps instead of linked prerequisites.
- No `## Goal` or `## Troubleshooting` section. Troubleshooting content has to be written from scratch for nearly every How-to guide.
- Images sit inside the steps.
- Style breaches: "the yellow **+**" (about 14 pages), "simply" and "here" link text, `codecapsules.io` links.

## Pages that mix types (48)

This is the main Diátaxis finding. These pages need splitting, not just restructuring.

- **Configure pages** (11): a settings reference plus several edit tasks. Split into a settings Reference and one How-to per task.
- **WordPress feature pages** (caching, cron, security, performance, routing): explanation, environment-variable reference, and how-to on one page.
- **Feature pages** such as health checks, custom domains, Docker builds, Sandbox environments: concept, settings, and tasks together.
- **Persistent storage and the database index pages**: "What is…", create and bind steps, per-language code, and a second task.
- **Tutorials folder**: the Heroku migration, production WordPress, and white-label pages combine explanation, tutorial, and reference.

## Template gaps

| # | Gap | Pages | Template | Diátaxis view |
|---|---|---|---|---|
| 1 | Landing and index pages have no template | ~25 | new `landing_format.md` | Not a Diátaxis type; it's navigation, so it needs its own template |
| 2 | Very short How-tos (1–3 actions: Logs, Monitor, Scale, billing, account) | ~40 | how-to | Fine: allow a short variant with Troubleshooting optional |
| 3 | Several goals on one page (Add and Remove, backups manual/schedule/restore) | ~15 | how-to | Split: one goal per page |
| 4 | No `## Related` in How-to guides, so links only go one way | ~50 | how-to | Diátaxis encourages linking between types: add optional Related |
| 5 | Alternative paths (Default vs Git Managed, language, OS) | ~20 | how-to | Allowed in How-tos: tabs inside one step, split if paths differ for 2+ steps |
| 6 | Multi-capsule guides (create two capsules and bind them) | ~13 | how-to | Fine: each capsule is a step, prerequisites may link to other How-tos |
| 7 | Bot guides: third-party setup and a goal outside Code Capsules | 7 | how-to | Fine: independent setup is a prerequisite, setup needing the capsule URL is a step |
| 8 | Per-command and per-method reference (CLI, SDK, API) | ~10 | reference | Fits Diátaxis: add a per-entry pattern (Usage, Arguments, Options, Returns, Example) |
| 9 | Settings and environment-variable reference | ~17 | reference | Fits Diátaxis: add **Setting/Variable \| Default \| Values \| Effect** tables. Steps stay out |
| 10 | Short concept pages ("What is a Space") | ~6 | explanation | Allow a short variant; consider one page for related building blocks |
| 11 | Explanation series (Agentic Automation) | 5 | explanation | Allow a series: Why/How/When once across the series |
| 12 | "Coming soon" pages | ~11 | explanation | Allow a stub, or keep stubs out of the sidebar |
| 13 | Tutorials that deploy first, then extend | ~6 | tutorial | Fine: rule becomes "by the final checkpoint the app runs on Code Capsules" |
| 14 | Checkpoints for APIs and bots | 15 | tutorial | Fine: a checkpoint can be expected output (terminal, HTTP response, chat reply) |
| 15 | Very long code (280–400 lines) | ~5 | tutorial | Fine: allow changed lines plus a link to the finished repo |
| 16 | Best-practice and tips articles | ~5 | explanation | Explanation, not a new type: allow one `##` section per practice |
| 17 | Migration guides | 1–2 | how-to | A How-to (or Tutorial), not a new type; mapping tables go in a Reference |
| 18 | Screenshots grouped at the end make long flows hard to follow | ~50 | how-to | Not a Diátaxis rule. Team decision |

## Suggestions not taken

These conflict with Diátaxis:
- Bring back "What you'll learn" or concept boxes in tutorials. Tutorials describe what the reader does and link to Explanations.
- Allow a "Change a setting" steps block in Reference pages. Steps go in a How-to linked from Related.
- New "article" and "migration" doc types. Diátaxis has four types; these fit Explanation and How-to.

## Pages that need new content, not just restructuring

- `tutorials/getting-started-with-mean-stack-a-step-by-step-tutorial.md`: deploy section recommends other hosts.
- `tutorials/nuxt3-and-nitro.md`: describes Nitro incorrectly; nothing Nuxt-specific is deployed.
- `enterprise/*.md` and `products/enterprise-clusters/overview.md`: "Coming soon" only.
- `platform/account/how-do-i-reset-my-password.md`: describes changing a password, not resetting a forgotten one.
- `platform/account/how-do-i-enable-2fa.md` and `backend/node.js/express.js.md`: stop before the goal.
