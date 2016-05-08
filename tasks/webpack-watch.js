import runSequence from 'run-sequence';
module.exports = (callback) => runSequence('webpack', 'svgstore', callback);
