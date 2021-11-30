const nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];


/**
 * @param {Array.<number>} numArray 
 * @returns {Array.<number>} new array with all the values in 
 * the array passed to the function doubled
 */
function doubleValues(numArray) {
    return numArray.map((num) => 2 * num);
}
console.log(doubleValues(nums));//[22, 44, 66, 88, 110, 132, 154, 176, 198]


/**
 * 
 * @param {Array.<number>} numArray
 * @returns {Array.<number>} new array with only the even values 
 * in the array passed to the function
 */
function onlyEvenValues(arr) {
    let res = [];
    arr.forEach((num) => {
        if (num % 2) {
            res.push(num);
        }
    });
    return res;
}
console.log(onlyEvenValues(nums));//[11, 33, 55, 77, 99]

/**
 * @param {*} arr 
 * @returns {Array.<string>} new array with only the first and last elements from arr.
 * returned array should only contain elements that are strings
 */
function showFirstAndLast(list) {
    let res = [...list];
    res.forEach((item, i, arr) => {
        if (typeof item !== 'string') {
            arr.splice(i, 1);
        }
    });

    return [res[0], res.pop()];
}
console.log(showFirstAndLast(["Canada", "Mexico", "Norway", "Sweden", "Russia"]));//['Canada', 'Russia']
console.log(showFirstAndLast(["Canada", "Mexico", "Norway", "Sweden", 2]));//['Canada', 'Sweden']


/**
 * @param {string} str 
 * @returns {object} object which has the count of the number of vowel’s that are in the string
 */
function vowelCount(str) {
    const vowelRegex = /^[aeiou]$/;
    let countVowel = {};
    str.split('').forEach((char) => {
        let c = char.toLowerCase();
        if (c.match(vowelRegex)) {
            countVowel[c] = countVowel[c] ? countVowel[c] + 1 : 1;
        }
    });
    return countVowel;
}
console.log(vowelCount('Canada Mexico Norway Sweden'));


function capitalize(str) {
    return str.split('').map((char) => char.toUpperCase()).join('');
}
console.log(capitalize('Canada Mexico Norway Sweden'));

function shiftLetters(str) {
    const letterRegex = /^[a-zA-Z]+$/;
    return str.split(' ').map((word) => {
        return word.split('').map((char) => {
            if (char.match(letterRegex)) {
                let offset = (char === 'z' || char === 'Z') ? -25 : 1;
                return String.fromCharCode(char.charCodeAt(0) + offset);
            }
        }).join('');
    }).join(' ');
}
console.log(shiftLetters('Canada Mexico Norway Sweden zZ'));


function swapCase(str) {
    return str.split(' ').map((word, i) => {
        return (i % 2) ? capitalize(word) : word;
    }).join(' ');
}
console.log(swapCase('Canada Mexico Norway Sweden'));
