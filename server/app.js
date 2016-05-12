
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';

const port = process.env.port || 3000;
const app = express();

app.get('/test', (req, res) => {
  res.send('Hello, Hot Reload!')
})

app.use('/img', express.static(path.resolve(__dirname, '../dist/img')))
app.use('/css', express.static(path.resolve(__dirname, '../dist/css')))
app.use('/', express.static(path.resolve(__dirname, '../dist')))
if(process.env.NODE_ENV !== 'development') {
  const config = require('../webpack.config');
  config.entry.unshift('webpack/hot/only-dev-server', 'webpack-hot-middleware/client');
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: true,
      modules: false,
    },
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

const server = app.listen(port, '127.0.0.1',  () => {
  const host = server.address().address
  console.log('Application started at http://' + host + ':' + port)
})

module.exports = app
