const withTM = require("next-transpile-modules")(["ui"]);
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withImages(
  withFonts(
    withTM({
      reactStrictMode: true,
    })
  )
);
