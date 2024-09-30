export default function createIteratorObject(report) {
    const employees = Object.values(report.allEmployees); // Get all employee arrays from the report
    let index = 0; // Initialize an index to keep track of the current position
  
    // Create a generator function to iterate through all employees
    function* employeeGenerator() {
      for (const department of employees) {
        for (const employee of department) {
          yield employee; // Yield each employee
        }
      }
    }
  
    return employeeGenerator(); // Return the generator function
  }
  