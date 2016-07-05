import webpack              from 'webpack';
import assign               from 'object-assign';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path                 from 'path';
import prodConfig           from './webpack.prod.config.js';

Object.assign = assign;

// Stuff for phaser
var phaserModule = path.join(__dirname, '../node_modules/phaser');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

const BABEL_QUERY = {
    presets: ['react', 'es2015', 'stage-0'],
    plugins: [
        [
            'react-transform',
            {
                transforms: [
                    {
                        transform:  'react-transform-hmr',
                        imports:    ['react'],
                        locals:     ['module']
                    }
                ]
            }
        ]
    ]
};

export default function(app) {
    const config = Object.assign(prodConfig, {
        devtool: 'inline-source-map',
        entry: [
            'webpack-hot-middleware/client',
            './client'
        ],
        module: {
            loaders: [
                {
                    test:       /\.jsx?$/,
                    exclude:    /node_modules/,
                    loader:     'babel',
                    query:      BABEL_QUERY
                },
                {
                    test:       /\.scss?$/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
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
                }
            ]
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    });

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true }));
    app.use(webpackHotMiddleware(compiler));
};