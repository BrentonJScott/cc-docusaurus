# Read audit — How does pricing work

- **Run:** 2026-11-24T07:22:37Z
- **Doc file:** `docs/c/how-does-the-pricing-work.md`
- **Format report:** [2026-11-24-format-how-does-the-pricing-work.md](./2026-11-24-format-how-does-the-pricing-work.md) (pass)
- **Manifest goal:** Document reads and makes sense for a user
- **Manifest goals reached:** **yes**

## Actions taken

1. Read the page top to bottom after format check passed.
2. Checked that overview rules, tables, and examples tell a consistent pricing story.
3. Confirmed **Related** links point at deployment docs that use plans named on this page.

## Guide alignment

| # | Status | Expected | What happened |
|---|--------|----------|---------------|
| 1 | pass | Overview states billing model and free-tier limits | Hourly billing, five free static frontends, paid from $3/month |
| 2 | pass | Capsule starting prices use clear units | Table lists `$0/month`, `$3/month`, etc. |
| 3 | pass | Static plan limits are scannable | Free vs Paid table covers traffic, build size, builds |
| 4 | pass | Examples combine values sensibly | Free portfolio and Basic+Backend scenarios with totals |
| 5 | pass | Page is reference-only (no hidden setup steps) | No procedural drift |

## Mismatches / issues

- MongoDB and other database capsule prices are not listed (only PostgreSQL appears in the capsule table). A reader planning a MERN stack may need to infer database pricing elsewhere.

## Suggested fixes

- Add MongoDB (or generic database) starting prices to **Capsule prices**, or link **Related** to a database pricing reference if one exists.