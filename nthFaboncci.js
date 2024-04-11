// 1)Write a recursive function to calculate the nth Fibonacci number.


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const nthFibonacci = 10; // Change this to calculate different Fibonacci numbers
console.log(`The ${nthFibonacci}th Fibonacci number is: ${fibonacci(nthFibonacci)}`);


