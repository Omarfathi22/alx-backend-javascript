// Importing the 'expect' function from the Chai assertion library for testing
const { expect } = require('chai');
// Importing the 'getPaymentTokenFromAPI' function to test
const getPaymentTokenFromAPI = require('./6-payment_token');

// Test suite for testing the 'getPaymentTokenFromAPI' function
describe('getPaymentTokenFromAPI', () => {
    // Test case for when the success parameter is true
    it('getPaymentTokenFromAPI(success), where success == true', (done) => {
        // Call the function and pass true as the argument, expecting a successful response
        getPaymentTokenFromAPI(true)
            .then((res) => {
                // Assert that the response matches the expected successful result
                expect(res).to.deep.equal({ data: 'Successful response from the API' });
                // Indicate that the test is complete
                done();
            });
    });
});
