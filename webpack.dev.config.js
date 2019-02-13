const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: { // 入口
    example: './examples/base.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env'],
          plugins: ["@babel/plugin-transform-runtime"]
        },
      },
    ]
  },
}


