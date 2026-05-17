# TypeScript Runtime — Developer Reference

> **Emitter**: `/home/ytr/Specodec/typespec-emitter-typescript/src/index.ts`

---

## 1. Type Mapping Table

| TypeSpec Type | TypeScript Type | Notes |
|---|---|---|
| `string` | `string` | |
| `boolean` | `boolean` | |
| `int8`, `int16`, `int32` | `number` | Emitted as `w.writeInt32()` / `r.readInt32()` |
| `int64` | `bigint` | Emitted as `w.writeInt64()` / `r.readInt64()` |
| `uint8`, `uint16`, `uint32` | `number` | Emitted as `w.writeUint32()` / `r.readUint32()` |
| `uint64` | `bigint` | Emitted as `w.writeUint64()` / `r.readUint64()` |
| `float32`, `float64`, `float`, `decimal` | `number` | f32 truncated via `Float32Array` round-trip; f64 kept as-is |
| `bytes` | `Uint8Array` | |
| `integer` | `number` | Treated as int32 |
| Enum | `string` | reads/writes via `w.writeString()` |
| Array `<T>` | `T[]` | |
| Record `<V>` | `Record<string, V>` | |
| Model | `interface` name | |
| Union | `abstract class` name | |

---

## 2. Model Representation

Models are generated as **TypeScript interfaces** — no runtime class, no constructor:

```ts
export interface MyModel {
  name: string;
  age: number;
  tags: string[];
}
```

Codec functions named `writeMyModel` and `readMyModel` are emitted separately.

---

## 3. Optional / Nullable

- Optional fields use the `field?: Type` syntax.
- Optional fields are **not** present in the emitted interface if the `?` is omitted by the emitter (`safeFieldName`-based).
- Required fields appear before optional fields in generated code.
- Nullable is mapped to `Type | null`.

---

## 4. Union Representation

Discriminated unions are represented as an **abstract class** hierarchy:

```ts
export abstract class MyUnion {
  readonly _tag: string;
  protected constructor(tag: string) { this._tag = tag; }
}

export class VariantA extends MyUnion {
  readonly _tag = "variantA";
  constructor(readonly value: number) { super("variantA"); }
}

export class Undefined extends MyUnion {
  private constructor() { super("undefined"); }
  static readonly instance = new Undefined();
}
```

`writeMyUnion` and `readMyUnion` use the `_tag` field (or `instanceof` checks) to dispatch to the correct variant.

---

## 5. Enum Representation

Native TypeScript `enum`:

```ts
export enum Color {
  red = "red",
  green = "green",
  blue = "blue",
}
```

Read/write via `w.writeString()` / `r.readEnum()` (string value, not numeric index).

---

## 6. Ryu Implementation

- **Bit extraction**: `Float32Array` + `Uint32Array` shared buffer (SharedArrayBuffer pattern) for f32; `Float64Array` + `BigUint64Array` shared buffer for f64.
- **Tables**: BigInt arrays in JS. f32 tables: `FLOAT_POW5_INV_SPLIT: bigint[]` (56 entries), `FLOAT_POW5_SPLIT: bigint[]` (47 entries). f64 tables: `DOUBLE_POW5_INV_SPLIT: bigint[][]` and `DOUBLE_POW5_SPLIT: bigint[][]` (each an array of `[lo, hi]` pairs).
- **`mul_shift_64`**: Uses BigInt math: `b0 = m * mul[0]`, `b2 = m * mul[1]`, `b0Hi = b0 >> 64n`, `sum = b0Hi + b2`, then `sum >> BigInt(shift - 64)`.
- **`decimalLength9` / `decimalLength17`**: BigInt comparisons.
- **Output format**: Scientific notation (`"1.234E2"`), not fixed-point.
- No deviations from the Python reference algorithm.

---

## 7. MsgPack Reader/Writer

**Reader** (`MsgPackReader`):
- Accumulates via `DataView` on the underlying `Uint8Array.buffer` at the correct byte offset.
- `readF32`/`readF64` use `DataView.getFloat32(0, false)` (big-endian).
- `readInt32()` delegates to `readInt() | 0`; `readUint32()` delegates to `readInt() >>> 0`.
- `readInt64()` uses `BigInt` for handling 64-bit values from hi/lo 32-bit halves.
- NaN/Infinity forwarded as-is (no special msgpack handling — msgpack has native float encoding).

**Writer** (`MsgPackWriter`):
- Accumulates into `number[]` (`this.buf`), converted to `Uint8Array` on `toBytes()`.
- `writeU64` splits `bigint` into hi/lo u32 via `Number(v >> BigInt(32))`.
- `writeFloat32`/`writeFloat64` use `DataView.setFloat32(0, value, false)` + `Uint8Array` copy.

---

## 8. JSON Reader/Writer

**Reader** (`JsonReader`):
- Works on a decoded UTF-8 `string` (`TextDecoder`).
- `_parse_string`: Handles `\uXXXX` escapes including **surrogate pairs** (`\uD800`–`\uDBFF` + `\uDC00`–`\uDFFF` → single codepoint via `String.fromCodePoint`).
- Number parsing: extracts raw string via `_parseNumberRaw()`, then uses `Number()` / `BigInt()`.
- `int64`/`uint64`: Supports quoted string encoding (`"123"`) and bare numbers.
- NaN → unquoted `NaN` string → `Number.NaN`; Infinity → `Infinity` / `-Infinity`.
- `readFloat32()`: parses value as `float`, then round-trips through `Float32Array` (one-element) to truncate to 32-bit.
- `readBytes()`: Base64 decoding via manual lookup table (not `atob`).

**Writer** (`JsonWriter`):
- Accumulates into `string[]` (`this.parts`), joined and encoded on `toBytes()`.
- NaN/Infinity: `"NaN"`, `"Infinity"`, `"-Infinity"` (quoted).
- `int64`/`uint64`: emitted as quoted strings `"123456789"`.
- `float32`: first truncates through `Float32Array`, then runs Ryu formatting.
- Uses `formatFloat32`/`formatFloat64` from `float-fmt.ts` (Ryu).

---

## 9. Gron Reader/Writer

**Reader** (`GronReader`):
- Parses lines of format `path = value;`.
- Context stack `_ctx: Array<{prefix:string, type:'object'|'array', index:number}>`.
- `_unescape()`: handles `\uXXXX` but **no surrogate pair support** (uses `String.fromCharCode`).
- `readInt64`/`readUint64`: values are always unescaped (quoted) → `BigInt(unescaped_string)`.
- `readBytes()`: unescapes string then `atob()` to binary.
- `isNull()`: checks if current raw value is `"null"`.

**Writer** (`GronWriter`):
- Accumulates `string[]` lines, emits as `\n`-joined + trailing `\n`.
- Path stack: `_segments: string[]` starting with `["json"]`.
- `_nestingStack: Array<{depth:number, arrayIndex?:number}>` tracks nesting.
- `beginObject` emits `path = {};`, `beginArray` emits `path = [];`.
- `int64`/`uint64`: emitted as quoted strings.
- NaN/Infinity: quoted strings `"NaN"`, `"Infinity"`, `"-Infinity"`.

---

## 10. State Management

- **Mutable** class-based state.
- Readers mutate `_pos` cursor; writers mutate internal `parts[]` / `buf[]` arrays.
- No immutability — all state flows through direct mutation of `this`.

---

## 11. SpecReader / SpecWriter Interfaces

### SpecReader

```ts
export interface SpecReader {
  beginObject(): void;
  hasNextField(): boolean;
  readFieldName(): string;
  endObject(): void;
  beginArray(): void;
  hasNextElement(): boolean;
  endArray(): void;
  readString(): string;
  readBool(): boolean;
  readInt32(): number;
  readInt64(): bigint;
  readUint32(): number;
  readUint64(): bigint;
  readFloat32(): number;
  readFloat64(): number;
  readNull(): null;
  readBytes(): Uint8Array;
  readEnum(): string;
  isNull(): boolean;
  skip(): void;
}
```

### SpecWriter

```ts
export interface SpecWriter {
  writeString(value: string): void;
  writeBool(value: boolean): void;
  writeInt32(value: number): void;
  writeInt64(value: bigint): void;
  writeUint32(value: number): void;
  writeUint64(value: bigint): void;
  writeFloat32(value: number): void;
  writeFloat64(value: number): void;
  writeNull(): void;
  writeBytes(value: Uint8Array): void;
  writeEnum(value: string): void;
  beginObject(fieldCount: number): void;
  writeField(name: string): void;
  endObject(): void;
  beginArray(elementCount: number): void;
  nextElement(): void;
  endArray(): void;
  toBytes(): Uint8Array;
}
```

---

## 12. Emitter Generation Pattern

### Model encode
```ts
export function writeMyModel(w: SpecWriter, obj: MyModel): void {
  w.beginObject(2);
  w.writeField("name");
  w.writeString(obj.name);
  w.writeField("age");
  w.writeInt32(obj.age);
  w.endObject();
}
```

### Model decode
```ts
export function readMyModel(r: SpecReader): MyModel {
  r.beginObject();
  let _name: string = "";
  let _age: number = 0;
  while (r.hasNextField()) {
    switch (r.readFieldName()) {
      case "name": _name = r.readString(); break;
      case "age": _age = r.readInt32(); break;
      default: r.skip(); break;
    }
  }
  r.endObject();
  return { name: _name, age: _age };
}
```

Note: Typed arrays use more nuanced patterns with field tracking.

### Union encode
```ts
export function writeMyUnion(w: SpecWriter, obj: MyUnion): void {
  if (obj instanceof VariantA) {
    w.beginObject(2);
    w.writeField("_tag"); w.writeString("variantA");
    w.writeField("value"); w.writeInt32(obj.value);
    w.endObject();
  } else if (obj instanceof Undefined) {
    w.writeNull();
  }
}
```

---

## 13. Known Quirks / Bugs

- Gron unescape uses `String.fromCharCode` (no surrogate pair support) — differs from JSON reader which uses `String.fromCodePoint`.
- `int64`/`uint64` in JSON/gron use BigInt directly; no overflow is possible in TS BigInt but value range checks happen on read.
- `SpecUndefined` is a singleton class pattern (private constructor + static instance).
- `writeInt32` emits `value | 0` to coerce to 32-bit signed.

---

## 14. DevContainer

- **Base image**: `dev:all`
- **Tooling**: Node.js + npm via `mise` shims
- **Build**: `npm install && npm run build` → builds TypeScript to `dist/`
- **Output** (`FROM scratch`): copies `/app/dist/` and `/app/package.json` to `/out/`
