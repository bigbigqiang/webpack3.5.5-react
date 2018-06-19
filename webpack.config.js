/**
 * 开发环境配置的打包文件
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry : {
        main : path.resolve(__dirname,'./src/app.js'),
   },
    output:{
        path: path.resolve(__dirname,'./dev'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.less/, use: ['style-loader','css-loader','less-loader']},
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.(png|jpg|jpeg)$/, use: ['url-loader']},
            {test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'react'],
                }
              }
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.json', '.scss','.less','jsonp'],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        inline:true,
        hot: true,
        port:3000
    }
};