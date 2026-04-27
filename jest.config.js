// Set up environment variables before Jest initializes
process.env.COGNITO_CLIENT_IDS = JSON.stringify({
  mtfhClientId: "cognito-client-id-test-only",
  e2eTestsClientId: "cognito-client-id-test-only",
});

module.exports = {
  rootDir: "lib",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!lbh-frontend)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@mtfh/common/lib/(.*)": "<rootDir>/$1",
    "#node-web-compat": "./node-web-compat-node.js",
  },
  testPathIgnorePatterns: ["test-utils.ts"],
  setupFilesAfterEnv: ["../setupTests.ts"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: ["test-utils.ts"],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
