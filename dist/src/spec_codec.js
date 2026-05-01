import { JsonWriter } from "./json_writer.js";
import { JsonReader } from "./json_reader.js";
import { MsgPackWriter } from "./msgpack_writer.js";
import { MsgPackReader } from "./msgpack_reader.js";
import { GronWriter } from "./gron_writer.js";
import { GronReader } from "./gron_reader.js";
// ---------------------------------------------------------------------------
// FormatRegistry: maps content-type substrings to format entries
// ---------------------------------------------------------------------------
export class FormatRegistry {
    entries = [];
    register(entry) {
        this.entries.push(entry);
        return this;
    }
    match(contentType) {
        for (const e of this.entries) {
            if (contentType.includes(e.contentType.split("/")[1]))
                return e;
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
export function dispatch(codec, body, contentType, registry = defaultRegistry) {
    const fmt = registry.match(contentType);
    return codec.decode(fmt.newReader(body));
}
export function respond(codec, obj, accept, registry = defaultRegistry) {
    const fmt = registry.match(accept);
    const w = fmt.newWriter();
    codec.encode(w, obj);
    return { body: w.toBytes(), contentType: fmt.contentType };
}
