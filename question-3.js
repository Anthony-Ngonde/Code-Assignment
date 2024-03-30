function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    // Use OR Operator.
    if (number % 2 === 0 || number % 3 === 0) return false;

    // Use a for loop.
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

// Use the .filter() method to filter out the prime numbers in the array.
function filterPrimeNumbers(array) {
    return array.filter(number => isPrime(number));
}

// Testing the code.
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const primeArray = filterPrimeNumbers(inputArray);
console.log(primeArray); // Console Output: [ 2, 3, 5, 7 ]

// The code is running correctly.