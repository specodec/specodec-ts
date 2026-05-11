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


function testModel_union_field_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.UnionFieldHolderCodec;
  try {
    const mp = readFile(join(vec, "UnionFieldHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionFieldHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionFieldHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "UnionFieldHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionFieldHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionFieldHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "UnionFieldHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionFieldHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionFieldHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "UnionFieldHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionFieldHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionFieldHolder gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_union_field_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptUnionFieldHolderCodec;
  try {
    const mp = readFile(join(vec, "OptUnionFieldHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionFieldHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionFieldHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptUnionFieldHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionFieldHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionFieldHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptUnionFieldHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionFieldHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionFieldHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptUnionFieldHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionFieldHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionFieldHolder gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_union_array_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.UnionArrayHolderCodec;
  try {
    const mp = readFile(join(vec, "UnionArrayHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionArrayHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionArrayHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "UnionArrayHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionArrayHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionArrayHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "UnionArrayHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionArrayHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionArrayHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "UnionArrayHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionArrayHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionArrayHolder gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_union_mixed_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.UnionMixedHolderCodec;
  try {
    const mp = readFile(join(vec, "UnionMixedHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionMixedHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionMixedHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "UnionMixedHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionMixedHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionMixedHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "UnionMixedHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionMixedHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionMixedHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "UnionMixedHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionMixedHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionMixedHolder gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_union_scalar_holder(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.UnionScalarHolderCodec;
  try {
    const mp = readFile(join(vec, "UnionScalarHolder.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionScalarHolder.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionScalarHolder mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "UnionScalarHolder.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionScalarHolder.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionScalarHolder json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "UnionScalarHolder.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionScalarHolder.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionScalarHolder unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "UnionScalarHolder.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "UnionScalarHolder.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL UnionScalarHolder gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesUnions(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [punion_field_holder, funion_field_holder] = testModel_union_field_holder(vec, out); passed += punion_field_holder; failed += funion_field_holder;
  let [popt_union_field_holder, fopt_union_field_holder] = testModel_opt_union_field_holder(vec, out); passed += popt_union_field_holder; failed += fopt_union_field_holder;
  let [punion_array_holder, funion_array_holder] = testModel_union_array_holder(vec, out); passed += punion_array_holder; failed += funion_array_holder;
  let [punion_mixed_holder, funion_mixed_holder] = testModel_union_mixed_holder(vec, out); passed += punion_mixed_holder; failed += funion_mixed_holder;
  let [punion_scalar_holder, funion_scalar_holder] = testModel_union_scalar_holder(vec, out); passed += punion_scalar_holder; failed += funion_scalar_holder;
  return [passed, failed];
}
