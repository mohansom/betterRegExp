module.exports = {
    moduleFileExtensions: ['ts', 'tsc', 'js', 'jsx'],
    transform: {
      '^.+\\.tsx?$': "ts-jest"
    },
    transformIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['**/src/**/*.[jt]s?(x)','!**/node_modules/**'],
    coverageThreshold: {
      global: {
        statements: 95,
        branches: 90,
        functions: 95,
        lines: 95
      }
    },
    testURL: 'http://localhost',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  }
  