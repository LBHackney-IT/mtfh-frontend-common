module.exports = {
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
