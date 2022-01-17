// add Node.js path module
const path = require("path");

// create main configuration object
module.exports = {
  // add basic configuration (entry, output, mode)
  // entry point is the root of the bundle and the beginning of the dependency graph
  entry: "./assets/js/script.js",
  // webpack will take the provided entry point, bundle the code, and output the bundled code to this folder
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  // setup the mode in which we want webpack to run
  // webpack runs in 'production mode' automatically, which will automatically minify our code
  mode: "development",
};
