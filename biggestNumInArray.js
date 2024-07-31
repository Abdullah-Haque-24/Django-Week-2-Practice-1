var numArray = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let maxNum = 0;
for (let index = 0; index < numArray.length; index++) {
    let currentNum = numArray[index];
    if (currentNum > maxNum) {
        maxNum = currentNum;
    }
}
console.log(maxNum);
