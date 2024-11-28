// Importing the 'expect' function from the Chai assertion library for testing
const { expect } = require('chai');

// Test suite for testing number comparisons
describe('Testing numbers', () => {
    // Test case to check if 1 is equal to 1
    it('1 is equal to 1', () => {
        expect(1 === 1).to.be.true;
    });

    // Test case to check if 2 is equal to 2
    it('2 is equal to 2', () => {
        expect(2 === 2).to.be.true;
    });

    // Skipped test case to check if 1 is equal to 3 (currently disabled)
    it.skip('1 is equal to 3', () => {
        expect(1 === 3).to.be.true;
    });

    // Test case to check if 3 is equal to 3
    it('3 is equal to 3', () => {
        expect(3 === 3).to.be.true;
    });

    // Test case to check if 4 is equal to 4
    it('4 is equal to 4', () => {
        expect(4 === 4).to.be.true;
    });

    // Test case to check if 5 is equal to 5
    it('5 is equal to 5', () => {
        expect(5 === 5).to.be.true;
    });

    // Test case to check if 6 is equal to 6
    it('6 is equal to 6', () => {
        expect(6 === 6).to.be.true;
    });

    // Test case to check if 7 is equal to 7
    it('7 is equal to 7', () => {
        expect(7 === 7).to.be.true;
    });
});
