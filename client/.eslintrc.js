const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';
const INFO = 'info';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier', 'css-modules'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 6,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },

  ignorePatterns: ['.eslintrc.js', 'build/**/*', 'codegen.ts', 'src/gql-generated/**/*'],

  rules: {
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      ERROR,
      {
        allow: [WARN, ERROR, INFO],
      },
    ],

    // need to allow for refreshing by mutating window.location.href
    'no-self-assign': [WARN, { props: true }],

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx', '.tsx'] }],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': WARN,

    'linebreak-style': OFF,

    'import/no-named-as-default': OFF,

    'react-hooks/rules-of-hooks': OFF, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': OFF, // Checks effect dependencies
    'react/jsx-key': WARN,

    // https://github.com/apollographql/apollo-client/issues/9048
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        cjs: 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'react/prop-types': WARN,

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

    '@typescript-eslint/no-explicit-any': WARN,

    // Allow unused vars if they are prefixed with an underscore.
    '@typescript-eslint/no-unused-vars': [
      WARN,
      {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-unused-vars': OFF,
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
  ],
};
