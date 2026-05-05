import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const VEC_DIR = process.env.VEC_DIR || join(__dir, "..", ".tests-cache", "vectors");
const OUT_DIR = process.env.OUT_DIR || join(__dir, "..", "output");

import { runModels } from "./test_models.js";
import { runNested } from "./test_nested.js";
import { runNestedDeep } from "./test_nested_deep.js";

let passed = 0, failed = 0;
let [prunModels, frunModels] = runModels(VEC_DIR, OUT_DIR); passed += prunModels; failed += frunModels;
let [prunNested, frunNested] = runNested(VEC_DIR, OUT_DIR); passed += prunNested; failed += frunNested;
let [prunNestedDeep, frunNestedDeep] = runNestedDeep(VEC_DIR, OUT_DIR); passed += prunNestedDeep; failed += frunNestedDeep;

console.log("emit-ts: " + passed + " passed, " + failed + " failed");
if (failed > 0) process.exit(1);
