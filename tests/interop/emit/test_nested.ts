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


function testModel_nested_simple(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestedSimpleCodec;
  try {
    const mp = readFile(join(vec, "NestedSimple.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedSimple.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedSimple mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestedSimple.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedSimple.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedSimple json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestedSimple.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedSimple.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedSimple unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestedSimple.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedSimple.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedSimple gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runNested(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pnested_simple, fnested_simple] = testModel_nested_simple(vec, out); passed += pnested_simple; failed += fnested_simple;
  return [passed, failed];
}
