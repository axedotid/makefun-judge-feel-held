import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "The kettle clicks off. Steam leans, then thins.",
  "A cup warms both your hands.",
  "Dust turns slowly in the window light, in no hurry to land.",
  "Nothing here is keeping score.",
  "The light moves. The cup stays warm.",
].join("\n");

const dir = "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, { encoding: "utf8" });
process.exit(0);