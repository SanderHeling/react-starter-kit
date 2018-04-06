const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.config.common.js'); // the settings that are common to prod and dev

const getEnv = require('./env');

const mode = 'production';
const env = getEnv(mode);

/**
 * Webpack configuration
 */
module.exports = webpackMerge(
    commonConfig,
    {
        mode,
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/',
            filename: 'static/js/[name].[hash].js',
            chunkFilename: 'static/js/[id].[chunkhash].js',
        },

        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new UglifyJsPlugin({
                parallel: true,
                cache: true,
                uglifyOptions: {
                    ecma: 8,
                    compress: {
                        warnings: false,
                        comparisons: false,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
            new ExtractTextPlugin('static/css/[name].[hash].css'),
            new webpack.DefinePlugin(env.app),
            new webpack.LoaderOptionsPlugin({
                htmlLoader: {
                    minimize: false,
                },
            }),
        ],
    },
    env.webpack
);
