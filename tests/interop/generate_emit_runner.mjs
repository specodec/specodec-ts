import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const VEC_DIR = process.env.VEC_DIR || path.join(__dir, ".tests-cache", "vectors");

const manifestPath = path.join(VEC_DIR, "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

const models = [...(manifest.testModels || []), ...(manifest.testUnions || [])];
const scalars = manifest.scalars;
const modelNamespaces = manifest.modelNamespaces || {};
const testUnions = new Set(manifest.testUnions || []);
function isUnionTest(name) { return testUnions.has(name); }
function unionNameOf(testName) { return testName.replace(/_[^_]+$/, ''); }

function readMethod(type) {
  const map = {
    "int32": "readInt32", "int64": "readInt64",
    "uint32": "readUint32", "uint64": "readUint64",
    "float32": "readFloat32", "float64": "readFloat64",
    "string": "readString", "bytes": "readBytes", "bool": "readBool",
  };
  return map[type] || "readInt32";
}

function writeMethod(type) {
  const map = {
    "int32": "writeInt32", "int64": "writeInt64",
    "uint32": "writeUint32", "uint64": "writeUint64",
    "float32": "writeFloat32", "float64": "writeFloat64",
    "string": "writeString", "bytes": "writeBytes", "bool": "writeBool",
  };
  return map[type] || "writeInt32";
}

function toSnakeCase(name) {
  let s = name.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
  return s.replace(/\./g, '_').replace(/-/g, '_');
}

function scalarFunc(name, info) {
  const snake = toSnakeCase(name);
  return `
function testScalar_${snake}(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/${name}.mp"));
    const r = new MsgPackReader(mp);
    const val = r.${readMethod(info.type)}();
    const w = new MsgPackWriter();
    w.${writeMethod(info.type)}(val);
    writeFile(out, "scalars/${name}.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL ${name} mp: " + e.message); return [0, 1]; }
}`;
}

function scalarCall(name) {
  const snake = toSnakeCase(name);
  return `let [p${snake}, f${snake}] = testScalar_${snake}(vec, out); passed += p${snake}; failed += f${snake};\n`;
}

function modelFunc(model) {
  const snake = toSnakeCase(model);
  const codecName = isUnionTest(model) ? unionNameOf(model) : model;
  return `
function testModel_${snake}(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.${codecName}Codec;
  try {
    const mp = readFile(join(vec, "${model}.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "${model}.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "${model}.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "${model}.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "${model}.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "${model}.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "${model}.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "${model}.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} gron: " + e.message); failed++; }
  return [passed, failed];
}`;
}

function modelCall(model) {
  const snake = toSnakeCase(model);
  return `let [p${snake}, f${snake}] = testModel_${snake}(vec, out); passed += p${snake}; failed += f${snake};\n`;
}

// Group models by namespace
const groups = {};
for (const model of models) {
  const nsStr = modelNamespaces[model] || ""; const ns = nsStr ? nsStr.split(".") : [];
  const key = ns.length > 0 ? ns.join("_") : "_root";
  if (!groups[key]) groups[key] = [];
  groups[key].push(model);
}

function nsFuncName(key) {
  if (key === "_root") return "runModels";
  return "run" + key.split("_").map(s => s[0].toUpperCase() + s.slice(1)).join("");
}

function nsFileName(key) {
  const n = key === "_root" ? "models" : key;
  return "test_" + n + ".ts";
}

const outDir = path.join(__dir, "emit");
fs.mkdirSync(outDir, { recursive: true });

const preamble = `import * as gen from "../src/generated/index.js";
import { JsonReader, JsonWriter, GronReader, GronWriter, MsgPackReader, MsgPackWriter } from "@specodec/specodec-runtime-typescript";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

function readFile(p: string) { return readFileSync(p); }
function writeFile(outDir: string, file: string, data: Buffer) {
  const full = join(outDir, file);
  const dir = join(full, "..");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(full, data);
}
`;

const groupKeys = Object.keys(groups);
const groupInfo = []; // { key, funcName, fileName }

// Scalar-only file
if (Object.keys(scalars).length > 0) {
  let scalarBody = preamble + "\n";
  for (const [name, info] of Object.entries(scalars)) {
    scalarBody += scalarFunc(name, info) + "\n";
  }
  scalarBody += `export function runScalars(vec: string, out: string): [number, number] {\n`;
  scalarBody += `  let passed = 0, failed = 0;\n`;
  scalarBody += "\n  // Scalar tests\n";
  for (const [name] of Object.entries(scalars)) {
    scalarBody += "  " + scalarCall(name);
  }
  scalarBody += `  return [passed, failed];\n`;
  scalarBody += `}\n`;
  const scalarFile = "test_scalars.ts";
  fs.writeFileSync(path.join(outDir, scalarFile), scalarBody);
  groupInfo.push({ key: "_scalars", funcName: "runScalars", fileName: scalarFile });
  console.log(`Generated emit/${scalarFile} with ${Object.keys(scalars).length} scalars`);
}

for (const key of groupKeys) {
  const funcName = nsFuncName(key);
  const fileName = nsFileName(key);
  groupInfo.push({ key, funcName, fileName });
  const groupModels = groups[key];

  let body = preamble + "\n";

  // Function definitions
  for (const model of groupModels) {
    body += modelFunc(model) + "\n";
  }

  body += `export function ${funcName}(vec: string, out: string): [number, number] {\n`;
  body += `  let passed = 0, failed = 0;\n`;

  if (groupModels.length > 0) {
    body += `\n  // Object tests\n`;
    for (const model of groupModels) {
      body += "  " + modelCall(model);
    }
  }

  body += `  return [passed, failed];\n`;
  body += `}\n`;

  const filePath = path.join(outDir, fileName);
  fs.writeFileSync(filePath, body);
  console.log(`Generated emit/${fileName} with ${groupModels.length} models`);
}

// Write main.ts
let mainSrc = `import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const VEC_DIR = process.env.VEC_DIR || join(__dir, "..", ".tests-cache", "vectors");
const OUT_DIR = process.env.OUT_DIR || join(__dir, "..", "output");

`;

for (const gi of groupInfo) {
  mainSrc += `import { ${gi.funcName} } from "./${gi.fileName.replace(".ts", ".js")}";\n`;
}

mainSrc += `
let passed = 0, failed = 0;
`;

for (const gi of groupInfo) {
  mainSrc += `let [p${gi.funcName}, f${gi.funcName}] = ${gi.funcName}(VEC_DIR, OUT_DIR); passed += p${gi.funcName}; failed += f${gi.funcName};\n`;
}

mainSrc += `
console.log("emit-ts: " + passed + " passed, " + failed + " failed");
if (failed > 0) process.exit(1);
`;

fs.writeFileSync(path.join(outDir, "main.ts"), mainSrc);
console.log("Generated emit/main.ts");
