# React Starter Kit
React starter kit using React 16.

## Technology
- Webpack (https://webpack.js.org/)
- React (https://facebook.github.io/react/)

## TODO
- Tests for Modal component

## Install

```bash
$ yarn
```

## Run
```bash
$ yarn start
```

Go to `http://localhost:8080/` and try it out.

## Test
Contains only one component test for now, just an example how testing works.

```bash
$ yarn test
```

## [WIP] Build
Build a production ready version

```bash
$ yarn build
```

When the build is ready you can find the files in the dist/ folder.

## Environment variables
You can set the environment variables in the files `development.js` and `production.js` located in the env directory. The env files need to export an object.

```js
module.exports = {
    apiUrl: 'http://localhost:8000/api/',
    ...
};
```

When you want to use the env variables in your application you can get them by using `process.env`.
