export default {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '**/tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'unused-imports'],
  settings: {
    react: {
      pragma: 'h',
      fragment: 'Fragment'
    }
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-duplicate-imports': 'error',
    /* typescript rules */
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports'
      }
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true }
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    /* react rules */
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unknown-property': 'off',
    'react/no-string-refs': 'error',
    'react/require-render-return': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/self-closing-comp': 'warn',
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    /* react-hooks rules */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
