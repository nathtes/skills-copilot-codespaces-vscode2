// Create web server
// Create a web server that listens to the port 3000 and sends a response to the client with the following content: "Hello, I'm a web server!"
// The server should respond to all requests with the same content.
// The server should listen to the port 3000.
// The server should respond to all requests with the content "Hello, I'm a web server!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, I\'m a web server!');
});

server.listen(3000);