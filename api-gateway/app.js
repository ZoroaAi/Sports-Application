const express = require('express');
const http = require('http');
const app = express();
const port= 4000;

app.get('/', (req,res) => {
    res.send('API Gateway is running');
});

// Forward request to the User service
app.use('/user/*', (req,res) => {
    const options = {
        hostname: 'localhost',
        port: 3001,
        path: req.originalUrl,
        method: req.method,
        Headers: req.headers,
    };

    const proxy = http.request(options, (response) => {
        res.writeHead(response.statusCode, response.headers);
        response.pipe(res, { end: true });
    });
    
    req.pipe(proxy, { end: true });
});

// Add authentication and authorization
// Implement rate limiting, caching, and other optimization features
// Later on when scaling Swap to using services like Kong, or AWS API Gateway

app.listen(port, () => {
    console.log(`API Gateway on port ${port}`);
});