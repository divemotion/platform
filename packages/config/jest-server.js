module.exports = {
  ...require("./jest-common"),
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.{js,ts}"],
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.ts$": "esbuild-jest",
    "^.+\\.js$": "esbuild-jest",
  },
  coveragePathIgnorePatterns: [],
  coverageThreshold: null,
};
