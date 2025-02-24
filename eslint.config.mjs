import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    settings: {
      react: { version: "detect" }
    },
    plugins: { prettier: prettierPlugin },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error"
    }
  }
];
