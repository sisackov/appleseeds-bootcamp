function getSum(arr1, arr2) {
  var sum = 0;
  for (var i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (var i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}

getSum([1, 2, 3][(5, 66, 23)]);

/**
1. First find the line that contains the problem. Write it down.
getSum([1, 2, 3][5, 66, 23]);

2. Which debug method did you use to find the bug?

3. Explain the bug in your own words.  
there is no "," between the 2 arguments we pass the function 

4. Fix the code and submit it all.
getSum([1, 2, 3], [5, 66, 23]);

*/
