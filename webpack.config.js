const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',
    output:{
      path:__dirname,
      filename:'dist/app.js'
    },
    module:{
        rules:[
            {test:/\.js/,loader:'babel-loader',exclude:/node_modules/},
            {test:/\.css/,loader:'css-loader!style-loader'},
            {test:/\.(png|jpeg|jpg|ttf|gif)/,loader:'file-loader'},
            {test:/\.vue$/,loader:'vue-loader'},
            {test:/\.scss$/,loader:'scss-loader'}
        ]
    },
    devServer:{
        disableHostCheck:true
    },
    resolve:{
        alias:{
            'vue$':"vue/dist/vue.esm.js"
        }
    }
};