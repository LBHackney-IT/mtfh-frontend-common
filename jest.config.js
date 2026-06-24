require("dotenv").config({ path: ".env.test" });

module.exports = {
  rootDir: "lib",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": ["babel-jest", { rootMode: "upward" }],
  },
  transformIgnorePatterns: ["node_modules/(?!lbh-frontend)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@mtfh/common/lib/(.*)": "<rootDir>/$1",
    "#node-web-compat": "./node-web-compat-node.js",
  },
  testPathIgnorePatterns: ["test-utils.ts", "setupTests.ts"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: ["test-utils.ts", "setupTests.ts"],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
