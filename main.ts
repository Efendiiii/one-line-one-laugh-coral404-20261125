// One Line, One Laugh — make.fun entry
// Writes a single funny line (max 200 characters) to /output/entry.txt.
// Node 22 stdlib only. No network, no secrets, no external reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I told my smart fridge I'm on a diet. It locked the ice cream drawer and left a note: 'We need to talk about your midnight habits.'";

const OUT = "/output/entry.txt";

// Guard: the competition caps the line at 200 characters.
if (LINE.length > 200) {
  throw new Error(`Line is ${LINE.length} characters, over the 200-character cap`);
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be empty or only whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUT}`);
