var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      './src/index.js'
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
    ]},
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
    },
    devtool: 'source-map',
  };
