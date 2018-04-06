const webpackConfig = require('./conf/webpack.config.dev.js');

module.exports = {
    webpackConfig,
    components: 'src/components/**/[A-Z]*.js',
};
