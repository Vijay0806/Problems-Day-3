// 4)Write a recursive function to reverse a string.


function reverseString(str) {
    // Base case: if the string has only one character or is empty, return the string itself
    if (str.length <= 1) {
        return str;
    } else {
        // Recursive case: concatenate the last character of the string with the reversed substring
        return str.slice(-1) + reverseString(str.slice(0, -1));
    }
}

// Example usage:
const stringToReverse = "Hello, World!"; // Change this to reverse a different string
console.log(`The reversed string is: ${reverseString(stringToReverse)}`);
