import { CognitoJwtVerifier } from "aws-jwt-verify";

import { config } from "../config";
import { getCognitoVerifier } from "./cognitoVerifier";

jest.mock("aws-jwt-verify", () => ({
  CognitoJwtVerifier: {
    create: jest.fn(),
  },
}));

describe("getCognitoVerifier", () => {
  it("creates a CognitoJwtVerifier with correct parameters", () => {
    const mockVerifier = { verify: jest.fn() };
    (CognitoJwtVerifier.create as jest.Mock).mockReturnValue(mockVerifier);

    const result = getCognitoVerifier();

    expect(CognitoJwtVerifier.create).toHaveBeenCalledTimes(1);
    expect(CognitoJwtVerifier.create).toHaveBeenCalledWith({
      userPoolId: config.cognitoUserPoolId,
      tokenUse: "id",
      clientId: config.cognitoClientId,
    });

    expect(result).toBe(mockVerifier);
  });

  it("returns an object matching the CognitoVerifier interface", async () => {
    const mockVerify = jest.fn().mockResolvedValue({ sub: "123" });
    (CognitoJwtVerifier.create as jest.Mock).mockReturnValue({
      verify: mockVerify,
    });

    const verifier = getCognitoVerifier();
    const token = "fake-token";

    const result = await verifier.verify(token);

    expect(mockVerify).toHaveBeenCalledWith(token);
    expect(result).toEqual({ sub: "123" });
  });
});
