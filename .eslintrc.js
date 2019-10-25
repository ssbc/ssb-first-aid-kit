module.exports = {
  env: {
    //node: true
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
  //  '@vue/standard'
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline']
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}
  