import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

import { config } from "@mtfh/common/lib/config";

//TODO: add to config
const cognitoTokenName = "";
const cognitoCookieDomain = "";

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
};

const parseToken = (): AuthUser => {
  const token = Cookies.get(config.authToken) || null;

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

export const $auth = new BehaviorSubject(parseToken());

export const processToken = (): void => {
  $auth.next(parseToken());
};

export const isAuthorisedForGroups = (groups: string[]): boolean => {
  const auth = $auth.getValue();
  return groups.some((group) => auth.groups.includes(group));
};

export const isAuthorised = (): boolean =>
  isAuthorisedForGroups(config.authAllowedGroups);

export const logout = (): void => {
  $auth.next(voidUser);
  Cookies.remove(config.authToken, {
    domain: config.cookieDomain,
  });
  //remove cognito token as well
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
