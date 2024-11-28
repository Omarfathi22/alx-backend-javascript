// Importing the Sinon library for creating spies, stubs, and mocks, and Chai for assertions
const sinon = require('sinon');
const { expect } = require('chai');
// Importing the 'sendPaymentRequestToApi' function to test
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    // Variable to hold the spy that will monitor console.log calls
    let bigBrother;

    // Runs before each test to set up the spy for console.log
    beforeEach(() => {
        if (!bigBrother) {
            bigBrother = sinon.spy(console); // Create a spy on the console object
        }
    });

    // Runs after each test to reset the spy's history
    afterEach(() => {
        bigBrother.log.resetHistory(); // Reset the spy's call history to ensure fresh assertions
    });

    // Test case to check if the correct message is logged when passing 100 and 20
    it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
        sendPaymentRequestToApi(100, 20); // Call the function with 100 and 20 as arguments
        // Assert that the correct log message was printed to the console
        expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
        // Ensure that log was called exactly once
        expect(bigBrother.log.calledOnce).to.be.true;
    });

    // Test case to check if the correct message is logged when passing 10 and 10
    it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
        sendPaymentRequestToApi(10, 10); // Call the function with 10 and 10 as arguments
        // Assert that the correct log message was printed to the console
        expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
        // Ensure that log was called exactly once
        expect(bigBrother.log.calledOnce).to.be.true;
    });
});
