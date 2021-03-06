module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json', // Required for rule generation
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'react/prop-types': 'off', // No need since we use TS
    'no-console': 'off', // Console.log is allowed for log collection
  },
  ignorePatterns: [
    '.next/',
    'node_modules/',
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    // Disable prop spreading for Storybook stories since actions addon needs it
    // Disable no-extraneous-dependencies for Storybook stories
    {
      files: ['**/*/*.stories.[jt]s?(x)'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};