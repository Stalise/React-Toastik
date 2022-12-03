import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Jest execution environment. Node doesn't fit, because browser things don't work
  testEnvironment: 'jsdom',
  // specifies should to report each individual test at runtime
  verbose: true,
  // formats in which the test coverage is collected
  coverageReporters: ['text-summary'],
  // cleans the moks after each it()
  clearMocks: true,
  // Jest runs the code as JS, so when using TS, it needs to be converted via the installed ts-just package
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  // unit tests in the project are defined by test.ts
  testMatch: [`**/*.test.${process.env.JEST_EXT}`],
  // allows to isolate the specified file extensions
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'babel-jest',
  },
  // array of names in which Jest searches for the files it needs
  // src path for aliases configured in the ts.config folder
  moduleDirectories: ['node_modules', 'src'],
};

export default config;
