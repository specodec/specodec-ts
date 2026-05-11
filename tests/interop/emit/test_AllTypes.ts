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


function testModel_opt_inner(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptInnerCodec;
  try {
    const mp = readFile(join(vec, "OptInner.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptInner.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptInner.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptInner.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [popt_inner, fopt_inner] = testModel_opt_inner(vec, out); passed += popt_inner; failed += fopt_inner;
  return [passed, failed];
}
