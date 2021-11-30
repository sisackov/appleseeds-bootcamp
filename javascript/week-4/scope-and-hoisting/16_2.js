'use strict'

/* Block 1 */
var x = 10;
console.log(x);// 10
if (true) {
    var x = 20; // var is function scoped and can be redeclared
    console.log(x);// 20
}
console.log(x);// 20 - x was redeclared, since it happened in block scope it 



/* Block 2 */
var x = 10;
console.log(x); // 10
if (true) {
    (function () {
        var x = 20;// new x because var is function scoped
        console.log(x); // 20
    })();
}
console.log(x); // 10



/* Block 3 */
var x = 10;
console.log(x); // 10
function test() {
    var x = 20;// new x because var is function scoped
    console.log(x); // 20
    if (x > 10) { // true - since x===20
        let x = 30; // let is block scoped
        console.log(x); // 30
    }
    console.log(x); // 20 - the block scoped let doesn't affect the function scoped var
}
test();
console.log(x); // 10 



/* Block 4 */
var x;
x = 10;
function test() {
    var x; // function scoped var was redeclared and initialized to undefined
    if (x > 20) { // undefined is converted to NaN and comparison with NaN always returns false
        x = 50;
    }
    console.log(x); // undefined
}
test();



/* Block 5 */
function test() {
    var x, y; // x and y initialized to undefined
    if (false) {
        x = 50;
    }
    console.log(x); // undefined
    console.log(y); // undefined
    y = 100;
    console.log(y); // 100
}
test();



/* Block 6 */
function test() {
    foo(); // 'foo' - function declarations are hoisted
    bar(); /** type error - var was hoisted but not initialized. 
                trying to access undefined as a function throws an error*/

    // Function defined
    // using function declaration
    function foo() {
        console.log('foo');
    }
    // Function defined
    // using function expression
    var bar = function () {
        console.log('bar');
    }
}
test();

