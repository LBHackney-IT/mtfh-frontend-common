import { CognitoJwtVerifier } from "aws-jwt-verify";

import { config } from "../config";

export function getCognitoVerifier() {
  return CognitoJwtVerifier.create({
    userPoolId: config.cognitoUserPoolId,
    tokenUse: "id",
    clientId: config.cognitoClientId,
  });
}
