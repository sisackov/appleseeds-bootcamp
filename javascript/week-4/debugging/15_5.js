function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter + 1;
        }
    } return counter;
}
countOccurrences("ini mini miny moe", "n");

/**
 * 1) line 5
 * 2) VS Code Node debugger
 * 3) the added value is not assigned to counter variable so it always stays 0
 */