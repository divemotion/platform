const withTM = require("next-transpile-modules")(["ui"]);
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withImages(
  withFonts(
    withTM({
      reactStrictMode: true,
      env: {
        ADMIN_SECRET: process.env.ADMIN_SECRET,
        GQL_URL: process.env.GQL_URL,
      },
      compiler: {
        styledComponents: true,
      },
    })
  )
);
