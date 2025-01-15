const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection open indefinitely
  // ... some code that doesn't end the response
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});