import { JsonReader } from "./json_reader.js";
import { MsgPackReader } from "./msgpack_reader.js";
export function dispatch(codec, body, contentType) {
    if (contentType.includes("msgpack")) {
        return codec.decode(new MsgPackReader(body));
    }
    return codec.decode(new JsonReader(body));
}
export function respond(codec, obj, accept) {
    if (accept.includes("msgpack")) {
        return codec.encodeMsgPack(obj);
    }
    return codec.encodeJson(obj);
}
