var ejs = require('ejs');
var path = require('path');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');
var webpack = require('webpack');
var template = `<!doctype html>
<html>
  <head>
    <title>Sample App</title>
    <!-- vendor:css -->
    <!-- endinject -->
    <!-- inject:css -->
    <!-- endinject -->
  </head>
  <body>
    <div style="height: 0; width: 0; position: absolute; visibility: hidden">
      <!-- inject:svg -->
      <!-- endinject -->
    </div>
    <div id="app">
      <%- html %>
    </div>
    <% for (var chunk in assets) { -%>
    <script src="<%= assets[chunk] %>"></script>
    <% } -%>
  </body>
</html>`;

var config = {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'AppFEC',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.NoErrorsPlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new ReactToHtmlPlugin('index.html', 'bundle.js', {
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