const isPactTest = !!process.env.PACT_BASE_URL;
const setupFilesAfterEnv = !isPactTest
  ? ["@hackney/mtfh-test-utils", "./test-utils.ts"]
  : [];

const testPathIgnorePatterns = !isPactTest ? ["pact.test"] : [];

module.exports = {
  rootDir: "lib",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  // testURL: "http://localhost",
  transformIgnorePatterns: ["node_modules/(?!lbh-frontend)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@mtfh/common/lib/(.*)": "<rootDir>/$1",
  },
  testPathIgnorePatterns: ["test-utils.ts", ...testPathIgnorePatterns],
  watchPathIgnorePatterns: ["pact/logs/*", "pact/pacts/*"],
  setupFilesAfterEnv: ["@testing-library/jest-dom", ...setupFilesAfterEnv],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: ["test-utils.ts"],
  coverageThreshold: {
    global: {
      statements: 97,
      branches: 98,
      functions: 97,
      lines: 97,
    },
  },
};
