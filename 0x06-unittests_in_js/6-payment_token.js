// Function that simulates an API call and returns a Promise based on the success parameter
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    // If success is true, resolve the promise with a successful response
    if (success) {
        resolve({ data: 'Successful response from the API' });
    }
    // (No rejection scenario is implemented here)
});

// Exporting the function to make it available for use in other modules
module.exports = getPaymentTokenFromAPI;
