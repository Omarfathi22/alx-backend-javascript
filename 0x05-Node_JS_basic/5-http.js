// Import the required modules
const http = require('http'); // For creating the HTTP server
const { readFile } = require('fs'); // For reading the file asynchronously

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 1245;

// Function to count students from a CSV file and return the result in a formatted string
function countStudents(fileName) {
    const students = {}; // Object to store students grouped by field
    const fields = {}; // Object to store the count of students per field
    let length = 0; // To track the total number of students (including header)

    // Return a promise to handle asynchronous file reading and processing
    return new Promise((resolve, reject) => {
        // Read the file asynchronously
        readFile(fileName, (err, data) => {
            if (err) {
                // If an error occurs during file reading, reject the promise
                reject(err);
            } else {
                // Variable to accumulate the output string
                let output = '';
                // Split the file content into lines based on newline characters
                const lines = data.toString().split('\n');

                // Process each line to extract student data
                for (let i = 0; i < lines.length; i += 1) {
                    if (lines[i]) { // Skip empty lines
                        length += 1; // Increment the line count (students)
                        const field = lines[i].toString().split(','); // Split each line by comma

                        // Check if the field (course/subject) already exists in the students object
                        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                            students[field[3]].push(field[0]); // Add student to the field group
                        } else {
                            students[field[3]] = [field[0]]; // Create a new entry for the field
                        }

                        // Track the number of students in each field
                        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
                            fields[field[3]] += 1; // Increment the student count for this field
                        } else {
                            fields[field[3]] = 1; // Initialize the count for the field
                        }
                    }
                }

                // Subtract 1 to exclude the header row from the total student count
                const l = length - 1;

                // Build the output string to return
                output += `Number of students: ${l}\n`;
                for (const [key, value] of Object.entries(fields)) {
                    if (key !== 'field') { // Skip the 'field' header line
                        output += `Number of students in ${key}: ${value}. `;
                        output += `List: ${students[key].join(', ')}\n`; // List students for each field
                    }
                }

                // Resolve the promise with the formatted output
                resolve(output);
            }
        });
    });
}

// Create the HTTP server
const app = http.createServer((req, res) => {
    // Set the default response status and content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Handle the root route
    if (req.url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    }

    // Handle the '/students' route
    if (req.url === '/students') {
        res.write('This is the list of our students\n');

        // Call countStudents with the file path passed as a command-line argument
        countStudents(process.argv[2].toString()).then((output) => {
            // Slice off the last newline character to avoid extra empty line in the response
            const outString = output.slice(0, -1);
            res.end(outString); // Send the result as the response
        }).catch(() => {
            // If there is an error reading the file, return a 404 error
            res.statusCode = 404;
            res.end('Cannot load the database');
        });
    }
});

// Start the server and listen for requests
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the app for testing purposes
module.exports = app;
