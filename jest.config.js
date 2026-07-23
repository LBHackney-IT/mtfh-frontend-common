const path = require("node:path");

require("dotenv").config({ path: ".env.test" });

const rootNodeModules = path.join(__dirname, "node_modules");
const interceptorsRoot = path.join(
  rootNodeModules,
  "@mswjs/interceptors/lib/node/interceptors",
);

module.exports = {
  rootDir: "lib",
  testEnvironment: "jsdom",
  setupFiles: [path.join(__dirname, "jest.polyfills.js")],
  transform: {
    "^.+\\.(mjs|[jt]sx?)$": ["babel-jest", { rootMode: "upward" }],
  },
  transformIgnorePatterns: [
    String.raw`[/\\]node_modules[/\\](?!lbh-frontend|msw|@mswjs|rettime|until-async|strict-event-emitter|@bundled-es-modules|@open-draft|@faker-js|undici)[/\\].+\.(js|jsx|mjs)$`,
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@mtfh/common/lib/(.*)": "<rootDir>/$1",
    "#node-web-compat": "./node-web-compat-node.js",
    "^msw/node$": path.join(rootNodeModules, "msw/lib/node/index.js"),
    "^@mswjs/interceptors/ClientRequest$": path.join(
      interceptorsRoot,
      "ClientRequest/index.cjs",
    ),
    "^@mswjs/interceptors/XMLHttpRequest$": path.join(
      interceptorsRoot,
      "XMLHttpRequest/index.cjs",
    ),
    "^@mswjs/interceptors/fetch$": path.join(interceptorsRoot, "fetch/index.cjs"),
    "^@mswjs/interceptors/WebSocket$": path.join(
      rootNodeModules,
      "@mswjs/interceptors/lib/browser/interceptors/WebSocket/index.cjs",
    ),
  },
  testPathIgnorePatterns: ["test-utils.ts", "setupTests.ts"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "test-utils.ts", "setupTests.ts"],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
