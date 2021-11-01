function subDigits(num) {
    if (num < 0) {
        return Error("Argument Error")
    }
    const numToString = String(num);
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
        n = Number(numToString.charAt(i));
        sum += n;
    }

    return num -= sum;
}

console.log(subDigits(12))      // 9
console.log(subDigits(4000000)) // 3999996
console.log(subDigits(0))       // 0
console.log(subDigits(451))     // 441
console.log(subDigits(-12))     // 'Argument Error'
