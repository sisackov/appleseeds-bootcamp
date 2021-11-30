/**
 * Custom implementation of the Array map method
 * @param {array} arr 
 * @param {function} callbackFn 
 * @returns {Array} new array populated with the results of calling a 
 * provided function on every element in the calling array
 */
function map(arr, callbackFn) {
    let newArr = [];
    for (const elem of arr) {
        newArr.push(callbackFn(elem));
    }
    return newArr;
}