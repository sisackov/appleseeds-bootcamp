function getSumOfEven(arr) {
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/**
 * 1) line 2
 * 2) VS Code Node debugger
 * 3) the array's length is 10 therefore accessing it at
 * index 10 will return undefined and the whole sum becomes NaN
 */