import { CookieAttributes } from "js-cookie";
import { BehaviorSubject } from "rxjs";
export declare const browserLocation: {
  getOrigin: () => string;
  getHref: () => string;
  setHref: (href: string) => void;
  reload: () => void;
};
export interface CognitoTokenResponse {
  id_token?: string;
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
}
export declare enum TokenSource {
  LegacyUser = 0,
  CognitoUser = 1,
}
export declare class TokenExchangeError extends Error {}
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
export interface TransitionPeriodTokenPresentation extends TokenBase {
  groups?: string[];
  "custom:groups"?: string;
}
export interface AuthUser extends TokenBase {
  groups?: string[];
  "custom:groups"?: string[];
  token: string;
  tokenSource?: TokenSource;
}
export declare const voidUser: AuthUser;
export declare const verifyCognitoToken: (token: string) => Promise<boolean>;
export declare const $auth: BehaviorSubject<AuthUser>;
export declare const parseToken: () => Promise<void>;
export declare const isAuthorisedForGroups: (featureGroups: string[]) => boolean;
export declare const isAuthorised: () => boolean;
export declare const getAuthCookieRemoveOptions: () => CookieAttributes;
export declare const logout: () => void;
export declare const login: (redirectUrl?: string) => void;
export declare const getCognitoTokenCookieSetOptions: (
  expires?: Date,
) => CookieAttributes;
export declare const cognitoLogin: (redirectUrl?: string) => Promise<void>;
export declare function handleCognitoCallback(code: string): Promise<void>;
//# sourceMappingURL=auth.d.ts.map
