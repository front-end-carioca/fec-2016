import runSequence from 'run-sequence';
module.exports = (callback) => runSequence('build', ['webserver', 'watch'], callback);
