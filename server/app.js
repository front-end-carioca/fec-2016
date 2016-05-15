import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const config = require("../webpack.config.js");
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'dist',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: true,
    modules: false,
  }
});
server.listen(8080);
