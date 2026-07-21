"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCognitoVerifier = exports.resetCognitoVerifier = void 0;
const aws_jwt_verify_1 = require("aws-jwt-verify");
const config_1 = require("../config");
let cachedVerifier;
const resetCognitoVerifier = () => {
  cachedVerifier = undefined;
};
exports.resetCognitoVerifier = resetCognitoVerifier;
const getCognitoVerifier = () => {
  cachedVerifier !== null && cachedVerifier !== void 0
    ? cachedVerifier
    : (cachedVerifier = aws_jwt_verify_1.CognitoJwtVerifier.create({
        userPoolId: config_1.config.cognitoUserPoolId,
        tokenUse: "id",
        // allows a str representing 1 client id,
        // or a str[] of multiple client ids to verify against
        clientId: Object.values(config_1.config.cognitoClientIds),
      }));
  return cachedVerifier;
};
exports.getCognitoVerifier = getCognitoVerifier;
