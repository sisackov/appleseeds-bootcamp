
const strCompare = (s1, s2) => {
    let [a, b] = [s1.toUpperCase(), s2.toUpperCase()];
    return (a > b) ? 1 : (a < b) ? -1 : 0;
}



const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
console.log(foods);

foods.sort((a, b) => strCompare(a, b));
console.log(foods);

foods.sort((a, b) => strCompare(b, a));
console.log(foods);



const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    'sbich',
    "hummus",
    "pizza with extra pineapple",
];
console.log(foodsWithUpperCase);

foodsWithUpperCase.sort((a, b) => strCompare(a, b));
console.log(foodsWithUpperCase);

foodsWithUpperCase.sort((a, b) => strCompare(b, a));
console.log(foodsWithUpperCase);



const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words);

words.sort((a, b) => a.length - b.length)
console.log(words);

words.sort((a, b) => b.length - a.length)
console.log(words);

