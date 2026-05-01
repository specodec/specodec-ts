import type { SpecReader } from "./spec_reader.js";
import type { SpecWriter } from "./spec_writer.js";
import { JsonWriter } from "./json_writer.js";
import { JsonReader } from "./json_reader.js";
import { MsgPackWriter } from "./msgpack_writer.js";
import { MsgPackReader } from "./msgpack_reader.js";
import { GronWriter } from "./gron_writer.js";
import { GronReader } from "./gron_reader.js";

export interface SpecCodec<T> {
  encode(w: SpecWriter, obj: T): void;
  decode(r: SpecReader): T;
}

// ---------------------------------------------------------------------------
// FormatEntry: a reader/writer factory pair for one MIME type
// ---------------------------------------------------------------------------
export interface FormatEntry {
  contentType: string;
  newWriter(): SpecWriter;
  newReader(body: Uint8Array): SpecReader;
}

// ---------------------------------------------------------------------------
// FormatRegistry: maps content-type substrings to format entries
// ---------------------------------------------------------------------------
export class FormatRegistry {
  private readonly entries: FormatEntry[] = [];

  register(entry: FormatEntry): this {
    this.entries.push(entry);
    return this;
  }

  match(contentType: string): FormatEntry {
    for (const e of this.entries) {
      if (contentType.includes(e.contentType.split("/")[1])) return e;
    }
    return this.entries[0]; // default: first registered (JSON)
  }
}

// ---------------------------------------------------------------------------
// Default registry: json + msgpack + gron
// ---------------------------------------------------------------------------
export const defaultRegistry = new FormatRegistry()
  .register({
    contentType: "application/json",
    newWriter: () => new JsonWriter(),
    newReader: (body) => new JsonReader(body),
  })
  .register({
    contentType: "application/msgpack",
    newWriter: () => new MsgPackWriter(),
    newReader: (body) => new MsgPackReader(body),
  })
  .register({
    contentType: "application/gron",
    newWriter: () => new GronWriter(),
    newReader: (body) => new GronReader(body),
  });

// ---------------------------------------------------------------------------
// dispatch / respond — use registry
// ---------------------------------------------------------------------------
export function dispatch<T>(
  codec: SpecCodec<T>,
  body: Uint8Array,
  contentType: string,
  registry: FormatRegistry = defaultRegistry,
): T {
  const fmt = registry.match(contentType);
  return codec.decode(fmt.newReader(body));
}

export interface RespondResult {
  body: Uint8Array;
  contentType: string;
}

export function respond<T>(
  codec: SpecCodec<T>,
  obj: T,
  accept: string,
  registry: FormatRegistry = defaultRegistry,
): RespondResult {
  const fmt = registry.match(accept);
  const w = fmt.newWriter();
  codec.encode(w, obj);
  return { body: w.toBytes(), contentType: fmt.contentType };
}
