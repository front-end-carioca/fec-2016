
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';

const app = express();



app.get('/test', (req, res) => {
  res.send('Hello, Hot Reload!')
})

app.use('/img', express.static(path.resolve(__dirname, '../dist/img')))
app.use('/css', express.static(path.resolve(__dirname, '../dist/css')))
app.use('/', express.static(path.resolve(__dirname, '../dist')))
if(process.env.NODE_ENV !== 'development') {
  const config = require('../webpack.config');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: true,
      modules: false,
    },
  });
  app.use(middleware);

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
  }));
}

const server = app.listen(3000, '127.0.0.1',  () => {
  const port = server.address().port
  const host = server.address().address
  console.log('Application started at http://' + host + ':' + port)
})

module.exports = app
