function factorial(n) {
if (n < 0) {
return("Input must be a non-negative integer.");
}
if (n === 0 || n === 1) {
return 1;
}
return n * factorial(n - 1);
}
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(5)); // Output: 120
console.log(factorial(10)); // Output: 3628800
console.log(factorial(-99)); //Error 
