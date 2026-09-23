import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['dist/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: 'module',
    },
  },
  prettierRecommended,
]
