module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  arrowParens: 'always',

  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^next',
    '^(?:\\./)*(?:\\../)*components/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^(?:\\./)*(?:\\../)*pages/(.*)$',
    '^(?:\\./)*(?:\\../)*data/(.*)$',
    '^(?:\\./)*(?:\\../)*hooks/(.*)$',
    '^(?:\\./)*(?:\\../)*utils/(.*)$',
    '^(?:\\./)*(?:\\../)*lib/(.*)$',
    '^(?:\\./)*(?:\\../)*types/(.*)$',
    '^(?:\\./)*(?:\\../)*styles/(.*)$',
    '^\\./.*\\.(css|scss|less)$',
    '^(?:\\./)*(?:\\../)*assets/(.*)$',
    '^\\./.*\\.(svg|png|jpg|jpeg|gif|ico|webp|avif)$',
    '^\\./.*\\.(ttf|otf|eot|woff|woff2)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

};