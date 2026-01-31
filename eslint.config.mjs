import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-plugin-prettier'
import storybook from 'eslint-plugin-storybook'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Storybook rules
  ...storybook.configs['flat/recommended'],

  // Global ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  // Prettier rules (keep prettier plugin)
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': [
        'error',
        {
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
              options: { parser: 'scss' },
            },
          ],
        },
      ],

      'react/react-in-jsx-scope': 'off',
      // Keep jsx-a11y rules here even without registering the plugin
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  },
])
