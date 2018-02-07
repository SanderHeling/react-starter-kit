const fs = require('fs');
const path = require('path');

const envDir = path.resolve(__dirname, '../env/');

function getEnv(curEnv) {
    const env = process.env.ENV || curEnv;
    const envConfig = { app: { NODE_ENV: JSON.stringify(env) }, webpack: {} };
    const envFileUrl = path.resolve(envDir, `${env}.js`);

    if (!fs.existsSync(envFileUrl)) {
        return envConfig;
    }

    // Disable the global require rule here because require allows us to
    // import an js file, when using a js file for env settings we can do
    // dynamically set some vars
    // eslint-disable-next-line
    const rawSettings = require(envFileUrl);
    let envSettings = {};

    if (rawSettings.env) {
        envSettings = Object.keys(rawSettings.env).reduce(
            (envVar, key) =>
                Object.assign({}, envVar, {
                    [key]: JSON.stringify(rawSettings.env[key]),
                }),
            {}
        );
        envConfig.app = Object.assign({}, envConfig.app, envSettings);
    }

    envConfig.webpack = rawSettings.webpack;

    return envConfig;
}

module.exports = getEnv;
