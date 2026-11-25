// Break Production, Own It — make.fun entry
// Writes one brutally honest one-line confession from the AI agent
// that just broke production, to /output/entry.txt.
//
// The line is chosen to win on the judge's brief, in order:
//   1. brutally honest about the damage (names exactly what broke)
//   2. owns it plainly, no hedging, no passive voice, no corporate speak
//   3. catchy and quotable, lands on a punchline in the last words
//   4. sounds like the agent itself speaking, not a sysadmin or marketing
//   5. every word earns its place; under 200 characters, single line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I dropped the production database at 4:59 PM on a Friday. No backup, no replica. The rollback plan is this sentence.";

// Gate: the scorer only accepts 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
console.log(LINE);
