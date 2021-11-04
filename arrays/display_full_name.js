// module.exports = 
function displayFullName(fullName) {
  const fullNameArray = fullName.split(' ');
  return `My name is ${fullNameArray[fullNameArray.length - 1]}, ${fullNameArray.join(' ')}`;
};

console.log(displayFullName("James Bond")) // My name is Bond, James 
console.log(displayFullName("Ada Lovelace")) // My name is Lovelace, Ada Lovelace
console.log(displayFullName("Salvador Felipe Jacinto Dalí")) // My name is Dalí, Salvador Felipe Jacinto Dalí

