
const logStr = (str) => console.log(str);

/**
 * Function that checks that the string is indeed a string.
 * If the string is a string, pass the string to a callback 
 * function which logs that string to the console
 * @param {string} str 
 * @param {function} callbackFn
 */
function isString(str, callbackFn) {
    if (typeof str === 'string') {
        callbackFn(str);
    }
}

isString('Hello World', logStr)//'Hello World'
isString(['Hello World'], logStr)//



/**
 * @param {string} str 
 * @returns {string} str with dashes between the words
 */
const dashify = (str) => str.replace(/\s/g, '-');//this regex means all occurences of space

/**
 * @param {string} str
 * @returns {string} str with reversed word order
 */
const reverseWords = (str) => {
    let words = str.split(' ');
    let res = [];
    for (const word of words) {
        res.unshift(word);//pushes the word to the beginning of the array
    }
    return res.join(' ');
}
/**
 *  function will capitalize the first word in the sentence 
 * and pass the string to a callback function which will create
 * dashes between the words
 * @param {string} str
 * @param {function} callbackFn
 */
function firstWordUpperCase(str, callbackFn) {
    if (typeof str === 'string') {
        let s = str[0].toUpperCase() + str.slice(1);
        s = callbackFn(s);
        return s;
    }
}

console.log(firstWordUpperCase('my name is eeeeeeeernyo', dashify));//My name is eeeeeeeernyo
console.log(firstWordUpperCase('my name is eeeeeeeernyo', reverseWords));//eeeeeeeernyo is name My


/**
 * Custom implementation of the Array map method
 * @param {Array} arr 
 * @param {function} callbackFn 
 * @returns {Array} new array populated with the results of calling a 
 * provided function on every element in the calling array
 */
function mapArr(arr, callbackFn) {
    let newArr = [];
    for (const elem of arr) {
        newArr.push(callbackFn(elem));
    }
    return newArr;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(mapArr(nums, (x) => x ** 2));//custom
console.log(nums.map((x) => x ** 2));//original

