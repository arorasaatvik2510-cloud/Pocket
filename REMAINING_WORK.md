# Pocketwise Beta — Remaining Work Checklist

Last reviewed: 2026-10-26

Repository: https://github.com/arorasaatvik2510-cloud/Pocket
AppDeploy beta: https://pocketwise-expense-tracker-beta-gz9icz.v2.appdeploy.ai/

## Verified state

- [x] Existing AppDeploy deployment is marked ready.
- [x] AppDeploy source includes transaction entry, local persistence, ₹1,200 default budget, month/type filters, monthly history, in-app six-column ledger, XLSX workbook export and CSV export.
- [x] GitHub repository is being synchronized to the current AppDeploy source and Vite build structure.
- [x] Pages workflow builds the Vite production bundle and uploads `dist/`.
- [x] The current beta is labeled local-only; it does not claim to have accounts or cloud sync.

## Remaining

- [ ] Enable GitHub Pages once in repository Settings → Pages → Build and deployment → Source = **GitHub Actions**. The previous run stopped because the Pages site did not exist.
- [ ] After enabling Pages, run the workflow and verify the published URL on desktop and mobile.
- [ ] Real interactive browser tests are still needed for transaction creation/deletion, persistence, history, workbook and CSV downloads, mobile layout, and malformed local storage.
- [ ] Cloud accounts, server-side backup and cross-device sync are not implemented. They need an authenticated backend and row-level access control before being advertised.
- [ ] Commit a package lockfile after dependencies are finalized.
- [ ] Check local-time handling for dates/monthly totals; the current app derives the current date/month from UTC ISO strings.

## Known limitations

- The currency selector changes formatting only; it does not perform exchange-rate conversion.
- Excel export creates a snapshot on demand; a previously downloaded workbook does not live-update.
- Clearing browser/site storage can remove local records. Users should keep CSV/Excel backups.
