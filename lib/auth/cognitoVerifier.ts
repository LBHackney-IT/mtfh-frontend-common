import { CognitoJwtVerifier } from "aws-jwt-verify";

import { config } from "../config";

export const cognitoVerifier = CognitoJwtVerifier.create({
  userPoolId: config.cognitoUserPoolId,
  tokenUse: "id",
  // allows a str representing 1 client id, or an array of str
  // of multiple client ids to verify against
  clientId: config.cognitoClientIds,
});
