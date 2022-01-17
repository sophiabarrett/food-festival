// add Node.js path module
const path = require("path");
const webpack = require("webpack");

// create main configuration object
module.exports = {
  // add basic configuration (entry, output, mode)
  // entry point is the root of the bundle and the beginning of the dependency graph
  // entry is where webpack looks to start building the module
  entry: "./assets/js/script.js",
  // webpack will take the provided entry point, bundle the code, and output the bundled code to this folder
  // output is used to tell webpack where the files are going to go and what are the names of those files
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  // add plugin to make exception for jQuery's $
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  // setup the mode in which we want webpack to run
  // webpack runs in 'production mode' automatically, which will automatically minify our code and run uglify(?)
  // development mode will offer hot reloading of webpack and debugging features
  mode: "development",
};
