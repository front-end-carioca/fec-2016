//'watch'
import gulp from 'gulp';
// import server from 'gulp-express';
import gls from 'gulp-live-server';

module.exports = () => {
  const server = gls.new('server/app.babel.js', {
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development'
    }
  });
  server.start();

  const notify = (file) => {
    console.log(file);
    server.notify.apply(server, [file]);
  };

  gulp.watch(['./template.js'], notify);
  gulp.watch(['assets/sass/**/*.scss'], ['sass']);
  gulp.watch(['assets/svg/**/*.svg'], ['svgstore']);

  gulp.watch(['dist/**/*.css', 'dist/**/*.img', 'dist/**/*.html'], notify);


  gulp.watch(['assets/img/**/*'], ['img']).on('change', notify);
  gulp.watch(['server/**/*.js'], server.start.bind(server));
};
