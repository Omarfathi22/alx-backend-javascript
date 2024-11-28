// Importing the 'Utils' module which contains the 'calculateNumber' function
const Utils = require('./utils');

// Function that calculates the total cost by adding the payment amount and shipping cost, then logs the result
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    // Calculate the total cost by summing the amount and shipping using the 'calculateNumber' function from Utils
    const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    // Log the total cost to the console in the specified format
    console.log(`The total is: ${totalCost}`);
};

// Exporting the 'sendPaymentRequestToApi' function for use in other modules
module.exports = sendPaymentRequestToApi;
