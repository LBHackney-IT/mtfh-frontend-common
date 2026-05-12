import { verifyCognitoToken } from "./auth";
import * as cognitoVerifierModule from "./cognitoVerifier";

describe("verifyCognitoToken", () => {
  const mockVerifier = {
    verify: jest
      .fn()
      .mockResolvedValueOnce({})
      .mockRejectedValueOnce(new Error("invalid token"))
      .mockRejectedValueOnce("non-error-value-string"),
  };

  jest
    .spyOn(cognitoVerifierModule, "getCognitoVerifier")
    .mockImplementationOnce(() => mockVerifier);

  it("returns true when token is valid", async () => {
    const result = await verifyCognitoToken("valid-token");
    expect(result).toBe(true);
    expect(mockVerifier.verify).toHaveBeenCalledWith("valid-token");
  });

  it("returns false when token is invalid", async () => {
    const result = await verifyCognitoToken("invalid-token");
    expect(result).toBe(false);
    expect(mockVerifier.verify).toHaveBeenCalledWith("invalid-token");
  });

  it("returns false when verify throws a non-error value", async () => {
    const result = await verifyCognitoToken("valid-token");
    expect(result).toBe(false);
  });
});
