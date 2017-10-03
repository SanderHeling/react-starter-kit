const mainWebpackConfig = require('../conf/webpack.config.dev.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = storybookBaseConfig => {
    const config = storybookBaseConfig;
    config.module.rules = config.module.rules.concat(mainWebpackConfig.module.rules);

    // Add ExtraTextPlugin for css files
    config.plugins = config.plugins.concat(new ExtractTextPlugin('[name].css'));

    config.stats = Object.assign({}, config.stats, { children: false });
    config.performance = Object.assign({}, config.performance, { hints: false });

    return config;
};
