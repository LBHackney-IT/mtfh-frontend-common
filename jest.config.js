module.exports = {
  rootDir: 'src',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!lbh-frontend)'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['test-utils.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', './test-utils.tsx'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: ['test-utils.tsx'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
