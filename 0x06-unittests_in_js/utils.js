// Define a utility object named Utils
const Utils = {
    // Method to perform different types of mathematical operations
    calculateNumber(type, a, b) {
        // Check if the operation type is 'SUM' (addition)
        if (type === 'SUM') {
            // Round both a and b, then return their sum
            return Math.round(a) + Math.round(b);
        }

        // Check if the operation type is 'SUBTRACT' (subtraction)
        if (type === 'SUBTRACT') {
            // Round both a and b, then return their difference
            return Math.round(a) - Math.round(b);
        }

        // Check if the operation type is 'DIVIDE' (division)
        if (type === 'DIVIDE') {
            // Prevent division by zero, if b is 0, return an 'Error' message
            return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
        }

        // If the operation type is not recognized, return 0 by default
        return 0;
    },
};

// Export the Utils object so it can be used in other files
module.exports = Utils;
