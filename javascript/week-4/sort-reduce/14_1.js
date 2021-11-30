const nums = [1, -5, 666, 2, 400, 11];
console.log(nums);


let maxNum = nums.reduce((max, n) => n > max ? n : max);
console.log(maxNum);


/**
 * This doesn't work without providing initial value. See excerpt from:
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * If no initialValue was supplied, then previousValue will be equal 
 * to the first value in the array and currentValue will be equal to the second
 */
let sumOfEven = nums.reduce(((sum, n) => sum += (n % 2 === 0) ? n : 0), 0);
console.log(sumOfEven);//666+2+400=1068


let average = nums.reduce((avg, n) => avg += (n / nums.length), 0);
console.log(average);