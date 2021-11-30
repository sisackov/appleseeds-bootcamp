/* 1. Fill an array with 100 of a same object using array fill method. */
let array1 = new Array(100).fill({ val: 'same' });
console.log('   1   ');
console.log(array1[50]);
console.log(array1.length);

/* 2. Create an array with numbers ranging from 1 - 100 using the Array.from method. */
let array2 = Array.from(Array(100), (v, k) => k + 1);//!Since the array is initialized with undefined on each position, the value of v will be undefined
console.log('   2   ');
console.log(array2);

/* 3. Convert only values of an object into one array. */
let obj = {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3',
    key4: 'val4',
}
let valsArray = Array.from(Object.values(obj));
console.log('   3   ');
console.log(valsArray);


/* 4. Convert an array into one object. */
let array4 = ["Greg", "Mary", "Elizabeth", "Artie", "James"];
let objArray = {};
array4.reduce((result, item, index) => {
    result['key_' + index] = item;
    return result;
}, objArray);
console.log('   4   ');
console.log(objArray);


/* 5. Find out if an array is an array. */
const isAnArray = (arr) => Array.isArray(arr);
console.log('   5   ');
console.log(isAnArray(array1));//true
console.log(isAnArray('array1'));//false
console.log(isAnArray([]));//true

/* 6. Copy an array.
    a. Create a copy of an array that won’t effect the original array if modified.
    b. Create a copy of an array that will effect the original array if modified */
let orig = [1, 2, 3, 4];

let origCopy1 = orig.slice();
origCopy1.pop();
console.log('   6 a  ');
console.log(origCopy1);//[ 1, 2, 3 ]
console.log(orig);//[ 1, 2, 3, 4 ]

let origCopy2 = orig;
origCopy2.pop();
console.log('   6 b  ');
console.log(origCopy2);// [ 1, 2, 3, 4 ]
console.log(orig);// [ 1, 2, 3, 4 ]