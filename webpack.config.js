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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
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
