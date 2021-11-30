function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    console.log(sum);
}
getSum([1, 2, 3], [5, 66, 23]);
/**
 * 1) line 3, 4, 7 throws TypeError. lines 4 and s
 * 2) VS Code Node debugger
 * 3) a - the arrays are undefined because they are not separated by comma.
 *    b - sum is constant primitive and can't be changed.
 * additionally, the method doesn't return anything
 */