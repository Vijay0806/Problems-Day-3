// 2)Write a recursive function to calculate the factorial of a number.


function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    } 
    // Recursive case: multiply n by factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}

// Example usage:
const number = 5; // Change this to calculate factorial for a different number
console.log(`The factorial of ${number} is: ${factorial(number)}`);


