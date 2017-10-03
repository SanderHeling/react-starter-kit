const webpack = require('webpack');
const path = require('path');

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.config.common.js'); // the settings that are common to prod and dev

const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack Constants
 */
const ENV = 'production';

/**
 * Webpack configuration
 */
module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/css/[id].[hash].chunk.js',
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('static/css/[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(ENV),
            },
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false,
            },
        }),
    ],
});
