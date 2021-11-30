function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum;
}
calcAverage([85, 90, 92]);

/**
 * 1) line 2
 * 2) VS Code Node debugger
 * 3) var is declared but not initialized. when adding to undefined we get NaN
 */