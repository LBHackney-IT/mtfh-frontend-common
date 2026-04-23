import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

import { config } from "@mtfh/common/lib/config";

import { createPkcePair } from "./authUtils";
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

export interface TokenBase {
  sub: string;
  email: string;
  iss: string;
  name: string;
  iat: number;
  exp?: number;
}

export interface LegacyTokenPayload extends TokenBase {
  groups: string[];
}

export interface CognitoTokenPayload extends TokenBase {
  "custom:groups": string;
}

// "transition period" because this schema will only be relevant so long as we have to support
// both legacy and the new cognito token schemas.
export interface TransitionPeriodTokenPresentation extends TokenBase {
  groups?: string[];
  "custom:groups"?: string;
}

// It was agreed that further refactoring will be done after we phase out legacy auth flow.
// TODO when above ^^^: downstream applications shouldn't need to care about presentation level concerns
// such token payload key name prefixes, as such, this would ideally be changed to be just "groups".
export interface AuthUser extends TokenBase {
  groups?: string[];
  "custom:groups"?: string[];
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

export const verifyCognitoToken = async (token: string) => {
  try {
    await cognitoVerifier.verify(token);
    console.warn("verifyCognitoToken:", token.substring(0,15));
    return true;
  } catch (error) {
    console.error("Failed to verify Cognito token:", error);
    throw error; 
  }
};

export const $auth = new BehaviorSubject(voidUser);

export const parseToken = async (): Promise<void> => {
  const legacyToken = Cookies.get(config.authToken);
  const cognitoToken = Cookies.get(config.cognitoTokenName);

  const decode = (token: NonNullable<string>, source: TokenSource): AuthUser => {
    try {
      const decoded = jwtDecode<TransitionPeriodTokenPresentation>(token);
      const customGroups =
        source === TokenSource.CognitoUser
          ? decoded["custom:groups"]?.split(";").filter(Boolean)
          : [];

      return {
        ...decoded,
        "custom:groups": customGroups,
        token,
        tokenSource: source,
      };
    } catch {
      return voidUser;
    }
  };

  // No token at all → return void user
  if (!legacyToken && !cognitoToken) {
    console.warn(`    [Common]-[No Token?].`);
    $auth.next(voidUser);
    return;
  }

  // Prefer Cognito token if present
  // In order to migrate root apps over to Cognito auth MFE we need to support both tokens for a while
  // Once all root apps are using Cognito we can/must drop support for legacy tokens
  if (cognitoToken) {
    console.warn(`    [Common]-[CognitoToken]-[RunVerify].`);
    //verify token since it can be done safely on the client
    const tokenIsValid = await verifyCognitoToken(cognitoToken);

    const parsed = tokenIsValid
      ? decode(cognitoToken, TokenSource.CognitoUser)
      : voidUser;

    console.warn("    [Common]:", parsed);

    $auth.next(parsed);
    return;
  }

  if (!legacyToken) {
    // Should never happen logically, but TS needs the guarantee
    $auth.next(voidUser);
    return;
  }
  console.warn(`    [Common]-[LegacyToken].`);
  // Fall back to legacy token
  $auth.next(decode(legacyToken, TokenSource.LegacyUser));
};

//ensure current token is parsed on page refresh
(async () => {
  await parseToken();
})();

export const isAuthorisedForGroups = (featureGroups: string[]): boolean => {
  console.log("    [isAuthorisedForGroups] AllowedGroups: ", featureGroups);
  const auth = $auth.getValue();

  const userGroups =
    auth.tokenSource === TokenSource.CognitoUser ? auth["custom:groups"] : auth.groups;
  console.log("    [isAuthorisedForGroups] UserGroups: ", userGroups);

  return featureGroups.some((fg) => userGroups?.includes(fg));
};

export const isAuthorised = (): boolean =>
  isAuthorisedForGroups(config.authAllowedGroups);

export const logout = (): void => {
  $auth.next(voidUser);
  Cookies.remove(config.authToken, {
    domain: config.cookieDomain,
  });
  Cookies.remove(config.cognitoTokenName, {
    domain: config.cookieDomain,
  });
  window.location.reload();
};

export const login = (redirectUrl = `${window.location.origin}/search`): void => {
  logout();
  window.location.href = `${config.authDomain}?redirect_uri=${encodeURIComponent(
    redirectUrl,
  )}`;
};

function getCookieExpiry(
  decodedToken: TransitionPeriodTokenPresentation,
): Date | undefined {
  if (!decodedToken.exp) {
    return undefined;
  }
  return new Date(decodedToken.exp * 1000);
}

export const cognitoLogin = async (
  redirectUrl = `${window.location.origin}`,
): Promise<void> => {
  logout();

  //create new pair on each login
  const { codeVerifier, codeChallenge } = await createPkcePair();

  sessionStorage.setItem(config.cognitoPKCEVerifierSessionStorageName, codeVerifier);

  const params = new URLSearchParams({
    // poc hack. proper implementation will follow
    // assumes that the 1st one is for google sso login
    client_id: config.cognitoClientIds[0],
    response_type: "code",
    scope: "openid email profile",
    redirect_uri: redirectUrl,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
  });

  const loginUrl = `${config.cognitoDomain}/authorize?${params}`;
  window.location.href = loginUrl;
};

export async function handleCognitoCallback(code: string): Promise<void> {
  const tokenUrl = `${config.cognitoDomain}/oauth2/token`;

  const verifier = sessionStorage.getItem(config.cognitoPKCEVerifierSessionStorageName);

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    // poc hack. proper implementation will follow
    // assumes that the 1st one is for google sso login
    client_id: config.cognitoClientIds[0],
    code,
    redirect_uri: window.location.origin,
    code_verifier: verifier ?? "", //Cognito will return 400 with invalid request if missing
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
    const decodedIdToken = jwtDecode<TransitionPeriodTokenPresentation>(tokens.id_token);

    Cookies.set(config.cognitoTokenName, tokens.id_token, {
      expires: getCookieExpiry(decodedIdToken),
      sameSite: "strict",
      secure: true,
      domain: config.cookieDomain,
    });
  } catch {
    throw new TokenExchangeError("Setting the cookie failed");
  }
  //not needed after successful token exchange, so it's recommended to remove it here
  sessionStorage.removeItem(config.cognitoPKCEVerifierSessionStorageName);
  await parseToken();
}
