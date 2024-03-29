module.exports = {
  env: {
    es6: true
  },

  parserOptions: {
    sourceType: 'module'
  },

  extends: ['standard', 'standard-react', 'prettier'],

  plugins: ['standard', 'prettier'],

  settings: {
    react: {}
  },

  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      rules: {}
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {}
    },
    {
      files: [
        '*.{spec,test}.{js,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,ts,tsx}'
      ],
      env: {
        jest: true
      }
    }
  ],

  globals: {},

  rules: {
    'comma-dangle': 'off'
  }
}
