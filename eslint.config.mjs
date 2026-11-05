import nextPlugin from '@next/eslint-plugin-next'
import tsParser from '@typescript-eslint/parser'

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
    languageOptions: {
      parser: tsParser,
    },
    files: ['**/*.ts', '**/*.tsx'],
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      '_archive/**',
      'src/main.js',
      'src/style.css',
    ],
  },
]

export default config
