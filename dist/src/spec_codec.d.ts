import type { SpecReader } from "./spec_reader.js";
export interface SpecCodec<T> {
    encodeJson(obj: T): Uint8Array;
    encodeMsgPack(obj: T): Uint8Array;
    decode(r: SpecReader): T;
}
export declare function dispatch<T>(codec: SpecCodec<T>, body: Uint8Array, contentType: string): T;
export declare function respond<T>(codec: SpecCodec<T>, obj: T, accept: string): Uint8Array;
