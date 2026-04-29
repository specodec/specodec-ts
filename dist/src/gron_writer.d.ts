export declare class GronWriter {
    writeString(_value: string): void;
    writeBool(_value: boolean): void;
    writeInt32(_value: number): void;
    writeInt64(_value: bigint): void;
    writeUint32(_value: number): void;
    writeUint64(_value: bigint): void;
    writeFloat32(_value: number): void;
    writeFloat64(_value: number): void;
    writeNull(): void;
    writeBytes(_value: Uint8Array): void;
    beginObject(_fieldCount: number): void;
    writeField(_name: string): void;
    endObject(): void;
    beginArray(_elementCount: number): void;
    nextElement(): void;
    endArray(): void;
    toBytes(): Uint8Array;
}
