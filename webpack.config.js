var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

if (process.env.NODE_ENV === 'production') {
// if (true) {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['exports', 'require']
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ];
}

module.exports = config;