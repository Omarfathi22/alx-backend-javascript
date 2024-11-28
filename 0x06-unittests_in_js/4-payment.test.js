// Importing the necessary libraries: Sinon for spies and stubs, Chai for assertions
const sinon = require('sinon');
const Utils = require('./utils'); // Importing the Utils module to mock 'calculateNumber'
const { expect } = require('chai'); // Importing 'expect' from Chai for assertions
const sendPaymentRequestToApi = require('./4-payment'); // Importing the function to test

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
        // Create a spy on the console.log function to monitor its calls
        const bigBrother = sinon.spy(console);
        // Create a stub for the 'calculateNumber' function from the Utils module to control its behavior
        const dummy = sinon.stub(Utils, 'calculateNumber');

        // Make the stub return a fixed value (10) when called
        dummy.returns(10);

        // Call the function being tested with specific arguments
        sendPaymentRequestToApi(100, 20);

        // Assert that 'calculateNumber' was called with the correct parameters
        expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
        // Ensure that 'calculateNumber' was called exactly once
        expect(dummy.callCount).to.be.equal(1);

        // Assert that console.log was called with the expected string
        expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
        // Ensure that console.log was called exactly once
        expect(bigBrother.log.callCount).to.be.equal(1);

        // Restore the original 'calculateNumber' and 'console.log' functions to avoid side effects on other tests
        dummy.restore();
        bigBrother.log.restore();
    });
});
