const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  devServer: {
    contentBase: path.join(__dirname, "dist")
  },

  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loaders: ["babel-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "Pizza List"
    })
  ]
};
