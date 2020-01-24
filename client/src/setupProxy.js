/**
 * File has to be a .js due to the way React looks for a file named specifically "setupProxy.js"
 */
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    // app.use(proxy('/api/**', { target: 'http://localhost:5000' }));
    // app.use(proxy('/league-models/**', { target: 'http://localhost:5000' }));
};
