function countOccurrences(str, char) {
  let counter = 0;
  for (lwt i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter + 1;
    }
  }
  return counter;
}

countOccurrences("ini mini miny moe", "n");

/**
1. First find the line that contains the problem. Write it down.
    counter + 1;
2. Which debug method did you use to find the bug?

3. Explain the bug in your own words.
we increment the counter by 1 but we don't store the result.

4. Fix the code and submit it all.
    counter = counter + 1;
 */
