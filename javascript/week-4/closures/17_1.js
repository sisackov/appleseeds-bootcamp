

/* Block 1 */
/**
 * below code first runs someFunction whose number=9 and global variable b = 1.
 * it changes b to 5.
 * the return value(which is the otherFunction) is attached to the
 * firstResult variable making it a function with default number=9.
 * firstResult is called with argument 2 and enters otherFunction whose input=2.
 * it returns the global variable b's value which is 5
 * 
 */
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);




/* Block 2 */
/**
 * a was declared as global variable with value 1.
 * when b2 is called: function a is below return 
 * therefore unreachable however it gets hoisted i.e.:
 * function b2() {
 *      let a = function a() { };
 *      a = 10;
 *      return;
 * }
 * the global a is not changed since the a=10 assignment
 * is made to the local declaration of a
 */
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);




/* Block 3 */
/**
 * the loop declares log variable and sends it to the Web API 3 times.
 * it also increments the global variable i to 3;
 * when the log is called from the message queue the value of i is already set
 * and therefore the output is always 3
 */
// let i;
for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
