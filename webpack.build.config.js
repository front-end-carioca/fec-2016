var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');
 
module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'assets/[hash].js',
    path: 'dist',
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    library: 'MyComponentExample',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },
  plugins: [
    // Note: "index.js" is not used, instead use "main" which is the name of the entry 
    // Using "index.js" would result in a file not found error because it has been hashed 
    new ReactToHtmlPlugin('index.html', 'main')
  ]
};