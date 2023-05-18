const { createProxyMiddleware } = require('http-proxy-middleware');

const context = ['/knittingtypes'];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7083',
        secure: false,
    });

    app.use(appProxy);
};
