// function declarations:
// hoisted: true
// initial value: Actual function,
// scope: function

// var variables:
// hoisted: true,
// initial value: undefined
// scope:function scoped

// let and const:
// hoisted: false
// initial value: uninitialized
// scope:blocked
// function expressions and arrows: depends on var or let/const just like normal variables.

// why create hoisting??
// creator of js created hoisting so we can use function declarations before we use them this is essential for some programming techniques,
// some people also think this is more readable.And why they implemented with var variables?
// Because that was the only way hoisting could be implemented at the time. But in hindsight was really bad.
// But he didn't know js will become so big.

// hoisting with variables

// console.log(me);
// console.log(job, subject);
var me = 'Pini';
let job = 'Teacher';
const subject = 'programming';

//functions
console.log(addDecl(2, 3));
// console.log(addExpr(3, 4));

// console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}
const addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

//change to var you will get is not a function. Why? As we know var gets undefined. We are trying to invoke a something that is undefined.

//pitfall example with var
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }
// Best practices: dont use vars. Call your functions only after you declared them. Declare your variables at the top of each scope.

// function useState(initVal) {
//     let value = initVal;

//     const getValue = () => value;

//     const setValue = (val) => (value = val);

//     return [getValue(), setValue];
// }

// const [x, setX] = useState(123);
// console.log(x);
// setX(12345678);
// console.log(x);

const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }
for (var i = 0; i < arr.length; i++) {
    setTimeout(
        (function (j) {
            console.log('Index: ' + j + ', element: ' + arr[i]);
        })(i),
        3000
    );
}
