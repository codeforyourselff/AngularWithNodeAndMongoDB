module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:node/recommended" 
  ],
  "plugins": ["prettier"],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    "no-unused-vars":"warn",
    "no-console":"off",
    "func-names":"off",
  },
};
