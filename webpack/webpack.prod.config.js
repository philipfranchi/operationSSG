var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Stuff for phaser
var phaserModule = path.join(__dirname, '../node_modules/phaser');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: [
        './client'
    ],
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
            },
            {
                test:       /pixi\.js/,
                loader:     'expose?PIXI'
            },
            {
                test:       /phaser-split\.js$/,
                loader:     'expose?Phaser'
            },
            {
                test:       /p2\.js/,
                loader:     'expose?p2'
            },
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
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions:         ['', '.js', '.jsx'],
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    }
};