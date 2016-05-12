//'watch'
import gulp from 'gulp';
// import server from 'gulp-express';
import gls from 'gulp-live-server';

module.exports = () => {
  const server = gls.new('server/app.babel.js', {}, true);
  server.start();

  const notify = (event) => server.notify.apply(server, [event.path]);

  gulp.watch(['./template.js']).on('change', notify);
  gulp.watch(['assets/sass/**/*.scss'], ['sass']).on('change', notify);
  gulp.watch(['assets/svg/**/*.scss'], ['svgstore']).on('change', notify);

  gulp.watch(['assets/img/**/*'], ['img']).on('change', notify);
  gulp.watch(['server/**/*.js'], server.start.bind(server));
};
