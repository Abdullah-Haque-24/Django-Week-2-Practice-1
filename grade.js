const userInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question('Enter your marks: ', userMarks => {
    const numericMarks = Number(userMarks);
    const gradeResult = calculateGrade(numericMarks);
    console.log(gradeResult);
    userInput.close();
});

function calculateGrade(marks) {
    if (marks >= 80) {
        return "You got A+";
    } else if (marks <= 79 && marks >= 70) {
        return "You got A";
    } else if (marks <= 69 && marks >= 60) {
        return "You got A-";
    } else if (marks <= 59 && marks >= 50) {
        return "You got B+";
    } else if (marks <= 49 && marks >= 40) {
        return "You got B-";
    } else if (marks <= 39 && marks >= 33) {
        return "You got C";
    } else {
        return "You got F";
    }
}
