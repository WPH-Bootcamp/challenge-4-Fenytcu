// bonus/export.js
// =====================================
// EXPOR DATA DALAM FORMAT JSON (ES MODULE)
// =====================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname untuk ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Export ALL class summaries into a JSON file
 * @param {Array} summaries - Array of class summaries
 * @param {string} filename - Output file name
 */
export function exportAllToJSON(summaries, filename = 'class-report.json') {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, JSON.stringify(summaries, null, 2), 'utf8');
  console.log(`✔ File exported successfully: ${filePath}`);
}

/**
 * Export ONLY a single class summary
 * @param {Object} summary
 * @param {string} filename
 */
export function exportOneClass(summary, filename = 'class-single-report.json') {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, JSON.stringify(summary, null, 2), 'utf8');
  console.log(`✔ Single class report exported: ${filePath}`);
}

/**
 * DEFAULT EXPORT (supaya import exportJSON from './export.js' tidak error)
 * Default = exportAllToJSON
 */
export default exportAllToJSON;
