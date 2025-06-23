import { randomBytes } from "crypto";
import { IncomingMessage, ServerResponse } from "http";
import { getRequestEvent } from "solid-js/web";
import { fromNodeMiddleware, setResponseHeader } from "vinxi/http";
console.log;
import { APIEvent, FetchEvent } from "@solidjs/start/server";
export function GET(e: APIEvent) {
  return [...crypto.getRandomValues(new Uint8Array(16))];
}
