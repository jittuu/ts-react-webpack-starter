var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  "./app/main.tsx",
  output: {
    path: "./built",
    filename: "[name]-[hash].js"
  },

  resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  }
}
