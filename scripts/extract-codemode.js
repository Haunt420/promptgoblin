/**
 * Standalone CodeMode Unpacker
 * Parses any text file containing Format CodeMode blocks and extracts
 * all files to their respective paths, automatically creating directories.
 *
 * Usage: node scripts/extract-codemode.js <path-to-codemode-file>
 */
const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2] || 'full.txt';

if (!fs.existsSync(inputFile)) {
  console.error(`Error: Input file "${inputFile}" not found.`);
  process.exit(1);
}

const content = fs.readFileSync(inputFile, 'utf-8');
const regex = /\[\[\[ START FILE: (.+?) \]\]\]\r?\n([\s\S]*?)\r?\n\[\[\[ END FILE \]\]\]/g;

let match;
let count = 0;

while ((match = regex.exec(content)) !== null) {
  const relPath = match[1].trim();
  const fileContent = match[2];

  const fullPath = path.resolve(process.cwd(), relPath);
  const dirName = path.dirname(fullPath);

  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }

  fs.writeFileSync(fullPath, fileContent, 'utf-8');
  console.log(`[Extracted] ${relPath}`);
  count++;
}

console.log(`\nSuccess: Extracted ${count} files from ${inputFile}.`);
