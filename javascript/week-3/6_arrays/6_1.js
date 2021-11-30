const arr = [1, 7, 3, 0, -5, 7, 3, 9];

/*  Print with for loop all the number. */
console.log('     all array items      ');
for (let num of arr) {
    console.log(num);
}


/* Create function “arrayLength” that return the array length (don’t use arr.length) */
function arrayLength(arr) {
    let size = 0;
    //working on a cloned array so that the original won't be altered
    let copy = arr.slice();
    while (copy.pop() != undefined) {
        size++;
    }
    return size;
}
console.log('     arrayLength      ');
console.log(arrayLength(arr));


/* Create function “arraySum” , the function return the sum of all elements in array. */
function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log('     arraySum      ');
console.log(arraySum(arr));


/* Create function “arrayMulti” , the function return the multiplication of all the elements in array  */
function arrayMulti(arr) {
    let product = 0;
    for (let num of arr) {
        product *= num;
    }
    return product;
}
console.log('     arrayMulti      ');
console.log(arrayMulti(arr));
