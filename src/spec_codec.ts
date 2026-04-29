import type { SpecReader } from "./spec_reader.js";
import { JsonReader } from "./json_reader.js";
import { JsonWriter } from "./json_writer.js";
import { MsgPackReader } from "./msgpack_reader.js";
import { MsgPackWriter } from "./msgpack_writer.js";

export interface SpecCodec<T> {
  encodeJson(obj: T): Uint8Array;
  encodeMsgPack(obj: T): Uint8Array;
  decode(r: SpecReader): T;
}

export function dispatch<T>(codec: SpecCodec<T>, body: Uint8Array, contentType: string): T {
  if (contentType.includes("msgpack")) {
    return codec.decode(new MsgPackReader(body));
  }
  return codec.decode(new JsonReader(body));
}

export function respond<T>(codec: SpecCodec<T>, obj: T, accept: string): Uint8Array {
  if (accept.includes("msgpack")) {
    return codec.encodeMsgPack(obj);
  }
  return codec.encodeJson(obj);
}
