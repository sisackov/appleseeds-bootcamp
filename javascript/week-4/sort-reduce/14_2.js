var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
        type: 'memorySearch'
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
        type: 'memorySearch'
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
        type: 'memorySearch'
    }
];



function extractOnlyValue(arr, key) {
    return arr.reduce((acc, obj) => {
        acc.push(obj[key]);
        return acc;
    }, []);
}
console.log(extractOnlyValue(library, 'author'));
console.log(extractOnlyValue(library, 'title'));



function countOnlyVowels(str) {
    const vowelRegex = /^[aeiou]$/;
    return str.split('').reduce((acc, char) => {
        if (char.match(vowelRegex)) {
            acc[char] = (acc[char] || 0) + 1;
        }
        return acc;
    }, {});
}
console.log(countOnlyVowels('Canada Mexico Norway Sweden'));


function addKeyAndValue(arr, key, value) {
    arr.reduce((acc, obj) => {
        Object.assign(obj, acc);
        // obj = { ...obj, ...acc };// doesn't works. assigns the created object to a local reference of obj
        return acc;
    }, { [key]: value });

    return arr;
}

addKeyAndValue(library, 'planToRead', 'NEVER');
// console.log(library);
