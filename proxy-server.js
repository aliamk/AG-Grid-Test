const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define a proxy route to forward requests to the API server
app.use('/api', createProxyMiddleware({
  target: 'https://www.realfin.com',
  changeOrigin: true,
  // Add any additional configuration options as needed
}));

// Start the server
const port = 3001; // Choose a port for your proxy server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
