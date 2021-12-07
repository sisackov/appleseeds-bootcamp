function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}

findSmalest(52, 66, 2);

/**
1. First find the line that contains the problem. Write it down.
    findSmalest(52, 66, 2);
    if (a > b > c) {
    } else if (a > c > b) {
2. Which debug method did you use to find the bug?

3. Explain the bug in your own words.
there is a typo in the function name.
there is also a problem with comparing a > b > c , because a>b gives true/false and it is wrong comparing it with c.

4. Fix the code and submit it all.
function findSmallest(a, b, c) {
    if (a > c && b > c) {
        return c;
    } else if (a > b) {
        return b;
    } else {
        return a;
    }
}
findSmallest(52, 66, 2);

 */
