// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "none",
  useTabs: true,
  tabWidth: 2,
  semi: true,
  endOfLine: "lf",
  singleQuote: false,
  jsxSingleQuote: false,
  singleAttributePerLine: true,
  printWidth: 85,
  bracketSpacing: true,
  arrowParens: "always",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
		"^@/app",
		"^@/processes",
		"^@/screens",
		"^@/layouts",
		"^@/widgets",
		"^@/features",
		"^@/entities",
		"^@/shared",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};

export default config;