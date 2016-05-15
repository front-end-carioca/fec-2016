//'watch'
import gulp from 'gulp';
import server from 'gulp-express';

module.exports = () => {
  server.run(['server/app.babel.js'])

  const notify = (file) => {
    server.notify(file);
  };

  gulp.watch(['./template.js']).on('change', notify);
  gulp.watch(['assets/sass/**/*.scss'], ['sass']).on('change', notify);
  gulp.watch(['assets/svg/**/*.scss'], ['svgstore']).on('change', notify);

  gulp.watch(['assets/img/*.*'], ['img']).on('change', notify);
  gulp.watch(['server/**/*.js'], [server.run]);
};
