const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('./webpack.config.common.js'); // the settings that are common to prod and dev
const getEnv = require('./env');

const mode = 'development';
const env = getEnv(mode);

/**
 * Webpack configuration
 */
module.exports = webpackMerge(
    commonConfig,
    {
        mode,
        devtool: 'cheap-module-eval-source-map',

        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: 'http://localhost:8080/',
            filename: '[name].js',
        },

        plugins: [
            new webpack.DefinePlugin({ 'process.env': env.app }),
            new ExtractTextPlugin('[name].css'),
        ],

        devServer: {
            port: 8080,
            host: '0.0.0.0',
            historyApiFallback: true,
            stats: 'minimal',
            inline: true,
        },
    },
    env.webpack
);
