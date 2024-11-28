// Importing necessary libraries: Sinon for spying and Chai for assertions
const sinon = require('sinon');
const Utils = require('./utils'); // Importing the Utils module to spy on its 'calculateNumber' method
const { expect } = require('chai'); // Importing 'expect' from Chai for assertions
const sendPaymentRequestToApi = require('./3-payment'); // Importing the function to test

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
        // Creating a spy on the Utils object to monitor calls to its methods
        const bigBrother = sinon.spy(Utils);

        // Calling the function being tested
        sendPaymentRequestToApi(100, 20);

        // Assert that 'calculateNumber' was called with the correct arguments ('SUM', 100, 20)
        expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        // Ensure that 'calculateNumber' was called exactly once
        expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

        // Restore the original 'calculateNumber' method after the test to avoid side effects on other tests
        bigBrother.calculateNumber.restore();
    });
});
