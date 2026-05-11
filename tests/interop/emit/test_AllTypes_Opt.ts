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


function testModel_opt_single_string(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleStringCodec;
  try {
    const mp = readFile(join(vec, "OptSingleString.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleString.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleString mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleString.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleString.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleString json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleString.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleString.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleString unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleString.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleString.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleString gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_boolean(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleBooleanCodec;
  try {
    const mp = readFile(join(vec, "OptSingleBoolean.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBoolean.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBoolean mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleBoolean.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBoolean.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBoolean json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleBoolean.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBoolean.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBoolean unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleBoolean.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBoolean.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBoolean gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_int8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleInt8Codec;
  try {
    const mp = readFile(join(vec, "OptSingleInt8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleInt8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleInt8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleInt8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_int16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleInt16Codec;
  try {
    const mp = readFile(join(vec, "OptSingleInt16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleInt16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleInt16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleInt16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_int32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleInt32Codec;
  try {
    const mp = readFile(join(vec, "OptSingleInt32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleInt32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleInt32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleInt32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_int64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleInt64Codec;
  try {
    const mp = readFile(join(vec, "OptSingleInt64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleInt64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleInt64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleInt64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleInt64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleInt64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_uint8(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleUint8Codec;
  try {
    const mp = readFile(join(vec, "OptSingleUint8.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint8.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint8 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleUint8.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint8.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint8 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleUint8.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint8.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint8 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleUint8.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint8.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint8 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_uint16(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleUint16Codec;
  try {
    const mp = readFile(join(vec, "OptSingleUint16.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint16.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint16 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleUint16.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint16.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint16 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleUint16.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint16.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint16 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleUint16.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint16.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint16 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_uint32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleUint32Codec;
  try {
    const mp = readFile(join(vec, "OptSingleUint32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleUint32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleUint32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleUint32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_uint64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleUint64Codec;
  try {
    const mp = readFile(join(vec, "OptSingleUint64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleUint64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleUint64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleUint64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleUint64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleUint64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_float32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleFloat32Codec;
  try {
    const mp = readFile(join(vec, "OptSingleFloat32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleFloat32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleFloat32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleFloat32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_float64(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleFloat64Codec;
  try {
    const mp = readFile(join(vec, "OptSingleFloat64.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat64.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat64 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleFloat64.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat64.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat64 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleFloat64.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat64.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat64 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleFloat64.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleFloat64.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleFloat64 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_single_bytes(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptSingleBytesCodec;
  try {
    const mp = readFile(join(vec, "OptSingleBytes.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBytes.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBytes mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptSingleBytes.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBytes.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBytes json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptSingleBytes.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBytes.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBytes unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptSingleBytes.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptSingleBytes.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptSingleBytes gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesOpt(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [popt_single_string, fopt_single_string] = testModel_opt_single_string(vec, out); passed += popt_single_string; failed += fopt_single_string;
  let [popt_single_boolean, fopt_single_boolean] = testModel_opt_single_boolean(vec, out); passed += popt_single_boolean; failed += fopt_single_boolean;
  let [popt_single_int8, fopt_single_int8] = testModel_opt_single_int8(vec, out); passed += popt_single_int8; failed += fopt_single_int8;
  let [popt_single_int16, fopt_single_int16] = testModel_opt_single_int16(vec, out); passed += popt_single_int16; failed += fopt_single_int16;
  let [popt_single_int32, fopt_single_int32] = testModel_opt_single_int32(vec, out); passed += popt_single_int32; failed += fopt_single_int32;
  let [popt_single_int64, fopt_single_int64] = testModel_opt_single_int64(vec, out); passed += popt_single_int64; failed += fopt_single_int64;
  let [popt_single_uint8, fopt_single_uint8] = testModel_opt_single_uint8(vec, out); passed += popt_single_uint8; failed += fopt_single_uint8;
  let [popt_single_uint16, fopt_single_uint16] = testModel_opt_single_uint16(vec, out); passed += popt_single_uint16; failed += fopt_single_uint16;
  let [popt_single_uint32, fopt_single_uint32] = testModel_opt_single_uint32(vec, out); passed += popt_single_uint32; failed += fopt_single_uint32;
  let [popt_single_uint64, fopt_single_uint64] = testModel_opt_single_uint64(vec, out); passed += popt_single_uint64; failed += fopt_single_uint64;
  let [popt_single_float32, fopt_single_float32] = testModel_opt_single_float32(vec, out); passed += popt_single_float32; failed += fopt_single_float32;
  let [popt_single_float64, fopt_single_float64] = testModel_opt_single_float64(vec, out); passed += popt_single_float64; failed += fopt_single_float64;
  let [popt_single_bytes, fopt_single_bytes] = testModel_opt_single_bytes(vec, out); passed += popt_single_bytes; failed += fopt_single_bytes;
  return [passed, failed];
}
