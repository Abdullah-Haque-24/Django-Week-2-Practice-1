var friendList = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let maxLength = 0;
let longestName;
for (let index = 0; index < friendList.length; index++) {
    let nameLength = friendList[index].length;
    if (nameLength > maxLength) {
        longestName = friendList[index];
        maxLength = nameLength;
    }
}
console.log(longestName);
