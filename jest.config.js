// const { compilerOptions } = require('./tsconfig');

module.exports = {
  // coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest'
  },
  testMatch: [
    "<rootDir>/__test__/**/*.spec.ts",
    "<rootDir>/__test__/**/*.spec.tsx"
  ],
  testPathIgnorePatterns: ["<rootDir>/__test__/.ignore"],
  collectCoverageFrom: [
    'src/**/*.js',
  ],
}