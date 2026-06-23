import { CognitoJwtVerifier } from "aws-jwt-verify";

import { config } from "../config";
import { getCognitoVerifier, resetCognitoVerifier } from "./cognitoVerifier";

jest.mock("aws-jwt-verify", () => ({
  CognitoJwtVerifier: {
    create: jest.fn(),
  },
}));

describe("getCognitoVerifier", () => {
  beforeEach(() => {
    resetCognitoVerifier();
    jest.clearAllMocks();
  });

  it("creates a CognitoJwtVerifier with correct parameters", () => {
    const mockVerifier = { verify: jest.fn() };
    (CognitoJwtVerifier.create as jest.Mock).mockReturnValue(mockVerifier);

    const result = getCognitoVerifier();

    expect(CognitoJwtVerifier.create).toHaveBeenCalledTimes(1);
    expect(CognitoJwtVerifier.create).toHaveBeenCalledWith({
      userPoolId: config.cognitoUserPoolId,
      tokenUse: "id",
      clientId: Object.values(config.cognitoClientIds),
    });

    expect(result).toBe(mockVerifier);
  });

  it("returns the same cached verifier on subsequent calls", () => {
    const mockVerifier = { verify: jest.fn() };
    (CognitoJwtVerifier.create as jest.Mock).mockReturnValue(mockVerifier);

    const first = getCognitoVerifier();
    const second = getCognitoVerifier();

    expect(first).toBe(second);
    expect(CognitoJwtVerifier.create).toHaveBeenCalledTimes(1);
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

  it("creates a new verifier after resetCognitoVerifier is called", () => {
    const firstVerifier = { verify: jest.fn() };
    const secondVerifier = { verify: jest.fn() };
    (CognitoJwtVerifier.create as jest.Mock)
      .mockReturnValueOnce(firstVerifier)
      .mockReturnValueOnce(secondVerifier);

    expect(getCognitoVerifier()).toBe(firstVerifier);

    resetCognitoVerifier();

    expect(getCognitoVerifier()).toBe(secondVerifier);
    expect(CognitoJwtVerifier.create).toHaveBeenCalledTimes(2);
  });
});
