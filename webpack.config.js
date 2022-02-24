const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      shared: [
        "@angular/core",
        "@angular/common",
        "@angular/router",
        "bootstrap",
        "@angular/cdk",
        "@angular/material",
        "autoprefixer",
        "postcss",
        "tailwindcss",
        "react",
        "react-dom",
        "react-router-dom"
      ],
    })
  ],
};
