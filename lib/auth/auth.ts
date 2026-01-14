import { fetchAuthSession, signInWithRedirect, signOut } from "aws-amplify/auth";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

import { config } from "@mtfh/common/lib/config";

import { AmplifyAuthConfig, configureAmplifyAuth } from "./amplifyAuth";
import { cognitoVerifier } from "./cognitoVerifier";

//amplify
const amplifyConfig: AmplifyAuthConfig = {
  region: "eu-west-2",
  userPoolId: config.cognitoUserPoolId,
  userPoolWebClientId: config.cognitoClientId,
  domain: `${config.cognitoDomain}.auth.eu-west-2.amazoncognito.com`,
  redirectSignIn: "http://localhost:3000",
  redirectSignOut: "http://localhost:3000",
};

configureAmplifyAuth(amplifyConfig);

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
  //amplify will automatically refresh the token here if valid refresh token is present.
  // UI will show login button until the token is refreshed, so that needs to be handled
  const session = await fetchAuthSession();
  const cognitoToken = session.tokens?.idToken?.toString();
  console.log(`parsing cognito token: ${cognitoToken}`);

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

export const logout = async (): Promise<void> => {
  $auth.next(voidUser);
  Cookies.remove(config.authToken, {
    domain: "localhost", //config.cookieDomain,
  });

  await signOut();

  window.location.reload();
};

export const login = (redirectUrl = `${window.location.origin}/search`): void => {
  logout();
  window.location.href = `${config.authDomain}?redirect_uri=${encodeURIComponent(
    redirectUrl,
  )}`;
};

export const cognitoLogin = async (): //redirectUrl = `${window.location.origin}`,
Promise<void> => {
  signInWithRedirect({ provider: "Google" });
};

//TODO: not needed with amplify
export async function handleCognitoCallback(): Promise<void> {
  await parseToken();
}
