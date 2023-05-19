const { createProxyMiddleware } = require('http-proxy-middleware');

const context = ['/knittingtypes'];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://knittingapp-backend.azurewebsites.net/',
        changeOrigin: true,
    });

    app.use(appProxy);
};
