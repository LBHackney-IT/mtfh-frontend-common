import { CognitoJwtVerifier } from "aws-jwt-verify";

import { config } from "../config";

export interface CognitoVerifier {
  verify: (token: string) => Promise<{ [key: string]: unknown }>;
}

export const getCognitoVerifier = (): CognitoVerifier => {
  return CognitoJwtVerifier.create({
    userPoolId: config.cognitoUserPoolId,
    tokenUse: "id",
    // allows a str representing 1 client id,
    // or a str[] of multiple client ids to verify against
    clientId: Object.values(config.cognitoClientIds),
  });
};
