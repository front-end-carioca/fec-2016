//'webpack'
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config';
module.exports = (callback)  => {
    process.env.NODE_ENV = 'production'
    return gulp.src('./src/index.js')
      .pipe(webpackStream(webpackConfig, webpack, (err, stats) => {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log('[webpack]', stats.toString({
          colors: true,
          chunkModules: false,
          assets: false,
          version: false,
          hash: false
        }))
      }))
      .pipe(gulp.dest('dist/'));
};
