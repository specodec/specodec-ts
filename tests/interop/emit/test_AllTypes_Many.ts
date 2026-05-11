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


function testModel_five01(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five01Codec;
  try {
    const mp = readFile(join(vec, "Five01.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five01.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five01.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five01.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five02(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five02Codec;
  try {
    const mp = readFile(join(vec, "Five02.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five02.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five02.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five02.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five03(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five03Codec;
  try {
    const mp = readFile(join(vec, "Five03.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five03.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five03.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five03.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five04(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five04Codec;
  try {
    const mp = readFile(join(vec, "Five04.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five04.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five04.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five04.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five05(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five05Codec;
  try {
    const mp = readFile(join(vec, "Five05.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five05.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five05.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five05.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five06(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five06Codec;
  try {
    const mp = readFile(join(vec, "Five06.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five06.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five06.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five06.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five07(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five07Codec;
  try {
    const mp = readFile(join(vec, "Five07.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five07.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five07.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five07.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five08(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five08Codec;
  try {
    const mp = readFile(join(vec, "Five08.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five08.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five08.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five08.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five09(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five09Codec;
  try {
    const mp = readFile(join(vec, "Five09.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five09.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five09.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five09.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five10(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five10Codec;
  try {
    const mp = readFile(join(vec, "Five10.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five10.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five10.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five10.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten01(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten01Codec;
  try {
    const mp = readFile(join(vec, "Ten01.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten01.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten01.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten01.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten02(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten02Codec;
  try {
    const mp = readFile(join(vec, "Ten02.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten02.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten02.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten02.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten03(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten03Codec;
  try {
    const mp = readFile(join(vec, "Ten03.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten03.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten03.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten03.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten04(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten04Codec;
  try {
    const mp = readFile(join(vec, "Ten04.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten04.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten04.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten04.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten05(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten05Codec;
  try {
    const mp = readFile(join(vec, "Ten05.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten05.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten05.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten05.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesMany(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pfive01, ffive01] = testModel_five01(vec, out); passed += pfive01; failed += ffive01;
  let [pfive02, ffive02] = testModel_five02(vec, out); passed += pfive02; failed += ffive02;
  let [pfive03, ffive03] = testModel_five03(vec, out); passed += pfive03; failed += ffive03;
  let [pfive04, ffive04] = testModel_five04(vec, out); passed += pfive04; failed += ffive04;
  let [pfive05, ffive05] = testModel_five05(vec, out); passed += pfive05; failed += ffive05;
  let [pfive06, ffive06] = testModel_five06(vec, out); passed += pfive06; failed += ffive06;
  let [pfive07, ffive07] = testModel_five07(vec, out); passed += pfive07; failed += ffive07;
  let [pfive08, ffive08] = testModel_five08(vec, out); passed += pfive08; failed += ffive08;
  let [pfive09, ffive09] = testModel_five09(vec, out); passed += pfive09; failed += ffive09;
  let [pfive10, ffive10] = testModel_five10(vec, out); passed += pfive10; failed += ffive10;
  let [pten01, ften01] = testModel_ten01(vec, out); passed += pten01; failed += ften01;
  let [pten02, ften02] = testModel_ten02(vec, out); passed += pten02; failed += ften02;
  let [pten03, ften03] = testModel_ten03(vec, out); passed += pten03; failed += ften03;
  let [pten04, ften04] = testModel_ten04(vec, out); passed += pten04; failed += ften04;
  let [pten05, ften05] = testModel_ten05(vec, out); passed += pten05; failed += ften05;
  return [passed, failed];
}
