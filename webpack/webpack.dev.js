import webpack              from 'webpack';
import assign               from 'object-assign';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import prodConfig           from './webpack.prod.config.js';

Object.assign = assign;

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