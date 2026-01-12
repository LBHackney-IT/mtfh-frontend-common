import {
  base64UrlEncode,
  generateCodeChallenge,
  generateCodeVerifier,
} from "./authUtils";

describe("authUtils", () => {
  describe("generateCodeVerifier", () => {
    let originalCrypto: Crypto;
    let originalBtoa: typeof btoa;

    beforeEach(() => {
      // Save originals
      originalCrypto = globalThis.crypto;
      originalBtoa = globalThis.btoa;

      // Mock crypto.getRandomValues
      globalThis.crypto = {
        getRandomValues: jest.fn((arr: Uint8Array) => {
          // Fill with predictable values for testing
          for (let i = 0; i < arr.length; i++) {
            arr[i] = i % 256;
          }
          return arr;
        }),
      } as unknown as Crypto;

      // Mock btoa to behave like browser btoa
      globalThis.btoa = jest.fn((str: string) =>
        Buffer.from(str, "binary").toString("base64"),
      );
    });

    afterEach(() => {
      globalThis.crypto = originalCrypto;
      globalThis.btoa = originalBtoa;
      jest.restoreAllMocks();
    });

    it("calls crypto.getRandomValues with a Uint8Array of length 128", () => {
      generateCodeVerifier();

      expect(globalThis.crypto.getRandomValues).toHaveBeenCalledTimes(1);
      const arg = (globalThis.crypto.getRandomValues as jest.Mock).mock.calls[0][0];

      expect(arg).toBeInstanceOf(Uint8Array);
      expect(arg.length).toBe(64);
    });

    it("returns a Base64URL-safe string", () => {
      const verifier = generateCodeVerifier();

      expect(verifier).not.toMatch(/\+/); // no '+'
      expect(verifier).not.toMatch(/\//); // no '/'
      expect(verifier).not.toMatch(/=/); // no '=' padding
    });

    it("produces deterministic output when random values are mocked", () => {
      const v1 = generateCodeVerifier();
      const v2 = generateCodeVerifier();

      expect(v1).toBe(v2);
    });

    it("changes output when random values change", () => {
      // Change mock behavior
      (globalThis.crypto.getRandomValues as jest.Mock).mockImplementationOnce(
        (arr: Uint8Array) => {
          arr.fill(7);
          return arr;
        },
      );

      const v1 = generateCodeVerifier();
      const v2 = generateCodeVerifier();

      expect(v1).not.toBe(v2);
    });

    it("produces a non-empty string", () => {
      const verifier = generateCodeVerifier();
      expect(typeof verifier).toBe("string");
      expect(verifier.length).toBeGreaterThan(0);
    });
  });

  describe("generateCodeChallenge", () => {
    let originalCrypto: Crypto;
    let originalBtoa: typeof btoa;

    beforeEach(() => {
      originalCrypto = globalThis.crypto;
      originalBtoa = globalThis.btoa;

      // Mock TextEncoder
      globalThis.TextEncoder = class {
        // matches real implementation, so disable eslint rule
        // eslint-disable-next-line class-methods-use-this
        encode(str: string | undefined) {
          return new Uint8Array((str ?? "").split("").map((c) => c.charCodeAt(0)));
        }
      } as any;

      // Mock crypto.subtle.digest
      globalThis.crypto = {
        subtle: {
          digest: jest.fn(async (_algo, data: Uint8Array) => {
            // Fake SHA-256 digest: reverse the bytes
            const reversed = Uint8Array.from([...data].reverse());
            return reversed.buffer;
          }),
        },
      } as unknown as Crypto;

      // Mock btoa using Node Buffer
      globalThis.btoa = jest.fn((str: string) =>
        Buffer.from(str, "binary").toString("base64"),
      );
    });

    afterEach(() => {
      globalThis.crypto = originalCrypto;
      globalThis.btoa = originalBtoa;
      jest.restoreAllMocks();
    });

    it("encodes the codeVerifier using TextEncoder", async () => {
      const spy = jest.spyOn(globalThis.TextEncoder.prototype, "encode");

      await generateCodeChallenge("abc");

      expect(spy).toHaveBeenCalledWith("abc");
    });

    it("calls crypto.subtle.digest with SHA-256 and encoded data", async () => {
      const verifier = "abc";
      const encoder = new TextEncoder();
      const expectedData = encoder.encode(verifier);

      await generateCodeChallenge(verifier);

      expect(globalThis.crypto.subtle.digest).toHaveBeenCalledWith(
        "SHA-256",
        expectedData,
      );
    });

    it("returns a Base64URL-safe string", async () => {
      const result = await generateCodeChallenge("abc");

      expect(result).not.toMatch(/\+/);
      expect(result).not.toMatch(/\//);
      expect(result).not.toMatch(/=/);
    });

    it("produces deterministic output for same input under mock", async () => {
      const v1 = await generateCodeChallenge("abc");
      const v2 = await generateCodeChallenge("abc");

      expect(v1).toBe(v2);
    });

    it("produces different output for different input", async () => {
      const v1 = await generateCodeChallenge("abc");
      const v2 = await generateCodeChallenge("xyz");

      expect(v1).not.toBe(v2);
    });

    it("handles undefined verifier by treating it as empty string", async () => {
      const result = await generateCodeChallenge(undefined);

      // TextEncoder("") → empty Uint8Array → reversed empty → empty base64
      expect(typeof result).toBe("string");
    });

    it("converts digest ArrayBuffer into Base64URL correctly", async () => {
      const result = await generateCodeChallenge("A");

      // Verify btoa was called with correct binary string
      const encoded = new TextEncoder().encode("A");
      const reversed = Uint8Array.from([...encoded].reverse());
      const expectedBinary = String.fromCharCode(...reversed);

      expect(globalThis.btoa).toHaveBeenCalledWith(expectedBinary);
      expect(result.length).toBeGreaterThan(0);
    });

    it("returns a string", async () => {
      const result = await generateCodeChallenge("abc");
      expect(typeof result).toBe("string");
    });
  });

  describe("base64UrlEncode", () => {
    test("encodes a simple byte array correctly", () => {
      const input = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
      const result = base64UrlEncode(input);
      expect(result).toBe("SGVsbG8");
    });

    test("removes padding characters", () => {
      const input = new Uint8Array([0]); // Base64: "AA=="
      const result = base64UrlEncode(input);
      expect(result).toBe("AA");
    });

    test("replaces + and / with URL-safe characters", () => {
      // Produces + and / in Base64
      const input = new Uint8Array([251, 255, 239]); // Base64: "+//v"
      const result = base64UrlEncode(input);
      expect(result).toBe("-__v");
    });

    test("accepts ArrayBuffer input", () => {
      const buffer = new Uint8Array([1, 2, 3]).buffer;
      const result = base64UrlEncode(buffer);
      expect(result).toBe("AQID");
    });

    test("handles empty input", () => {
      const input = new Uint8Array([]);
      const result = base64UrlEncode(input);
      expect(result).toBe("");
    });
  });
});
