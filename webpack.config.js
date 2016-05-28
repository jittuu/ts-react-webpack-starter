var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry:  "./app/main.tsx",
  output: {
    path: "./dest",
    filename: "bundle.js"
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
        loader: 'style!css'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.tmpl.html"
    })
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  devServer: {
    contentBase: "./dest",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
