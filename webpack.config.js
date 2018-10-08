const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  // devServer: {
  //   historyApiFallback: true
  // },
  devServer: {
    //historyApiFallback: true,
    contentBase: path.join(__dirname, "dist")
  },

  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Pizza List"
    })
  ]
};
