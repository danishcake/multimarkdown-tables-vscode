import typescriptEslint from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["**/out", "**/dist", "**/*.d.ts"],
  },
  {
    files: ["**/*.ts", "**/*.mts"],

    plugins: {
      "@typescript-eslint": typescriptEslint,
      "@stylistic": stylistic,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 6,
      sourceType: "module",
    },

    rules: {
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],

      curly: "warn",
      eqeqeq: "warn",
      "no-throw-literal": "warn",
      "@stylistic/semi": "error",
    },
  },
];
