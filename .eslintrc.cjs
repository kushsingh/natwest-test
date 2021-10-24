module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "babel-eslint", // This line is required to fix "unexpected token" errors
  rules: {
    indent: ["warn", 4],
    "react/jsx-indent": ["warn", 4, { checkAttributes: true }],
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "no-nested-ternary": "warn",
    "react/prop-types": "warn",
  },
};
