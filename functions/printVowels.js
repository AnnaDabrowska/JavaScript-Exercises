const vowels = ["a", "e", "i", "o", "u"];

function printVowels(words) {
    let wordsLowerCase = words.toLowerCase();
    let wordsArray = words.split("");
    let wordsVowels = [];

    for (let i in wordsArray) {
        if (vowels.includes(wordsArray[i])) {
            wordsVowels.push(wordsArray[i]);
        }
    }
    return wordsVowels.join('').toString();
}

console.log(printVowels("hello world"))  // eoo
console.log(printVowels("kangaroo"))     // aaoo
console.log(printVowels("cheeseburger")) // eeeue
console.log(printVowels("rhythm"))       // 
