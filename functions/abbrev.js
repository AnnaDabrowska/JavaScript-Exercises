function abbrev(words) {
    const maxLength = 3;
    let abbrevWords = "";
    let wordsLength = words.length;
    if (wordsLength > maxLength) {
        abbrevWords = words.substring(0, maxLength);
    } else if (wordsLength == 2) {
        abbrevWords = words + " ";
    } else if (wordsLength == 1) {
        abbrevWords = words + " " + " ";
    }
    return abbrevWords + " " + wordsLength
}

console.log(abbrev("Nice"))                               // 'Nic 4'
console.log(abbrev("I am your father"))                   // 'I a 16'
console.log(abbrev("Supercalifragilisticexpialidocious")) // 'Sup 34'
console.log(abbrev("!"))                                  // '!   1'
console.log(abbrev("Yo"))                                 // 'Yo  2'
