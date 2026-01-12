export function base64UrlEncode(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);

  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function generateCodeVerifier(): string {
  const array = new Uint8Array(64);
  globalThis.crypto.getRandomValues(array);

  return base64UrlEncode(array);
}

export async function generateCodeChallenge(codeVerifier: string | undefined) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", data);

  return base64UrlEncode(digest);
}

export async function createPkcePair() {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  return { codeVerifier, codeChallenge };
}
