module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    quotes: ['warn', 'single'],
    semi: 'warn',
    'max-len': 'off',
    'array-element-newline': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'object-curly-spacing': ['warn', 'always'],
    'keyword-spacing': 'warn',
    'vue/multi-word-component-names': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 3,
      },
    }],
  },
};
