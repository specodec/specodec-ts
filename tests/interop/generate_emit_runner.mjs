import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const VEC_DIR = process.env.VEC_DIR || path.join(__dir, ".tests-cache", "vectors");

const manifestPath = path.join(VEC_DIR, "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

const models = manifest.testModels;
const scalars = manifest.scalars;

function getReadMethod(type) {
  const map = {
    "int32": "readInt32",
    "int64": "readInt64",
    "uint32": "readUint32",
    "uint64": "readUint64",
    "float32": "readFloat32",
    "float64": "readFloat64",
    "string": "readString",
    "bytes": "readBytes",
    "bool": "readBool",
  };
  return map[type] || "readInt32";
}

function getWriteMethod(type) {
  const map = {
    "int32": "writeInt32",
    "int64": "writeInt64",
    "uint32": "writeUint32",
    "uint64": "writeUint64",
    "float32": "writeFloat32",
    "float64": "writeFloat64",
    "string": "writeString",
    "bytes": "writeBytes",
    "bool": "writeBool",
  };
  return map[type] || "writeInt32";
}

function toSnakeCase(name) {
  let snake = name.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
  snake = snake.replace(/\./g, '_').replace(/-/g, '_');
  return snake;
}

let scalarFuncs = '';
let scalarCalls = '';
for (const [name, info] of Object.entries(scalars)) {
  const snake = toSnakeCase(name);
  const funcName = `testScalar_${snake}`;
  scalarFuncs += `
function ${funcName}(): [number, number] {
  try {
    const mp = read("scalars/${name}.mp");
    const r = new MsgPackReader(mp);
    const val = r.${getReadMethod(info.type)}();
    const w = new MsgPackWriter();
    w.${getWriteMethod(info.type)}(val);
    write("scalars/${name}.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL ${name} mp: " + e.message); return [0, 1]; }
}
`;
  scalarCalls += `let [p${snake}, f${snake}] = ${funcName}(); passed += p${snake}; failed += f${snake};\n`;
}

let modelFuncs = '';
let modelCalls = '';
for (const model of models) {
  const snake = toSnakeCase(model);
  const funcName = `testModel_${snake}`;
  modelFuncs += `
function ${funcName}(): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.${model}Codec;
  try {
    const mp = read("${model}.msgpack");
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    write("${model}.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} mp: " + e.message); failed++; }
  try {
    const json = read("${model}.json");
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    write("${model}.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} json: " + e.message); failed++; }
  try {
    const unformatted = read("${model}.unformatted.json");
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    write("${model}.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} unformatted: " + e.message); failed++; }
  try {
    const gron = read("${model}.gron");
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    write("${model}.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ${model} gron: " + e.message); failed++; }
  return [passed, failed];
}
`;
  modelCalls += `let [p${snake}, f${snake}] = ${funcName}(); passed += p${snake}; failed += f${snake};\n`;
}

const code = `import * as gen from "./generated/all_types_types.js";
import { JsonReader, JsonWriter, GronReader, GronWriter, MsgPackReader, MsgPackWriter } from "@specodec/specodec-runtime-typescript";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const VEC_DIR = process.env.VEC_DIR || path.join(__dir, "..", ".tests-cache", "vectors");
const OUT_DIR = process.env.OUT_DIR || path.join(__dir, "..", "output");

function read(file: string) { return fs.readFileSync(path.join(VEC_DIR, file)); }
function write(file: string, data: Buffer) { 
  const dir = path.dirname(path.join(OUT_DIR, file));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, file), data); 
}

${scalarFuncs}

${modelFuncs}

let passed = 0, failed = 0;

// Scalar tests
${scalarCalls}

// Object tests
${modelCalls}

console.log("emit-ts: " + passed + " passed, " + failed + " failed");
if (failed > 0) process.exit(1);
`;

const outFile = path.join(__dir, "src", "run_emit.ts");
fs.writeFileSync(outFile, code);
console.log("Generated src/run_emit.ts with " + models.length + " models + " + Object.keys(scalars).length + " scalars");