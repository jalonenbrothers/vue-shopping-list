const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new InjectManifest({
        swSrc: "./src/service-worker.js",
        swDest: "workbox-service-worker.js", // Change the destination filename
      }),
    ],
  },
  pwa: {
    name: "Shopping List App",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      short_name: "ShopList",
      background_color: "#ffffff",
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};
