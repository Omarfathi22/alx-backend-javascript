// This function performs different arithmetic operations (SUM, SUBTRACT, DIVIDE)
// based on the 'type' parameter, rounding the numbers before performing operations.
const calculateNumber = (type, a, b) => {

    // If the type is 'SUM', the function adds the rounded values of 'a' and 'b'.
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }

    // If the type is 'SUBTRACT', the function subtracts the rounded value of 'b' from 'a'.
    if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    }

    // If the type is 'DIVIDE', the function performs division of rounded 'a' by rounded 'b'.
    // If 'b' is zero, it returns 'Error' to handle division by zero.
    if (type === 'DIVIDE') {
        return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }

    // If the type doesn't match any of the above, the function returns 0 as a default value.
    return 0;
};

// Export the function to make it available in other files
module.exports = calculateNumber;
