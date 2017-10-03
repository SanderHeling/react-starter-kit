const path = require('path');

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.config.common.js'); // the settings that are common to prod and dev

const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack configuration
 */
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },

    plugins: [new ExtractTextPlugin('[name].css')],

    devServer: {
        port: 8080,
        host: '0.0.0.0',
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
    },
});
