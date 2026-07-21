"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64UrlEncode = base64UrlEncode;
exports.generateCodeVerifier = generateCodeVerifier;
exports.generateCodeChallenge = generateCodeChallenge;
exports.createPkcePair = createPkcePair;
function base64UrlEncode(buffer) {
    const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function generateCodeVerifier() {
    const array = new Uint8Array(64);
    globalThis.crypto.getRandomValues(array);
    return base64UrlEncode(array);
}
async function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await globalThis.crypto.subtle.digest("SHA-256", data);
    return base64UrlEncode(digest);
}
async function createPkcePair() {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    return { codeVerifier, codeChallenge };
}
