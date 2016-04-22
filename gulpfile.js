var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var path = require('path');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webserver = require('gulp-webserver');


gulp.task('clean', function() {
  return del(['dist/']);
});

gulp.task('html', function () {
  var target = gulp.src('./dist/index.html');

  function transformContent(filePath, file) {
    var ext = path.extname(path.basename(filePath));
    var temp = '';
    switch(ext){
      case '.css':
        return '<link rel="stylesheet" href="' + path.relative( '/dist/', filePath) + '" />';
        break;
      case '.svg':
        return file.contents.toString();
        break;
    }
  }

  var vendor = gulp.src(['./dist/css/vendor/**/*.css'], {read: false});
  var sources = gulp.src(['./dist/css/*.css'], {read: false});

  var svgstore = gulp.src(['./dist/svg.svg']);

  return target
    .pipe(inject(vendor, {name: 'vendor', transform: transformContent }))
    .pipe(inject(sources, { transform: transformContent }))
    .pipe(inject(svgstore, { transform: transformContent }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('svgstore', function () {
  return gulp.src('assets/svg/*.svg')
    .pipe(svgmin(function getOptions (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [{
                cleanupIDs: {
                    prefix: prefix + '-',
                    minify: true
                }
            }]
        }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('img', function () {
  return gulp.src(['assets/img/**/*']).pipe(gulp.dest('dist/img/'));
});

gulp.task('vendor', function () {
  return gulp.src(['assets/css/vendor/**/*']).pipe(gulp.dest('dist/css/vendor/'));
});

gulp.task('sass', function () {
  return gulp.src(['assets/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('webpack', function(callback) {
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
});

gulp.task('webserver', function() {
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
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*'], ['webpack', 'html']);
  gulp.watch('assets/img/**/*', ['img']);
  gulp.watch('assets/vendor/**/*', ['vendor']);
  gulp.watch('assets/svg/**/*', ['svgstore']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('build', function(callback) {
  runSequence('clean', ['img', 'sass', 'vendor', 'svgstore', 'webpack'], 'html', callback);
});

gulp.task('serve', function(callback) {
  runSequence('build', ['webserver', 'watch'], callback);
});

gulp.task('default', ['serve']);

