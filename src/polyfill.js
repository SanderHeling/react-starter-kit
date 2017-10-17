import 'babel-polyfill';

// React depends on requestAnimationFrame (even in test environments).
// Add a simple shim for testing environments.
global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
};
