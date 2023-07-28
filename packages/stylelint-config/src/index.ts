export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  overrides: [
    {
      files: ['*.scss'],
      extends: ['stylelint-config-standard-scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'at-rule-no-unknown': null
      }
    }
  ],
  rules: {
    'import-notation': null,
    'selector-class-pattern': null,
    'no-invalid-position-at-import-rule': null,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }]
  }
};
