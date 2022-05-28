module.exports = {
  extends: ["next", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
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
