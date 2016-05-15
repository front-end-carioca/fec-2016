//'react-to-string'
import gulp from 'gulp';
import gutil from 'gulp-util';
import glob from 'glob';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import template from '../template';
import { renderToString } from 'react-dom/server';

module.exports = (callback)  => {
  const App = require('../src/index.js')();
  const startRender = Date.now();
  const html = renderToString(App);
  gutil.log(`\u001b[33m[react-to-string] - RenderToString timing ${Date.now() - startRender}ms\u001b[39m`)
  glob(path.resolve(__dirname, '../dist/*.js'), (err, files) => {
    const index = ejs.render(template, {
      assets: files.map(file=>`/${path.relative('./dist', file)}`),
      html: html
    });

    fs.writeFile('./dist/index.html', index, (err, output) =>{
      if(err) throw new gutil.PluginError("react-to-string", err);
      gutil.log('\u001b[32m[react-to-string]\u001b[39m - output file \u001b[33m"./dist/index.html"\u001b[39m')
      callback();
    });
  });
};
