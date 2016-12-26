'use strict';
const path = require('path');

const paths = {
  src: path.join(process.cwd(), 'src'),
  dist: path.join(process.cwd(), 'dist'),
};

module.exports = {
  context: paths.src,
  entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.dist,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.elm$/,
        loader: 'elm-webpack',
        query: {
          verbose: true,
          warn: true,
        },
      },
      {
        test: /\.s?css$/,
        loader: 'style!css',
      },
      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.woff2?(\?v=(\d\.){2}\d)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimeType: 'application/font-woff',
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=(\d\.){2}\d)?$/,
        loader: 'file',
      },
    ],
    noParse: /\.elm$/,
  },
  devServer: {
    inline: true,
    stats: {
      colors: true,
    },
  },
};
