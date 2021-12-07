function calcAverage(arr) {
  var sum;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

calcAverage([85, 90, 92]);

/**
1. First find the line that contains the problem. Write it down.
 var sum;
2. Which debug method did you use to find the bug?

3. Explain the bug in your own words.
sum variable is not initialised. when we try to add numbers to undefined it becomes NAN.
second problem is we do not divide the sum by the number of elements.

4. Fix the code and submit it all.
    function calcAverage(arr) {
        var sum = 0;
            for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
 */
