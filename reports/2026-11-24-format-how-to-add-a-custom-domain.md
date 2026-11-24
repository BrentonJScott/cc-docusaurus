# Format report: how-to-add-a-custom-domain

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/capsules/how-to-add-a-custom-domain.md
**Doc type:** How-to guide
**Template:** how_to_format.md

**Feature:** Add custom domain to a capsule

**Goal:** Expect to see the custom domain and subdomain listed on the capsule

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [goal] (## Add a Custom Domain) Domains tab, IP, A record steps.
2. [goal] (## Add a Subdomain) CNAME steps.
3. [goal] (## Remove Domains and Subdomains) Trash icon removal.
4. [explain] (## Understanding URL Structure) URL/DNS glossary (whole sections).
5. [fact] (## Glossary of DNS...) Reference material.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (goal steps) | fail | Mixes how-to, reference glossary, remove flow; steps not in one list. |
| Prerequisites | fail | Capsule exists not in Prerequisites. |
| Links | fail | add-domain.png, url-makeup.png missing. |
| Format and style | fail | Extra sections; admonitions/images; missing doc_version. |

## Tickets

### how-to-add-a-custom-domain-1: Split glossary from how-to.

- **Type:** Wrong doc type
- **Title:** Split glossary from how-to.
- **Problem:** Understanding URL Structure and Glossary sections.
- **Rule:** FORMAT.MD Step 1
- **Change:** How-to: add domain + subdomain only; move glossary to Reference/Explanation; link from Related.
- **Done when:** Single how-to type per page.

### how-to-add-a-custom-domain-2: Apply how-to template to domain task.

- **Type:** Format fix
- **Title:** Apply how-to template to domain task.
- **Problem:** Multiple ## sections with ### DNS steps.
- **Rule:** how_to_format.md
- **Change:** Prerequisites (capsule, registrar access); ## Add your custom domain; Troubleshooting DNS propagation.
- **Done when:** Check 4 passes.

### how-to-add-a-custom-domain-3: Remove missing images.

- **Type:** Broken link
- **Title:** Remove missing images.
- **Problem:** Gitbook images not in static/.
- **Rule:** writing_style.md
- **Change:** Remove screenshots.
- **Done when:** Check 3 passes.


## Proposed outline

## Prerequisites
## Add your custom domain and subdomain
## Troubleshooting
