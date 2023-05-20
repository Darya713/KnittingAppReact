const { createProxyMiddleware } = require('http-proxy-middleware');

const context = ['/knittingtypes', '/weatherforecast'];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: process.env.REACT_APP_API_URL,
        secure: false,
        changeOrigin: true,
    });

    app.use(appProxy);
};
