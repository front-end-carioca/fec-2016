//'watch'
import gulp from 'gulp';

module.exports = () => {
  gulp.watch(['src/**/*'], ['webpack']);
  gulp.watch('assets/img/**/*', ['img']);
  gulp.watch('assets/vendor/**/*', ['vendor']);
  gulp.watch('assets/svg/**/*', ['svgstore']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
};