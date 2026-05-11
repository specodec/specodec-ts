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


function testModel_opt_arr1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptArr1Codec;
  try {
    const mp = readFile(join(vec, "OptArr1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptArr1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptArr1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptArr1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_arr2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptArr2Codec;
  try {
    const mp = readFile(join(vec, "OptArr2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptArr2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptArr2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptArr2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_arr3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptArr3Codec;
  try {
    const mp = readFile(join(vec, "OptArr3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptArr3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptArr3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptArr3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_arr4(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptArr4Codec;
  try {
    const mp = readFile(join(vec, "OptArr4.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr4.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr4 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptArr4.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr4.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr4 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptArr4.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr4.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr4 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptArr4.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr4.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr4 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_opt_arr5(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptArr5Codec;
  try {
    const mp = readFile(join(vec, "OptArr5.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr5.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr5 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptArr5.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr5.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr5 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptArr5.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr5.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr5 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptArr5.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptArr5.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptArr5 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOpt1Codec;
  try {
    const mp = readFile(join(vec, "NestOpt1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOpt1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOpt1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOpt1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOpt2Codec;
  try {
    const mp = readFile(join(vec, "NestOpt2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOpt2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOpt2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOpt2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOpt3Codec;
  try {
    const mp = readFile(join(vec, "NestOpt3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOpt3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOpt3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOpt3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt4(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOpt4Codec;
  try {
    const mp = readFile(join(vec, "NestOpt4.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt4.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt4 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOpt4.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt4.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt4 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOpt4.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt4.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt4 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOpt4.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt4.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt4 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt5(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOpt5Codec;
  try {
    const mp = readFile(join(vec, "NestOpt5.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt5.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt5 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOpt5.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt5.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt5 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOpt5.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt5.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt5 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOpt5.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOpt5.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOpt5 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt_inner1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOptInner1Codec;
  try {
    const mp = readFile(join(vec, "NestOptInner1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOptInner1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOptInner1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOptInner1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt_inner2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOptInner2Codec;
  try {
    const mp = readFile(join(vec, "NestOptInner2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOptInner2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOptInner2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOptInner2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_nest_opt_inner3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.NestOptInner3Codec;
  try {
    const mp = readFile(join(vec, "NestOptInner3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "NestOptInner3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "NestOptInner3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "NestOptInner3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "NestOptInner3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL NestOptInner3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_deep_nest1(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepNest1Codec;
  try {
    const mp = readFile(join(vec, "DeepNest1.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest1.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest1 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepNest1.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest1.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest1 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepNest1.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest1.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest1 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepNest1.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest1.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest1 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_deep_nest2(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepNest2Codec;
  try {
    const mp = readFile(join(vec, "DeepNest2.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest2.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest2 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepNest2.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest2.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest2 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepNest2.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest2.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest2 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepNest2.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest2.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest2 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_deep_nest3(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepNest3Codec;
  try {
    const mp = readFile(join(vec, "DeepNest3.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest3.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest3 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepNest3.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest3.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest3 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepNest3.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest3.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest3 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepNest3.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest3.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest3 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_deep_nest4(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepNest4Codec;
  try {
    const mp = readFile(join(vec, "DeepNest4.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest4.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest4 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepNest4.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest4.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest4 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepNest4.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest4.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest4 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepNest4.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest4.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest4 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_deep_nest5(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepNest5Codec;
  try {
    const mp = readFile(join(vec, "DeepNest5.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest5.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest5 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepNest5.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest5.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest5 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepNest5.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest5.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest5 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepNest5.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest5.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest5 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_deep_nest6(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepNest6Codec;
  try {
    const mp = readFile(join(vec, "DeepNest6.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest6.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest6 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepNest6.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest6.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest6 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepNest6.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest6.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest6 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepNest6.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest6.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest6 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_deep_nest7(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.DeepNest7Codec;
  try {
    const mp = readFile(join(vec, "DeepNest7.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest7.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest7 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "DeepNest7.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest7.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest7 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "DeepNest7.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest7.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest7 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "DeepNest7.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "DeepNest7.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL DeepNest7 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_timestamp_entry(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.TimestampEntryCodec;
  try {
    const mp = readFile(join(vec, "TimestampEntry.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "TimestampEntry.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL TimestampEntry mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "TimestampEntry.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "TimestampEntry.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL TimestampEntry json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "TimestampEntry.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "TimestampEntry.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL TimestampEntry unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "TimestampEntry.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "TimestampEntry.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL TimestampEntry gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_config_entry(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.ConfigEntryCodec;
  try {
    const mp = readFile(join(vec, "ConfigEntry.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "ConfigEntry.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ConfigEntry mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "ConfigEntry.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ConfigEntry.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ConfigEntry json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "ConfigEntry.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "ConfigEntry.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ConfigEntry unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "ConfigEntry.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "ConfigEntry.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL ConfigEntry gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesExtra(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [popt_arr1, fopt_arr1] = testModel_opt_arr1(vec, out); passed += popt_arr1; failed += fopt_arr1;
  let [popt_arr2, fopt_arr2] = testModel_opt_arr2(vec, out); passed += popt_arr2; failed += fopt_arr2;
  let [popt_arr3, fopt_arr3] = testModel_opt_arr3(vec, out); passed += popt_arr3; failed += fopt_arr3;
  let [popt_arr4, fopt_arr4] = testModel_opt_arr4(vec, out); passed += popt_arr4; failed += fopt_arr4;
  let [popt_arr5, fopt_arr5] = testModel_opt_arr5(vec, out); passed += popt_arr5; failed += fopt_arr5;
  let [pnest_opt1, fnest_opt1] = testModel_nest_opt1(vec, out); passed += pnest_opt1; failed += fnest_opt1;
  let [pnest_opt2, fnest_opt2] = testModel_nest_opt2(vec, out); passed += pnest_opt2; failed += fnest_opt2;
  let [pnest_opt3, fnest_opt3] = testModel_nest_opt3(vec, out); passed += pnest_opt3; failed += fnest_opt3;
  let [pnest_opt4, fnest_opt4] = testModel_nest_opt4(vec, out); passed += pnest_opt4; failed += fnest_opt4;
  let [pnest_opt5, fnest_opt5] = testModel_nest_opt5(vec, out); passed += pnest_opt5; failed += fnest_opt5;
  let [pnest_opt_inner1, fnest_opt_inner1] = testModel_nest_opt_inner1(vec, out); passed += pnest_opt_inner1; failed += fnest_opt_inner1;
  let [pnest_opt_inner2, fnest_opt_inner2] = testModel_nest_opt_inner2(vec, out); passed += pnest_opt_inner2; failed += fnest_opt_inner2;
  let [pnest_opt_inner3, fnest_opt_inner3] = testModel_nest_opt_inner3(vec, out); passed += pnest_opt_inner3; failed += fnest_opt_inner3;
  let [pdeep_nest1, fdeep_nest1] = testModel_deep_nest1(vec, out); passed += pdeep_nest1; failed += fdeep_nest1;
  let [pdeep_nest2, fdeep_nest2] = testModel_deep_nest2(vec, out); passed += pdeep_nest2; failed += fdeep_nest2;
  let [pdeep_nest3, fdeep_nest3] = testModel_deep_nest3(vec, out); passed += pdeep_nest3; failed += fdeep_nest3;
  let [pdeep_nest4, fdeep_nest4] = testModel_deep_nest4(vec, out); passed += pdeep_nest4; failed += fdeep_nest4;
  let [pdeep_nest5, fdeep_nest5] = testModel_deep_nest5(vec, out); passed += pdeep_nest5; failed += fdeep_nest5;
  let [pdeep_nest6, fdeep_nest6] = testModel_deep_nest6(vec, out); passed += pdeep_nest6; failed += fdeep_nest6;
  let [pdeep_nest7, fdeep_nest7] = testModel_deep_nest7(vec, out); passed += pdeep_nest7; failed += fdeep_nest7;
  let [ptimestamp_entry, ftimestamp_entry] = testModel_timestamp_entry(vec, out); passed += ptimestamp_entry; failed += ftimestamp_entry;
  let [pconfig_entry, fconfig_entry] = testModel_config_entry(vec, out); passed += pconfig_entry; failed += fconfig_entry;
  return [passed, failed];
}
