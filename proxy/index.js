const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 8080;
const HOST = "localhost";
const APP_SERVICE_URL = "http://localhost:3000/";

// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

// Authorization
app.use('/login', createProxyMiddleware({
    target: 'http://localhost:3001/login',
    changeOrigin: true,
    pathRewrite: {
        [`^/login`]: '',
    },
})
);

app.use('/callback', createProxyMiddleware({
    target: 'http://localhost:3001/callback',
    changeOrigin: true,
    pathRewrite: {
        [`^/callback`]: '',
    },
})
);

// Proxy endpoints
app.use('', createProxyMiddleware({
    target: APP_SERVICE_URL,
    changeOrigin: true,
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});