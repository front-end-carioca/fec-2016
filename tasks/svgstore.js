//'svgstore'
import gulp from 'gulp';
import inject from 'gulp-inject';
import path from 'path';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
module.exports = () => {
  var svgs = gulp
    .src('assets/svg/*.svg')
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
    .pipe(svgstore({ inlineSvg: true }));

  function transformContent(filePath, file) {
    return file.contents.toString();
  }

  return gulp.src('./dist/index.html')
    .pipe(inject(svgs, { transform: transformContent }))
    .pipe(gulp.dest('./dist'));
};
