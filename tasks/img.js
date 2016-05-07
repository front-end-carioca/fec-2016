//'img'
import gulp from 'gulp';
module.exports = () => {
  return gulp.src(['assets/img/**/*']).pipe(gulp.dest('dist/img/'));
};
