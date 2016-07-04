var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './client'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions:         ['', '.js', '.jsx']
    },
    output: {
        path:       path.join(__dirname, '../dist'),
        filename:   'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test:       /\.jsx?$/,
                exclude:    /node_modules/,
                loader:     'babel'
            },
            {
                test:       /\.scss$/,
                loader:     ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};