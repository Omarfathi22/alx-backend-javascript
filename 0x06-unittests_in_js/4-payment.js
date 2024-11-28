// Importing the 'Utils' module to access utility functions like 'calculateNumber'
const Utils = require('./utils');

// Function to calculate the total payment and log the result to the console
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    // Use the 'calculateNumber' function from the Utils module to sum the totalAmount and totalShipping
    const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    // Log the total cost to the console in the format "The total is: <totalCost>"
    console.log(`The total is: ${totalCost}`);
};

// Exporting the function to make it available for use in other modules
module.exports = sendPaymentRequestToApi;
