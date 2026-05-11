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


function testModel_rec_list(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.RecListCodec;
  try {
    const mp = readFile(join(vec, "RecList.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "RecList.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecList mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "RecList.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecList.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecList json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "RecList.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecList.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecList unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "RecList.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "RecList.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecList gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_rec_tree(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.RecTreeCodec;
  try {
    const mp = readFile(join(vec, "RecTree.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "RecTree.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecTree mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "RecTree.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecTree.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecTree json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "RecTree.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecTree.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecTree unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "RecTree.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "RecTree.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecTree gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_rec_chain(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.RecChainCodec;
  try {
    const mp = readFile(join(vec, "RecChain.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "RecChain.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecChain mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "RecChain.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecChain.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecChain json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "RecChain.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecChain.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecChain unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "RecChain.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "RecChain.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecChain gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_rec_wrap(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.RecWrapCodec;
  try {
    const mp = readFile(join(vec, "RecWrap.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWrap.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWrap mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "RecWrap.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWrap.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWrap json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "RecWrap.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWrap.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWrap unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "RecWrap.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWrap.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWrap gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_rec_wide(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.RecWideCodec;
  try {
    const mp = readFile(join(vec, "RecWide.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWide.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWide mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "RecWide.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWide.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWide json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "RecWide.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWide.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWide unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "RecWide.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "RecWide.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL RecWide gron: " + e.message); failed++; }
  return [passed, failed];
}
export function runAllTypesRecursive(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Object tests
  let [prec_list, frec_list] = testModel_rec_list(vec, out); passed += prec_list; failed += frec_list;
  let [prec_tree, frec_tree] = testModel_rec_tree(vec, out); passed += prec_tree; failed += frec_tree;
  let [prec_chain, frec_chain] = testModel_rec_chain(vec, out); passed += prec_chain; failed += frec_chain;
  let [prec_wrap, frec_wrap] = testModel_rec_wrap(vec, out); passed += prec_wrap; failed += frec_wrap;
  let [prec_wide, frec_wide] = testModel_rec_wide(vec, out); passed += prec_wide; failed += frec_wide;
  return [passed, failed];
}
