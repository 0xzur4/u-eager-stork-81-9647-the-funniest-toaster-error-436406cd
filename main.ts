// main.ts — writes the funniest toaster error message to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "WARNING: Your toast has achieved a perfect golden brown. This has never happened before. Please remain calm.";

// Gate (kit RULES.txt): the entry must be UTF-8 text of 1-120 characters,
// a single line, not only white space. This joke is 108 code points.
// The joke earns its laugh from a deadpan appliance voice: the toaster
// treats a perfectly browned slice as an unprecedented event, so the
// warning tells the owner to remain calm about breakfast going right.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 120 || joke.includes("\n")) {
  throw new Error(`joke is invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the joke with no trailing newline, so the file is exactly one line.
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
