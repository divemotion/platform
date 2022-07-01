const withTM = require("next-transpile-modules")(["ui"]);
const withFonts = require("next-fonts");

module.exports = withFonts(
  withTM({
    reactStrictMode: true,
  })
);
