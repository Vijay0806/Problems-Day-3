//3) Write a recursive function to find the sum of digits of a number.


function sumOfDigits(number) {
    // Base case: if the number is a single digit, return the number itself
    if (number < 10) {
        return number;
    } else {
        // Extract the last digit and recursively call the function with the remaining digits
        const lastDigit = number % 10;
        const remainingDigits = Math.floor(number / 10);
        return lastDigit + sumOfDigits(remainingDigits);
    }
}

// Example usage:
const number = 12345; // Change this to calculate the sum of digits for a different number
console.log(`The sum of digits of ${number} is: ${sumOfDigits(number)}`);
