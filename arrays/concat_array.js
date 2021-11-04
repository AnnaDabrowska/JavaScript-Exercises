// module.exports = 
function concatArray(someArray) {
  const arrayToString = someArray.join(' ')
  return arrayToString + "."
};

console.log(concatArray(["Hello", "this", "is", "dog"])) // 'Hello this is dog.'
console.log(concatArray(["All", "I", "want", "for", "christmas", "is", "you"])) // 'All I want for christmas is you.'
console.log(concatArray([])) // '.'
