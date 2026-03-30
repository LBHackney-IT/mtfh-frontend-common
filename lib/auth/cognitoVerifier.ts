import { CognitoJwtVerifier } from "aws-jwt-verify";

import { config } from "../config";

export const cognitoVerifier = CognitoJwtVerifier.create({
  userPoolId: config.cognitoUserPoolId,
  tokenUse: "id",
  // actually supports string array
  clientId: config.cognitoClientIds,
});
