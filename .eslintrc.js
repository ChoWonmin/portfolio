module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['warn', {code: 250}],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off'
  },
};
