module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    curly: ['error', 'multi-line'],
    // 'vue/max-attributes-per-line': ['error', {
    //   singleline: 1,
    //   multiline: 1,
    // }],
    // 'space-before-function-paren': ["error", "never"],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    indent: 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 'warn', // ["error"]
    camelcase: ['off'],
    'array-callback-return': 'off',
    'no-return-assign': 'off',
    'import/named': 'off', // because of import { BigNumberish, BytesLike } from 'ethers'
  },
}
