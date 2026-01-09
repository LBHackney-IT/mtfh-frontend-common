export function generateCodeVerifier(): string {
  const array = new Uint8Array(128);
  globalThis.crypto.getRandomValues(array);

  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function generateCodeChallenge(codeVerifier: string | undefined) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);

  const digest = await globalThis.crypto.subtle.digest({ name: "SHA-256" }, data);
  const base64 = btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return base64;
}

export async function createPkcePair() {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  return { codeVerifier, codeChallenge };
}
