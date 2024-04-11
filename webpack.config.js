// entry -> output

const path = require('path');

module.exports = {
    entry: './Public/src/app.js',
    output: {
        path: path.join(__dirname,'Public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude:/node-modules/
        },{
            test: /\.s?css$/,  // ? for selecting both scss and css (normalize.css)
            //test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]        
    },
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',
    devServer: {
        static: {
          directory: path.join(__dirname, 'Public'),
        },
        compress: true,
        port: 9000,
        //historyApiFallBack : true,  // this tell the dev server that we are handling routing via client side code.
        historyApiFallback: {
            disableDotRule: true,
          },
    },
};