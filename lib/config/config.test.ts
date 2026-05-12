describe("config", () => {
  const originalEnv = process.env.COGNITO_CLIENT_IDS;

  afterEach(() => {
    if (originalEnv) {
      process.env.COGNITO_CLIENT_IDS = originalEnv;
    } else {
      delete process.env.COGNITO_CLIENT_IDS;
    }
  });

  describe("cognitoClientIds", () => {
    test("parses valid JSON from COGNITO_CLIENT_IDS", async () => {
      // arrange
      process.env.COGNITO_CLIENT_IDS = JSON.stringify({
        mtfhClientId: "test-client-id",
        e2eTestsClientId: "e2e-client-id",
      });

      // act
      jest.resetModules();
      // Use dynamic import instead of require
      const { default: freshConfig } = await import("./config");

      // assert
      expect(freshConfig.cognitoClientIds).toEqual({
        mtfhClientId: "test-client-id",
        e2eTestsClientId: "e2e-client-id",
      });
    });

    test("throws error when COGNITO_CLIENT_IDS is not set", async () => {
      // arrange
      delete process.env.COGNITO_CLIENT_IDS;

      // act, assert
      jest.resetModules();

      await expect(import("./config")).rejects.toThrow(
        "COGNITO_CLIENT_IDS environment variable is required",
      );
    });

    test("throws error when COGNITO_CLIENT_IDS contains invalid JSON", async () => {
      // arrange
      process.env.COGNITO_CLIENT_IDS = "{ invalid json }";

      // act, assert
      jest.resetModules();

      await expect(import("./config")).rejects.toThrow(
        "Failed to parse COGNITO_CLIENT_IDS environment variable",
      );
    });
  });
});
