// Import the express module
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port for the server to listen on
const port = 1245;

// Define a route to handle GET requests to the root URL '/'
app.get('/', (request, response) => {
    // Send a response with the message 'Hello Holberton School!'
    response.send('Hello Holberton School!');
});

// Start the server to listen on the specified port
app.listen(port, () => {
    // Log a message when the server is running (optional)
    console.log(`Server running at http://127.0.0.1:${port}`);
});

// Export the app for use in other modules or testing
module.exports = app;
