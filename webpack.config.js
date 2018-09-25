const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require('./ConsoleLogOnBuildWebpackPlugin');

module.exports = {
  entry: {
    main: './src/js/index.js',
    test: './src/js/test.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[chunkhash:8].bundle.js",
    publicPath: 'http://baidu.com/'
  },
  mode: "development",
  module: {
    rules: [{
      test: /\.html$/,
      use: "html-loader"
    }]
  },
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin()
    // new UglifyJsPlugin({
    //     sourceMap: false,
    //     uglifyOptions: {
    //         compress: true,
    //         warnings: true,
    //         output: {
    //             comments: true,
    //             beautify: false
    //         }
    //     }
    // })
  ]
};