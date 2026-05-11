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


function testModel_shape_circle(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ShapeCodec;
  try {
    const mp = readFile(join(vec, "Shape_circle.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_circle.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_circle mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Shape_circle.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_circle.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_circle json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Shape_circle.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_circle.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_circle unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Shape_circle.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_circle.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_circle gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_shape_rect(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ShapeCodec;
  try {
    const mp = readFile(join(vec, "Shape_rect.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_rect.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_rect mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Shape_rect.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_rect.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_rect json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Shape_rect.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_rect.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_rect unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Shape_rect.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Shape_rect.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Shape_rect gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ident_name(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.IdentCodec;
  try {
    const mp = readFile(join(vec, "Ident_name.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_name.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_name mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ident_name.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_name.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_name json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ident_name.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_name.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_name unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ident_name.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_name.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_name gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ident_number(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.IdentCodec;
  try {
    const mp = readFile(join(vec, "Ident_number.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_number.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_number mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ident_number.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_number.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_number json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ident_number.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_number.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_number unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ident_number.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ident_number.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ident_number gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_result_msg_ok(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ResultMsgCodec;
  try {
    const mp = readFile(join(vec, "ResultMsg_ok.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_ok.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_ok mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ResultMsg_ok.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_ok.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_ok json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ResultMsg_ok.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_ok.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_ok unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ResultMsg_ok.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_ok.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_ok gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_result_msg_err(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ResultMsgCodec;
  try {
    const mp = readFile(join(vec, "ResultMsg_err.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_err.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_err mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ResultMsg_err.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_err.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_err json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ResultMsg_err.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_err.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_err unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ResultMsg_err.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ResultMsg_err.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ResultMsg_err gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_tagged_tag(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.TaggedCodec;
  try {
    const mp = readFile(join(vec, "Tagged_tag.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_tag.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_tag mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Tagged_tag.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_tag.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_tag json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Tagged_tag.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_tag.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_tag unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Tagged_tag.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_tag.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_tag gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_tagged_score(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.TaggedCodec;
  try {
    const mp = readFile(join(vec, "Tagged_score.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_score.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_score mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Tagged_score.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_score.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_score json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Tagged_score.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_score.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_score unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Tagged_score.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_score.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_score gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_tagged_active(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.TaggedCodec;
  try {
    const mp = readFile(join(vec, "Tagged_active.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_active.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_active mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Tagged_active.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_active.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_active json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Tagged_active.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_active.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_active unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Tagged_active.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Tagged_active.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Tagged_active gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_union_holder_shape(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptUnionHolderCodec;
  try {
    const mp = readFile(join(vec, "OptUnionHolder_shape.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_shape.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_shape mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptUnionHolder_shape.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_shape.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_shape json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptUnionHolder_shape.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_shape.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_shape unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptUnionHolder_shape.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_shape.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_shape gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_union_holder_id(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptUnionHolderCodec;
  try {
    const mp = readFile(join(vec, "OptUnionHolder_id.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_id.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_id mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptUnionHolder_id.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_id.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_id json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptUnionHolder_id.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_id.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_id unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptUnionHolder_id.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptUnionHolder_id.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptUnionHolder_id gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mixed_union_point(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MixedUnionCodec;
  try {
    const mp = readFile(join(vec, "MixedUnion_point.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_point.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_point mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MixedUnion_point.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_point.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_point json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MixedUnion_point.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_point.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_point unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MixedUnion_point.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_point.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_point gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mixed_union_label(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MixedUnionCodec;
  try {
    const mp = readFile(join(vec, "MixedUnion_label.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_label.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_label mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MixedUnion_label.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_label.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_label json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MixedUnion_label.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_label.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_label unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MixedUnion_label.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_label.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_label gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_mixed_union_count(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.MixedUnionCodec;
  try {
    const mp = readFile(join(vec, "MixedUnion_count.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_count.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_count mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "MixedUnion_count.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_count.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_count json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "MixedUnion_count.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_count.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_count unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "MixedUnion_count.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "MixedUnion_count.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL MixedUnion_count gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nested_union_result(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestedUnionCodec;
  try {
    const mp = readFile(join(vec, "NestedUnion_result.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_result.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_result mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestedUnion_result.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_result.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_result json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestedUnion_result.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_result.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_result unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestedUnion_result.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_result.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_result gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nested_union_shape(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestedUnionCodec;
  try {
    const mp = readFile(join(vec, "NestedUnion_shape.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_shape.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_shape mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestedUnion_shape.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_shape.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_shape json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestedUnion_shape.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_shape.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_shape unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestedUnion_shape.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestedUnion_shape.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestedUnion_shape gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_scalar_union_s(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ScalarUnionCodec;
  try {
    const mp = readFile(join(vec, "ScalarUnion_s.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_s.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_s mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ScalarUnion_s.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_s.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_s json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ScalarUnion_s.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_s.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_s unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ScalarUnion_s.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_s.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_s gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_scalar_union_i(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ScalarUnionCodec;
  try {
    const mp = readFile(join(vec, "ScalarUnion_i.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_i.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_i mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ScalarUnion_i.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_i.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_i json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ScalarUnion_i.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_i.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_i unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ScalarUnion_i.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_i.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_i gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_scalar_union_f(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ScalarUnionCodec;
  try {
    const mp = readFile(join(vec, "ScalarUnion_f.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_f.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_f mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ScalarUnion_f.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_f.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_f json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ScalarUnion_f.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_f.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_f unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ScalarUnion_f.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_f.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_f gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_scalar_union_b(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ScalarUnionCodec;
  try {
    const mp = readFile(join(vec, "ScalarUnion_b.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_b.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_b mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ScalarUnion_b.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_b.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_b json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ScalarUnion_b.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_b.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_b unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ScalarUnion_b.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ScalarUnion_b.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ScalarUnion_b gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runModels(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pshape_circle, fshape_circle] = testModel_shape_circle(vec, out); passed += pshape_circle; failed += fshape_circle;
  let [pshape_rect, fshape_rect] = testModel_shape_rect(vec, out); passed += pshape_rect; failed += fshape_rect;
  let [pident_name, fident_name] = testModel_ident_name(vec, out); passed += pident_name; failed += fident_name;
  let [pident_number, fident_number] = testModel_ident_number(vec, out); passed += pident_number; failed += fident_number;
  let [presult_msg_ok, fresult_msg_ok] = testModel_result_msg_ok(vec, out); passed += presult_msg_ok; failed += fresult_msg_ok;
  let [presult_msg_err, fresult_msg_err] = testModel_result_msg_err(vec, out); passed += presult_msg_err; failed += fresult_msg_err;
  let [ptagged_tag, ftagged_tag] = testModel_tagged_tag(vec, out); passed += ptagged_tag; failed += ftagged_tag;
  let [ptagged_score, ftagged_score] = testModel_tagged_score(vec, out); passed += ptagged_score; failed += ftagged_score;
  let [ptagged_active, ftagged_active] = testModel_tagged_active(vec, out); passed += ptagged_active; failed += ftagged_active;
  let [popt_union_holder_shape, fopt_union_holder_shape] = testModel_opt_union_holder_shape(vec, out); passed += popt_union_holder_shape; failed += fopt_union_holder_shape;
  let [popt_union_holder_id, fopt_union_holder_id] = testModel_opt_union_holder_id(vec, out); passed += popt_union_holder_id; failed += fopt_union_holder_id;
  let [pmixed_union_point, fmixed_union_point] = testModel_mixed_union_point(vec, out); passed += pmixed_union_point; failed += fmixed_union_point;
  let [pmixed_union_label, fmixed_union_label] = testModel_mixed_union_label(vec, out); passed += pmixed_union_label; failed += fmixed_union_label;
  let [pmixed_union_count, fmixed_union_count] = testModel_mixed_union_count(vec, out); passed += pmixed_union_count; failed += fmixed_union_count;
  let [pnested_union_result, fnested_union_result] = testModel_nested_union_result(vec, out); passed += pnested_union_result; failed += fnested_union_result;
  let [pnested_union_shape, fnested_union_shape] = testModel_nested_union_shape(vec, out); passed += pnested_union_shape; failed += fnested_union_shape;
  let [pscalar_union_s, fscalar_union_s] = testModel_scalar_union_s(vec, out); passed += pscalar_union_s; failed += fscalar_union_s;
  let [pscalar_union_i, fscalar_union_i] = testModel_scalar_union_i(vec, out); passed += pscalar_union_i; failed += fscalar_union_i;
  let [pscalar_union_f, fscalar_union_f] = testModel_scalar_union_f(vec, out); passed += pscalar_union_f; failed += fscalar_union_f;
  let [pscalar_union_b, fscalar_union_b] = testModel_scalar_union_b(vec, out); passed += pscalar_union_b; failed += fscalar_union_b;
  return [passed, failed];
}
