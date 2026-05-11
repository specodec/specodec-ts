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


function testModel_enum_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EnumHolderCodec;
  try {
    const mp = readFile(join(vec, "EnumHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EnumHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EnumHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EnumHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumHolder gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_enum_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptEnumHolderCodec;
  try {
    const mp = readFile(join(vec, "OptEnumHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptEnumHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptEnumHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptEnumHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptEnumHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptEnumHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptEnumHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptEnumHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptEnumHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptEnumHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptEnumHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptEnumHolder gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_enum_array_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EnumArrayHolderCodec;
  try {
    const mp = readFile(join(vec, "EnumArrayHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumArrayHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumArrayHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EnumArrayHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumArrayHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumArrayHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EnumArrayHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumArrayHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumArrayHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EnumArrayHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumArrayHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumArrayHolder gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_enum_mixed_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EnumMixedHolderCodec;
  try {
    const mp = readFile(join(vec, "EnumMixedHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumMixedHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumMixedHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EnumMixedHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumMixedHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumMixedHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EnumMixedHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumMixedHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumMixedHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EnumMixedHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EnumMixedHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EnumMixedHolder gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesEnums(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [penum_holder, fenum_holder] = testModel_enum_holder(vec, out); passed += penum_holder; failed += fenum_holder;
  let [popt_enum_holder, fopt_enum_holder] = testModel_opt_enum_holder(vec, out); passed += popt_enum_holder; failed += fopt_enum_holder;
  let [penum_array_holder, fenum_array_holder] = testModel_enum_array_holder(vec, out); passed += penum_array_holder; failed += fenum_array_holder;
  let [penum_mixed_holder, fenum_mixed_holder] = testModel_enum_mixed_holder(vec, out); passed += penum_mixed_holder; failed += fenum_mixed_holder;
  return [passed, failed];
}
