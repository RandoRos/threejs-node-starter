const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
    output: 'index.html',
  })],
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
    output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
}