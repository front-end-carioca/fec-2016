import runSequence from 'run-sequence';
module.exports = (callback) => runSequence(
  'clean',
  'img',
  'sass',
  'vendor',
  'webpack',
  'svgstore',
  'watch',
  callback
);
