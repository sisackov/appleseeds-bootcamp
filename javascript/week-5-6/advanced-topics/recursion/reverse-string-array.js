const strArray = ['h', 'e', 'l', 'l', 'o'];

/** with JS function */
// console.log(strArray.reverse());



/**
 * method that swaps 2 elements in an array
 */
function swapPlaces(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/** with loop */
function reverseWithLoop(arr) {
    let len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        swapPlaces(arr, i, len - i - 1);
    }
}
// reverseWithLoop(strArray);
// console.log(strArray);


function reverseRecursively(arr, start = 0, stop = arr.length - 1) {
    if (stop < 0) return arr;//in case empty array was passed

    if (start < stop) {
        reverseRecursively(arr, start + 1, stop - 1);
        swapPlaces(arr, start, stop);
    }
}
reverseRecursively(strArray);
console.log(strArray);