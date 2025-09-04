/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {{ tailwindConfig: string }} TailwindConfig */

/**
 * @type {PrettierConfig
 *   | SortImportsConfig
 *   | TailwindConfig}
 */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro', '@ianvs/prettier-plugin-sort-imports'],
  tailwindFunctions: ['tv'],

  /** Sort Imports Plugin Config. */
  importOrder: [
    '',
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '^@side-ui/(.*)$',
    '^~/components/(.*)$',
    '^~/styles/(.*)$',
    '^~/utils/(.*)$',
    '^~/(.*)$',
    '^[./]',
    '<THIRD_PARTY_MODULES>',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  overrides: [
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;

/**
 * @reference
 * https://github.com/tailwindlabs/prettier-plugin-tailwindcss
 * https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports
 */
