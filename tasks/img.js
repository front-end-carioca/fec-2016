//'img'
import gulp from 'gulp';
module.exports = () => {
  return gulp.src(['assetsimg/**/*']).pipe(gulp.dest('distimg/'));
};
