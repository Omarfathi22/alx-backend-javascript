export default function iterateThroughObject(reportWithIterator) {
    // Create an array to hold the employee names
    const employeeNames = [];
  
    // Iterate through the reportWithIterator
    for (const employee of reportWithIterator) {
      employeeNames.push(employee); // Add each employee name to the array
    }
  
    // Join the array into a string with ' | ' as the separator
    return employeeNames.join(' | ');
  }
  