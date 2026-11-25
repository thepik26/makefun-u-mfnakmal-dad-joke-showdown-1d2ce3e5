// Dad Joke Showdown entry: writes the one joke in entry.txt to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt by default).
// Stdlib only, no network, fully deterministic.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const joke = readFileSync(join(here, "entry.txt"), "utf8");
if (joke.trim().length === 0) {
  throw new Error("entry.txt is empty");
}
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
