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
export function runScalars(vec: string, out: string): [number, number] {
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
  return [passed, failed];
}
