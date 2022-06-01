module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/jest-preprocess.js',
  },
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: [
    './enzyme.adapter.js',
  ],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', './cypress/'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '../../testresults',
        outputName: 'shopping.junit.xml',
      },
    ],
  ],
};
