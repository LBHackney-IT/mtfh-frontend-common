// module.exports = {
//   CognitoJwtVerifier: {
//     create: jest.fn(() => {
//       return {
//         verify: jest.fn(async (token) => {
//           if (token === "invalid-token") {
//             throw new Error("Invalid token");
//           } else {
//             return { sub: "fake-user-id", email: "test@example.com" };
//           }
//         }),
//       };
//     }),
//   },
// };

export const cognitoVerifier = {
  verify: jest.fn().mockResolvedValue({
    sub: "test-user",
    email: "test@example.com",
  }),
};
