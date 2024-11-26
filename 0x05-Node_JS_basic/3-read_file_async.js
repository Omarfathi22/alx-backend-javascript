// Importing the 'readFile' function from the 'fs' module to read files asynchronously
const { readFile } = require('fs');

// Define the function countStudents which takes a file name as input and returns a promise
function countStudents(fileName) {
    // Initialize objects to store the students by field and the count of students in each field
    const students = {};
    const fields = {};
    let length = 0; // To track the total number of lines (students)

    // Return a promise to handle asynchronous file reading
    return new Promise((resolve, reject) => {
        // Asynchronously read the content of the file
        readFile(fileName, (error, data) => {
            if (error) {
                // Reject the promise with an error if the file reading fails
                reject(Error('Cannot load the database'));
            } else {
                // Split the content into lines, assuming each line represents a student
                const lines = data.toString().split('\n');

                // Process each line to extract student information
                for (let i = 0; i < lines.length; i += 1) {
                    // Skip empty lines
                    if (lines[i]) {
                        length += 1; // Increment the total line count (excluding header)

                        // Split the line by commas to extract student fields: firstname, lastname, age, field
                        const field = lines[i].toString().split(',');

                        // Check if the field (course/subject) already exists in the 'students' object
                        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                            // If it exists, push the student's name to the existing list for that field
                            students[field[3]].push(field[0]);
                        } else {
                            // If it doesn't exist, create a new entry for the field and add the student's name
                            students[field[3]] = [field[0]];
                        }

                        // Track how many students belong to each field
                        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
                            // Increment the count if the field already exists
                            fields[field[3]] += 1;
                        } else {
                            // Initialize the count to 1 if the field is encountered for the first time
                            fields[field[3]] = 1;
                        }
                    }
                }

                // Subtract 1 to exclude the header line from the count
                const l = length - 1;

                // Output the total number of students
                console.log(`Number of students: ${l}`);

                // Output the number of students and their names for each field
                for (const [key, value] of Object.entries(fields)) {
                    // Skip the entry for the header line (field)
                    if (key !== 'field') {
                        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
                    }
                }

                // Resolve the promise with the raw file data (or you can return another result here)
                resolve(data);
            }
        });
    });
}

// Export the countStudents function so it can be used in other modules
module.exports = countStudents;
