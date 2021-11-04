// module.exports = 
function averageMinMax(arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let sum = 0;

  for (let i in arr) {
    sum += arr[i];
  }

  let avg = Math.floor(sum / arr.length);

  return `Min: ${min} Max: ${max} Average: ${avg}`;
};

console.log(averageMinMax([-42, 0, 42]))   // Min: -42 Max: 42 Average: 0
console.log(averageMinMax([30, 20, 100]))  // Min: 20 Max: 100 Average: 50
console.log(averageMinMax([-23, -4, -12])) // Min: -23 Max: -4 Average: -13
