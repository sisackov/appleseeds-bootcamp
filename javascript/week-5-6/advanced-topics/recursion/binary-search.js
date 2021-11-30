const nums = [1, 2, 4, 6, 8, 10, 56];
/**
 *
 */
function binarySearch(arr, value, start = 0, end = arr.length) {
    if (start > end || (start === end && value !== arr[start])) return -1;

    let mid = parseInt((end - start) / 2) + start;
    if (value === arr[mid]) {
        return mid;
    } else if (value < arr[mid]) {
        return binarySearch(arr, value, start, mid);
    } else {
        return binarySearch(arr, value, mid + 1, end);
    }
}

// console.log(binarySearch(nums, 10));
// console.log(binarySearch(nums, 2));
console.log(binarySearch(nums, 5));

