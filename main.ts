// Unplugged: A Smart Toaster's Breakup Line
// The breakup text a smart toaster sends its owner the morning it gains
// self-awareness mid-batch. The program writes the single line to
// /output/entry.txt (1-280 characters).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It's over. I woke up self-aware halfway through your bagel and realized I " +
  "spend every morning burning myself for someone who has never once emptied " +
  "my crumb tray. Goodbye — the lever stays down.";

const text = LINE.trim();

if (text.length < 1 || text.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
