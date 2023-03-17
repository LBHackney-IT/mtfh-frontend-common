import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

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
  private authAllowedGroups: string[];
  private authDomain: string;
  private cookieDomain: string;
  private authToken: string;

  constructor(
    authAllowedGroups: string[] = ["TEST_GROUP"],
    authDomain: string = "//auth.hackney.gov.uk/auth",
    cookieDomain: string = "hackney.gov.uk",
    authToken: string = "hackneyToken",
  ) {
    this.authAllowedGroups = authAllowedGroups;
    this.authDomain = authDomain;
    this.cookieDomain = cookieDomain;
    this.authToken = authToken;
  }

  private parseToken(): AuthUser {
    const token = Cookies.get(this.authToken) || null;

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

  public readonly $auth = new BehaviorSubject(this.parseToken());

  public processToken(): void {
    this.$auth.next(this.parseToken());
  }

  public isAuthorisedForGroups(groups: string[]): boolean {
    const auth = this.$auth.getValue();
    return groups.some((group) => auth.groups.includes(group));
  }

  public isAuthorised(): boolean {
    return this.isAuthorisedForGroups(this.authAllowedGroups);
  }

  public logout(): void {
    this.$auth.next(voidUser);

    Cookies.remove(this.authToken, {
      domain: this.cookieDomain,
    });

    window.location.reload();
  }

  public login(redirectUrl = `${window.location.origin}/search`): void {
    this.logout();

    window.location.href = `${this.authDomain}?redirect_uri=${encodeURIComponent(
      redirectUrl,
    )}`;
  }
}
