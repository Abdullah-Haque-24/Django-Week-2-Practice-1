console.log("These are the numbers divisible by both 3 and 5!");
for (let num = 1; num <= 50; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
}
