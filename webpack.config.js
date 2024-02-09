// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'getProducts.js',
    library: 'GetProducts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
