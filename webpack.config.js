var path = require("path")

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./main.js",
  output: {
    path: path.join(__dirname),
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  target: "node",
  watch: true,
  devtool: "source-map"
}
