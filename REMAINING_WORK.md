# Pocketwise Beta — Remaining Work Checklist

Last reviewed: 2026-10-23

Repository: https://github.com/arorasaatvik2510-cloud/Pocket  
Current branch: `main`  
App: Pocketwise — Expense Tracker Beta

## Current verified state

- [x] A single-page `index.html` app exists in the repository.
- [x] `.github/workflows/deploy-pages.yml` exists and is triggered by changes to `index.html` or the workflow itself, with a manual dispatch option.
- [x] Core local-only beta features are implemented: income/expense transactions, categories, current-month balance, monthly spending budget, month/type filters, currency display selection, delete one transaction, clear-all confirmation, browser-local persistence, and CSV export.
- [x] The app visibly warns that data stays in this browser/device and is not backed up to a cloud account.
- [ ] GitHub Pages deployment is not yet successful. The latest run stopped at **Configure GitHub Pages** because the Actions token was denied permission to create the Pages site (`Resource not accessible by integration`). The upload/deploy steps were skipped.

## P0 — Publish the existing beta

- [ ] Open repository Settings → Pages: https://github.com/arorasaatvik2510-cloud/Pocket/settings/pages
- [ ] Under **Build and deployment**, set **Source** to **GitHub Actions** and save. The current workflow cannot create the Pages site with its present token, so perform this setting in repository Settings.
- [ ] Re-run the workflow from Actions: https://github.com/arorasaatvik2510-cloud/Pocket/actions
- [ ] Confirm both the build job and deploy job pass; confirm the GitHub Pages deployment environment contains a live URL.
- [ ] Open the published site on desktop and a mobile viewport and confirm it loads quickly without missing assets or JavaScript errors.

## P1 — Reliability and repository handoff

- [ ] Replace the minimal README with purpose, features, beta limitations, local run instructions, deployment instructions, backup warning, and the published URL after it is verified.
- [ ] Add a small smoke-test checklist or automated browser test for transaction creation, income/expense totals, filters, individual deletion, CSV export, currency display, budget edits, and persistence after refresh.
- [ ] Test fresh browser storage, malformed/missing stored data, empty transaction list, budget of zero, and long descriptions/notes.
- [ ] Review local date handling: the current app derives the current date/month with ISO UTC strings; ensure displayed dates/month totals behave correctly in the user's local timezone.
- [ ] Confirm CSV export works across supported browsers and that users understand they must keep their own backup.

## P2 — Product decisions before a broader release

- [ ] Decide whether this is intentionally a local-only tracker. If cloud sync/accounts are required, design and test an appropriate backend and privacy/security model before adding them.
- [ ] Decide whether users need transaction editing and CSV/backup import; neither is currently exposed in the UI.
- [ ] Clarify that the currency selector changes formatting only; the current app does not fetch exchange rates or convert entered amounts.
- [ ] If installability is required, add and test a PWA manifest, app icons, and service-worker/offline behavior; do not claim PWA installation until verified.
- [ ] Document data deletion, device/browser storage limits, and the consequence of clearing browser data.

## Definition of done

- [ ] GitHub Actions has a successful Pages deployment.
- [ ] Published link is confirmed and smoke-tested on desktop and mobile.
- [ ] README accurately describes the current local-only beta.
- [ ] Known limitations are clearly disclosed; optional account/cloud features are not implied to exist.
