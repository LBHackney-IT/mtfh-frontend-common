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
export declare const $auth: BehaviorSubject<AuthUser>;
export declare const processToken: () => void;
export declare const isAuthorisedForGroups: (groups: string[]) => boolean;
export declare const isAuthorised: () => boolean;
export declare const logout: () => void;
export declare const login: (redirectUrl?: string) => void;
