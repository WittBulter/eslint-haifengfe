const rules = require('rules')

module.exports = {
  root: true,
  
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  
  env: {
    node: true,
    browser: true,
    es6: true,
    serviceworker: true,
    phantomjs: false,
    amd: false,
  },
  
  globals: {
    require: true,
    Promise: true,
    process: true,
  },
  
  rules: rules,
}
