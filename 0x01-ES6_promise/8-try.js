import divideFunction from './8-try';

try {
  console.log(divideFunction(10, 2));  // Output: 5
  console.log(divideFunction(10, 0));   // This will throw an error
} catch (error) {
  console.error(error.message);         // Output: cannot divide by 0
}
