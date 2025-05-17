// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    ignores: ["dist/*", "drizzle/*"],
    plugins: {
      "react": require("eslint-plugin-react"),
    },
    rules: {
      // Запрещает `function`, требует стрелочную функцию
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "no-trailing-spaces": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
]);
