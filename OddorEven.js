const userInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question('Enter a number: ', numberInput => {
    let number = parseInt(numberInput);
    if (number % 2 === 0) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
    userInput.close();
});
