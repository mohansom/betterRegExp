module.exports = {
    moduleFileExtensions: ['ts', 'tsc', 'js', 'jsx'],
    transform: {
      '^.+\\.tsx?$': "ts-jest"
    },
    transformIgnorePatterns: ['/node_modules/'],
    // 收集测试覆盖率文件范围
    collectCoverageFrom: ['**/src/**/*.[jt]s?(x)','!**/node_modules/**'],
    // 测试覆盖阈值
    coverageThreshold: {
      global: {
        statements: 95,
        branches: 90,
        functions: 95,
        lines: 95
      }
    },
    testURL: 'http://localhost',
    // 测试文件
    testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  }
  