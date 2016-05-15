var ejs = require('ejs');
var path = require('path');
var ReactToHtmlPlugin = require('./reactToStringWebpack');
var webpack = require('webpack');
var template = require('./template');

var config = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    library: 'AppFEC',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['exports', 'require']
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new ReactToHtmlPlugin('index.html', 'bundle.js', {
      static: 'renderToStaticMarkup',
      template: function(data) {
        return ejs.render(template, data);
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  externals: {
    window: 'window',
    document: 'document'
  }
};

module.exports = config;
