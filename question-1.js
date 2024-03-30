function swapCase(inputString) {
    let swappedString = '';

    // Use a for loop and an if statement.
    for (let i = 0; i < inputString.length; i++) {
        let character = inputString[i]

        if (character === character.toUpperCase()) {
            swappedString += character.toLowerCase();

    } else {
        swappedString += character.toUpperCase();
       }
    }

    return swappedString;
}

// Testing the code.
let inputStr = 'Moringa School Website';
let outputStr = swapCase(inputStr);
console.log(outputStr); // Console Output : mORINGA sCHOOL wEBSITE

// The code is running correctly.