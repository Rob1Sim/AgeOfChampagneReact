module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": "error",
    "jsx-a11y/anchor-is-valid": "error"
  },
};
