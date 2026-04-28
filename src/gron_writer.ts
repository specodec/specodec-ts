export class GronWriter {
  writeString(_value: string): void { throw new Error("GronWriter: not implemented"); }
  writeBool(_value: boolean): void { throw new Error("GronWriter: not implemented"); }
  writeInt32(_value: number): void { throw new Error("GronWriter: not implemented"); }
  writeInt64(_value: bigint): void { throw new Error("GronWriter: not implemented"); }
  writeUint32(_value: number): void { throw new Error("GronWriter: not implemented"); }
  writeUint64(_value: bigint): void { throw new Error("GronWriter: not implemented"); }
  writeFloat32(_value: number): void { throw new Error("GronWriter: not implemented"); }
  writeFloat64(_value: number): void { throw new Error("GronWriter: not implemented"); }
  writeNull(): void { throw new Error("GronWriter: not implemented"); }
  writeBytes(_value: Uint8Array): void { throw new Error("GronWriter: not implemented"); }
  beginObject(_fieldCount: number): void { throw new Error("GronWriter: not implemented"); }
  writeField(_name: string): void { throw new Error("GronWriter: not implemented"); }
  endObject(): void { throw new Error("GronWriter: not implemented"); }
  beginArray(_elementCount: number): void { throw new Error("GronWriter: not implemented"); }
  nextElement(): void { throw new Error("GronWriter: not implemented"); }
  endArray(): void { throw new Error("GronWriter: not implemented"); }
  toBytes(): Uint8Array { throw new Error("GronWriter: not implemented"); }
}
