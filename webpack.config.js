const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");

// create main configuration object
module.exports = {
  // setup dev server
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: true,
    port: 8080,
  },
  // add basic configuration (entry, output, mode)
  // entry point is the root of the bundle and the beginning of the dependency graph
  // entry is where webpack looks to start building the module
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  // webpack will take the provided entry point, bundle the code, and output the bundled code to this folder
  // output is used to tell webpack where the files are going to go and what are the names of those files
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  // module
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath: function (url) {
                return url.replace("../", "/assets/");
              },
            },
          },
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  // add plugins
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    }),
  ],
  // setup the mode in which we want webpack to run
  // webpack runs in 'production mode' automatically, which will automatically minify our code and run uglify(?)
  // development mode will offer hot reloading of webpack and debugging features
  mode: "development",
};
