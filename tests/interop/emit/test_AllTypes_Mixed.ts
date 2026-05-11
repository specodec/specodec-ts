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


function testModel_model_arr1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ModelArr1Codec;
  try {
    const mp = readFile(join(vec, "ModelArr1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ModelArr1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ModelArr1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ModelArr1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_model_arr2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ModelArr2Codec;
  try {
    const mp = readFile(join(vec, "ModelArr2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ModelArr2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ModelArr2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ModelArr2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_model_arr3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ModelArr3Codec;
  try {
    const mp = readFile(join(vec, "ModelArr3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ModelArr3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ModelArr3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ModelArr3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_model_arr4(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ModelArr4Codec;
  try {
    const mp = readFile(join(vec, "ModelArr4.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr4.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr4 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ModelArr4.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr4.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr4 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ModelArr4.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr4.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr4 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ModelArr4.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr4.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr4 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_model_arr5(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ModelArr5Codec;
  try {
    const mp = readFile(join(vec, "ModelArr5.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr5.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr5 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ModelArr5.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr5.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr5 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ModelArr5.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr5.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr5 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ModelArr5.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ModelArr5.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ModelArr5 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix01(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix01Codec;
  try {
    const mp = readFile(join(vec, "Mix01.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix01.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix01 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix01.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix01.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix01 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix01.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix01.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix01 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix01.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix01.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix01 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix02(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix02Codec;
  try {
    const mp = readFile(join(vec, "Mix02.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix02.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix02 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix02.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix02.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix02 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix02.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix02.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix02 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix02.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix02.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix02 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix03(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix03Codec;
  try {
    const mp = readFile(join(vec, "Mix03.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix03.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix03 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix03.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix03.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix03 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix03.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix03.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix03 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix03.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix03.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix03 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix04(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix04Codec;
  try {
    const mp = readFile(join(vec, "Mix04.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix04.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix04 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix04.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix04.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix04 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix04.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix04.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix04 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix04.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix04.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix04 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix05(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix05Codec;
  try {
    const mp = readFile(join(vec, "Mix05.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix05.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix05 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix05.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix05.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix05 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix05.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix05.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix05 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix05.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix05.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix05 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix06(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix06Codec;
  try {
    const mp = readFile(join(vec, "Mix06.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix06.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix06 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix06.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix06.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix06 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix06.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix06.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix06 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix06.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix06.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix06 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix07(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix07Codec;
  try {
    const mp = readFile(join(vec, "Mix07.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix07.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix07 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix07.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix07.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix07 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix07.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix07.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix07 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix07.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix07.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix07 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix08(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix08Codec;
  try {
    const mp = readFile(join(vec, "Mix08.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix08.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix08 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix08.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix08.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix08 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix08.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix08.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix08 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix08.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix08.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix08 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix09(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix09Codec;
  try {
    const mp = readFile(join(vec, "Mix09.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix09.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix09 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix09.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix09.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix09 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix09.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix09.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix09 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix09.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix09.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix09 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix10(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix10Codec;
  try {
    const mp = readFile(join(vec, "Mix10.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix10.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix10 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix10.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix10.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix10 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix10.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix10.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix10 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix10.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix10.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix10 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix11(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix11Codec;
  try {
    const mp = readFile(join(vec, "Mix11.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix11.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix11 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix11.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix11.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix11 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix11.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix11.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix11 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix11.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix11.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix11 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix12(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix12Codec;
  try {
    const mp = readFile(join(vec, "Mix12.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix12.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix12 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix12.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix12.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix12 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix12.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix12.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix12 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix12.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix12.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix12 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix13(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix13Codec;
  try {
    const mp = readFile(join(vec, "Mix13.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix13.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix13 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix13.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix13.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix13 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix13.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix13.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix13 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix13.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix13.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix13 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix14(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix14Codec;
  try {
    const mp = readFile(join(vec, "Mix14.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix14.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix14 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix14.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix14.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix14 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix14.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix14.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix14 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix14.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix14.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix14 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mix15(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Mix15Codec;
  try {
    const mp = readFile(join(vec, "Mix15.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix15.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix15 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Mix15.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix15.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix15 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Mix15.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix15.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix15 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Mix15.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Mix15.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Mix15 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_all_opt1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.AllOpt1Codec;
  try {
    const mp = readFile(join(vec, "AllOpt1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "AllOpt1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "AllOpt1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "AllOpt1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_all_opt2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.AllOpt2Codec;
  try {
    const mp = readFile(join(vec, "AllOpt2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "AllOpt2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "AllOpt2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "AllOpt2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_all_opt3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.AllOpt3Codec;
  try {
    const mp = readFile(join(vec, "AllOpt3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "AllOpt3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "AllOpt3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "AllOpt3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_all_opt4(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.AllOpt4Codec;
  try {
    const mp = readFile(join(vec, "AllOpt4.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt4.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt4 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "AllOpt4.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt4.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt4 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "AllOpt4.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt4.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt4 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "AllOpt4.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt4.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt4 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_all_opt5(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.AllOpt5Codec;
  try {
    const mp = readFile(join(vec, "AllOpt5.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt5.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt5 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "AllOpt5.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt5.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt5 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "AllOpt5.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt5.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt5 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "AllOpt5.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "AllOpt5.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL AllOpt5 gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesMixed(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pmodel_arr1, fmodel_arr1] = testModel_model_arr1(vec, out); passed += pmodel_arr1; failed += fmodel_arr1;
  let [pmodel_arr2, fmodel_arr2] = testModel_model_arr2(vec, out); passed += pmodel_arr2; failed += fmodel_arr2;
  let [pmodel_arr3, fmodel_arr3] = testModel_model_arr3(vec, out); passed += pmodel_arr3; failed += fmodel_arr3;
  let [pmodel_arr4, fmodel_arr4] = testModel_model_arr4(vec, out); passed += pmodel_arr4; failed += fmodel_arr4;
  let [pmodel_arr5, fmodel_arr5] = testModel_model_arr5(vec, out); passed += pmodel_arr5; failed += fmodel_arr5;
  let [pmix01, fmix01] = testModel_mix01(vec, out); passed += pmix01; failed += fmix01;
  let [pmix02, fmix02] = testModel_mix02(vec, out); passed += pmix02; failed += fmix02;
  let [pmix03, fmix03] = testModel_mix03(vec, out); passed += pmix03; failed += fmix03;
  let [pmix04, fmix04] = testModel_mix04(vec, out); passed += pmix04; failed += fmix04;
  let [pmix05, fmix05] = testModel_mix05(vec, out); passed += pmix05; failed += fmix05;
  let [pmix06, fmix06] = testModel_mix06(vec, out); passed += pmix06; failed += fmix06;
  let [pmix07, fmix07] = testModel_mix07(vec, out); passed += pmix07; failed += fmix07;
  let [pmix08, fmix08] = testModel_mix08(vec, out); passed += pmix08; failed += fmix08;
  let [pmix09, fmix09] = testModel_mix09(vec, out); passed += pmix09; failed += fmix09;
  let [pmix10, fmix10] = testModel_mix10(vec, out); passed += pmix10; failed += fmix10;
  let [pmix11, fmix11] = testModel_mix11(vec, out); passed += pmix11; failed += fmix11;
  let [pmix12, fmix12] = testModel_mix12(vec, out); passed += pmix12; failed += fmix12;
  let [pmix13, fmix13] = testModel_mix13(vec, out); passed += pmix13; failed += fmix13;
  let [pmix14, fmix14] = testModel_mix14(vec, out); passed += pmix14; failed += fmix14;
  let [pmix15, fmix15] = testModel_mix15(vec, out); passed += pmix15; failed += fmix15;
  let [pall_opt1, fall_opt1] = testModel_all_opt1(vec, out); passed += pall_opt1; failed += fall_opt1;
  let [pall_opt2, fall_opt2] = testModel_all_opt2(vec, out); passed += pall_opt2; failed += fall_opt2;
  let [pall_opt3, fall_opt3] = testModel_all_opt3(vec, out); passed += pall_opt3; failed += fall_opt3;
  let [pall_opt4, fall_opt4] = testModel_all_opt4(vec, out); passed += pall_opt4; failed += fall_opt4;
  let [pall_opt5, fall_opt5] = testModel_all_opt5(vec, out); passed += pall_opt5; failed += fall_opt5;
  return [passed, failed];
}
