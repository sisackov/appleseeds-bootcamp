// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(array) {
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return sum / array.length;
}

console.log(avg([0, 50])); //25
console.log(avg([75, 76, 80, 95, 100])); //85.2
