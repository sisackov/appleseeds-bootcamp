const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr) {
    let counter = {};
    for (let word of arr) {
        word = word.replace(' ', '').toLowerCase();//remove spaces and uncapitalise
        for (let letter of word) {
            if (counter[letter]) {
                counter[letter]++;
            } else {
                counter[letter] = 1;
            }
        }
    }
    return counter;
}

console.log(countLetters(array));

/* TODO do in less than 10 lines */