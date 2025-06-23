import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...js.configs.recommended.languageOptions.globals,
        process: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": ["warn"],
      "no-console": "off",
    },
  },
  prettierConfig,
];
