
/** Block 1 */
function funcA() {
    /**
     * a is a var so it will be hoisted but not defined i.e.:
     * var a;
     * console.log(a);
     * var a = 1;
     * 
     * var a declaration should be moved to the top
     */
    console.log(a);

    /**
     * foo is a function statement and will be hoisted so it will run fine
     */
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
// funcA();


/** Block 2 */
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};

/**
 * by explicitly calling to the getFullName method - this points to the enclosing object
 */
// console.log(obj.prop.getFullName()); // Aurelio De Rosa

/**
 * when calling to the getFullName method trough a global variable - this points to the window object
 */
var test = obj.prop.getFullName;
// console.log(test()); // John Doe



/* Block 3 */
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
/**
 * a is a scope variable of funcB therefore can't be seen outside
 */
// console.log(typeof a);// undefined
/**
 * b is global variable - was declared without var/let/const
 */
// console.log(typeof b);// number


/* Block 4 */
/**
 * both outputs will 2 because when the file is "read" 
 * from top to bottom the second funcC is hoisted to the top
 */
function funcC() {
    console.log("1");
}
// funcC(); // 2
function funcC() {
    console.log("2");
}
// funcC(); // 2



/* Block 5 */
function funcD1() {
    d = 1;
}
funcD1();
// console.log(d); // 1 - d is global
function funcD2() {
    var e = 1;
}
funcD2();
// console.log(e);// undefined - e is a local scope variable of funcD2




/* Block 6 */
function funcE() {
    /**
     * the log will search f outside the scope of funcE
     * and since it was declared before method call it will print it
     */
    console.log("Value of f in local scope: ", f); // 1
}
/**
 * f is hoisted but wasn't declared yet
 */
console.log("Value of f in global scope: ", f); // undefined
var f = 1;
funcE();
