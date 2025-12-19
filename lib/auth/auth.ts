import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

import { config } from "@mtfh/common/lib/config";

import { cognitoVerifier } from "./cognitoVerifier";

export interface CognitoTokenResponse {
  id_token?: string;
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
}

export enum TokenSource {
  LegacyUser,
  CognitoUser,
}

export class TokenExchangeError extends Error {}
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

const voidUser: AuthUser = {
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

export const verifyCognitoToken = async (token: string) => {
  try {
    await cognitoVerifier.verify(token);
    return true;
  } catch {
    return false;
  }
};

export const $auth = new BehaviorSubject(voidUser);

export const parseToken = async (): Promise<void> => {
  const legacyToken = Cookies.get(config.authToken);
  const cognitoToken = Cookies.get(config.cognitoTokenName);

  const decode = (token: NonNullable<string>, source: TokenSource): AuthUser => {
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

  // No token at all → return void user
  if (!legacyToken && !cognitoToken) {
    $auth.next(voidUser);
    return;
  }

  // Prefer Cognito token if present
  // In order to migrate root apps over to Cognito auth MFE we need to support both tokens for a while
  // Once all root apps are using Cognito we can/must drop support for legacy tokens
  if (cognitoToken) {
    //verify token since it can be done safely on the client
    const tokenIsValid = await verifyCognitoToken(cognitoToken);

    const parsed = tokenIsValid
      ? decode(cognitoToken, TokenSource.CognitoUser)
      : voidUser;
    $auth.next(parsed);
    return;
  }

  if (!legacyToken) {
    // Should never happen logically, but TS needs the guarantee
    $auth.next(voidUser);
    return;
  }
  // Fall back to legacy token
  $auth.next(decode(legacyToken, TokenSource.LegacyUser));
};

//ensure current token is parsed on page refresh
(async () => {
  await parseToken();
})();

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
  Cookies.remove(config.cognitoTokenName, {
    //domain: config.cookieDomain,
    domain: "localhost",
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
  const loginUrl = `https://${
    config.cognitoDomain
  }.auth.eu-west-2.amazoncognito.com/login?client_id=${
    config.cognitoClientId
  }&response_type=code&scope=openid+email+profile&redirect_uri=${encodeURIComponent(
    redirectUrl,
  )}`;
  window.location.href = loginUrl;
};

export async function handleCognitoCallback(code: string): Promise<void> {
  const tokenUrl = `https://${config.cognitoDomain}.auth.eu-west-2.amazoncognito.com/oauth2/token`;

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: config.cognitoClientId,
    code,
    redirect_uri: window.location.origin,
  });

  let response: Response;
  let tokens: CognitoTokenResponse;

  try {
    response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
  } catch {
    // Network or CORS failure
    throw new TokenExchangeError("Token exchange failed: network error");
  }

  if (!response.ok) {
    throw new TokenExchangeError(`Token exchange failed: NOK response`);
  }

  try {
    tokens = (await response.json()) as CognitoTokenResponse;
  } catch {
    throw new TokenExchangeError("Token exchange failed: invalid JSON response");
  }

  if (!tokens.id_token) {
    throw new TokenExchangeError("No id_token received from Cognito");
  }

  try {
    Cookies.set(config.cognitoTokenName, tokens.id_token, {
      sameSite: "strict",
      secure: true,
    });
  } catch {
    throw new TokenExchangeError("Setting the cookie failed");
  }

  await parseToken();
}
