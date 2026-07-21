export declare function base64UrlEncode(buffer: ArrayBuffer | Uint8Array): string;
export declare function generateCodeVerifier(): string;
export declare function generateCodeChallenge(
  codeVerifier: string | undefined,
): Promise<string>;
export declare function createPkcePair(): Promise<{
  codeVerifier: string;
  codeChallenge: string;
}>;
//# sourceMappingURL=authUtils.d.ts.map
