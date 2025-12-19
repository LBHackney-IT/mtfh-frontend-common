import "@testing-library/jest-dom";
import "@hackney/mtfh-test-utils";
import "./lib/test-utils.ts";

//mock this module globally, so CognitoJwtVerifier.create in auth won't call the real AWS implementation
jest.mock("aws-jwt-verify", () => {
  return {
    CognitoJwtVerifier: {
      create: jest.fn(() => {
        return {
          verify: jest.fn(async (token) => {
            if (token === "invalid-token") {
              throw new Error("Invalid token");
            } else {
              return { sub: "fake-user-id", email: "test@example.com" };
            }
          }),
        };
      }),
    },
  };
});
