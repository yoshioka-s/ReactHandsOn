const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      { test: /\.js(x?)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, use: [
        'style-loader', 'css-loader'
      ]},
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080
  },

  devtool: 'sourcemap',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}
