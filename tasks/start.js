import runSequence from 'run-sequence';
module.exports = (callback) => runSequence(
  'img',
  'sass',
  'vendor',
  'server',
  callback
);
