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


function testModel_wide20(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide20Codec;
  try {
    const mp = readFile(join(vec, "Wide20.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide20.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide20.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide20.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide25(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide25Codec;
  try {
    const mp = readFile(join(vec, "Wide25.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide25.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide25.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide25.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide30(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide30Codec;
  try {
    const mp = readFile(join(vec, "Wide30.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide30.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide30.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide30.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide35(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide35Codec;
  try {
    const mp = readFile(join(vec, "Wide35.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide35.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide35.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide35.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide40(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide40Codec;
  try {
    const mp = readFile(join(vec, "Wide40.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide40.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide40.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide40.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesWide(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pwide20, fwide20] = testModel_wide20(vec, out); passed += pwide20; failed += fwide20;
  let [pwide25, fwide25] = testModel_wide25(vec, out); passed += pwide25; failed += fwide25;
  let [pwide30, fwide30] = testModel_wide30(vec, out); passed += pwide30; failed += fwide30;
  let [pwide35, fwide35] = testModel_wide35(vec, out); passed += pwide35; failed += fwide35;
  let [pwide40, fwide40] = testModel_wide40(vec, out); passed += pwide40; failed += fwide40;
  return [passed, failed];
}
