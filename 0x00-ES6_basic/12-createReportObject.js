export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList,  // Spread syntax to include all departments and their employees
      },
      getNumberOfDepartments() {
        return Object.keys(this.allEmployees).length;  // Returns the number of departments
      },
    };
  }
  