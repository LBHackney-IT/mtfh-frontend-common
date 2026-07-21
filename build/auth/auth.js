"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cognitoLogin = exports.getCognitoTokenCookieSetOptions = exports.login = exports.logout = exports.getAuthCookieRemoveOptions = exports.isAuthorised = exports.isAuthorisedForGroups = exports.parseToken = exports.$auth = exports.verifyCognitoToken = exports.voidUser = exports.TokenExchangeError = exports.TokenSource = exports.browserLocation = void 0;
exports.handleCognitoCallback = handleCognitoCallback;
const js_cookie_1 = __importDefault(require("js-cookie"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const rxjs_1 = require("rxjs");
const config_1 = require("@mtfh/common/lib/config");
const authUtils_1 = require("./authUtils");
const cognitoVerifier_1 = require("./cognitoVerifier");
exports.browserLocation = {
    getOrigin: () => window.location.origin,
    getHref: () => window.location.href,
    setHref: (href) => {
        window.location.href = href;
    },
    reload: () => {
        window.location.reload();
    },
};
var TokenSource;
(function (TokenSource) {
    TokenSource[TokenSource["LegacyUser"] = 0] = "LegacyUser";
    TokenSource[TokenSource["CognitoUser"] = 1] = "CognitoUser";
})(TokenSource || (exports.TokenSource = TokenSource = {}));
class TokenExchangeError extends Error {
}
exports.TokenExchangeError = TokenExchangeError;
exports.voidUser = {
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
const verifyCognitoToken = async (token) => {
    const cognitoVerifier = (0, cognitoVerifier_1.getCognitoVerifier)();
    try {
        await cognitoVerifier.verify(token);
        return true;
    }
    catch {
        return false;
    }
};
exports.verifyCognitoToken = verifyCognitoToken;
exports.$auth = new rxjs_1.BehaviorSubject(exports.voidUser);
const parseToken = async () => {
    const legacyToken = js_cookie_1.default.get(config_1.config.authToken);
    const cognitoToken = js_cookie_1.default.get(config_1.config.cognitoTokenName);
    const decode = (token, source) => {
        var _a;
        try {
            const decoded = (0, jwt_decode_1.default)(token);
            const customGroups = source === TokenSource.CognitoUser
                ? (_a = decoded["custom:groups"]) === null || _a === void 0 ? void 0 : _a.split(";").filter(Boolean)
                : [];
            return {
                ...decoded,
                "custom:groups": customGroups,
                token,
                tokenSource: source,
            };
        }
        catch {
            return exports.voidUser;
        }
    };
    // No token at all → return void user
    if (!legacyToken && !cognitoToken) {
        const auth = exports.$auth.getValue();
        if ((auth === null || auth === void 0 ? void 0 : auth.email) !== "" && (auth === null || auth === void 0 ? void 0 : auth.name) !== "") {
            exports.$auth.next(exports.voidUser);
        }
        return;
    }
    // Prefer Cognito token if present
    // In order to migrate root apps over to Cognito auth MFE we need to support both tokens for a while
    // Once all root apps are using Cognito we can/must drop support for legacy tokens
    if (cognitoToken) {
        //verify token since it can be done safely on the client
        const tokenIsValid = await (0, exports.verifyCognitoToken)(cognitoToken);
        const parsed = tokenIsValid
            ? decode(cognitoToken, TokenSource.CognitoUser)
            : exports.voidUser;
        exports.$auth.next(parsed);
        return;
    }
    if (!legacyToken) {
        // Should never happen logically, but TS needs the guarantee
        exports.$auth.next(exports.voidUser);
        return;
    }
    // Fall back to legacy token
    exports.$auth.next(decode(legacyToken, TokenSource.LegacyUser));
};
exports.parseToken = parseToken;
//ensure current token is parsed on page refresh
(async () => {
    await (0, exports.parseToken)();
})();
const isAuthorisedForGroups = (featureGroups) => {
    const auth = exports.$auth.getValue();
    const userGroups = auth.tokenSource === TokenSource.CognitoUser ? auth["custom:groups"] : auth.groups;
    return featureGroups.some((fg) => userGroups === null || userGroups === void 0 ? void 0 : userGroups.includes(fg));
};
exports.isAuthorisedForGroups = isAuthorisedForGroups;
const isAuthorised = () => (0, exports.isAuthorisedForGroups)(config_1.config.authAllowedGroups);
exports.isAuthorised = isAuthorised;
const getAuthCookieRemoveOptions = () => ({
    domain: config_1.config.cookieDomain,
});
exports.getAuthCookieRemoveOptions = getAuthCookieRemoveOptions;
const logout = () => {
    exports.$auth.next(exports.voidUser);
    const removeOptions = (0, exports.getAuthCookieRemoveOptions)();
    js_cookie_1.default.remove(config_1.config.authToken, removeOptions);
    js_cookie_1.default.remove(config_1.config.cognitoTokenName, removeOptions);
    exports.browserLocation.reload();
};
exports.logout = logout;
const login = (redirectUrl = `${exports.browserLocation.getOrigin()}/search`) => {
    (0, exports.logout)();
    exports.browserLocation.setHref(`${config_1.config.authDomain}?redirect_uri=${encodeURIComponent(redirectUrl)}`);
};
exports.login = login;
const getCognitoTokenCookieSetOptions = (expires) => ({
    expires,
    sameSite: "strict",
    secure: true,
    domain: config_1.config.cookieDomain,
});
exports.getCognitoTokenCookieSetOptions = getCognitoTokenCookieSetOptions;
function getCookieExpiry(decodedToken) {
    if (!decodedToken.exp) {
        return undefined;
    }
    return new Date(decodedToken.exp * 1000);
}
const cognitoLogin = async (redirectUrl = `${exports.browserLocation.getOrigin()}`) => {
    (0, exports.logout)();
    //create new pair on each login
    const { codeVerifier, codeChallenge } = await (0, authUtils_1.createPkcePair)();
    sessionStorage.setItem(config_1.config.cognitoPKCEVerifierSessionStorageName, codeVerifier);
    const params = new URLSearchParams({
        client_id: config_1.config.cognitoClientIds.mtfhClientId,
        response_type: "code",
        scope: "openid email profile",
        redirect_uri: redirectUrl,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
    });
    const loginUrl = `${config_1.config.cognitoDomain}/authorize?${params}`;
    exports.browserLocation.setHref(loginUrl);
};
exports.cognitoLogin = cognitoLogin;
async function handleCognitoCallback(code) {
    const tokenUrl = `${config_1.config.cognitoDomain}/oauth2/token`;
    const verifier = sessionStorage.getItem(config_1.config.cognitoPKCEVerifierSessionStorageName);
    const body = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: config_1.config.cognitoClientIds.mtfhClientId,
        code,
        redirect_uri: exports.browserLocation.getOrigin(),
        code_verifier: verifier !== null && verifier !== void 0 ? verifier : "", //Cognito will return 400 with invalid request if missing
    });
    let response;
    let tokens;
    try {
        response = await fetch(tokenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body,
        });
    }
    catch {
        // Network or CORS failure
        throw new TokenExchangeError("Token exchange failed: network error");
    }
    if (!response.ok) {
        throw new TokenExchangeError(`Token exchange failed: NOK response`);
    }
    try {
        tokens = (await response.json());
    }
    catch {
        throw new TokenExchangeError("Token exchange failed: invalid JSON response");
    }
    if (!tokens.id_token) {
        throw new TokenExchangeError("No id_token received from Cognito");
    }
    try {
        const decodedIdToken = (0, jwt_decode_1.default)(tokens.id_token);
        js_cookie_1.default.set(config_1.config.cognitoTokenName, tokens.id_token, (0, exports.getCognitoTokenCookieSetOptions)(getCookieExpiry(decodedIdToken)));
    }
    catch {
        throw new TokenExchangeError("Setting the cookie failed");
    }
    //not needed after successful token exchange, so it's recommended to remove it here
    sessionStorage.removeItem(config_1.config.cognitoPKCEVerifierSessionStorageName);
    await (0, exports.parseToken)();
}
