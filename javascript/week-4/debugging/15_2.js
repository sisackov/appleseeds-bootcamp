function findSmallest(a, b, c) {
    if (a > c && b > c) {
        return c;
    } else if (a > b && c > b) {
        return b;
    } else {
        return a;
    }
}
findSmallest(52, 66, 2);

/**
 * 1) line 10 typing error, the if statements
 * 2) Chrome dev tools
 * 3) method is called with wrong name
 *    the conditions are wrong to what the function actually does
 */