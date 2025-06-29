module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: true,
  singleAttributePerLine: true,
  endOfLine: 'lf',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<THIRD_PARTY_MODULES>', '(@/)|(^[./])'],
  importOrderParserPlugins: ['importAttributes', 'jsx', 'typescript'],
  importOrderSeparation: true,
  importOrderGroupNamespaceSpecifiers: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
  ],
}
