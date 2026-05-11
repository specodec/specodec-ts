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


function testModel_edge_empty(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeEmptyCodec;
  try {
    const mp = readFile(join(vec, "EdgeEmpty.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeEmpty.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeEmpty mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeEmpty.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeEmpty.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeEmpty json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeEmpty.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeEmpty.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeEmpty unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeEmpty.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeEmpty.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeEmpty gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_one_opt(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeOneOptCodec;
  try {
    const mp = readFile(join(vec, "EdgeOneOpt.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeOneOpt.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeOneOpt mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeOneOpt.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeOneOpt.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeOneOpt json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeOneOpt.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeOneOpt.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeOneOpt unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeOneOpt.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeOneOpt.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeOneOpt gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_big_nums(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeBigNumsCodec;
  try {
    const mp = readFile(join(vec, "EdgeBigNums.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBigNums.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBigNums mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeBigNums.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBigNums.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBigNums json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeBigNums.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBigNums.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBigNums unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeBigNums.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBigNums.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBigNums gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_zero_vals(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeZeroValsCodec;
  try {
    const mp = readFile(join(vec, "EdgeZeroVals.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeZeroVals.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeZeroVals mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeZeroVals.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeZeroVals.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeZeroVals json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeZeroVals.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeZeroVals.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeZeroVals unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeZeroVals.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeZeroVals.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeZeroVals gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_nullable(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeNullableCodec;
  try {
    const mp = readFile(join(vec, "EdgeNullable.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullable.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullable mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeNullable.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullable.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullable json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeNullable.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullable.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullable unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeNullable.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullable.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullable gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_neg_zero(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeNegZeroCodec;
  try {
    const mp = readFile(join(vec, "EdgeNegZero.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNegZero.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNegZero mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeNegZero.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNegZero.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNegZero json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeNegZero.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNegZero.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNegZero unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeNegZero.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNegZero.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNegZero gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_null_byte(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeNullByteCodec;
  try {
    const mp = readFile(join(vec, "EdgeNullByte.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullByte.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullByte mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeNullByte.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullByte.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullByte json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeNullByte.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullByte.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullByte unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeNullByte.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeNullByte.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeNullByte gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_boundary(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeBoundaryCodec;
  try {
    const mp = readFile(join(vec, "EdgeBoundary.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBoundary.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBoundary mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeBoundary.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBoundary.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBoundary json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeBoundary.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBoundary.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBoundary unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeBoundary.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBoundary.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBoundary gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_str_len(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeStrLenCodec;
  try {
    const mp = readFile(join(vec, "EdgeStrLen.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeStrLen.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeStrLen mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeStrLen.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeStrLen.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeStrLen json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeStrLen.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeStrLen.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeStrLen unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeStrLen.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeStrLen.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeStrLen gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_bytes_len(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeBytesLenCodec;
  try {
    const mp = readFile(join(vec, "EdgeBytesLen.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBytesLen.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBytesLen mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeBytesLen.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBytesLen.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBytesLen json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeBytesLen.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBytesLen.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBytesLen unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeBytesLen.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeBytesLen.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeBytesLen gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_arr_empty(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeArrEmptyCodec;
  try {
    const mp = readFile(join(vec, "EdgeArrEmpty.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrEmpty.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrEmpty mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeArrEmpty.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrEmpty.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrEmpty json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeArrEmpty.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrEmpty.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrEmpty unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeArrEmpty.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrEmpty.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrEmpty gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_edge_arr_boundary(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.EdgeArrBoundaryCodec;
  try {
    const mp = readFile(join(vec, "EdgeArrBoundary.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrBoundary.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrBoundary mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "EdgeArrBoundary.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrBoundary.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrBoundary json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "EdgeArrBoundary.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrBoundary.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrBoundary unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "EdgeArrBoundary.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "EdgeArrBoundary.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL EdgeArrBoundary gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesEdge(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pedge_empty, fedge_empty] = testModel_edge_empty(vec, out); passed += pedge_empty; failed += fedge_empty;
  let [pedge_one_opt, fedge_one_opt] = testModel_edge_one_opt(vec, out); passed += pedge_one_opt; failed += fedge_one_opt;
  let [pedge_big_nums, fedge_big_nums] = testModel_edge_big_nums(vec, out); passed += pedge_big_nums; failed += fedge_big_nums;
  let [pedge_zero_vals, fedge_zero_vals] = testModel_edge_zero_vals(vec, out); passed += pedge_zero_vals; failed += fedge_zero_vals;
  let [pedge_nullable, fedge_nullable] = testModel_edge_nullable(vec, out); passed += pedge_nullable; failed += fedge_nullable;
  let [pedge_neg_zero, fedge_neg_zero] = testModel_edge_neg_zero(vec, out); passed += pedge_neg_zero; failed += fedge_neg_zero;
  let [pedge_null_byte, fedge_null_byte] = testModel_edge_null_byte(vec, out); passed += pedge_null_byte; failed += fedge_null_byte;
  let [pedge_boundary, fedge_boundary] = testModel_edge_boundary(vec, out); passed += pedge_boundary; failed += fedge_boundary;
  let [pedge_str_len, fedge_str_len] = testModel_edge_str_len(vec, out); passed += pedge_str_len; failed += fedge_str_len;
  let [pedge_bytes_len, fedge_bytes_len] = testModel_edge_bytes_len(vec, out); passed += pedge_bytes_len; failed += fedge_bytes_len;
  let [pedge_arr_empty, fedge_arr_empty] = testModel_edge_arr_empty(vec, out); passed += pedge_arr_empty; failed += fedge_arr_empty;
  let [pedge_arr_boundary, fedge_arr_boundary] = testModel_edge_arr_boundary(vec, out); passed += pedge_arr_boundary; failed += fedge_arr_boundary;
  return [passed, failed];
}
