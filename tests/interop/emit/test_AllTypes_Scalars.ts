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


function testModel_single_string(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleStringCodec;
  try {
    const mp = readFile(join(vec, "SingleString.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleString.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleString mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleString.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleString.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleString json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleString.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleString.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleString unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleString.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleString.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleString gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_boolean(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleBooleanCodec;
  try {
    const mp = readFile(join(vec, "SingleBoolean.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBoolean.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBoolean mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleBoolean.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBoolean.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBoolean json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleBoolean.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBoolean.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBoolean unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleBoolean.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBoolean.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBoolean gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_int8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleInt8Codec;
  try {
    const mp = readFile(join(vec, "SingleInt8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleInt8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleInt8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleInt8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_int16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleInt16Codec;
  try {
    const mp = readFile(join(vec, "SingleInt16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleInt16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleInt16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleInt16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_int32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleInt32Codec;
  try {
    const mp = readFile(join(vec, "SingleInt32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleInt32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleInt32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleInt32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_int64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleInt64Codec;
  try {
    const mp = readFile(join(vec, "SingleInt64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleInt64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleInt64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleInt64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleInt64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleInt64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_uint8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleUint8Codec;
  try {
    const mp = readFile(join(vec, "SingleUint8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleUint8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleUint8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleUint8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_uint16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleUint16Codec;
  try {
    const mp = readFile(join(vec, "SingleUint16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleUint16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleUint16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleUint16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_uint32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleUint32Codec;
  try {
    const mp = readFile(join(vec, "SingleUint32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleUint32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleUint32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleUint32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_uint64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleUint64Codec;
  try {
    const mp = readFile(join(vec, "SingleUint64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleUint64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleUint64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleUint64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleUint64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleUint64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_float32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleFloat32Codec;
  try {
    const mp = readFile(join(vec, "SingleFloat32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleFloat32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleFloat32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleFloat32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleFloat64Codec;
  try {
    const mp = readFile(join(vec, "SingleFloat64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleFloat64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleFloat64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleFloat64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleFloat64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleFloat64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_single_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.SingleBytesCodec;
  try {
    const mp = readFile(join(vec, "SingleBytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "SingleBytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "SingleBytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "SingleBytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "SingleBytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL SingleBytes gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesScalars(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [psingle_string, fsingle_string] = testModel_single_string(vec, out); passed += psingle_string; failed += fsingle_string;
  let [psingle_boolean, fsingle_boolean] = testModel_single_boolean(vec, out); passed += psingle_boolean; failed += fsingle_boolean;
  let [psingle_int8, fsingle_int8] = testModel_single_int8(vec, out); passed += psingle_int8; failed += fsingle_int8;
  let [psingle_int16, fsingle_int16] = testModel_single_int16(vec, out); passed += psingle_int16; failed += fsingle_int16;
  let [psingle_int32, fsingle_int32] = testModel_single_int32(vec, out); passed += psingle_int32; failed += fsingle_int32;
  let [psingle_int64, fsingle_int64] = testModel_single_int64(vec, out); passed += psingle_int64; failed += fsingle_int64;
  let [psingle_uint8, fsingle_uint8] = testModel_single_uint8(vec, out); passed += psingle_uint8; failed += fsingle_uint8;
  let [psingle_uint16, fsingle_uint16] = testModel_single_uint16(vec, out); passed += psingle_uint16; failed += fsingle_uint16;
  let [psingle_uint32, fsingle_uint32] = testModel_single_uint32(vec, out); passed += psingle_uint32; failed += fsingle_uint32;
  let [psingle_uint64, fsingle_uint64] = testModel_single_uint64(vec, out); passed += psingle_uint64; failed += fsingle_uint64;
  let [psingle_float32, fsingle_float32] = testModel_single_float32(vec, out); passed += psingle_float32; failed += fsingle_float32;
  let [psingle_float64, fsingle_float64] = testModel_single_float64(vec, out); passed += psingle_float64; failed += fsingle_float64;
  let [psingle_bytes, fsingle_bytes] = testModel_single_bytes(vec, out); passed += psingle_bytes; failed += fsingle_bytes;
  return [passed, failed];
}
