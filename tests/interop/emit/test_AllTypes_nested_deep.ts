import * as gen from "../src/generated/index.js";
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


function testModel_deep_model(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepModelCodec;
  try {
    const mp = readFile(join(vec, "DeepModel.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepModel.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepModel mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepModel.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepModel.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepModel json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepModel.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepModel.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepModel unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepModel.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepModel.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepModel gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesNestedDeep(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pdeep_model, fdeep_model] = testModel_deep_model(vec, out); passed += pdeep_model; failed += fdeep_model;
  return [passed, failed];
}
