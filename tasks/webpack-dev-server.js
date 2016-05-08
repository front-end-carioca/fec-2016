//"webpack-dev-server"
import gutil from 'gulp-util';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';
module.exports = (callback) => {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  var webpackDevServerConfig = {
    contentBase: myConfig.output.path,
    stats: {
      colors: true
    }
  }
  if(process.env.NODE_ENV !== 'production'){
    // myConfig.cache = true;
    // myConfig.debug = true;
    // myConfig.devtool = "eval";
    // myConfig.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
    // myConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());

    // webpackDevServerConfig.hot = true;
  }

  // Start a webpack-dev-server
  return new WebpackDevServer(webpack(myConfig), webpackDevServerConfig)
    .listen(8080, (err) => {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
};
