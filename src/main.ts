import './styles.css';
import * as XLSX from 'xlsx';

// The legacy Pocketwise page uses inline handlers. Expose the bundled library
// after Vite loads the module so the Excel export does not depend on a CDN.
Object.assign(window, { XLSX });
