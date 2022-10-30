module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  parser: 'vue-eslint-parser',
  extends: [
    // '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}