import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

import { config } from "@mtfh/common/lib/config";

import { AuthUser, JWTPayload, logout, voidUser } from "../auth";

const cognitoDomain = "";
const clientId = "";
const cognitoTokenName = "";

const parseCognitoToken = (): AuthUser => {
  const token = Cookies.get(cognitoTokenName) || null;

  if (!token) {
    return voidUser;
  }

  try {
    const decodedToken = jwtDecode<JWTPayload>(token);
    return {
      ...decodedToken,
      token,
    };
  } catch {
    return voidUser;
  }
};

export const $cognitoAuth = new BehaviorSubject(parseCognitoToken());

export const processCognitoToken = (): void => {
  $cognitoAuth.next(parseCognitoToken());
};

export const isAuthorizedForCognitoGroups = (groups: string[]): boolean => {
  const cognitoAuth = $cognitoAuth.getValue();
  return groups.some((group) => cognitoAuth["custom:groups"]?.includes(group));
};

export const isAuthorizedWithCognito = (): boolean =>
  isAuthorizedForCognitoGroups(config.authAllowedGroups);

export const cognitoLogin = (redirectUrl = `${window.location.origin}`): void => {
  logout();
  const loginUrl = `https://${cognitoDomain}.auth.eu-west-2.amazoncognito.com/login?client_id=${clientId}&response_type=code&scope=openid+email+profile&redirect_uri=${encodeURIComponent(
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
          client_id: clientId,
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
