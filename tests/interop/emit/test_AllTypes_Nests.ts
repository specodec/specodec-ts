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


function testModel_nest_inner(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestInnerCodec;
  try {
    const mp = readFile(join(vec, "NestInner.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestInner.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestInner mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestInner.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestInner.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestInner json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestInner.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestInner.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestInner unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestInner.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestInner.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestInner gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_coord(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestCoordCodec;
  try {
    const mp = readFile(join(vec, "NestCoord.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestCoord.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestCoord mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestCoord.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestCoord.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestCoord json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestCoord.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestCoord.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestCoord unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestCoord.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestCoord.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestCoord gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_id_val(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestIdValCodec;
  try {
    const mp = readFile(join(vec, "NestIdVal.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestIdVal.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestIdVal mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestIdVal.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestIdVal.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestIdVal json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestIdVal.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestIdVal.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestIdVal unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestIdVal.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestIdVal.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestIdVal gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_label(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestLabelCodec;
  try {
    const mp = readFile(join(vec, "NestLabel.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestLabel.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestLabel mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestLabel.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestLabel.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestLabel json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestLabel.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestLabel.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestLabel unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestLabel.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestLabel.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestLabel gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_money(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestMoneyCodec;
  try {
    const mp = readFile(join(vec, "NestMoney.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestMoney.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestMoney mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestMoney.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestMoney.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestMoney json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestMoney.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestMoney.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestMoney unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestMoney.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestMoney.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestMoney gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_range32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestRange32Codec;
  try {
    const mp = readFile(join(vec, "NestRange32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestRange32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestRange32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestRange32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestRange32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestRange32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestRange32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestRange32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestRange32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestRange32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestRange32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestRange32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_addr(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestAddrCodec;
  try {
    const mp = readFile(join(vec, "NestAddr.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestAddr.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestAddr mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestAddr.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestAddr.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestAddr json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestAddr.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestAddr.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestAddr unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestAddr.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestAddr.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestAddr gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_point3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestPoint3Codec;
  try {
    const mp = readFile(join(vec, "NestPoint3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestPoint3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestPoint3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestPoint3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestPoint3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestPoint3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestPoint3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestPoint3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestPoint3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestPoint3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestPoint3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestPoint3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_inner(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestInnerCodec;
  try {
    const mp = readFile(join(vec, "OptNestInner.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestInner.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestInner mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestInner.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestInner.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestInner json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestInner.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestInner.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestInner unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestInner.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestInner.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestInner gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_coord(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestCoordCodec;
  try {
    const mp = readFile(join(vec, "OptNestCoord.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestCoord.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestCoord mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestCoord.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestCoord.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestCoord json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestCoord.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestCoord.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestCoord unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestCoord.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestCoord.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestCoord gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_id_val(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestIdValCodec;
  try {
    const mp = readFile(join(vec, "OptNestIdVal.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestIdVal.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestIdVal mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestIdVal.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestIdVal.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestIdVal json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestIdVal.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestIdVal.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestIdVal unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestIdVal.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestIdVal.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestIdVal gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_label(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestLabelCodec;
  try {
    const mp = readFile(join(vec, "OptNestLabel.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestLabel.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestLabel mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestLabel.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestLabel.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestLabel json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestLabel.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestLabel.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestLabel unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestLabel.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestLabel.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestLabel gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_money(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestMoneyCodec;
  try {
    const mp = readFile(join(vec, "OptNestMoney.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestMoney.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestMoney mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestMoney.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestMoney.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestMoney json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestMoney.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestMoney.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestMoney unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestMoney.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestMoney.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestMoney gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_range32(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestRange32Codec;
  try {
    const mp = readFile(join(vec, "OptNestRange32.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestRange32.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestRange32 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestRange32.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestRange32.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestRange32 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestRange32.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestRange32.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestRange32 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestRange32.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestRange32.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestRange32 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_addr(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestAddrCodec;
  try {
    const mp = readFile(join(vec, "OptNestAddr.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestAddr.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestAddr mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestAddr.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestAddr.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestAddr json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestAddr.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestAddr.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestAddr unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestAddr.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestAddr.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestAddr gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_nest_point3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptNestPoint3Codec;
  try {
    const mp = readFile(join(vec, "OptNestPoint3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestPoint3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestPoint3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptNestPoint3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestPoint3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestPoint3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptNestPoint3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestPoint3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestPoint3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptNestPoint3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptNestPoint3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptNestPoint3 gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesNests(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [pnest_inner, fnest_inner] = testModel_nest_inner(vec, out); passed += pnest_inner; failed += fnest_inner;
  let [pnest_coord, fnest_coord] = testModel_nest_coord(vec, out); passed += pnest_coord; failed += fnest_coord;
  let [pnest_id_val, fnest_id_val] = testModel_nest_id_val(vec, out); passed += pnest_id_val; failed += fnest_id_val;
  let [pnest_label, fnest_label] = testModel_nest_label(vec, out); passed += pnest_label; failed += fnest_label;
  let [pnest_money, fnest_money] = testModel_nest_money(vec, out); passed += pnest_money; failed += fnest_money;
  let [pnest_range32, fnest_range32] = testModel_nest_range32(vec, out); passed += pnest_range32; failed += fnest_range32;
  let [pnest_addr, fnest_addr] = testModel_nest_addr(vec, out); passed += pnest_addr; failed += fnest_addr;
  let [pnest_point3, fnest_point3] = testModel_nest_point3(vec, out); passed += pnest_point3; failed += fnest_point3;
  let [popt_nest_inner, fopt_nest_inner] = testModel_opt_nest_inner(vec, out); passed += popt_nest_inner; failed += fopt_nest_inner;
  let [popt_nest_coord, fopt_nest_coord] = testModel_opt_nest_coord(vec, out); passed += popt_nest_coord; failed += fopt_nest_coord;
  let [popt_nest_id_val, fopt_nest_id_val] = testModel_opt_nest_id_val(vec, out); passed += popt_nest_id_val; failed += fopt_nest_id_val;
  let [popt_nest_label, fopt_nest_label] = testModel_opt_nest_label(vec, out); passed += popt_nest_label; failed += fopt_nest_label;
  let [popt_nest_money, fopt_nest_money] = testModel_opt_nest_money(vec, out); passed += popt_nest_money; failed += fopt_nest_money;
  let [popt_nest_range32, fopt_nest_range32] = testModel_opt_nest_range32(vec, out); passed += popt_nest_range32; failed += fopt_nest_range32;
  let [popt_nest_addr, fopt_nest_addr] = testModel_opt_nest_addr(vec, out); passed += popt_nest_addr; failed += fopt_nest_addr;
  let [popt_nest_point3, fopt_nest_point3] = testModel_opt_nest_point3(vec, out); passed += popt_nest_point3; failed += fopt_nest_point3;
  return [passed, failed];
}
