const path = require('path');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'dwing'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              'node_modules',
              path.resolve(__dirname)
            ],
            extensions: [
              '.js',
              '.vue'
            ],
            alias: {
              '@theme': path.resolve(__dirname)
            }
          }
        }
      }
    }
  },
  rules: {
    'vue/no-v-html': 1,
    'import/no-extraneous-dependencies': 0,
    'vue/max-attributes-per-line': 0
  }
};
