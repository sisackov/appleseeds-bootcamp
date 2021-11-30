// /* Create a function that uses a if/else conditional expression. */
const passwordValidator1 = (pass) => {
    if (pass.length > 7) {
        return 'Strong';
    } else if (pass.length < 7) {
        return 'Weak';
    }
    return 'BOOM';
}
console.log('         passwordValidator1              ');
console.log(passwordValidator1('12345678'));//Strong
console.log(passwordValidator1('123456'));//Weak
console.log(passwordValidator1('1234567'));//BOOM

// /* Create a function that uses a ternary conditional expression */
const passwordValidator2 = (pass) => pass.length > 7 ? 'Strong' : 'Weak';
console.log('         passwordValidator2              ');
console.log(passwordValidator2('12345678'));//Strong
console.log(passwordValidator2('123456'));//Weak

/* Create a function that uses a && logical operator */
const passwordValidator3 = (pass) => {
    /* Short circuit example */
    return pass.length > 7 && 'Strong' || pass.length < 7 && 'Weak' || 'BOOM';
}
console.log('         passwordValidator3              ');
console.log(passwordValidator3('12345678'));//Strong
console.log(passwordValidator3('123456'));//Weak
console.log(passwordValidator3('1234567'));//BOOM

/*
    Create an “advanced” password validation function that
    takes a password string as an argument.
    If the password length is more than 7 characters long and
    has at least one capital letter return “Very Strong”.
    If the password length in only 7 characters long return “Strong”.
    If the password length is less than 7 characters long return “Weak”

    * Use only a ternary conditional expression.
*/

const hasCapitalLetter = (str) => (/[A-Z]/.test(str));

function advancedPasswordValidator(pass) {
    return pass.length > 7 ?
        hasCapitalLetter(pass) ? 'Very Strong' : 'Strong Enough???????????????'
        : pass.length === 7 ? 'Strong' : 'Weak';
}

console.log('         advancedPasswordValidator              ');
console.log(hasCapitalLetter('adsRsfcsc'));//true
console.log(hasCapitalLetter('csvsdvv'));//false
console.log(hasCapitalLetter('SACSCSVVDS'));//true
console.log(advancedPasswordValidator('12345678'));//????
console.log(advancedPasswordValidator('1234567'));//Strong
console.log(advancedPasswordValidator('123456'));//Weak
console.log(advancedPasswordValidator('12345678S'));//Very Strong
