// 5)Write a recursive function to calculate the power of a number.

function power(base, exponent) {
    // Base case: if the exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: multiply the base by the result of calling power recursively with a decremented exponent
    else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
const base = 2; // Change this for a different base
const exponent = 5; // Change this for a different exponent
console.log(`${base} raised to the power of ${exponent} is: ${power(base, exponent)}`);
