//'webpack'
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
module.exports = (callback)  => {
  var myConfig = Object.create(webpackConfig);
  if(process.env.NODE_ENV !== 'production'){
    myConfig.devtool = 'sourcemap';
    myConfig.debug = true;
    myConfig.plugins = myConfig.plugins.concat(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
    callback();
  });
};
