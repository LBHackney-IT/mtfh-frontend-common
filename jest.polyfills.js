const { TextDecoder, TextEncoder } = require("node:util");
const { Blob } = require("node:buffer");
const { ReadableStream, WritableStream, TransformStream } = require("node:stream/web");

class BroadcastChannel {
  constructor(name) {
    this.name = name;
  }

  // Stub for MSW/jsdom — no cross-context messaging needed in tests
  postMessage() {
    return undefined;
  }

  close() {
    return undefined;
  }

  addEventListener() {
    return undefined;
  }

  removeEventListener() {
    return undefined;
  }
}

globalThis.TextDecoder = TextDecoder;
globalThis.TextEncoder = TextEncoder;
globalThis.Blob = Blob;
globalThis.ReadableStream = ReadableStream;
globalThis.WritableStream = WritableStream;
globalThis.TransformStream = TransformStream;
globalThis.BroadcastChannel = BroadcastChannel;

if (!globalThis.Request) {
  const { fetch, Headers, Request, Response, FormData } = require("undici");

  globalThis.fetch = fetch;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
  globalThis.Response = Response;
  globalThis.FormData = FormData;
}
