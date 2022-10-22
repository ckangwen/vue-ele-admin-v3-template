module.exports = {
  extends: [
    "@charrue/typescript",
    "@charrue/vue3",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "import/no-unresolved": "off",
    "vue/require-default-prop": "off",
    "vue/one-component-per-file": "off",
    "vue/multi-word-component-names": "off",
    "no-console": "off",
  },
};
