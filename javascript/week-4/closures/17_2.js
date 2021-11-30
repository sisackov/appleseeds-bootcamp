/* Block 1 */
(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // What is logged?
    })(1);
})(0);
/**
 * IIFE immediateA receives 0 as the argument and assigns it
 * to variable a.
 * IIFE immediateA receives 1 as the argument and assigns it
 * to variable b.
 * when logging a it can't find it in immediateB so looks in the parent
 * and gets immediateA's a. logs 0
 */



/*  Block 2 */
let count = 0;
(function immediate() {
    if (count === 0) {// not declared in the function so looks in parent
        let count = 1; // declares new scope variable
        console.log(count); // What is logged? - 1
    }
    // outside the if scope count is not declared in the function so looks in parent
    console.log(count); // What is logged? - 0
})();




/* Block 3 */
var module = (function () {
    var foo = 'foo'
    function addToFoo(bam) {
        /**
         * this method updates the var foo and returns the updated value - 
         * so it just returns the value of the parameter
         */
        foo = bam;
        return foo;
    }
    var publicInterface = {
        bar: function () {
            return 'bar';
        },
        bam: function () {
            return addToFoo('bam')
        }
    }
    return publicInterface
})()
/**
 * the IIFE returns an object with 2 functions as properties.
 */
console.log(module.bar())// 'bar' 
console.log(module.bam())// 'bam' - see explanation in addToFoo




/* Block 4 */
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();
console.dir(increment);
console.dir(log);
increment();
increment();
increment();
log(); // What is logged? - Count is 0 because message was created when count=0




/* Block 5 */
var x = 10;
console.log(x);// 10 - var x was initialized above
if (true) {
    (function () {
        var x = 20;
        console.log(x);// 20 - var x is function scoped
    })();
}
console.log(x);// 10 - global x didn't change




/* Block 6 */
var x = 10;
console.log(x);// 10 - var x was initialized(globally) above
function test() {
    var x = 20;
    console.log(x);// 20 - x is function scoped here
    if (x > 10) {//true - see line above
        let x = 30;
        console.log(x);// 30 - x is function scoped here
    }
    console.log(x);// 20 - var x was function scoped
}
test();
console.log(x);// 10 - x refers to the globally declared var




/* Block 7 */
var x;
x = 10;
function test() {
    var x;// function scoped var x is undefined
    /**
     * comparing undefined to number always returns false because >,< operators:
     *  JavaScript attempts to convert non-numeric types to numeric values:
        -    Boolean values true and false are converted to 1 and 0 respectively.
        -    null is converted to 0.
        -    undefined is converted to NaN.
        -    Strings are converted based on the values they contain, and are converted as NaN if they do not contain numeric values.
        -    If either value is NaN, the operator returns false.
     */
    if (x > 20) {
        x = 50;
    }
    console.log(x);// undefined
}
test();



/* Block 8 */
function test() {
    var x, y;
    if (false) {//makes the code inside the condition unreachable
        x = 50;
    }
    console.log(x);// undefined
    console.log(y);// undefined
    y = 100;
    console.log(y);// 100 - y was initialized above
}
test();




/* Block 9 */
function test() {
    foo();// 'foo'
    bar();// type error - function expressions are not hoisted

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
