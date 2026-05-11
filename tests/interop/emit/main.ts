import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const VEC_DIR = process.env.VEC_DIR || join(__dir, "..", ".tests-cache", "vectors");
const OUT_DIR = process.env.OUT_DIR || join(__dir, "..", "output");

import { runScalars } from "./test_scalars.js";
import { runAllTypes } from "./test_AllTypes.js";
import { runAllTypesScalars } from "./test_AllTypes_Scalars.js";
import { runAllTypesOpt } from "./test_AllTypes_Opt.js";
import { runAllTypesPairs } from "./test_AllTypes_Pairs.js";
import { runAllTypesMany } from "./test_AllTypes_Many.js";
import { runAllTypesArrays } from "./test_AllTypes_Arrays.js";
import { runAllTypesNests } from "./test_AllTypes_Nests.js";
import { runAllTypesMixed } from "./test_AllTypes_Mixed.js";
import { runAllTypesRecursive } from "./test_AllTypes_Recursive.js";
import { runAllTypesWide } from "./test_AllTypes_Wide.js";
import { runAllTypesEdge } from "./test_AllTypes_Edge.js";
import { runAllTypesExtra } from "./test_AllTypes_Extra.js";
import { runAllTypesNested } from "./test_AllTypes_nested.js";
import { runAllTypesNestedDeep } from "./test_AllTypes_nested_deep.js";
import { runAllTypesEnums } from "./test_AllTypes_Enums.js";
import { runAllTypesUnions } from "./test_AllTypes_Unions.js";
import { runModels } from "./test_models.js";

let passed = 0, failed = 0;
let [prunScalars, frunScalars] = runScalars(VEC_DIR, OUT_DIR); passed += prunScalars; failed += frunScalars;
let [prunAllTypes, frunAllTypes] = runAllTypes(VEC_DIR, OUT_DIR); passed += prunAllTypes; failed += frunAllTypes;
let [prunAllTypesScalars, frunAllTypesScalars] = runAllTypesScalars(VEC_DIR, OUT_DIR); passed += prunAllTypesScalars; failed += frunAllTypesScalars;
let [prunAllTypesOpt, frunAllTypesOpt] = runAllTypesOpt(VEC_DIR, OUT_DIR); passed += prunAllTypesOpt; failed += frunAllTypesOpt;
let [prunAllTypesPairs, frunAllTypesPairs] = runAllTypesPairs(VEC_DIR, OUT_DIR); passed += prunAllTypesPairs; failed += frunAllTypesPairs;
let [prunAllTypesMany, frunAllTypesMany] = runAllTypesMany(VEC_DIR, OUT_DIR); passed += prunAllTypesMany; failed += frunAllTypesMany;
let [prunAllTypesArrays, frunAllTypesArrays] = runAllTypesArrays(VEC_DIR, OUT_DIR); passed += prunAllTypesArrays; failed += frunAllTypesArrays;
let [prunAllTypesNests, frunAllTypesNests] = runAllTypesNests(VEC_DIR, OUT_DIR); passed += prunAllTypesNests; failed += frunAllTypesNests;
let [prunAllTypesMixed, frunAllTypesMixed] = runAllTypesMixed(VEC_DIR, OUT_DIR); passed += prunAllTypesMixed; failed += frunAllTypesMixed;
let [prunAllTypesRecursive, frunAllTypesRecursive] = runAllTypesRecursive(VEC_DIR, OUT_DIR); passed += prunAllTypesRecursive; failed += frunAllTypesRecursive;
let [prunAllTypesWide, frunAllTypesWide] = runAllTypesWide(VEC_DIR, OUT_DIR); passed += prunAllTypesWide; failed += frunAllTypesWide;
let [prunAllTypesEdge, frunAllTypesEdge] = runAllTypesEdge(VEC_DIR, OUT_DIR); passed += prunAllTypesEdge; failed += frunAllTypesEdge;
let [prunAllTypesExtra, frunAllTypesExtra] = runAllTypesExtra(VEC_DIR, OUT_DIR); passed += prunAllTypesExtra; failed += frunAllTypesExtra;
let [prunAllTypesNested, frunAllTypesNested] = runAllTypesNested(VEC_DIR, OUT_DIR); passed += prunAllTypesNested; failed += frunAllTypesNested;
let [prunAllTypesNestedDeep, frunAllTypesNestedDeep] = runAllTypesNestedDeep(VEC_DIR, OUT_DIR); passed += prunAllTypesNestedDeep; failed += frunAllTypesNestedDeep;
let [prunAllTypesEnums, frunAllTypesEnums] = runAllTypesEnums(VEC_DIR, OUT_DIR); passed += prunAllTypesEnums; failed += frunAllTypesEnums;
let [prunAllTypesUnions, frunAllTypesUnions] = runAllTypesUnions(VEC_DIR, OUT_DIR); passed += prunAllTypesUnions; failed += frunAllTypesUnions;
let [prunModels, frunModels] = runModels(VEC_DIR, OUT_DIR); passed += prunModels; failed += frunModels;

console.log("emit-ts: " + passed + " passed, " + failed + " failed");
if (failed > 0) process.exit(1);
