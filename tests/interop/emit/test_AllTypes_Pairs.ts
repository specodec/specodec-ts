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


function testModel_pair_string(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairStringCodec;
  try {
    const mp = readFile(join(vec, "PairString.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairString.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairString mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairString.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairString.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairString json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairString.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairString.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairString unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairString.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairString.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairString gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_boolean(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairBooleanCodec;
  try {
    const mp = readFile(join(vec, "PairBoolean.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBoolean.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBoolean mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairBoolean.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBoolean.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBoolean json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairBoolean.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBoolean.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBoolean unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairBoolean.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBoolean.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBoolean gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_int8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairInt8Codec;
  try {
    const mp = readFile(join(vec, "PairInt8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairInt8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairInt8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairInt8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_int16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairInt16Codec;
  try {
    const mp = readFile(join(vec, "PairInt16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairInt16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairInt16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairInt16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_int32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairInt32Codec;
  try {
    const mp = readFile(join(vec, "PairInt32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairInt32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairInt32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairInt32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_int64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairInt64Codec;
  try {
    const mp = readFile(join(vec, "PairInt64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairInt64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairInt64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairInt64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairInt64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairInt64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_uint8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairUint8Codec;
  try {
    const mp = readFile(join(vec, "PairUint8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairUint8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairUint8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairUint8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_uint16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairUint16Codec;
  try {
    const mp = readFile(join(vec, "PairUint16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairUint16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairUint16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairUint16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_uint32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairUint32Codec;
  try {
    const mp = readFile(join(vec, "PairUint32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairUint32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairUint32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairUint32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_uint64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairUint64Codec;
  try {
    const mp = readFile(join(vec, "PairUint64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairUint64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairUint64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairUint64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairUint64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairUint64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_float32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairFloat32Codec;
  try {
    const mp = readFile(join(vec, "PairFloat32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairFloat32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairFloat32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairFloat32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairFloat64Codec;
  try {
    const mp = readFile(join(vec, "PairFloat64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairFloat64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairFloat64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairFloat64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairFloat64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairFloat64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_pair_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.PairBytesCodec;
  try {
    const mp = readFile(join(vec, "PairBytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "PairBytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "PairBytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "PairBytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "PairBytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL PairBytes gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_string_int32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualStringInt32Codec;
  try {
    const mp = readFile(join(vec, "DualStringInt32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualStringInt32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualStringInt32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualStringInt32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_string_boolean(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualStringBooleanCodec;
  try {
    const mp = readFile(join(vec, "DualStringBoolean.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBoolean.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBoolean mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualStringBoolean.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBoolean.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBoolean json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualStringBoolean.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBoolean.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBoolean unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualStringBoolean.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBoolean.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBoolean gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_string_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualStringFloat64Codec;
  try {
    const mp = readFile(join(vec, "DualStringFloat64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringFloat64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringFloat64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualStringFloat64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringFloat64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringFloat64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualStringFloat64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringFloat64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringFloat64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualStringFloat64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringFloat64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringFloat64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_string_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualStringBytesCodec;
  try {
    const mp = readFile(join(vec, "DualStringBytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualStringBytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualStringBytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualStringBytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringBytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringBytes gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int32_boolean(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt32BooleanCodec;
  try {
    const mp = readFile(join(vec, "DualInt32Boolean.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Boolean.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Boolean mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt32Boolean.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Boolean.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Boolean json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt32Boolean.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Boolean.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Boolean unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt32Boolean.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Boolean.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Boolean gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int32_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt32Float64Codec;
  try {
    const mp = readFile(join(vec, "DualInt32Float64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Float64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Float64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt32Float64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Float64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Float64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt32Float64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Float64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Float64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt32Float64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Float64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Float64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int32_int64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt32Int64Codec;
  try {
    const mp = readFile(join(vec, "DualInt32Int64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Int64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Int64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt32Int64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Int64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Int64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt32Int64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Int64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Int64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt32Int64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Int64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Int64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int32_uint32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt32Uint32Codec;
  try {
    const mp = readFile(join(vec, "DualInt32Uint32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Uint32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Uint32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt32Uint32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Uint32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Uint32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt32Uint32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Uint32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Uint32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt32Uint32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Uint32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Uint32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int64_uint64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt64Uint64Codec;
  try {
    const mp = readFile(join(vec, "DualInt64Uint64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Uint64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Uint64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt64Uint64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Uint64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Uint64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt64Uint64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Uint64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Uint64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt64Uint64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Uint64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Uint64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_float32_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualFloat32Float64Codec;
  try {
    const mp = readFile(join(vec, "DualFloat32Float64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat32Float64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat32Float64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualFloat32Float64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat32Float64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat32Float64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualFloat32Float64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat32Float64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat32Float64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualFloat32Float64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat32Float64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat32Float64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_float64_boolean(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualFloat64BooleanCodec;
  try {
    const mp = readFile(join(vec, "DualFloat64Boolean.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Boolean.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Boolean mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualFloat64Boolean.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Boolean.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Boolean json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualFloat64Boolean.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Boolean.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Boolean unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualFloat64Boolean.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Boolean.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Boolean gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_float64_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualFloat64BytesCodec;
  try {
    const mp = readFile(join(vec, "DualFloat64Bytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Bytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Bytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualFloat64Bytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Bytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Bytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualFloat64Bytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Bytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Bytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualFloat64Bytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Bytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Bytes gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_uint32_uint64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualUint32Uint64Codec;
  try {
    const mp = readFile(join(vec, "DualUint32Uint64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint32Uint64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint32Uint64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualUint32Uint64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint32Uint64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint32Uint64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualUint32Uint64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint32Uint64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint32Uint64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualUint32Uint64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint32Uint64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint32Uint64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_boolean_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualBooleanBytesCodec;
  try {
    const mp = readFile(join(vec, "DualBooleanBytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanBytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanBytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualBooleanBytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanBytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanBytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualBooleanBytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanBytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanBytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualBooleanBytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanBytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanBytes gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int8_uint8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt8Uint8Codec;
  try {
    const mp = readFile(join(vec, "DualInt8Uint8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Uint8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Uint8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt8Uint8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Uint8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Uint8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt8Uint8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Uint8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Uint8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt8Uint8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Uint8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Uint8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int16_uint16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt16Uint16Codec;
  try {
    const mp = readFile(join(vec, "DualInt16Uint16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt16Uint16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt16Uint16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt16Uint16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt16Uint16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt16Uint16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt16Uint16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt16Uint16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt16Uint16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt16Uint16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt16Uint16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt16Uint16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_string_int64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualStringInt64Codec;
  try {
    const mp = readFile(join(vec, "DualStringInt64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualStringInt64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualStringInt64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualStringInt64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringInt64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringInt64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_string_uint64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualStringUint64Codec;
  try {
    const mp = readFile(join(vec, "DualStringUint64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringUint64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringUint64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualStringUint64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringUint64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringUint64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualStringUint64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringUint64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringUint64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualStringUint64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualStringUint64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualStringUint64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int32_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt32BytesCodec;
  try {
    const mp = readFile(join(vec, "DualInt32Bytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Bytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Bytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt32Bytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Bytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Bytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt32Bytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Bytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Bytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt32Bytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt32Bytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt32Bytes gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_float64_int32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualFloat64Int32Codec;
  try {
    const mp = readFile(join(vec, "DualFloat64Int32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Int32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Int32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualFloat64Int32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Int32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Int32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualFloat64Int32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Int32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Int32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualFloat64Int32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualFloat64Int32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualFloat64Int32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_boolean_int32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualBooleanInt32Codec;
  try {
    const mp = readFile(join(vec, "DualBooleanInt32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanInt32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanInt32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualBooleanInt32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanInt32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanInt32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualBooleanInt32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanInt32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanInt32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualBooleanInt32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBooleanInt32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBooleanInt32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_bytes_int64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualBytesInt64Codec;
  try {
    const mp = readFile(join(vec, "DualBytesInt64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBytesInt64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBytesInt64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualBytesInt64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBytesInt64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBytesInt64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualBytesInt64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBytesInt64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBytesInt64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualBytesInt64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualBytesInt64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualBytesInt64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int8_float32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt8Float32Codec;
  try {
    const mp = readFile(join(vec, "DualInt8Float32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Float32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Float32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt8Float32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Float32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Float32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt8Float32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Float32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Float32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt8Float32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt8Float32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt8Float32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_uint8_int16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualUint8Int16Codec;
  try {
    const mp = readFile(join(vec, "DualUint8Int16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint8Int16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint8Int16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualUint8Int16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint8Int16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint8Int16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualUint8Int16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint8Int16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint8Int16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualUint8Int16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint8Int16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint8Int16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_int64_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualInt64Float64Codec;
  try {
    const mp = readFile(join(vec, "DualInt64Float64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Float64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Float64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualInt64Float64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Float64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Float64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualInt64Float64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Float64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Float64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualInt64Float64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualInt64Float64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualInt64Float64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_dual_uint64_string(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DualUint64StringCodec;
  try {
    const mp = readFile(join(vec, "DualUint64String.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint64String.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint64String mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DualUint64String.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint64String.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint64String json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DualUint64String.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint64String.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint64String unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DualUint64String.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DualUint64String.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DualUint64String gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple01(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple01Codec;
  try {
    const mp = readFile(join(vec, "Triple01.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple01.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple01 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple01.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple01.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple01 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple01.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple01.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple01 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple01.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple01.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple01 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple02(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple02Codec;
  try {
    const mp = readFile(join(vec, "Triple02.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple02.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple02 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple02.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple02.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple02 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple02.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple02.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple02 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple02.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple02.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple02 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple03(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple03Codec;
  try {
    const mp = readFile(join(vec, "Triple03.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple03.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple03 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple03.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple03.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple03 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple03.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple03.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple03 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple03.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple03.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple03 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple04(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple04Codec;
  try {
    const mp = readFile(join(vec, "Triple04.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple04.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple04 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple04.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple04.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple04 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple04.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple04.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple04 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple04.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple04.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple04 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple05(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple05Codec;
  try {
    const mp = readFile(join(vec, "Triple05.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple05.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple05 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple05.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple05.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple05 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple05.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple05.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple05 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple05.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple05.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple05 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple06(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple06Codec;
  try {
    const mp = readFile(join(vec, "Triple06.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple06.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple06 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple06.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple06.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple06 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple06.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple06.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple06 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple06.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple06.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple06 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple07(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple07Codec;
  try {
    const mp = readFile(join(vec, "Triple07.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple07.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple07 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple07.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple07.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple07 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple07.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple07.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple07 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple07.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple07.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple07 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple08(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple08Codec;
  try {
    const mp = readFile(join(vec, "Triple08.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple08.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple08 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple08.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple08.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple08 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple08.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple08.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple08 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple08.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple08.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple08 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple09(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple09Codec;
  try {
    const mp = readFile(join(vec, "Triple09.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple09.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple09 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple09.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple09.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple09 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple09.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple09.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple09 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple09.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple09.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple09 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple10(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple10Codec;
  try {
    const mp = readFile(join(vec, "Triple10.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple10.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple10 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple10.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple10.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple10 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple10.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple10.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple10 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple10.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple10.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple10 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple11(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple11Codec;
  try {
    const mp = readFile(join(vec, "Triple11.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple11.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple11 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple11.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple11.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple11 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple11.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple11.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple11 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple11.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple11.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple11 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple12(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple12Codec;
  try {
    const mp = readFile(join(vec, "Triple12.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple12.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple12 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple12.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple12.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple12 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple12.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple12.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple12 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple12.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple12.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple12 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple13(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple13Codec;
  try {
    const mp = readFile(join(vec, "Triple13.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple13.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple13 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple13.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple13.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple13 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple13.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple13.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple13 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple13.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple13.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple13 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple14(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple14Codec;
  try {
    const mp = readFile(join(vec, "Triple14.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple14.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple14 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple14.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple14.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple14 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple14.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple14.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple14 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple14.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple14.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple14 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_triple15(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Triple15Codec;
  try {
    const mp = readFile(join(vec, "Triple15.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple15.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple15 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Triple15.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple15.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple15 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Triple15.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple15.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple15 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Triple15.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Triple15.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Triple15 gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesPairs(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [ppair_string, fpair_string] = testModel_pair_string(vec, out); passed += ppair_string; failed += fpair_string;
  let [ppair_boolean, fpair_boolean] = testModel_pair_boolean(vec, out); passed += ppair_boolean; failed += fpair_boolean;
  let [ppair_int8, fpair_int8] = testModel_pair_int8(vec, out); passed += ppair_int8; failed += fpair_int8;
  let [ppair_int16, fpair_int16] = testModel_pair_int16(vec, out); passed += ppair_int16; failed += fpair_int16;
  let [ppair_int32, fpair_int32] = testModel_pair_int32(vec, out); passed += ppair_int32; failed += fpair_int32;
  let [ppair_int64, fpair_int64] = testModel_pair_int64(vec, out); passed += ppair_int64; failed += fpair_int64;
  let [ppair_uint8, fpair_uint8] = testModel_pair_uint8(vec, out); passed += ppair_uint8; failed += fpair_uint8;
  let [ppair_uint16, fpair_uint16] = testModel_pair_uint16(vec, out); passed += ppair_uint16; failed += fpair_uint16;
  let [ppair_uint32, fpair_uint32] = testModel_pair_uint32(vec, out); passed += ppair_uint32; failed += fpair_uint32;
  let [ppair_uint64, fpair_uint64] = testModel_pair_uint64(vec, out); passed += ppair_uint64; failed += fpair_uint64;
  let [ppair_float32, fpair_float32] = testModel_pair_float32(vec, out); passed += ppair_float32; failed += fpair_float32;
  let [ppair_float64, fpair_float64] = testModel_pair_float64(vec, out); passed += ppair_float64; failed += fpair_float64;
  let [ppair_bytes, fpair_bytes] = testModel_pair_bytes(vec, out); passed += ppair_bytes; failed += fpair_bytes;
  let [pdual_string_int32, fdual_string_int32] = testModel_dual_string_int32(vec, out); passed += pdual_string_int32; failed += fdual_string_int32;
  let [pdual_string_boolean, fdual_string_boolean] = testModel_dual_string_boolean(vec, out); passed += pdual_string_boolean; failed += fdual_string_boolean;
  let [pdual_string_float64, fdual_string_float64] = testModel_dual_string_float64(vec, out); passed += pdual_string_float64; failed += fdual_string_float64;
  let [pdual_string_bytes, fdual_string_bytes] = testModel_dual_string_bytes(vec, out); passed += pdual_string_bytes; failed += fdual_string_bytes;
  let [pdual_int32_boolean, fdual_int32_boolean] = testModel_dual_int32_boolean(vec, out); passed += pdual_int32_boolean; failed += fdual_int32_boolean;
  let [pdual_int32_float64, fdual_int32_float64] = testModel_dual_int32_float64(vec, out); passed += pdual_int32_float64; failed += fdual_int32_float64;
  let [pdual_int32_int64, fdual_int32_int64] = testModel_dual_int32_int64(vec, out); passed += pdual_int32_int64; failed += fdual_int32_int64;
  let [pdual_int32_uint32, fdual_int32_uint32] = testModel_dual_int32_uint32(vec, out); passed += pdual_int32_uint32; failed += fdual_int32_uint32;
  let [pdual_int64_uint64, fdual_int64_uint64] = testModel_dual_int64_uint64(vec, out); passed += pdual_int64_uint64; failed += fdual_int64_uint64;
  let [pdual_float32_float64, fdual_float32_float64] = testModel_dual_float32_float64(vec, out); passed += pdual_float32_float64; failed += fdual_float32_float64;
  let [pdual_float64_boolean, fdual_float64_boolean] = testModel_dual_float64_boolean(vec, out); passed += pdual_float64_boolean; failed += fdual_float64_boolean;
  let [pdual_float64_bytes, fdual_float64_bytes] = testModel_dual_float64_bytes(vec, out); passed += pdual_float64_bytes; failed += fdual_float64_bytes;
  let [pdual_uint32_uint64, fdual_uint32_uint64] = testModel_dual_uint32_uint64(vec, out); passed += pdual_uint32_uint64; failed += fdual_uint32_uint64;
  let [pdual_boolean_bytes, fdual_boolean_bytes] = testModel_dual_boolean_bytes(vec, out); passed += pdual_boolean_bytes; failed += fdual_boolean_bytes;
  let [pdual_int8_uint8, fdual_int8_uint8] = testModel_dual_int8_uint8(vec, out); passed += pdual_int8_uint8; failed += fdual_int8_uint8;
  let [pdual_int16_uint16, fdual_int16_uint16] = testModel_dual_int16_uint16(vec, out); passed += pdual_int16_uint16; failed += fdual_int16_uint16;
  let [pdual_string_int64, fdual_string_int64] = testModel_dual_string_int64(vec, out); passed += pdual_string_int64; failed += fdual_string_int64;
  let [pdual_string_uint64, fdual_string_uint64] = testModel_dual_string_uint64(vec, out); passed += pdual_string_uint64; failed += fdual_string_uint64;
  let [pdual_int32_bytes, fdual_int32_bytes] = testModel_dual_int32_bytes(vec, out); passed += pdual_int32_bytes; failed += fdual_int32_bytes;
  let [pdual_float64_int32, fdual_float64_int32] = testModel_dual_float64_int32(vec, out); passed += pdual_float64_int32; failed += fdual_float64_int32;
  let [pdual_boolean_int32, fdual_boolean_int32] = testModel_dual_boolean_int32(vec, out); passed += pdual_boolean_int32; failed += fdual_boolean_int32;
  let [pdual_bytes_int64, fdual_bytes_int64] = testModel_dual_bytes_int64(vec, out); passed += pdual_bytes_int64; failed += fdual_bytes_int64;
  let [pdual_int8_float32, fdual_int8_float32] = testModel_dual_int8_float32(vec, out); passed += pdual_int8_float32; failed += fdual_int8_float32;
  let [pdual_uint8_int16, fdual_uint8_int16] = testModel_dual_uint8_int16(vec, out); passed += pdual_uint8_int16; failed += fdual_uint8_int16;
  let [pdual_int64_float64, fdual_int64_float64] = testModel_dual_int64_float64(vec, out); passed += pdual_int64_float64; failed += fdual_int64_float64;
  let [pdual_uint64_string, fdual_uint64_string] = testModel_dual_uint64_string(vec, out); passed += pdual_uint64_string; failed += fdual_uint64_string;
  let [ptriple01, ftriple01] = testModel_triple01(vec, out); passed += ptriple01; failed += ftriple01;
  let [ptriple02, ftriple02] = testModel_triple02(vec, out); passed += ptriple02; failed += ftriple02;
  let [ptriple03, ftriple03] = testModel_triple03(vec, out); passed += ptriple03; failed += ftriple03;
  let [ptriple04, ftriple04] = testModel_triple04(vec, out); passed += ptriple04; failed += ftriple04;
  let [ptriple05, ftriple05] = testModel_triple05(vec, out); passed += ptriple05; failed += ftriple05;
  let [ptriple06, ftriple06] = testModel_triple06(vec, out); passed += ptriple06; failed += ftriple06;
  let [ptriple07, ftriple07] = testModel_triple07(vec, out); passed += ptriple07; failed += ftriple07;
  let [ptriple08, ftriple08] = testModel_triple08(vec, out); passed += ptriple08; failed += ftriple08;
  let [ptriple09, ftriple09] = testModel_triple09(vec, out); passed += ptriple09; failed += ftriple09;
  let [ptriple10, ftriple10] = testModel_triple10(vec, out); passed += ptriple10; failed += ftriple10;
  let [ptriple11, ftriple11] = testModel_triple11(vec, out); passed += ptriple11; failed += ftriple11;
  let [ptriple12, ftriple12] = testModel_triple12(vec, out); passed += ptriple12; failed += ftriple12;
  let [ptriple13, ftriple13] = testModel_triple13(vec, out); passed += ptriple13; failed += ftriple13;
  let [ptriple14, ftriple14] = testModel_triple14(vec, out); passed += ptriple14; failed += ftriple14;
  let [ptriple15, ftriple15] = testModel_triple15(vec, out); passed += ptriple15; failed += ftriple15;
  return [passed, failed];
}
