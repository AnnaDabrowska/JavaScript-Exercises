// module.exports = 
function replaceArray(arr) {
  return arr.map(function (el) {
    if (el.charAt(0) === "H" || el.charAt(0) === "h") {
      return el.toUpperCase();
    } else {
      return el;
    }
  })
};

console.log(replaceArray(["banana", "suit", "hammer"])) // [ 'banana', 'suit', 'HAMMER' ]
console.log(replaceArray(["Hello", "there"])) // [ 'HELLO', 'there' ]
console.log(replaceArray(["Hey!", "hey..."])) // [ 'HEY!', 'HEY...' ]
