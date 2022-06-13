const path = require("path");

const fromRoot = (d) => path.join(__dirname, d);

module.exports = {
  roots: [fromRoot("apps/hasura")],
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
};
