import gulp from 'gulp';
import gutil from 'gulp-util';
import webserver from 'gulp-webserver';
module.exports = () => {
  var config = {
    livereload: true,
    directoryListing: false,
    port: 3000,
    fallback: 'index.html',
    open: '/'
  };

  if (gutil.env.port) config.port = gutil.env.port;
  if (gutil.env.proxy) config.open = gutil.env.proxy;

  gulp.src('./dist')
    .pipe(webserver(config));
};