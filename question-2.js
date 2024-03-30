function generateArray(start, end) {
    let array = [];

    // Use a for loop and an if statement.
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            array.push(i);
        }
    }
    return array;
}

// Testing the code.
console.log(generateArray(2,9)) // Console Output: [2, 3, 4, 5, 6, 7, 8, 9]
console.log(generateArray(-2, 9))  // Console Output: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// The code is running correctly.