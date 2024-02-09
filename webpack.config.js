// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-library.js',
    library: 'MyLibrary',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
