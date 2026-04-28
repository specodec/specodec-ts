export class GronReader {
  constructor(_data: Uint8Array) {}
  readString(): string { throw new Error("GronReader: not implemented"); }
  readBool(): boolean { throw new Error("GronReader: not implemented"); }
  readInt32(): number { throw new Error("GronReader: not implemented"); }
  readInt64(): bigint { throw new Error("GronReader: not implemented"); }
  readUint32(): number { throw new Error("GronReader: not implemented"); }
  readUint64(): bigint { throw new Error("GronReader: not implemented"); }
  readFloat32(): number { throw new Error("GronReader: not implemented"); }
  readFloat64(): number { throw new Error("GronReader: not implemented"); }
  readNull(): null { throw new Error("GronReader: not implemented"); }
  readBytes(): Uint8Array { throw new Error("GronReader: not implemented"); }
  readEnum(): string { throw new Error("GronReader: not implemented"); }
  beginObject(): void { throw new Error("GronReader: not implemented"); }
  hasNextField(): boolean { throw new Error("GronReader: not implemented"); }
  readFieldName(): string { throw new Error("GronReader: not implemented"); }
  nextFieldSeparator(): void { throw new Error("GronReader: not implemented"); }
  endObject(): void { throw new Error("GronReader: not implemented"); }
  beginArray(): void { throw new Error("GronReader: not implemented"); }
  hasNextElement(): boolean { throw new Error("GronReader: not implemented"); }
  nextElementSeparator(): void { throw new Error("GronReader: not implemented"); }
  endArray(): void { throw new Error("GronReader: not implemented"); }
  isNull(): boolean { throw new Error("GronReader: not implemented"); }
  skip(): void { throw new Error("GronReader: not implemented"); }
}
