import runSequence from 'run-sequence';
module.exports = (callback) => runSequence('build', ['webpack-dev-server', 'watch'], callback);
