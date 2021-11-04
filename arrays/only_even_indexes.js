// module.exports = 
function evenIndexes(word) {
  let wordSplit = word.split("");
  let wordArr = [];

  for (let i = 0; i < wordSplit.length; i += 2) {
    wordArr = wordArr.concat(wordSplit[i]);
  }
  console.log(wordArr);
};

evenIndexes("lol") // [ 'l', 'l' ]
evenIndexes("You're weird") // [ 'Y', 'u', 'r', ' ', 'e', 'r' ]
evenIndexes("") // [ ]

