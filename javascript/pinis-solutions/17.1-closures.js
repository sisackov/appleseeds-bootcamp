/*
Without running the code below, explain in your own words what the result
of each block of code will be and why
*/

// Block 1

// var b = 1;
// function someFunction(number) {

//     function otherFunction(input) {
//         return b;
//     }

//     b = 5;
//     return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

// b is shadowed before returning the inner function. the result is 5

// Block 2

// var a = 1;
// function b2() {
//     a = 10;
//     return;
//     function a() { }
// }

// b2();
// console.log(a);

// in b(2) he see a as function.

// Block 3

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }

// i is global and his value change all the time. the end value is 3
