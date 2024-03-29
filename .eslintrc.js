module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {}
};
