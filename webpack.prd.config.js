const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: { // 入口
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd', // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    library: 'utils', // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
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


