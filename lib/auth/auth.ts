import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

import { config } from "@mtfh/common/lib/config";

//TODO: add to config
const cognitoTokenName = "";
const cognitoCookieDomain = "localhost";
const cognitoDomain = "";
const cognitoClientId = "";

export enum TokenSource {
  LegacyUser,
  CognitoUser,
}
export interface JWTPayload {
  sub: string;
  email: string;
  iss: string;
  name: string;
  groups: string[];
  "custom:groups"?: string[];
  iat: number;
}

export interface AuthUser extends JWTPayload {
  token: string;
  tokenSource?: TokenSource;
}

export const voidUser: AuthUser = {
  token: "",
  sub: "",
  email: "",
  iss: "",
  name: "",
  groups: [],
  iat: Number.NaN,
  "custom:groups": [],
  tokenSource: undefined,
};

const parseToken = (): AuthUser => {
  const legacyToken = Cookies.get(config.authToken) ?? null;
  const cognitoToken = Cookies.get(cognitoTokenName) ?? null;

  // No token at all → return void user
  if (!legacyToken && !cognitoToken) {
    return voidUser;
  }

  // Helper to decode safely
  const decode = (token: string, source: TokenSource): AuthUser => {
    try {
      const decoded = jwtDecode<JWTPayload>(token);

      return {
        ...decoded,
        token,
        tokenSource: source,
      };
    } catch {
      return voidUser;
    }
  };

  // Prefer Cognito token if present
  if (cognitoToken) {
    return decode(cognitoToken, TokenSource.CognitoUser);
  }

  // Otherwise fall back to legacy token
  return decode(legacyToken!, TokenSource.LegacyUser);
};

export const $auth = new BehaviorSubject(parseToken());

export const processToken = (): void => {
  $auth.next(parseToken());
};

export const isAuthorisedForGroups = (groups: string[]): boolean => {
  const auth = $auth.getValue();
  return auth.tokenSource === TokenSource.CognitoUser
    ? groups.some((group) => auth["custom:groups"]?.includes(group))
    : groups.some((group) => auth.groups.includes(group));
};

export const isAuthorised = (): boolean =>
  isAuthorisedForGroups(config.authAllowedGroups);

export const logout = (): void => {
  $auth.next(voidUser);
  Cookies.remove(config.authToken, {
    domain: config.cookieDomain,
  });
  Cookies.remove(cognitoTokenName, {
    domain: cognitoCookieDomain,
  });
  window.location.reload();
};

export const login = (redirectUrl = `${window.location.origin}/search`): void => {
  logout();
  window.location.href = `${config.authDomain}?redirect_uri=${encodeURIComponent(
    redirectUrl,
  )}`;
};

export const cognitoLogin = (redirectUrl = `${window.location.origin}`): void => {
  logout();
  const loginUrl = `https://${cognitoDomain}.auth.eu-west-2.amazoncognito.com/login?client_id=${cognitoClientId}&response_type=code&scope=openid+email+profile&redirect_uri=${encodeURIComponent(
    redirectUrl,
  )}`;
  window.location.href = loginUrl;
};

export async function handleCognitoCallback(code: string) {
  try {
    const response = await fetch(
      `https://${cognitoDomain}.auth.eu-west-2.amazoncognito.com/oauth2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: cognitoClientId,
          code,
          redirect_uri: window.location.origin,
        }),
      },
    );
    const tokens = await response.json();

    if (tokens.id_token) {
      Cookies.set(cognitoTokenName, tokens.id_token);
    } else {
      throw new Error("No token received");
    }
  } catch (error) {
    console.error("Token exchange failed:", error);
  }
}
