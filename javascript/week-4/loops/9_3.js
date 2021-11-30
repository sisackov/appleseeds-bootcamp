const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

/**
 * @param {Array.<string>} arr1
 * @param {Array.<string>} arr2
 * @returns {Array.<string>} array of items that exist in both arr1 and arr2
 */
function arrayCompare(arr1, arr2) {
    let res = [];
    for (const s1 of arr1) {
        for (const s2 of arr2) {
            if (s1 === s2) {
                res.push(s1);
            }
        }
    }
    return res;
}

console.log(arrayCompare(food, food1));