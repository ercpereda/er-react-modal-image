var commonConfig = require('./webpack.common');
var webpackMerge = require('webpack-merge');
var path = require('path');

var config = webpackMerge(commonConfig, {
  entry: './src/ModalImage.js',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'er-react-modal-image.js',
    libraryTarget: 'commonjs'
  },

  target: 'node',

  externals: {
    'react': 'react',
    'classnames': 'classnames'
  }
});

module.exports = config;
