import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import { config } from "../config";
import {
  $auth,
  AuthUser,
  JWTPayload,
  TokenExchangeError,
  TokenSource,
  cognitoLogin,
  handleCognitoCallback,
  isAuthorised,
  isAuthorisedForGroups,
  login,
  logout,
  processToken,
} from "./auth";

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

describe("auth", () => {
  beforeEach(() => {
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

    processToken();
    (window.location.reload as jest.Mock).mockReset();
  });

  test("user is not authenticated", () => {
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(isAuthorised()).toBe(false);
  });

  test("user is unauthenticated with incorrect legacy cookie", () => {
    window.document.cookie = `hackneyToken=123456`;
    processToken();
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(isAuthorised()).toBe(false);
  });

  test("user is unauthenticated with incorrect cognito cookie", () => {
    window.document.cookie = `hackneyCognitoToken=1234567`;
    processToken();
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(isAuthorised()).toBe(false);
  });

  test("user is authenticated with legacy token", () => {
    window.document.cookie = `hackneyToken=${mockToken}`;
    processToken();
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

  test("user is authenticated with Cognito token", () => {
    window.document.cookie = `hackneyCognitoToken=${mockCognitoToken}`;
    processToken();
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

  test("login clears state and redirects to legacy auth", () => {
    window.document.cookie = `hackneyToken=${mockToken}`;
    processToken();
    login();
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(window.location.href).toContain(config.authDomain);
  });

  test("cognitoLogin clears state and redirects to cognito auth", () => {
    window.document.cookie = `hackneyCognitoToken=${mockCognitoToken}`;
    processToken();
    cognitoLogin();
    auth = $auth.getValue();
    expect(auth.token).toBe("");
    expect(window.location.href).toContain(config.cognitoDomain);
  });

  test("logout clears legacy cookie and state", () => {
    window.document.cookie = `hackneyToken=${mockToken}`;
    processToken();
    auth = $auth.getValue();
    expect(auth.token).toBe(mockToken);
    logout();

    const {
      email,
      name,
      groups,
      "custom:groups": customGroups,
      token,
    } = $auth.getValue();
    expect(token).toBe("");
    expect(email).toBe("");
    expect(name).toBe("");
    expect(groups).toEqual([]);
    expect(customGroups).toEqual([]);
    expect(window.location.reload).toBeCalledTimes(1);
  });

  test("logout clears cognito cookie and state", () => {
    window.document.cookie = `hackneyCognitoToken=${mockCognitoToken}`;
    processToken();
    auth = $auth.getValue();
    expect(auth.token).toBe(mockCognitoToken);
    logout();

    const {
      email,
      name,
      groups,
      "custom:groups": customGroups,
      token,
    } = $auth.getValue();
    expect(token).toBe("");
    expect(email).toBe("");
    expect(name).toBe("");
    expect(groups).toEqual([]);
    expect(customGroups).toEqual([]);
    expect(window.location.reload).toBeCalledTimes(1);
  });

  test("when both legacy and cognito tokens are present, cognito token takes precedence", () => {
    window.document.cookie = `hackneyCognitoToken=${mockCognitoToken}`;
    window.document.cookie = `hackneyToken=${mockToken}`;

    processToken();
    auth = $auth.getValue();
    expect(auth.token).toBe(mockCognitoToken);
  });

  describe("cognitoLogin", () => {
    test("cognitoLogin clears state and redirects to cognito auth", () => {
      window.document.cookie = `hackneyCognitoToken=${mockCognitoToken}`;
      processToken();
      auth = $auth.getValue();
      expect(auth.token).toBe(mockCognitoToken);
      cognitoLogin();

      const expectedHref = `https://${
        config.cognitoDomain
      }.auth.eu-west-2.amazoncognito.com/login?client_id=${
        config.cognitoClientId
      }&response_type=code&scope=openid+email+profile&redirect_uri=${encodeURIComponent(
        window.location.origin,
      )}`;
      auth = $auth.getValue();
      expect(auth.token).toBe("");
      expect(window.location.href).toBe(expectedHref);
    });
  });

  describe("handleCognitoCallback", () => {
    const mockFetch = jest.fn();
    const mockSetCookie = jest.spyOn(Cookies, "set");
    const mockAccessCode = "123-abc";

    beforeEach(() => {
      jest.resetAllMocks();
      (global as any).fetch = mockFetch;
    });

    test("sets id token as cognito token from the response", async () => {
      const mockTokensResponse = {
        id_token: mockCognitoToken,
        access_token: "access-token",
        refresh_token: "refresh-token",
      };
      mockFetch.mockResolvedValue({
        json: async () => mockTokensResponse,
      } as Response);

      await handleCognitoCallback(mockAccessCode);

      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        `https://${config.cognitoDomain}.auth.eu-west-2.amazoncognito.com/oauth2/token`,
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: config.cognitoClientId,
            code: mockAccessCode,
            redirect_uri: window.location.origin,
          }),
        }),
      );

      expect(mockSetCookie).toHaveBeenCalledTimes(1);
      expect(mockSetCookie).toHaveBeenCalledWith(
        config.cognitoTokenName,
        mockTokensResponse.id_token,
      );
    });

    test("throws TokenExchangeError when no id_token is returned", async () => {
      mockFetch.mockResolvedValue({
        json: async () => ({}),
      } as Response);
      const expectedErrorMessage = "No id token received";

      await expect(handleCognitoCallback(mockAccessCode)).rejects.toThrow(
        new TokenExchangeError(expectedErrorMessage),
      );
      expect(mockSetCookie).not.toHaveBeenCalled();
    });

    test("throws Error when fetch fails", async () => {
      mockFetch.mockRejectedValue({
        json: async () => ({}),
      } as Response);
      const expectedErrorMessage = "Token exchange failed";

      await expect(handleCognitoCallback(mockAccessCode)).rejects.toThrow(
        new Error(expectedErrorMessage),
      );
      expect(mockSetCookie).not.toHaveBeenCalled();
    });
  });
});
