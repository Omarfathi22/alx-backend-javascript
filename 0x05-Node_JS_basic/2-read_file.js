// Import the fs (file system) module to read files
const fs = require('fs');

// Define the function countStudents which takes a file name as input
function countStudents(fileName) {
    // Initialize objects to store the students and fields information
    const students = {}; // To store students grouped by field
    const fields = {}; // To store the count of students in each field
    let length = 0; // To track the total number of lines (students) in the file

    try {
        // Read the content of the file synchronously (blocking)
        const content = fs.readFileSync(fileName, 'utf-8');

        // Split the content by new lines to process each line (student entry)
        const lines = content.toString().split('\n');

        // Loop through each line to process student data
        for (let i = 0; i < lines.length; i += 1) {
            // If the line is not empty, proceed with processing
            if (lines[i]) {
                length += 1; // Increment the total number of students

                // Split the line by commas to separate the student fields (firstname, lastname, age, field)
                const field = lines[i].toString().split(',');

                // Check if the field (subject or course) already exists in the students object
                // If it does, push the student's name to the list of students for that field
                if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                    students[field[3]].push(field[0]); // Add student to the list of their field
                } else {
                    // If the field doesn't exist, create a new entry with the student's name
                    students[field[3]] = [field[0]];
                }

                // Similarly, track the count of students in each field
                if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
                    fields[field[3]] += 1; // Increment the count for the field
                } else {
                    // If the field doesn't exist, initialize the count to 1
                    fields[field[3]] = 1;
                }
            }
        }

        // Subtract 1 to exclude the header line
        const l = length - 1;
        console.log(`Number of students: ${l}`);

        // Iterate over the fields object to print the number of students in each field
        for (const [key, value] of Object.entries(fields)) {
            // Skip the 'field' entry, which is not a valid course/field
            if (key !== 'field') {
                // Print the number of students and the list of their names for each field
                console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
            }
        }
    } catch (error) {
        // If an error occurs, throw a custom error message
        throw Error('Cannot load the database');
    }
}

// Export the function so it can be used in other modules
module.exports = countStudents;
