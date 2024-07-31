const numList = [1, 10, 11, 2, 6, 19, 20, 12, 13, 14, 3, 4, , 7, 8, 9, 5, 17, 18, 15, 16];
numList.sort((a, b) => a - b);
for (let idx = 0; idx < numList.length; idx++) {
    console.log(numList[idx]);
}
