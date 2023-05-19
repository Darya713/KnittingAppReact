const { createProxyMiddleware } = require('http-proxy-middleware');

const context = ['/knittingtypes'];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: process.env.REACT_APP_API_URL,
        changeOrigin: true,
    });

    app.use(appProxy);
};
