const path = require('path');
const webpack = require('webpack');

const buildDirectory = './public/';

module.exports = {
    entry: './src/index.js',
    devServer: {
        hot: true,
        inline: true,
        port: 7700,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(buildDirectory),
        filename: 'app.js',
        publicPath: 'http://localhost:7700/',
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                },
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ],
    },
    plugins: [],
};