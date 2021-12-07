//fill an array with 100 of the same object with Array.fill.
const filledArr = new Array(100).fill({ hi: 'hi' });
console.log('filledArr', filledArr);

//fill an array with numbers from 1-100 with Array.from
const numberArr = Array.from({ length: 100 }, (_, index) => index + 1);
console.log('numberArr', numberArr);

//convert only the values of the object into an array
const myObj = { firstName: 'Henry', lastName: 'Williams' };
console.log('myObj', Object.values(myObj));

//covert this array to an object
const arr = ['A', 'B', 'C'];
const obj = Object.assign({}, arr);
//faster way
const obj2 = { ...arr };
console.log('obj', obj);
console.log('obj2', obj2);

//find out if this array is an array
const myArr = [1, 2, 3, 4];
console.log(Array.isArray(myArr));

//a copy of an array
const myArr1 = [10, 11, 12, 13, 14];
//creating a copy that wont effect the the original array
const copyArr = myArr1.slice();
//another way which is the fastest way
// const copyArr = [...myArr1];
copyArr[0] = 99;
console.log('copyArr', copyArr);
console.log('myArr1', myArr1);

//create a copy that will effect the original array
const myArr2 = [1, 2, 3, 4, 5, 6];
const copyArr2 = myArr2;
copyArr2[0] = 5;
console.log('myArr2', myArr2);
console.log('copyArr2', copyArr2);
