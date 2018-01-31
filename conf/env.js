const fs = require('fs');
const path = require('path');

const envDir = path.resolve(__dirname, '../env/');

function getEnv(env) {
    let envConfig = { NODE_ENV: JSON.stringify(env) };
    const envFileUrl = path.resolve(envDir, `${env}.js`);

    if (fs.existsSync(envFileUrl)) {
        // Disable the global require rule here because require allows us to
        // import an js file, when using a js file for env settings we can do
        // dynamically set some vars
        // eslint-disable-next-line
        const rawSettings = require(envFileUrl);

        const settings = Object.keys(rawSettings).reduce(
            (curEnvVar, key) =>
                Object.assign({}, curEnvVar, {
                    [key]: JSON.stringify(rawSettings[key]),
                }),
            {}
        );

        envConfig = Object.assign({}, envConfig, settings);
    }

    return { 'process.env': envConfig };
}

module.exports = getEnv;
