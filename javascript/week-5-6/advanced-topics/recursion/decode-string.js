
/* TODO !!!!!!!!!!!!!!!!! */


const isDigit = (char) => char.match(/(\d)/);//digitRegex

/**
 * ^            Start of string
 * [a-z0-9]     a or b or c or ... z or 0 or 1 or ... 9
 * +            one or more times (change to * to allow empty string)
 * $            end of string    
 * /i           case-insensitive
 */
const isLetter = (char) => char.match(/[a-z]$/i);//letter regex
const isAlphabetic = (char) => char.match(/^[a-z]$/i);//string regex

const isNumberType = (obj) => typeof obj === 'number';
const isStringType = (obj) => typeof obj === 'string';
const isEmpty = (arr) => arr.length === 0;

function decodeString(str) {
    let stack = [];

    // first we'll insert all numbers and strings into 
    for (let i = 0; i < str.length; i++) {
        if (isDigit(str[i])) {// push number to stack
            let numStr = str[i];
            while (isDigit(str[i++])) {
                numStr += str[i];
            }
            stack.push(parseInt(numStr));
        } else if (isLetter(str[i])) {// push string to stack
            let letterStr = str[i];
            while (isLetter(str[i++])) {
                letterStr += str[i];
            }
            stack.push(letterStr);
        }
    }

    while (stack.length > 1) {
        // in every iteration pop a string(s) and a number(n), 
        // repeat s n times and insert back to stack 
        let [s, n] = [stack.pop(), stack.pop()];
        while (n > 0) {
            s += s;
            n--;
        }
        stack.push(s);
    }

    return stack.pop();
}

console.log(decodeString("3[a]2[bc]"));//"aaabcbc"