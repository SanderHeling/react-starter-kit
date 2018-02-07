# React Starter Kit
React starter kit using React 16.

## Technology
- Webpack (https://webpack.js.org/)
- React (https://facebook.github.io/react/)

## TODO
- Tests for Modal component

## Install

```bash
yarn
```

## Run
```bash
yarn start
```

Go to `http://localhost:8080/` and try it out.

## Test
Contains only one component test for now, just an example how testing works.

```bash
yarn test
```

## Build
Build a production ready version

```bash
yarn build
```

When the build is ready you can find the files in the dist/ folder.

## Environment variables
You can set the environment variables in the files `development.js` and `production.js` located in the env directory. When you change the env file you need to run `yarn start` again. The env files need to export an object contain. This object can contain overrides for webpack en environment variables used in the app. When you want to use the env variables in your application you can get them by using `process.env`.

```js
// development.js
module.exports = {
    webpack: {
        output: {
            publicPath: 'http://localhost:8080/',
        },
    },
    app: {
        apiUrl: 'http://localhost:8000/api/',
    },
};
```

It's also possible to load a different environment config (e.g. `mock.js`). Create the file in the env directory and run the application again with an extra ENV setting that has the same name.

```bash
ENV=mock yarn start
```
