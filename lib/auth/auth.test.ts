import { createHash, randomFillSync } from "crypto";
import { TextDecoder, TextEncoder } from "util";

import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import { config } from "../config";
import {
  $auth,
  AuthUser,
  CognitoTokenResponse,
  JWTPayload,
  TokenExchangeError,
  TokenSource,
  cognitoLogin,
  handleCognitoCallback,
  isAuthorised,
  isAuthorisedForGroups,
  login,
  logout,
  parseToken,
  verifyCognitoToken,
  voidUser,
} from "./auth";
import { cognitoVerifier } from "./cognitoVerifier";

jest.mock("aws-jwt-verify", () => ({
  CognitoJwtVerifier: {
    create: jest.fn(() => ({
      verify: jest.fn(),
    })),
  },
}));

const mockLegacyTokenPayload: JWTPayload = {
  sub: "112895652611500752170",
  email: "test@example.com",
  iss: "Hackney",
  name: "Tom Smith",
  groups: ["TEST_GROUP"],
  iat: Math.floor(Date.now() / 1000),
};

const mockToken = jwt.sign(mockLegacyTokenPayload, "legacy-secret");

Object.defineProperty(window, "location", {
  value: {
    href: "http://localhost/",
    origin: "http://localhost",
    reload: jest.fn(),
  },
  writable: true,
});

let auth: AuthUser;

const mockCognitoPayload: JWTPayload = {
  sub: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  groups: [],
  iss: "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_ABC123",
  iat: Math.floor(Date.now() / 1000),
  email: "testuser@example.com",
  name: "Test User",
  "custom:groups": ["TEST_GROUP"],
};

const mockCognitoToken = jwt.sign(mockCognitoPayload, "cognito-secret");

let generatedCodeChallenge: string;
let generatedVerifier: string;

const sessionStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string): string | null {
      return store[key] ?? null;
    },
    setItem(key: string, value: string): void {
      store[key] = value;
    },
    removeItem(key: string): void {
      delete store[key];
    },
    clear(): void {
      store = {};
    },
  };
})();

Object.defineProperty(globalThis, "sessionStorage", {
  value: sessionStorageMock,
});

function bufferToArrayBuffer(buf: Buffer): ArrayBuffer {
  const arrayBuffer = new ArrayBuffer(buf.byteLength);
  const view = new Uint8Array(arrayBuffer);
  view.set(buf);
  return arrayBuffer;
}

function toUint8Array(data: ArrayBuffer | ArrayBufferView): Uint8Array {
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
  return new Uint8Array(data);
}

describe("auth", () => {
  beforeEach(async () => {
    let cookies = "";

    Object.defineProperty(window.document, "cookie", {
      configurable: true,
      get: () => cookies,
      set: (newCookie) => {
        // allow testing with multiple cookies
        if (cookies) {
          cookies += `; ${newCookie}`;
        } else {
          cookies = newCookie;
        }
      },
    });

    // these modules are not available in jsdom. Mock here to mimic actual browser behavior as closely as possible
    globalThis.TextEncoder = TextEncoder as any;
    globalThis.TextDecoder = TextDecoder as any;
    globalThis.crypto = {
      subtle: {
        digest: async (_algo: any, data: ArrayBuffer) => {
          const hash = createHash("sha256").update(toUint8Array(data)).digest();

          // grab this, so the code challenge can be verified later
          generatedCodeChallenge = btoa(String.fromCharCode(...new Uint8Array(hash)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");

          return bufferToArrayBuffer(hash);
        },
      },
      getRandomValues: (arr: Uint8Array) => {
        const randomFill = randomFillSync(arr);

        //grab the verifier that gets generated with this code
        generatedVerifier = btoa(String.fromCharCode(...randomFill))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");

        return randomFill;
      },
    } as any;

    await parseToken();
    (window.location.reload as jest.Mock).mockReset();
  });

  test("user is not authenticated", () => {
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(isAuthorised()).toBe(false);
  });

  test.each([`${config.authToken}=123456`, `${config.cognitoTokenName}=1234567`])(
    "user is unauthenticated with incorrect cookie",
    async (cookie) => {
      window.document.cookie = cookie;
      await parseToken();
      auth = $auth.getValue();
      expect(auth.token).toBe("");
      expect(isAuthorised()).toBe(false);
    },
  );

  test("user is unauthenticated when Cognito token validation fails", async () => {
    (cognitoVerifier.verify as jest.Mock).mockRejectedValueOnce(
      new Error("invalid token"),
    );
    window.document.cookie = `${config.cognitoTokenName}=${mockCognitoToken}`;
    await parseToken();
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(isAuthorised()).toBe(false);
  });

  test("user is authenticated with legacy token", async () => {
    window.document.cookie = `${config.authToken}=${mockToken}`;
    await parseToken();
    auth = $auth.getValue();
    expect(auth.token).toBe(mockToken);
    expect(auth.name).toBe("Tom Smith");
    expect(auth.email).toBe("test@example.com");
    expect(auth.groups).toContain("TEST_GROUP");
    expect(auth.tokenSource).toBe(TokenSource.LegacyUser);
    expect(isAuthorised()).toBe(true);
    expect(isAuthorisedForGroups(["TEST_GROUP"])).toBe(true);
    expect(isAuthorisedForGroups(["not-a-users-group"])).toBe(false);
  });

  test("user is authenticated with Cognito token", async () => {
    window.document.cookie = `${config.cognitoTokenName}=${mockCognitoToken}`;
    await parseToken();
    auth = $auth.getValue();
    expect(auth.token).toBe(mockCognitoToken);
    expect(auth.name).toBe(mockCognitoPayload.name);
    expect(auth.email).toBe(mockCognitoPayload.email);
    expect(auth["custom:groups"]).toStrictEqual(mockCognitoPayload["custom:groups"]);
    expect(auth.tokenSource).toBe(TokenSource.CognitoUser);
    expect(isAuthorised()).toBe(true);
    expect(isAuthorisedForGroups([mockCognitoPayload["custom:groups"]![0]])).toBe(true);
    expect(isAuthorisedForGroups(["not-a-users-group"])).toBe(false);
  });

  test("login clears state and redirects to legacy auth", async () => {
    window.document.cookie = `${config.authToken}=${mockToken}`;
    await parseToken();
    login();
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(window.location.href).toContain(config.authDomain);
  });

  test("cognitoLogin clears state and redirects to cognito auth", async () => {
    window.document.cookie = `${config.cognitoTokenName}=${mockCognitoToken}`;
    await parseToken();
    await cognitoLogin();
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(window.location.href).toContain(config.cognitoDomain);
  });

  test.each([
    [config.authToken, mockToken],
    [config.cognitoTokenName, mockCognitoToken],
  ])(
    "logout clears legacy and cognito cookies and state",
    async (tokenName, tokenValue) => {
      window.document.cookie = `${tokenName}=${tokenValue}`;
      await parseToken();
      auth = $auth.getValue();
      expect(auth.token).toBe(tokenValue);
      logout();

      const authUser = $auth.getValue();
      expect(authUser).toBe(voidUser);
      expect(window.location.reload).toBeCalledTimes(1);
    },
  );

  test("when both legacy and cognito tokens are present, cognito token takes precedence", async () => {
    window.document.cookie = `${config.cognitoTokenName}=${mockCognitoToken}`;
    window.document.cookie = `${config.authToken}=${mockToken}`;

    await parseToken();
    auth = $auth.getValue();
    expect(auth.token).toBe(mockCognitoToken);
  });

  describe("cognitoLogin", () => {
    test("cognitoLogin clears state and redirects to cognito auth with correct params", async () => {
      window.document.cookie = `${config.cognitoTokenName}=${mockCognitoToken}`;
      await parseToken();
      auth = $auth.getValue();
      expect(auth.token).toBe(mockCognitoToken);
      await cognitoLogin();

      const expectedParams = new URLSearchParams({
        client_id: config.cognitoClientId,
        response_type: "code",
        scope: "openid email profile",
        redirect_uri: window.location.origin,
        code_challenge_method: "S256",
        code_challenge: generatedCodeChallenge,
      });

      const expectedHref = `${config.cognitoDomain}/authorize?${expectedParams}`;

      auth = $auth.getValue();
      expect(auth.token).toBe("");
      expect(window.location.href).toBe(expectedHref);
    });

    test("sets cognito pkce verifier value in local storage", async () => {
      const sessionStorageGetSpy = jest.spyOn(sessionStorageMock, "setItem");

      window.document.cookie = `${config.cognitoTokenName}=${mockCognitoToken}`;
      await parseToken();
      await cognitoLogin();
      expect(sessionStorageGetSpy).toHaveBeenCalledTimes(1);
      expect(sessionStorageGetSpy).toHaveBeenCalledWith(
        config.cognitoPKCEVerifierSessionStorageName,
        generatedVerifier,
      );
    });
  });

  describe("handleCognitoCallback", () => {
    const mockFetch = jest.fn();
    const mockSetCookie = jest.spyOn(Cookies, "set");
    const mockAccessCode = "123-abc";
    const mockTokensResponse: CognitoTokenResponse = {
      id_token: mockCognitoToken,
      access_token: "access-token",
      refresh_token: "refresh-token",
    };

    beforeEach(() => {
      jest.resetAllMocks();
      jest.clearAllMocks();
      globalThis.fetch = mockFetch as unknown as typeof fetch;
    });

    test("sets id token as cognito token from the response", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockTokensResponse,
      } as Response);

      //this will be set by the login(), so mock it here when calling the callback handler directly
      sessionStorage.setItem(
        config.cognitoPKCEVerifierSessionStorageName,
        generatedVerifier,
      );

      await handleCognitoCallback(mockAccessCode);
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        `${config.cognitoDomain}/oauth2/token`,
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: expect.any(URLSearchParams),
        }),
      );

      //check body separately, otherwise jest will treat it as {}
      const call = mockFetch.mock.calls[0][1];

      expect(call.body.toString()).toBe(
        new URLSearchParams({
          grant_type: "authorization_code",
          client_id: config.cognitoClientId,
          code: mockAccessCode,
          redirect_uri: window.location.origin,
          code_verifier: generatedVerifier,
        }).toString(),
      );

      expect(mockSetCookie).toHaveBeenCalledTimes(1);
      expect(mockSetCookie).toHaveBeenCalledWith(
        config.cognitoTokenName,
        mockTokensResponse.id_token,
        { sameSite: "strict", secure: true, domain: config.cookieDomain },
      );
    });

    test("throws TokenExchangeError when fetch fails", async () => {
      mockFetch.mockRejectedValue({
        json: async () => ({}),
      } as Response);
      const expectedErrorMessage = "Token exchange failed: network error";

      await expect(handleCognitoCallback(mockAccessCode)).rejects.toThrow(
        new TokenExchangeError(expectedErrorMessage),
      );
      expect(mockSetCookie).not.toHaveBeenCalled();
    });

    test("throws TokenExchangeError when NOK response", async () => {
      mockFetch.mockResolvedValue({
        json: async () => ({}),
        ok: false,
      } as Response);
      const expectedErrorMessage = "Token exchange failed: NOK response";

      await expect(handleCognitoCallback(mockAccessCode)).rejects.toThrow(
        new TokenExchangeError(expectedErrorMessage),
      );
      expect(mockSetCookie).not.toHaveBeenCalled();
    });

    test("throws TokenExchangeError when invalid JSON response", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => {
          throw new SyntaxError("Unexpected token < in JSON");
        },
      });

      const expectedErrorMessage = "Token exchange failed: invalid JSON response";

      await expect(handleCognitoCallback("auth-code")).rejects.toThrow(
        new TokenExchangeError(expectedErrorMessage),
      );

      expect(mockSetCookie).not.toHaveBeenCalled();
    });

    test("throws TokenExchangeError when no id_token is returned", async () => {
      mockFetch.mockResolvedValue({
        json: async () => ({}),
        ok: true,
      } as Response);
      const expectedErrorMessage = "No id_token received from Cognito";

      await expect(handleCognitoCallback(mockAccessCode)).rejects.toThrow(
        new TokenExchangeError(expectedErrorMessage),
      );
      expect(mockSetCookie).not.toHaveBeenCalled();
    });

    test("throws TokenExchangeError when Cookies.set fails", async () => {
      mockFetch.mockResolvedValue({
        json: async () => mockTokensResponse,
        ok: true,
      } as Response);

      mockSetCookie.mockImplementation(() => {
        throw new Error("unable te set cookie");
      });

      await expect(handleCognitoCallback(mockAccessCode)).rejects.toThrow(
        new TokenExchangeError("Setting the cookie failed"),
      );

      expect(Cookies.set).toHaveBeenCalledTimes(1);
    });

    test("gets cognito_pkce_verifier from session storage before token exchange", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockTokensResponse,
      } as Response);

      const sessionStorageRemoveSpy = jest.spyOn(sessionStorageMock, "getItem");

      await handleCognitoCallback(mockAccessCode);

      expect(sessionStorageRemoveSpy).toHaveBeenCalledTimes(1);
      expect(sessionStorageRemoveSpy).toHaveBeenCalledWith(
        config.cognitoPKCEVerifierSessionStorageName,
      );
    });

    test("removes cognito pkce verifier from session storage after successful token exchange", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockTokensResponse,
      } as Response);

      const sessionStorageRemoveSpy = jest.spyOn(sessionStorageMock, "removeItem");

      await handleCognitoCallback(mockAccessCode);

      expect(sessionStorageRemoveSpy).toHaveBeenCalledTimes(1);
      expect(sessionStorageRemoveSpy).toHaveBeenCalledWith(
        config.cognitoPKCEVerifierSessionStorageName,
      );
    });
  });
});

describe("verifyCognitoToken", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns true when token is valid", async () => {
    (cognitoVerifier.verify as jest.Mock).mockResolvedValueOnce({});

    const result = await verifyCognitoToken("valid-token");
    expect(result).toBe(true);
    expect(cognitoVerifier.verify).toHaveBeenCalledTimes(1);
    expect(cognitoVerifier.verify).toHaveBeenCalledWith("valid-token");
  });

  it("returns false when token is invalid", async () => {
    (cognitoVerifier.verify as jest.Mock).mockRejectedValueOnce(
      new Error("invalid token"),
    );

    const result = await verifyCognitoToken("invalid-token");
    expect(result).toBe(false);
    expect(cognitoVerifier.verify).toHaveBeenCalledTimes(1);
    expect(cognitoVerifier.verify).toHaveBeenCalledWith("invalid-token");
  });

  it("returns false when verify throws a non-error value", async () => {
    (cognitoVerifier.verify as jest.Mock).mockRejectedValueOnce("non-error-value-string");
    const result = await verifyCognitoToken("valid-token");
    expect(result).toBe(false);
    expect(cognitoVerifier.verify).toHaveBeenCalledTimes(1);
  });
});
