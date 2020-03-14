 const path = require('path');
 const {
     CleanWebpackPlugin
 } = require('clean-webpack-plugin');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

 module.exports = {
     mode: 'production',
     devtool: 'source-map',
     entry: {
         app: './src/index.js'
     },
     plugins: [
         new CleanWebpackPlugin(),
         new UglifyJSPlugin()
     ],
     output: {
         filename: 'Maple.js',
         path: path.resolve(__dirname, 'dist'),
         libraryTarget: 'umd'
     },
     module: {
         rules: [{
             test: /\.m?js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/preset-env'],
                     plugins: ['@babel/plugin-transform-runtime']
                 }
             }
         }]
     }
 };