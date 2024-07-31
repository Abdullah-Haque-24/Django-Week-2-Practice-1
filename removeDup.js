var numArray = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let distinctNumbers = [...new Set(numArray)];

for (let index = 0; index < distinctNumbers.length; index++) {
    console.log(distinctNumbers[index]);
}
