// Import required modules
const express = require('express'); // Express framework for HTTP routing
const { readFile } = require('fs'); // File system module to read files asynchronously

// Create an Express app instance
const app = express();

// Define the port for the server to listen on
const port = 1245;

// Function to count students and group them by their fields
function countStudents(fileName) {
    const students = {}; // Object to store students grouped by field
    const fields = {}; // Object to count the number of students in each field
    let length = 0; // To track the total number of students (including header)

    // Return a promise that reads the file and processes the data
    return new Promise((resolve, reject) => {
        // Read the CSV file asynchronously
        readFile(fileName, (err, data) => {
            if (err) {
                // If an error occurs while reading the file, reject the promise
                reject(err);
            } else {
                let output = ''; // Variable to accumulate the output string
                const lines = data.toString().split('\n'); // Split the file data into lines

                // Process each line of the CSV file
                for (let i = 0; i < lines.length; i += 1) {
                    if (lines[i]) { // Ignore empty lines
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
                    if (key !== 'field') { // Skip the header row
                        output += `Number of students in ${key}: ${value}. `;
                        output += `List: ${students[key].join(', ')}\n`; // List students in the field
                    }
                }

                // Resolve the promise with the formatted output
                resolve(output);
            }
        });
    });
}

// Route for the root URL '/'
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Route for '/students' to display the list of students and their fields
app.get('/students', (req, res) => {
    // Call the countStudents function to process the file and get the result
    countStudents(process.argv[2].toString()).then((output) => {
        // Send the list of students and their fields as the response
        res.send(['This is the list of our students', output].join('\n'));
    }).catch(() => {
        // If there was an error, send a response indicating the database couldn't be loaded
        res.send('This is the list of our students\nCannot load the database');
    });
});

// Start the Express server on the specified port
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});

// Export the app instance for testing purposes
module.exports = app;
