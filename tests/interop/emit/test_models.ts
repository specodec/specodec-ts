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


function testScalar_int8_min(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int8_min.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt32();
    const w = new MsgPackWriter();
    w.writeInt32(val);
    writeFile(out, "scalars/int8_min.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int8_min mp: " + e.message); return [0, 1]; }
}

function testScalar_int8_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int8_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt32();
    const w = new MsgPackWriter();
    w.writeInt32(val);
    writeFile(out, "scalars/int8_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int8_max mp: " + e.message); return [0, 1]; }
}

function testScalar_int16_min(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int16_min.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt32();
    const w = new MsgPackWriter();
    w.writeInt32(val);
    writeFile(out, "scalars/int16_min.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int16_min mp: " + e.message); return [0, 1]; }
}

function testScalar_int16_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int16_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt32();
    const w = new MsgPackWriter();
    w.writeInt32(val);
    writeFile(out, "scalars/int16_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int16_max mp: " + e.message); return [0, 1]; }
}

function testScalar_int32_min(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int32_min.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt32();
    const w = new MsgPackWriter();
    w.writeInt32(val);
    writeFile(out, "scalars/int32_min.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int32_min mp: " + e.message); return [0, 1]; }
}

function testScalar_int32_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int32_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt32();
    const w = new MsgPackWriter();
    w.writeInt32(val);
    writeFile(out, "scalars/int32_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int32_max mp: " + e.message); return [0, 1]; }
}

function testScalar_int64_min(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int64_min.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt64();
    const w = new MsgPackWriter();
    w.writeInt64(val);
    writeFile(out, "scalars/int64_min.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int64_min mp: " + e.message); return [0, 1]; }
}

function testScalar_int64_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/int64_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readInt64();
    const w = new MsgPackWriter();
    w.writeInt64(val);
    writeFile(out, "scalars/int64_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL int64_max mp: " + e.message); return [0, 1]; }
}

function testScalar_uint8_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/uint8_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readUint32();
    const w = new MsgPackWriter();
    w.writeUint32(val);
    writeFile(out, "scalars/uint8_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL uint8_max mp: " + e.message); return [0, 1]; }
}

function testScalar_uint16_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/uint16_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readUint32();
    const w = new MsgPackWriter();
    w.writeUint32(val);
    writeFile(out, "scalars/uint16_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL uint16_max mp: " + e.message); return [0, 1]; }
}

function testScalar_uint32_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/uint32_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readUint32();
    const w = new MsgPackWriter();
    w.writeUint32(val);
    writeFile(out, "scalars/uint32_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL uint32_max mp: " + e.message); return [0, 1]; }
}

function testScalar_uint64_max(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/uint64_max.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readUint64();
    const w = new MsgPackWriter();
    w.writeUint64(val);
    writeFile(out, "scalars/uint64_max.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL uint64_max mp: " + e.message); return [0, 1]; }
}

function testScalar_float32_1_5(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float32_1.5.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat32();
    const w = new MsgPackWriter();
    w.writeFloat32(val);
    writeFile(out, "scalars/float32_1.5.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float32_1.5 mp: " + e.message); return [0, 1]; }
}

function testScalar_float32_neg_zero(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float32_neg_zero.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat32();
    const w = new MsgPackWriter();
    w.writeFloat32(val);
    writeFile(out, "scalars/float32_neg_zero.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float32_neg_zero mp: " + e.message); return [0, 1]; }
}

function testScalar_float32_inf(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float32_inf.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat32();
    const w = new MsgPackWriter();
    w.writeFloat32(val);
    writeFile(out, "scalars/float32_inf.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float32_inf mp: " + e.message); return [0, 1]; }
}

function testScalar_float32_neg_inf(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float32_neg_inf.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat32();
    const w = new MsgPackWriter();
    w.writeFloat32(val);
    writeFile(out, "scalars/float32_neg_inf.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float32_neg_inf mp: " + e.message); return [0, 1]; }
}

function testScalar_float32_nan(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float32_nan.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat32();
    const w = new MsgPackWriter();
    w.writeFloat32(val);
    writeFile(out, "scalars/float32_nan.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float32_nan mp: " + e.message); return [0, 1]; }
}

function testScalar_float64_pi(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float64_pi.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat64();
    const w = new MsgPackWriter();
    w.writeFloat64(val);
    writeFile(out, "scalars/float64_pi.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float64_pi mp: " + e.message); return [0, 1]; }
}

function testScalar_float64_neg_zero(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float64_neg_zero.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat64();
    const w = new MsgPackWriter();
    w.writeFloat64(val);
    writeFile(out, "scalars/float64_neg_zero.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float64_neg_zero mp: " + e.message); return [0, 1]; }
}

function testScalar_float64_inf(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float64_inf.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat64();
    const w = new MsgPackWriter();
    w.writeFloat64(val);
    writeFile(out, "scalars/float64_inf.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float64_inf mp: " + e.message); return [0, 1]; }
}

function testScalar_float64_neg_inf(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float64_neg_inf.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat64();
    const w = new MsgPackWriter();
    w.writeFloat64(val);
    writeFile(out, "scalars/float64_neg_inf.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float64_neg_inf mp: " + e.message); return [0, 1]; }
}

function testScalar_float64_nan(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/float64_nan.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readFloat64();
    const w = new MsgPackWriter();
    w.writeFloat64(val);
    writeFile(out, "scalars/float64_nan.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL float64_nan mp: " + e.message); return [0, 1]; }
}

function testScalar_str_empty(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_empty.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_empty.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_empty mp: " + e.message); return [0, 1]; }
}

function testScalar_str_ascii(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_ascii.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_ascii.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_ascii mp: " + e.message); return [0, 1]; }
}

function testScalar_str_null_byte(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_null_byte.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_null_byte.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_null_byte mp: " + e.message); return [0, 1]; }
}

function testScalar_str_escape(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_escape.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_escape.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_escape mp: " + e.message); return [0, 1]; }
}

function testScalar_str_unicode(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_unicode.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_unicode.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_unicode mp: " + e.message); return [0, 1]; }
}

function testScalar_str_31(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_31.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_31.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_31 mp: " + e.message); return [0, 1]; }
}

function testScalar_str_32(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_32.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_32.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_32 mp: " + e.message); return [0, 1]; }
}

function testScalar_str_255(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_255.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_255.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_255 mp: " + e.message); return [0, 1]; }
}

function testScalar_str_256(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/str_256.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readString();
    const w = new MsgPackWriter();
    w.writeString(val);
    writeFile(out, "scalars/str_256.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL str_256 mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_empty(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_empty.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_empty.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_empty mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_small(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_small.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_small.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_small mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_31(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_31.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_31.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_31 mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_32(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_32.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_32.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_32 mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_255(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_255.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_255.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_255 mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_256(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_256.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_256.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_256 mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_zeros(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_zeros.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_zeros.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_zeros mp: " + e.message); return [0, 1]; }
}

function testScalar_bytes_ff(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bytes_ff.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBytes();
    const w = new MsgPackWriter();
    w.writeBytes(val);
    writeFile(out, "scalars/bytes_ff.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bytes_ff mp: " + e.message); return [0, 1]; }
}

function testScalar_bool_true(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bool_true.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBool();
    const w = new MsgPackWriter();
    w.writeBool(val);
    writeFile(out, "scalars/bool_true.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bool_true mp: " + e.message); return [0, 1]; }
}

function testScalar_bool_false(vec: string, out: string): [number, number] {
  try {
    const mp = readFile(join(vec, "scalars/bool_false.mp"));
    const r = new MsgPackReader(mp);
    const val = r.readBool();
    const w = new MsgPackWriter();
    w.writeBool(val);
    writeFile(out, "scalars/bool_false.mp", w.toBytes());
    return [1, 0];
  } catch (e: any) { console.log("FAIL bool_false mp: " + e.message); return [0, 1]; }
}

function testModel_opt_inner(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.OptInnerCodec;
  try {
    const mp = readFile(join(vec, "OptInner.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "OptInner.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "OptInner.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "OptInner.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "OptInner.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL OptInner gron: " + e.message); failed++; }
  return [passed, failed];
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

function testModel_five01(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five01Codec;
  try {
    const mp = readFile(join(vec, "Five01.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five01.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five01.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five01.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five01.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five01 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five02(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five02Codec;
  try {
    const mp = readFile(join(vec, "Five02.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five02.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five02.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five02.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five02.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five02 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five03(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five03Codec;
  try {
    const mp = readFile(join(vec, "Five03.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five03.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five03.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five03.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five03.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five03 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five04(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five04Codec;
  try {
    const mp = readFile(join(vec, "Five04.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five04.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five04.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five04.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five04.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five04 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five05(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five05Codec;
  try {
    const mp = readFile(join(vec, "Five05.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five05.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five05.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five05.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five05.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five05 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five06(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five06Codec;
  try {
    const mp = readFile(join(vec, "Five06.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five06.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five06.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five06.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five06.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five06 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five07(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five07Codec;
  try {
    const mp = readFile(join(vec, "Five07.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five07.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five07.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five07.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five07.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five07 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five08(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five08Codec;
  try {
    const mp = readFile(join(vec, "Five08.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five08.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five08.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five08.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five08.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five08 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five09(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five09Codec;
  try {
    const mp = readFile(join(vec, "Five09.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five09.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five09.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five09.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five09.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five09 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_five10(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Five10Codec;
  try {
    const mp = readFile(join(vec, "Five10.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Five10.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Five10.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Five10.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Five10.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Five10 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten01(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten01Codec;
  try {
    const mp = readFile(join(vec, "Ten01.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten01.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten01.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten01.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten01.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten01 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten02(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten02Codec;
  try {
    const mp = readFile(join(vec, "Ten02.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten02.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten02.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten02.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten02.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten02 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten03(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten03Codec;
  try {
    const mp = readFile(join(vec, "Ten03.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten03.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten03.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten03.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten03.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten03 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten04(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten04Codec;
  try {
    const mp = readFile(join(vec, "Ten04.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten04.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten04.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten04.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten04.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten04 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_ten05(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Ten05Codec;
  try {
    const mp = readFile(join(vec, "Ten05.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Ten05.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Ten05.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Ten05.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Ten05.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Ten05 gron: " + e.message); failed++; }
  return [passed, failed];
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

function testModel_wide20(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide20Codec;
  try {
    const mp = readFile(join(vec, "Wide20.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide20.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide20.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide20.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide20.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide20 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide25(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide25Codec;
  try {
    const mp = readFile(join(vec, "Wide25.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide25.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide25.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide25.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide25.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide25 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide30(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide30Codec;
  try {
    const mp = readFile(join(vec, "Wide30.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide30.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide30.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide30.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide30.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide30 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide35(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide35Codec;
  try {
    const mp = readFile(join(vec, "Wide35.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide35.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide35.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide35.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide35.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide35 gron: " + e.message); failed++; }
  return [passed, failed];
}

function testModel_wide40(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;
  const codec = gen.Wide40Codec;
  try {
    const mp = readFile(join(vec, "Wide40.msgpack"));
    const obj = codec.decode(new MsgPackReader(mp));
    const w = new MsgPackWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.msgpack", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 mp: " + e.message); failed++; }
  try {
    const json = readFile(join(vec, "Wide40.json"));
    const obj = codec.decode(new JsonReader(json));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 json: " + e.message); failed++; }
  try {
    const unformatted = readFile(join(vec, "Wide40.unformatted.json"));
    const obj = codec.decode(new JsonReader(unformatted));
    const w = new JsonWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.unformatted.json", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 unformatted: " + e.message); failed++; }
  try {
    const gron = readFile(join(vec, "Wide40.gron"));
    const obj = codec.decode(new GronReader(gron));
    const w = new GronWriter();
    codec.encode(w, obj);
    writeFile(out, "Wide40.gron", w.toBytes());
    passed++;
  } catch (e: any) { console.log("FAIL Wide40 gron: " + e.message); failed++; }
  return [passed, failed];
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
export function runModels(vec: string, out: string): [number, number] {
  let passed = 0, failed = 0;

  // Scalar tests
  let [pint8_min, fint8_min] = testScalar_int8_min(vec, out); passed += pint8_min; failed += fint8_min;
  let [pint8_max, fint8_max] = testScalar_int8_max(vec, out); passed += pint8_max; failed += fint8_max;
  let [pint16_min, fint16_min] = testScalar_int16_min(vec, out); passed += pint16_min; failed += fint16_min;
  let [pint16_max, fint16_max] = testScalar_int16_max(vec, out); passed += pint16_max; failed += fint16_max;
  let [pint32_min, fint32_min] = testScalar_int32_min(vec, out); passed += pint32_min; failed += fint32_min;
  let [pint32_max, fint32_max] = testScalar_int32_max(vec, out); passed += pint32_max; failed += fint32_max;
  let [pint64_min, fint64_min] = testScalar_int64_min(vec, out); passed += pint64_min; failed += fint64_min;
  let [pint64_max, fint64_max] = testScalar_int64_max(vec, out); passed += pint64_max; failed += fint64_max;
  let [puint8_max, fuint8_max] = testScalar_uint8_max(vec, out); passed += puint8_max; failed += fuint8_max;
  let [puint16_max, fuint16_max] = testScalar_uint16_max(vec, out); passed += puint16_max; failed += fuint16_max;
  let [puint32_max, fuint32_max] = testScalar_uint32_max(vec, out); passed += puint32_max; failed += fuint32_max;
  let [puint64_max, fuint64_max] = testScalar_uint64_max(vec, out); passed += puint64_max; failed += fuint64_max;
  let [pfloat32_1_5, ffloat32_1_5] = testScalar_float32_1_5(vec, out); passed += pfloat32_1_5; failed += ffloat32_1_5;
  let [pfloat32_neg_zero, ffloat32_neg_zero] = testScalar_float32_neg_zero(vec, out); passed += pfloat32_neg_zero; failed += ffloat32_neg_zero;
  let [pfloat32_inf, ffloat32_inf] = testScalar_float32_inf(vec, out); passed += pfloat32_inf; failed += ffloat32_inf;
  let [pfloat32_neg_inf, ffloat32_neg_inf] = testScalar_float32_neg_inf(vec, out); passed += pfloat32_neg_inf; failed += ffloat32_neg_inf;
  let [pfloat32_nan, ffloat32_nan] = testScalar_float32_nan(vec, out); passed += pfloat32_nan; failed += ffloat32_nan;
  let [pfloat64_pi, ffloat64_pi] = testScalar_float64_pi(vec, out); passed += pfloat64_pi; failed += ffloat64_pi;
  let [pfloat64_neg_zero, ffloat64_neg_zero] = testScalar_float64_neg_zero(vec, out); passed += pfloat64_neg_zero; failed += ffloat64_neg_zero;
  let [pfloat64_inf, ffloat64_inf] = testScalar_float64_inf(vec, out); passed += pfloat64_inf; failed += ffloat64_inf;
  let [pfloat64_neg_inf, ffloat64_neg_inf] = testScalar_float64_neg_inf(vec, out); passed += pfloat64_neg_inf; failed += ffloat64_neg_inf;
  let [pfloat64_nan, ffloat64_nan] = testScalar_float64_nan(vec, out); passed += pfloat64_nan; failed += ffloat64_nan;
  let [pstr_empty, fstr_empty] = testScalar_str_empty(vec, out); passed += pstr_empty; failed += fstr_empty;
  let [pstr_ascii, fstr_ascii] = testScalar_str_ascii(vec, out); passed += pstr_ascii; failed += fstr_ascii;
  let [pstr_null_byte, fstr_null_byte] = testScalar_str_null_byte(vec, out); passed += pstr_null_byte; failed += fstr_null_byte;
  let [pstr_escape, fstr_escape] = testScalar_str_escape(vec, out); passed += pstr_escape; failed += fstr_escape;
  let [pstr_unicode, fstr_unicode] = testScalar_str_unicode(vec, out); passed += pstr_unicode; failed += fstr_unicode;
  let [pstr_31, fstr_31] = testScalar_str_31(vec, out); passed += pstr_31; failed += fstr_31;
  let [pstr_32, fstr_32] = testScalar_str_32(vec, out); passed += pstr_32; failed += fstr_32;
  let [pstr_255, fstr_255] = testScalar_str_255(vec, out); passed += pstr_255; failed += fstr_255;
  let [pstr_256, fstr_256] = testScalar_str_256(vec, out); passed += pstr_256; failed += fstr_256;
  let [pbytes_empty, fbytes_empty] = testScalar_bytes_empty(vec, out); passed += pbytes_empty; failed += fbytes_empty;
  let [pbytes_small, fbytes_small] = testScalar_bytes_small(vec, out); passed += pbytes_small; failed += fbytes_small;
  let [pbytes_31, fbytes_31] = testScalar_bytes_31(vec, out); passed += pbytes_31; failed += fbytes_31;
  let [pbytes_32, fbytes_32] = testScalar_bytes_32(vec, out); passed += pbytes_32; failed += fbytes_32;
  let [pbytes_255, fbytes_255] = testScalar_bytes_255(vec, out); passed += pbytes_255; failed += fbytes_255;
  let [pbytes_256, fbytes_256] = testScalar_bytes_256(vec, out); passed += pbytes_256; failed += fbytes_256;
  let [pbytes_zeros, fbytes_zeros] = testScalar_bytes_zeros(vec, out); passed += pbytes_zeros; failed += fbytes_zeros;
  let [pbytes_ff, fbytes_ff] = testScalar_bytes_ff(vec, out); passed += pbytes_ff; failed += fbytes_ff;
  let [pbool_true, fbool_true] = testScalar_bool_true(vec, out); passed += pbool_true; failed += fbool_true;
  let [pbool_false, fbool_false] = testScalar_bool_false(vec, out); passed += pbool_false; failed += fbool_false;

  // Object tests
  let [popt_inner, fopt_inner] = testModel_opt_inner(vec, out); passed += popt_inner; failed += fopt_inner;
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
  let [pfive01, ffive01] = testModel_five01(vec, out); passed += pfive01; failed += ffive01;
  let [pfive02, ffive02] = testModel_five02(vec, out); passed += pfive02; failed += ffive02;
  let [pfive03, ffive03] = testModel_five03(vec, out); passed += pfive03; failed += ffive03;
  let [pfive04, ffive04] = testModel_five04(vec, out); passed += pfive04; failed += ffive04;
  let [pfive05, ffive05] = testModel_five05(vec, out); passed += pfive05; failed += ffive05;
  let [pfive06, ffive06] = testModel_five06(vec, out); passed += pfive06; failed += ffive06;
  let [pfive07, ffive07] = testModel_five07(vec, out); passed += pfive07; failed += ffive07;
  let [pfive08, ffive08] = testModel_five08(vec, out); passed += pfive08; failed += ffive08;
  let [pfive09, ffive09] = testModel_five09(vec, out); passed += pfive09; failed += ffive09;
  let [pfive10, ffive10] = testModel_five10(vec, out); passed += pfive10; failed += ffive10;
  let [pten01, ften01] = testModel_ten01(vec, out); passed += pten01; failed += ften01;
  let [pten02, ften02] = testModel_ten02(vec, out); passed += pten02; failed += ften02;
  let [pten03, ften03] = testModel_ten03(vec, out); passed += pten03; failed += ften03;
  let [pten04, ften04] = testModel_ten04(vec, out); passed += pten04; failed += ften04;
  let [pten05, ften05] = testModel_ten05(vec, out); passed += pten05; failed += ften05;
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
  let [prec_list, frec_list] = testModel_rec_list(vec, out); passed += prec_list; failed += frec_list;
  let [prec_tree, frec_tree] = testModel_rec_tree(vec, out); passed += prec_tree; failed += frec_tree;
  let [prec_chain, frec_chain] = testModel_rec_chain(vec, out); passed += prec_chain; failed += frec_chain;
  let [prec_wrap, frec_wrap] = testModel_rec_wrap(vec, out); passed += prec_wrap; failed += frec_wrap;
  let [prec_wide, frec_wide] = testModel_rec_wide(vec, out); passed += prec_wide; failed += frec_wide;
  let [pwide20, fwide20] = testModel_wide20(vec, out); passed += pwide20; failed += fwide20;
  let [pwide25, fwide25] = testModel_wide25(vec, out); passed += pwide25; failed += fwide25;
  let [pwide30, fwide30] = testModel_wide30(vec, out); passed += pwide30; failed += fwide30;
  let [pwide35, fwide35] = testModel_wide35(vec, out); passed += pwide35; failed += fwide35;
  let [pwide40, fwide40] = testModel_wide40(vec, out); passed += pwide40; failed += fwide40;
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
