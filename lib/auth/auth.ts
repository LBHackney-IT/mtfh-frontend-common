import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export interface JWTPayload {
  sub: string;
  email: string;
  iss: string;
  name: string;
  groups: string[];
  iat: number;
}

export interface AuthUser extends JWTPayload {
  token: string;
}

const voidUser: AuthUser = {
  token: "",
  sub: "",
  email: "",
  iss: "",
  name: "",
  groups: [],
  iat: Number.NaN,
};

export class CommonAuth {
  private readonly _authAllowedGroups: string[];
  private readonly _authDomain: string;
  private readonly _cookieDomain: string;
  private readonly _authToken: string;

  private _user: AuthUser;

  constructor(
    authAllowedGroups: string[] = ["TEST_GROUP"],
    authDomain = "//auth.hackney.gov.uk/auth",
    cookieDomain = "hackney.gov.uk",
    authToken = "hackneyToken",
  ) {
    this._authAllowedGroups = authAllowedGroups;
    this._authDomain = authDomain;
    this._cookieDomain = cookieDomain;
    this._authToken = authToken;

    this._user = this.parseToken()
  }

  public get user(): AuthUser {
    return this._user;
  }

  private parseToken(): AuthUser {
    const token = Cookies.get(this._authToken) || null;

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
  }


  public processToken(): void {
    this._user = this.parseToken();
  }

  public isAuthorisedForGroups(groups: string[]): boolean {
    return groups.some((group) => this._user.groups.includes(group));
  }

  public isAuthorised(): boolean {
    return this.isAuthorisedForGroups(this._authAllowedGroups);
  }

  public logout(): void {
    this._user = voidUser;

    Cookies.remove(this._authToken, {
      domain: this._cookieDomain,
    });

    window.location.reload();
  }

  public login(redirectUrl = `${window.location.origin}/search`): void {
    this.logout();

    window.location.href = `${this._authDomain}?redirect_uri=${encodeURIComponent(
      redirectUrl,
    )}`;
  }
}
