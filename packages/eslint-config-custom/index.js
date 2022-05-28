module.exports = {
  extends: ["next", "prettier"],
  plugins: ["simple-import-sort", "import"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: [
      "error",
      2,
      {
        FunctionDeclaration: {
          parameters: "off",
        },
        FunctionExpression: {
          parameters: "off",
        },
        MemberExpression: "off",
        SwitchCase: 1,
      },
    ],
    "array-bracket-spacing": ["warn", "never"],
    "no-useless-escape": "off",
    "import/first": "off",
  },
};
