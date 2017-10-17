const webpack = require('webpack');
const path = require('path');

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appSrc = path.resolve(__dirname, '../src/');

module.exports = {
    entry: {
        vendor: path.resolve(appSrc, 'vendor.js'),
        app: path.resolve(appSrc, 'app.js'),
    },

    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: require.resolve('eslint-loader'),
                include: appSrc,
                options: {
                    eslintPath: require.resolve('eslint'),
                    // configFile: path.resolve(__dirname, '../.eslintrc'),
                },
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: '10000',
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.js$/,
                        include: appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        test: /\.(scss)$/,
                        use: ExtractTextPlugin.extract({
                            use: [
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        sourceMap: true,
                                        localIdentName:
                                            '[name]__[local]--[hash:base64:5]',
                                        modules: true,
                                    },
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        plugins: () => [
                                            autoprefixer({
                                                browsers: [
                                                    '>1%',
                                                    'last 4 versions',
                                                    'Firefox ESR',
                                                    'not ie < 9', // React doesn't support IE8 anyway
                                                ],
                                            }),
                                        ],
                                        sourceMap: 'inline',
                                    },
                                },
                                {
                                    loader: require.resolve('sass-loader'),
                                    options: {
                                        sourceMap: true,
                                    },
                                },
                            ],
                        }),
                    },
                    {
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, '../src/index.html'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
    ],

    stats: {
        children: false,
    },

    performance: {
        hints: false,
    },
};
