//'watch'
import gulp from 'gulp';
import livereload from 'gulp-livereload';
import server from 'gulp-express';

module.exports = () => {
  server.run(['server/app.babel.js'])

  livereload.listen({port: 8081});
  gulp.watch(['assets/sass/**/*.scss'], ['sass']);
  gulp.watch(['assets/svg/**/*.svg'], ['svgstore']);
  gulp.watch(['assets/img/**/*'], ['img']);
  gulp.watch(['src/**/*'], ['webpack']);
  gulp.watch(['server/**/*.js'], ['img', 'sass', 'vendor'])
    .on('change', () => server.run(['server/app.babel.js']));
};
