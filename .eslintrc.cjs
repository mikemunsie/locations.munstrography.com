module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
    "plugin:prettier-vue/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "no-debugger": "warn",
    "no-console": "off",
    "vue/no-deprecated-slot-attribute": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\w"], ["@\\components", "@", "."]],
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/no-useless-template-attributes": "off",
    "vue/no-v-text-v-html-on-component": "warn",
  },
};
