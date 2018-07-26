const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.html$/,
            use: "html-loader"
        }]
    },
    plugins: [
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