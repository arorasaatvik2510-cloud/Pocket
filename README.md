# Pocketwise — Expense Tracker Beta

Pocketwise is a responsive, browser-local expense tracker beta.

## Current features

- Add income and expense records with date, type, description, category, amount and note.
- See current-month income, expenses, net balance and transaction count.
- Edit the monthly spending budget (default: ₹1,200).
- Filter entries by month and transaction type; delete one entry or clear all saved entries with confirmation.
- Review monthly history with category breakdown, income/expense totals and budget status.
- View the live six-column ledger sheet inside the app.
- Export an Excel workbook (.xlsx) with **Dashboard** and **Transactions** sheets, and export a CSV backup.
- Save records, currency and budget in this browser using local storage.

## Important beta limitation

This build is **local-only**. Records remain in the browser/device where they were entered. There is no account login, cloud backup or cross-device sync. Clearing browser/site data may remove records; export CSV or Excel backups regularly.

The currency selector changes number formatting only; it does not convert balances using live exchange rates. Excel exports are snapshots made when you click the export button; they do not update a previously downloaded file.

## Run locally

Requires Node.js 22 or a compatible current Node release.

```bash
npm install
npm run dev
```

Build for static hosting:

```bash
npm run build
```

The production bundle is written to `dist/`.

## Deploy with GitHub Pages

1. In repository Settings → Pages, set **Source** to **GitHub Actions** and save. The connected GitHub integration cannot enable the repository Pages site on your behalf.
2. Run **Actions → Publish Pocketwise Beta** or push a source update to `main`.
3. Confirm the build job passes and the deploy job passes; then test the resulting URL on desktop and mobile.

Live AppDeploy beta: https://pocketwise-expense-tracker-beta-gz9icz.v2.appdeploy.ai/
