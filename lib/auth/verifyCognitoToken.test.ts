import { verifyCognitoToken } from "./auth";
import * as cognitoVerifierModule from "./cognitoVerifier";

describe("verifyCognitoToken", () => {
  const mockVerifier = {
    verify: jest.fn(),
  };

  beforeEach(() => {
    cognitoVerifierModule.resetCognitoVerifier();
    jest.clearAllMocks();
    jest.spyOn(cognitoVerifierModule, "getCognitoVerifier").mockReturnValue(mockVerifier);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns true when token is valid", async () => {
    mockVerifier.verify.mockResolvedValue({});

    const result = await verifyCognitoToken("valid-token");

    expect(result).toBe(true);
    expect(mockVerifier.verify).toHaveBeenCalledWith("valid-token");
  });

  it("returns false when token is invalid", async () => {
    mockVerifier.verify.mockRejectedValue(new Error("invalid token"));

    const result = await verifyCognitoToken("invalid-token");

    expect(result).toBe(false);
    expect(mockVerifier.verify).toHaveBeenCalledWith("invalid-token");
  });

  it("returns false when verify throws a non-error value", async () => {
    mockVerifier.verify.mockRejectedValue("non-error-value-string");

    const result = await verifyCognitoToken("valid-token");

    expect(result).toBe(false);
  });
});
