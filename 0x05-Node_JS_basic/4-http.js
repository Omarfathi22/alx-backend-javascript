// Import the http module to create an HTTP server
const http = require('http');

// Define the host and port for the server to listen on
const host = '127.0.0.1'; // localhost address
const port = 1245; // The port where the server will be listening

// Create the HTTP server using the http.createServer method
const app = http.createServer((req, res) => {
    // Set the response status code to 200 (OK)
    res.statusCode = 200;

    // Set the response header to indicate that the content is plain text
    res.setHeader('Content-Type', 'text/plain');

    // Send the response content ('Hello Holberton School!') to the client and close the connection
    res.end('Hello Holberton School!');
});

// Make the server listen on the specified host and port
app.listen(port, host, () => {
    // Optionally, you can log a message when the server is successfully started.
    console.log(`Server running at http://${host}:${port}/`);
});

// Export the app to be used in other modules or tests
module.exports = app;
