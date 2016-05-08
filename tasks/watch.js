//'watch'
import gulp from 'gulp';
import runSenquence from 'run-sequence';

module.exports = () => {
  gulp.watch(['src/**/*'], ['webpack-watch']);
  gulp.watch('assets/img/**/*', ['img']);
  gulp.watch('assets/vendor/**/*', ['vendor']);
  gulp.watch('assets/svg/**/*', ['svgstore']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
};