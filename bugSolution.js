const http = require('http');

const server = http.createServer((req, res) => {
  // Handle potential errors during the asynchronous operation
  setTimeout(() => {
    try {
      // Simulate an asynchronous operation that might throw an error
      throw new Error('Simulated asynchronous error');
    } catch (error) {
      console.error('Asynchronous error caught:', error);
      // Log the error for debugging
      // You might want to send an error response to the client here, or take other recovery actions
      // res.writeHead(500, { 'Content-Type': 'text/plain' });
      // res.end('Internal Server Error');
    }
  }, 100);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});