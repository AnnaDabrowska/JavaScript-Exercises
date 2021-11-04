// module.exports = 
function removeDouble(arr) {
  for (let i of arr) {
    if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
      arr.splice(arr.indexOf(i), 1);
    }
  }
  return arr;
};


const stuff = ["suit", "clock", "butter", "suit"];
removeDouble(stuff)
console.log(stuff)
// [ 'clock', 'butter', 'suit' ] 

const mixed = ["hello", "hello", 23, -3, 23, "hello"]
removeDouble(mixed)
console.log(mixed)
// [ -3, 23, 'hello' ]  
