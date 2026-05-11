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


function testModel_arr_string(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ArrStringCodec;
  try {
    const mp = readFile(join(vec, "ArrString.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrString.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrString mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ArrString.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrString.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrString json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ArrString.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrString.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrString unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ArrString.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrString.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrString gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_arr_int32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ArrInt32Codec;
  try {
    const mp = readFile(join(vec, "ArrInt32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ArrInt32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ArrInt32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ArrInt32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_arr_boolean(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ArrBooleanCodec;
  try {
    const mp = readFile(join(vec, "ArrBoolean.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBoolean.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBoolean mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ArrBoolean.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBoolean.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBoolean json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ArrBoolean.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBoolean.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBoolean unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ArrBoolean.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBoolean.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBoolean gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_arr_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ArrFloat64Codec;
  try {
    const mp = readFile(join(vec, "ArrFloat64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrFloat64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrFloat64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ArrFloat64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrFloat64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrFloat64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ArrFloat64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrFloat64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrFloat64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ArrFloat64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrFloat64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrFloat64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_arr_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ArrBytesCodec;
  try {
    const mp = readFile(join(vec, "ArrBytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ArrBytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ArrBytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ArrBytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrBytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrBytes gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_arr_int64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ArrInt64Codec;
  try {
    const mp = readFile(join(vec, "ArrInt64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ArrInt64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ArrInt64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ArrInt64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrInt64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrInt64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_arr_uint64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ArrUint64Codec;
  try {
    const mp = readFile(join(vec, "ArrUint64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrUint64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrUint64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ArrUint64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrUint64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrUint64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ArrUint64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrUint64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrUint64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ArrUint64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ArrUint64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ArrUint64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_multi_arr1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MultiArr1Codec;
  try {
    const mp = readFile(join(vec, "MultiArr1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MultiArr1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MultiArr1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MultiArr1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_multi_arr2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MultiArr2Codec;
  try {
    const mp = readFile(join(vec, "MultiArr2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MultiArr2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MultiArr2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MultiArr2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_multi_arr3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MultiArr3Codec;
  try {
    const mp = readFile(join(vec, "MultiArr3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MultiArr3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MultiArr3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MultiArr3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_multi_arr4(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MultiArr4Codec;
  try {
    const mp = readFile(join(vec, "MultiArr4.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr4.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr4 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MultiArr4.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr4.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr4 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MultiArr4.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr4.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr4 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MultiArr4.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr4.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr4 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_multi_arr5(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MultiArr5Codec;
  try {
    const mp = readFile(join(vec, "MultiArr5.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr5.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr5 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MultiArr5.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr5.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr5 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MultiArr5.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr5.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr5 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MultiArr5.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MultiArr5.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MultiArr5 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo1Codec;
  try {
    const mp = readFile(join(vec, "OptCombo1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo2Codec;
  try {
    const mp = readFile(join(vec, "OptCombo2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo3Codec;
  try {
    const mp = readFile(join(vec, "OptCombo3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo4(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo4Codec;
  try {
    const mp = readFile(join(vec, "OptCombo4.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo4.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo4 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo4.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo4.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo4 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo4.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo4.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo4 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo4.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo4.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo4 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo5(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo5Codec;
  try {
    const mp = readFile(join(vec, "OptCombo5.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo5.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo5 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo5.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo5.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo5 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo5.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo5.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo5 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo5.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo5.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo5 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo6(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo6Codec;
  try {
    const mp = readFile(join(vec, "OptCombo6.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo6.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo6 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo6.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo6.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo6 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo6.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo6.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo6 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo6.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo6.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo6 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo7(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo7Codec;
  try {
    const mp = readFile(join(vec, "OptCombo7.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo7.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo7 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo7.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo7.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo7 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo7.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo7.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo7 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo7.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo7.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo7 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo8Codec;
  try {
    const mp = readFile(join(vec, "OptCombo8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo9(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo9Codec;
  try {
    const mp = readFile(join(vec, "OptCombo9.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo9.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo9 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo9.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo9.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo9 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo9.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo9.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo9 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo9.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo9.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo9 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_combo10(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptCombo10Codec;
  try {
    const mp = readFile(join(vec, "OptCombo10.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo10.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo10 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptCombo10.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo10.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo10 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptCombo10.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo10.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo10 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptCombo10.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptCombo10.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptCombo10 gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesArrays(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [parr_string, farr_string] = testModel_arr_string(vec, out); passed += parr_string; failed += farr_string;
  let [parr_int32, farr_int32] = testModel_arr_int32(vec, out); passed += parr_int32; failed += farr_int32;
  let [parr_boolean, farr_boolean] = testModel_arr_boolean(vec, out); passed += parr_boolean; failed += farr_boolean;
  let [parr_float64, farr_float64] = testModel_arr_float64(vec, out); passed += parr_float64; failed += farr_float64;
  let [parr_bytes, farr_bytes] = testModel_arr_bytes(vec, out); passed += parr_bytes; failed += farr_bytes;
  let [parr_int64, farr_int64] = testModel_arr_int64(vec, out); passed += parr_int64; failed += farr_int64;
  let [parr_uint64, farr_uint64] = testModel_arr_uint64(vec, out); passed += parr_uint64; failed += farr_uint64;
  let [pmulti_arr1, fmulti_arr1] = testModel_multi_arr1(vec, out); passed += pmulti_arr1; failed += fmulti_arr1;
  let [pmulti_arr2, fmulti_arr2] = testModel_multi_arr2(vec, out); passed += pmulti_arr2; failed += fmulti_arr2;
  let [pmulti_arr3, fmulti_arr3] = testModel_multi_arr3(vec, out); passed += pmulti_arr3; failed += fmulti_arr3;
  let [pmulti_arr4, fmulti_arr4] = testModel_multi_arr4(vec, out); passed += pmulti_arr4; failed += fmulti_arr4;
  let [pmulti_arr5, fmulti_arr5] = testModel_multi_arr5(vec, out); passed += pmulti_arr5; failed += fmulti_arr5;
  let [popt_combo1, fopt_combo1] = testModel_opt_combo1(vec, out); passed += popt_combo1; failed += fopt_combo1;
  let [popt_combo2, fopt_combo2] = testModel_opt_combo2(vec, out); passed += popt_combo2; failed += fopt_combo2;
  let [popt_combo3, fopt_combo3] = testModel_opt_combo3(vec, out); passed += popt_combo3; failed += fopt_combo3;
  let [popt_combo4, fopt_combo4] = testModel_opt_combo4(vec, out); passed += popt_combo4; failed += fopt_combo4;
  let [popt_combo5, fopt_combo5] = testModel_opt_combo5(vec, out); passed += popt_combo5; failed += fopt_combo5;
  let [popt_combo6, fopt_combo6] = testModel_opt_combo6(vec, out); passed += popt_combo6; failed += fopt_combo6;
  let [popt_combo7, fopt_combo7] = testModel_opt_combo7(vec, out); passed += popt_combo7; failed += fopt_combo7;
  let [popt_combo8, fopt_combo8] = testModel_opt_combo8(vec, out); passed += popt_combo8; failed += fopt_combo8;
  let [popt_combo9, fopt_combo9] = testModel_opt_combo9(vec, out); passed += popt_combo9; failed += fopt_combo9;
  let [popt_combo10, fopt_combo10] = testModel_opt_combo10(vec, out); passed += popt_combo10; failed += fopt_combo10;
  return [passed, failed];
}
