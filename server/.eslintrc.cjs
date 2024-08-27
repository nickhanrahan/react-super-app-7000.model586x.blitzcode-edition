const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'
const INFO = 'info'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true, // Enable Node.js global variables
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'no-console': [
      ERROR,
      {
        allow: [WARN, ERROR, INFO],
      },
    ],
    'prettier/prettier': WARN,
    'import/newline-after-import': WARN,
    'import/no-duplicates': [WARN, { considerQueryString: true }],
    'import/order': [
      WARN,
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': OFF,
    // Allow unused vars if they are prefixed with an underscore.
    '@typescript-eslint/no-unused-vars': [
      WARN,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/'], // Ignore these folders
}
