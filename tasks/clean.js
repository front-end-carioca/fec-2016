//'clean'
import del from 'del';
module.exports = () => del(['dist/img', 'dist/css', 'dist/*.js', 'dist/*.map']);
