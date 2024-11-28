// Importing the necessary libraries: Chai for assertions
const { expect } = require('chai');
// Importing the 'calculateNumber' function to be tested
const calculateNumber = require('./2-calcul_chai');

// Start of the test suite for 'calculateNumber' function
describe('calculateNumber', () => {

    // Tests for 'SUM' operation
    describe('type == "SUM"', () => {

        // Test case: Adding two equal positive numbers
        it('equal positive numbers', () => {
            expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
        });

        // Test case: Adding two positive numbers with decimals
        it('equal positive numbers (alternate)', () => {
            expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
        });

        // Test case: Adding two equal negative numbers
        it('equal negative numbers', () => {
            expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
        });

        // Test case: Adding two negative numbers with decimals
        it('equal negative numbers (alternate)', () => {
            expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
        });

        // Test case: Adding one positive and one negative number
        it('negative and positive numbers', () => {
            expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
        });

        // Test case: Adding one negative and one positive number
        it('positive and negative numbers', () => {
            expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
        });

        // Test case: Adding two zeros
        it('0 and 0', () => {
            expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
        });
    });

    // Tests for 'SUBTRACT' operation
    describe('type == "SUBTRACT"', () => {

        // Test case: Subtracting two equal positive numbers
        it('equal positive numbers', () => {
            expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
        });

        // Test case: Subtracting two positive numbers with decimals
        it('equal positive numbers (alternate)', () => {
            expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
        });

        // Test case: Subtracting two equal negative numbers
        it('equal negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
        });

        // Test case: Subtracting two negative numbers with decimals
        it('equal negative numbers (alternate)', () => {
            expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
        });

        // Test case: Subtracting a negative number from a positive number
        it('negative and positive numbers', () => {
            expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
        });

        // Test case: Subtracting a positive number from a negative number
        it('positive and negative numbers', () => {
            expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
        });

        // Test case: Subtracting two zeros
        it('0 and 0', () => {
            expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
        });
    });

    // Tests for 'DIVIDE' operation
    describe('type == "DIVIDE"', () => {

        // Test case: Dividing two positive numbers
        it('positive numbers', () => {
            expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
        });

        // Test case: Dividing a negative number by a positive number
        it('numbers with different signs', () => {
            expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
        });

        // Test case: Dividing a positive number by a negative number
        it('numbers with different signs (alternate)', () => {
            expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
        });

        // Test case: Dividing two negative numbers
        it('negative numbers', () => {
            expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
        });

        // Test case: Dividing two equal positive numbers
        it('equal positive numbers', () => {
            expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
        });

        // Test case: Dividing two equal negative numbers
        it('equal negative numbers', () => {
            expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
        });

        // Test case: Dividing two numbers rounded up
        it('equal rounded up numbers', () => {
            expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
        });

        // Test case: Dividing two numbers rounded down
        it('equal rounded down numbers', () => {
            expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
        });

        // Test case: Dividing 0 by a positive number
        it('0 and positive number', () => {
            expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
        });

        // Test case: Dividing 0 by a negative number
        it('0 and negative number', () => {
            expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
        });

        // Test case: Dividing a positive number by 0
        it('positive number and 0', () => {
            expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
        });

        // Test case: Dividing a positive number by a value rounded down to 0
        it('positive number and number rounded down to 0', () => {
            expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
        });

        // Test case: Dividing a positive number by a value rounded up to 0
        it('positive number and number rounded up to 0', () => {
            expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
        });

        // Test case: Dividing a negative number by 0
        it('negative number and 0', () => {
            expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
        });

        // Test case: Dividing a negative number by a value rounded down to 0
        it('negative number and number rounded down to zero', () => {
            expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
        });

        // Test case: Dividing a negative number by a value rounded up to 0
        it('negative number and number rounded up to zero', () => {
            expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
        });

        // Test case: Dividing two zeros
        it('0 and 0', () => {
            expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
        });
    });
});
