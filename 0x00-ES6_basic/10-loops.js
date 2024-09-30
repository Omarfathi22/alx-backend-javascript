export default function appendToEachArrayValue(array, appendString) {
    for (const value of array) {
      const index = array.indexOf(value); // Get the current index
      array[index] = appendString + value; // Update the value at the current index
    }
  
    return array;
  }
  