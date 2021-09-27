module.exports = {
  rootDir: "lib",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!lbh-frontend)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@mtfh/common/lib/(.*)": "<rootDir>/$1",
  },
  testPathIgnorePatterns: ["test-utils.tsx"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "@hackney/mtfh-test-utils",
    "./test-utils.ts",
  ],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: ["test-utils.ts"],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 99,
      functions: 97,
      lines: 98,
    },
  },
};
